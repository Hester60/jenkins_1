pipeline {
    agent { label 'agent-vm2' }

    stages {
        stage('Run tests') {
            steps {
                script {
                    docker.image('node:22-slim').inside {
                        sh 'npm install'
                        sh 'npm test'
                    }
                }
            }
        }
    }
}