# Display current status
Write-Host "`nCurrent Git Status:" -ForegroundColor Blue
git status

# Prompt for commit message
$commitMessage = Read-Host "`nEnter commit message"

# If no message provided, use default
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Update application"
}

# Add all changes
Write-Host "`nAdding all changes..." -ForegroundColor Yellow
git add .

# Commit changes
Write-Host "`nCommitting changes..." -ForegroundColor Yellow
git commit -m "$commitMessage"

# Push to GitHub
Write-Host "`nPushing to GitHub..." -ForegroundColor Yellow
git push

Write-Host "`nBackup complete!" -ForegroundColor Green 