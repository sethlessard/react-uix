
if ($env:BUILD_SOURCEBRANCH -ne "master") {
  throw "The API documentation is only published from the 'master' branch."
}

Remove-Item "package-lock.json" -Force | Out-Null
Write-Host "Installing dependencies..."
npm install

Push-Location "example/"
git config --global user.email "sethlessard@outlook.com"
git config --global user.name "Azure Pipelines"

Remove-Item "package-lock.json" -Force | Out-Null
Write-Host "Installing documentation dependencies..."
npm install

Write-Host "Building the latest documentation..."
npm run build

Push-Location "build/"
git init
git add .
git commit -m "Deploy to Github Pages"
git push -f "https://${env:GITHUB_API_KEY}@github.com/sethlessard/react-uix.git" master:gh-pages
Pop-Location # build/
Pop-Location # example/
