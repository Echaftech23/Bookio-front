pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }
    stages {
        stage('Cleanup') {
            steps {
                sh 'rm -rf node_modules'
                sh 'npm cache clean --force'
            }
        }
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
