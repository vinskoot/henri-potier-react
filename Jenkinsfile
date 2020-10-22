pipeline {
  agent any
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
}
