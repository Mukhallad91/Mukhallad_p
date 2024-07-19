pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-repo.git'
            }
        }

        stage('Install Node.js') {
            steps {
                sh '''
                #!/bin/bash
                export NVM_DIR="$HOME/.nvm"
                [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
                nvm install 22.5.1
                nvm use 22.5.1
                node -v
                npm -v
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('C:/Users/pp/Desktop/Mukhallad Project') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                dir('C:/Users/pp/Desktop/Mukhallad Project') {
                    sh 'npx playwright test'
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/test-results/**/*.png', allowEmptyArchive: true
            junit '**/test-results/**/*.xml'
        }
        success {
            echo 'Tests passed!'
        }
        failure {
            echo 'Tests failed!'
        }
    }
}
