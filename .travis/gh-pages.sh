#!/bin/bash

set -o errexit

if [ "$TRAVIS_BRANCH" != "master" ]; then exit 0; fi

rm -fr package-lock.json
npm install

pushd example/

git config --global user.email "travis@travis-ci.com"
git config --global user.name "Travis CI"

rm -fr package-lock.json
npm install
npm run build

pushd build/
git init
git add .
git commit -m "Deploy to Github Pages"
git push -f --quiet "https://${GITHUB_API_KEY}@github.com/sethlessard/react-uix.git" master:gh-pages > /dev/null 2>&1
popd # build/
popd # example/
