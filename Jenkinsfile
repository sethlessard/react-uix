pipeline {
  agent {
    docker {
      image "node:12"
      args "-p 3000:3000 -u root:root"
    }
  }

  triggers {
    pollSCM "H/2 * * * *"
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
    // TODO: github pages deploy
    // TODO: npm deploy
  }
}
