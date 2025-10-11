#!/bin/bash
# Git Sync Script for RCC History - FA25
# Automatically adds, commits, and pushes changes to GitHub

# Go to your local website folder
cd "D:/OneDrive/Websites/RCC History - FA25" || exit

# Check if there are any changes
if [ -n "$(git status --porcelain)" ]; then
    echo "🔄 Changes detected — committing and pushing..."
    git add -A
    git commit -m "Auto-sync on $(date +"%Y-%m-%d %H:%M:%S")"
    git push origin main
    echo "✅ Sync complete: pushed to GitHub and Netlify will redeploy."
else
    echo "✨ No changes to commit — everything is already up to date."
fi
