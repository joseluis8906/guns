pipeline {
  agent {
    docker {
      image "node:8.12.0-stretch"
      args "-p 3000:3000"
    }
  }
  environment {
    CI = "true"
  }
  stages {
    stage ('Build') {
      steps {
        sh "npm install && tsc"
      }
    }
    stage ('Test') {
      steps {
        sh "npm run test"
      }
    }
    stage ('Serve') {
      steps {
        sh "npm run serve&"
        input message: 'Finish using rest? (Click "Proceed" to finish)'
      }
    }
  }
}