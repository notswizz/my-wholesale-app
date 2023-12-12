@echo off
echo Switching to master branch...
git checkout master

echo Pulling latest changes from master...
git pull origin master

SET /P COMMITMESSAGE="Enter commit message: "
git add .
git commit -m "%COMMITMESSAGE%"

echo Pushing changes to master branch on GitHub...
git push origin master

echo Changes pushed to GitHub.
pause
