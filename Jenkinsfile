pipeline {
    agent any

    stages {
        stage('Verify Node.js and npm') {
            steps {
                script {
                    def command = """
                    export NVM_DIR="\$HOME/.nvm"
                    [ -s "\$NVM_DIR/nvm.sh" ] && \. "\$NVM_DIR/nvm.sh"
                    nvm use 22
                    node --version
                    npm --version
                    """
                    sh command
                }
            }
        }

        stage('Install dependencies') {
            steps {
                script {
                    def command = """
                    export NVM_DIR="\$HOME/.nvm"
                    [ -s "\$NVM_DIR/nvm.sh" ] && \. "\$NVM_DIR/nvm.sh"
                    nvm use 22
                    npm install
                    """
                    sh command
                }
            }
        }

        stage('Run tests') {
            steps {
                script {
                    def command = """
                    export NVM_DIR="\$HOME/.nvm"
                    [ -s "\$NVM_DIR/nvm.sh" ] && \. "\$NVM_DIR/nvm.sh"
                    nvm use 22
                    npm run test
                    """
                    sh command
                }
            }
        }

        stage('Build project') {
            steps {
                script {
                    def command = """
                    export NVM_DIR="\$HOME/.nvm"
                    [ -s "\$NVM_DIR/nvm.sh" ] && \. "\$NVM_DIR/nvm.sh"
                    nvm use 22
                    npm run build
                    """
                    sh command
                }
            }
        }
    }
}