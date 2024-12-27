pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }
    stages {
        stage('Cleanup') {
            steps {
                sh 'rm -rf node_modules package-lock.json'
                sh 'npm cache clean --force'
            }
        }
        stage('Build') {
            steps {
                sh 'npm ci'
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            when {
                success()
            }
            steps {
                sh "aws s3 sync dist/ s3://bookio-react-app --delete"
            }
        }
    }
}
