pipeline {
    agent any
    tools {
        nodejs 'nodejs-20.17.0'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh "aws s3 sync dist/ s3://bookio-react-app --delete"
            }
        }
    }
}