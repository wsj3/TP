# Display current status
Write-Host "`nCurrent Git Status:" -ForegroundColor Blue
git status

# Show changes in detail
Write-Host "`nDetailed changes:" -ForegroundColor Blue
git diff --stat

# Create backup branch with today's date
$backupBranch = "backup-" + (Get-Date -Format "yyyyMMdd-HHmm")
Write-Host "`nCreating backup branch: $backupBranch" -ForegroundColor Yellow
git branch $backupBranch

# Prompt for commit message
$commitMessage = Read-Host "`nEnter commit message"

# If no message provided, use default with timestamp
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Update application - " + (Get-Date -Format "yyyy-MM-dd HH:mm")
}

try {
    # Add all changes
    Write-Host "`nAdding all changes..." -ForegroundColor Yellow
    git add .

    # Show what's being committed
    Write-Host "`nChanges to be committed:" -ForegroundColor Blue
    git diff --cached --stat

    # Prompt for confirmation
    $confirm = Read-Host "`nDo you want to proceed with the commit? (Y/N)"
    if ($confirm -ne 'Y') {
        Write-Host "`nOperation cancelled by user" -ForegroundColor Yellow
        exit
    }

    # Commit changes
    Write-Host "`nCommitting changes..." -ForegroundColor Yellow
    git commit -m "$commitMessage"

    # Push to GitHub
    Write-Host "`nPushing to GitHub..." -ForegroundColor Yellow
    git push

    # Push backup branch
    Write-Host "`nPushing backup branch..." -ForegroundColor Yellow
    git push origin $backupBranch

    Write-Host "`nBackup complete!" -ForegroundColor Green
    Write-Host "Backup branch '$backupBranch' created and pushed" -ForegroundColor Green
} catch {
    Write-Host "`nAn error occurred:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host "`nYou can restore from backup branch using:" -ForegroundColor Yellow
    Write-Host "git checkout $backupBranch" -ForegroundColor Yellow
}

# Display final status
Write-Host "`nFinal Git Status:" -ForegroundColor Blue
git status