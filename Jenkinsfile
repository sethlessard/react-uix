pipeline {
  agent {
    docker {
      image "node:12"
      label "docker"
      args "-u root:root"
    }
  }

  environment {
    CI = 'true'
    GITHUB_API_KEY = credentials("github")
    // NPM_TOKEN = credentials("npm-token")
  }

  stages {
    stage("Install") {
      steps {
        sh "npm install"
        sh "npm install -g npm-cli-login"
      }
    }

    stage("Test & Build") {
      parallel {
        stage("Test") {
          steps {
            sh "npm test"
          }
        }

        stage("Build") {
          steps {
            sh "npm run build"
          }
        }
      }
    }

    stage("Deploy API Documentation to GitHub Pages") {
      when {
        branch "master"
      }
      steps {
        sh """#!/bin/bash
        pushd example/
        npm install
        npm run build
        pushd build/
        git init
        git add .
        git config user.name "Jenkins CI"
        git config user.email "sethlessard@outlook.com"
        git commit -m "Deploy to GitHub Pages"
        git push -f "https://sethlessard:${GITHUB_API_KEY}@github.com/sethlessard/react-uix.git" master:gh-pages
        popd
        popd
        """
      }
    }

    stage("Publish to NPM") {
      when { expression { sh([returnStdout: true, script: 'echo $TAG_NAME | tr -d \'\n\'']) } }
      steps {
        sh '''
        echo \"//registry.npmjs.org/:username=sethlessard\" >> ~/.npmrc
        echo \"//registry.npmjs.org/:_password=$NPM_TOKEN\" >> ~/.npmrc
        echo \"//registry.npmjs.org/:_password=sethlessard@outlook.com\" >> ~/.npmrc
        
        npm set registry https://registry.npmjs.org/

        npm publish
        '''
      }
    }
  }
}
