pipeline {
  agent {
    docker {
      image 'node:16'
      args '--network bridge'
    }

  }
  stages {
    stage('install modules') {
      steps {
        sh 'npm install'
      }
    }

    stage('deploy') {
      steps {
        sh 'docker build -t \'servicio-postal\' .'
        sh 'docker-compose up -d'
      }
    }

  }
}