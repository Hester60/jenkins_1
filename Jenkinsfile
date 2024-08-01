pipeline {
    agent { label 'agent-vm2' }

    stages {
        stage('Run tests') {
            steps {
                script {
                    docker.image('node:22-slim').inside {
                        sh 'mkdir -p ~/.npm'
                        sh 'npm config set cache ~/.npm'
                        sh 'rm -rf node_modules'
                        sh 'npm install'
                        sh 'npm test'
                    }
                }
            }
        }
    }
}