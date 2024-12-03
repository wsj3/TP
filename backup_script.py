import os
import datetime
import logging
from pathlib import Path
import json
import subprocess
import shutil

class GitBackupManager:
    def __init__(self, config_path='backup_config.json'):
        self.config_path = config_path
        self.setup_logging()
        self.load_config()

    def setup_logging(self):
        logging.basicConfig(
            filename='backup.log',
            level=logging.INFO,
            format='%(asctime)s - %(levelname)s - %(message)s'
        )
        self.logger = logging.getLogger(__name__)

    def load_config(self):
        try:
            with open(self.config_path, 'r') as f:
                self.config = json.load(f)
        except FileNotFoundError:
            self.logger.error(f"Config file {self.config_path} not found")
            self.config = {
                "repositories": [],
                "backup_path": "",
                "github_username": "",
                "github_token": "",
                "retention_days": 30
            }
            self.save_config()

    def save_config(self):
        with open(self.config_path, 'w') as f:
            json.dump(self.config, f, indent=4)

    def run_git_command(self, command, cwd=None):
        try:
            result = subprocess.run(
                command,
                cwd=cwd,
                capture_output=True,
                text=True,
                shell=True
            )
            if result.returncode != 0:
                self.logger.error(f"Git command failed: {result.stderr}")
                return False
            return True
        except Exception as e:
            self.logger.error(f"Error running git command: {str(e)}")
            return False

    def create_backup(self):
        timestamp = datetime.datetime.now().strftime('%Y%m%d_%H%M%S')
        
        for repo in self.config["repositories"]:
            repo_name = repo.split("/")[-1].replace(".git", "")
            backup_dir = os.path.join(
                self.config["backup_path"],
                f"{repo_name}_backup_{timestamp}"
            )

            try:
                # Clone the repository
                clone_url = f"https://{self.config['github_token']}@github.com/{repo}.git"
                if not self.run_git_command(f"git clone {clone_url} {backup_dir}"):
                    continue

                # Create backup branch
                branch_name = f"backup_{timestamp}"
                if not self.run_git_command(f"git checkout -b {branch_name}", backup_dir):
                    continue

                # Push to GitHub
                if self.run_git_command("git push origin " + branch_name, backup_dir):
                    self.logger.info(f"Backup created successfully for {repo}")
                else:
                    self.logger.error(f"Failed to push backup for {repo}")

                # Cleanup local backup
                shutil.rmtree(backup_dir)

            except Exception as e:
                self.logger.error(f"Backup failed for {repo}: {str(e)}")

    def cleanup_old_backups(self):
        if not self.config["retention_days"]:
            return

        cutoff_date = datetime.datetime.now() - datetime.timedelta(
            days=self.config["retention_days"]
        )

        for repo in self.config["repositories"]:
            try:
                # Get list of backup branches
                repo_name = repo.split("/")[-1].replace(".git", "")
                temp_dir = os.path.join(self.config["backup_path"], f"temp_{repo_name}")
                
                clone_url = f"https://{self.config['github_token']}@github.com/{repo}.git"
                if not self.run_git_command(f"git clone {clone_url} {temp_dir}"):
                    continue

                # List all backup branches
                result = subprocess.run(
                    "git branch -r | grep backup_",
                    cwd=temp_dir,
                    capture_output=True,
                    text=True,
                    shell=True
                )

                for branch in result.stdout.split('\n'):
                    if not branch.strip():
                        continue
                    
                    branch = branch.strip().replace('origin/', '')
                    try:
                        # Extract date from branch name
                        timestamp_str = branch.split('backup_')[1]
                        branch_date = datetime.datetime.strptime(timestamp_str, '%Y%m%d_%H%M%S')
                        
                        if branch_date < cutoff_date:
                            # Delete old backup branch
                            delete_cmd = f"git push origin --delete {branch}"
                            if self.run_git_command(delete_cmd, temp_dir):
                                self.logger.info(f"Removed old backup branch: {branch}")
                            else:
                                self.logger.error(f"Failed to remove branch: {branch}")
                    except Exception as e:
                        self.logger.error(f"Error processing branch {branch}: {str(e)}")

                # Cleanup temporary directory
                shutil.rmtree(temp_dir)

            except Exception as e:
                self.logger.error(f"Error cleaning up {repo}: {str(e)}")

    def add_repository(self, repo_url):
        """Add a repository to backup (format: username/repository)"""
        if repo_url not in self.config["repositories"]:
            self.config["repositories"].append(repo_url)
            self.save_config()
            self.logger.info(f"Added repository: {repo_url}")
        else:
            self.logger.warning(f"Repository already in backup list: {repo_url}")

    def set_backup_path(self, directory):
        """Set temporary backup directory"""
        os.makedirs(directory, exist_ok=True)
        self.config["backup_path"] = directory
        self.save_config()
        self.logger.info(f"Set backup path: {directory}")

    def set_github_credentials(self, username, token):
        """Set GitHub credentials"""
        self.config["github_username"] = username
        self.config["github_token"] = token
        self.save_config()
        self.logger.info("Updated GitHub credentials")

if __name__ == "__main__":
    backup_mgr = GitBackupManager()
    
    # Example usage:
    backup_mgr.set_backup_path("C:/temp/git_backups")
    backup_mgr.set_github_credentials("your_username", "your_github_token")
    backup_mgr.add_repository("username/repository")
    
    backup_mgr.create_backup()
    backup_mgr.cleanup_old_backups() 