pipeline {
    agent any
    tools {
        nodejs 'NodeJS 20'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            sh "aws s3 sync dist/ s3://bookio-react-app --delete"
        }
    }
}