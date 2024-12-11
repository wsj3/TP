# Create backup directory if it doesn't exist
$backupDir = "backups"
if (-not (Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir
}

# Generate backup name with timestamp
$timestamp = Get-Date -Format "yyyyMMdd-HHmm"
$backupName = "backup-${timestamp}"
$backupPath = Join-Path $backupDir $backupName

# Create directory for this backup
New-Item -ItemType Directory -Path $backupPath

try {
    Write-Host "`nCreating local project backup..." -ForegroundColor Yellow
    
    # Define directories and files to exclude
    $excludeDirs = @(
        "node_modules",
        ".next",
        ".git",
        "backups"
    )
    
    # Copy files with exclusions
    Get-ChildItem -Path .\ -Exclude $excludeDirs |
        Copy-Item -Destination $backupPath -Recurse -Force
    
    # Create zip archive
    $zipPath = "${backupPath}.zip"
    Compress-Archive -Path $backupPath\* -DestinationPath $zipPath -Force
    
    # Remove temporary directory
    Remove-Item -Path $backupPath -Recurse -Force
    
    Write-Host "`nBackup completed successfully!" -ForegroundColor Green
    Write-Host "Backup location: $zipPath" -ForegroundColor Green

} catch {
    Write-Host "`nAn error occurred during backup:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
} 