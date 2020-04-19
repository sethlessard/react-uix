pipeline {
  agent {
    docker {
      image "node:12"
      label "docker && linux"
      args "-u root:root"
    }
  }

  environment {
    CI = 'true'
  }

  stages {
    stage("Install") {
      steps {
        sh "npm install"
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
        npm run build
        pushd build/
        git init
        git remote add origin https://github.com/sethlessard/react-uix
        git add .
        git commit -m "Deploy to GitHub Pages"
        git push -f master:gh-pages
        popd
        popd
        """
      }
    }

    stage("Publish to NPM") {
      when { expression { sh([returnStdout: true, script: 'echo $TAG_NAME | tr -d \'\n\'']) } }
      steps {
        sh "npm publish"
      }
    }
  }
}
