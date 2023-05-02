pipeline {
  agent {
    docker {
      image 'node:16'
      args '--network jenkins-blue-ocean-tutorial_mynet'
    }

  }
  stages {
    stage('install modules') {
      steps {
        sh 'npm install'
      }
    }

  }
}