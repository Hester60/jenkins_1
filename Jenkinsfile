pipeline {
    agent NodeJS

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                sh 'npm run test'
            }
        }

        stage('Build project') {
            steps {
                sh 'npm run build'
            }
        }
    }
}