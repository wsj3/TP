# Create backup directory if it doesn't exist
$backupDir = "backups"
if (-not (Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir
}

# Generate backup name with timestamp
$timestamp = Get-Date -Format "yyyyMMdd-HHmm"
$backupName = "backup-${timestamp}"
$backupPath = Join-Path $backupDir $backupName

try {
    Write-Host "`nCreating local project backup..." -ForegroundColor Yellow
    
    # Define directories and files to exclude
    $excludeDirs = @(
        "node_modules",
        ".next",
        ".git",
        "backups"
    )
    
    # Create temporary directory
    New-Item -ItemType Directory -Path $backupPath -Force

    # Copy files with exclusions
    Get-ChildItem -Path .\ -Exclude $excludeDirs | ForEach-Object {
        try {
            Copy-Item -Path $_.FullName -Destination $backupPath -Recurse -Force
        } catch {
            Write-Host "Warning: Could not copy $($_.FullName): $($_.Exception.Message)" -ForegroundColor Yellow
        }
    }
    
    # Brief pause to ensure all file handles are released
    Start-Sleep -Seconds 2
    
    # Create zip archive
    $zipPath = "${backupPath}.zip"
    try {
        Compress-Archive -Path "$backupPath\*" -DestinationPath $zipPath -Force
        
        # Only remove temp directory if zip was successful
        Remove-Item -Path $backupPath -Recurse -Force
        
        Write-Host "`nBackup completed successfully!" -ForegroundColor Green
        Write-Host "Backup location: $zipPath" -ForegroundColor Green
    } catch {
        Write-Host "`nWarning: Could not create zip file. Keeping uncompressed backup." -ForegroundColor Yellow
        Write-Host "Backup location: $backupPath" -ForegroundColor Yellow
        Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    }

} catch {
    Write-Host "`nAn error occurred during backup:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    
    # Cleanup if something went wrong
    if (Test-Path $backupPath) {
        Remove-Item -Path $backupPath -Recurse -Force
    }
} 