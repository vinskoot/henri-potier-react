pipeline {
  agent any
  triggers {
    cron: 'H * * * *' 
  }
  stages {
    stage('Example') {
      steps {
        echo 'Hello World'
      }
    }
    stage('IP') {
      steps {
        sh 'curl http://ipinfo.io/ip > ip.txt'
        sh 'cat ip.txt'
      }
    }
  }
  
  post {
    always {
      archiveArtifacts artifacts: 'ip.txt', followSymlinks: false
    }
  }
}
