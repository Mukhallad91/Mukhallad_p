pipeline {
    agent any

    tools {
        nodejs 'NodeJS 22.5.1' // Ensure this matches the name you configured in Global Tool Configuration
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Checkout the repository
                    git 'https://github.com/Mukhallad91/Mukhallad_p.git'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Change to project directory and install dependencies
                    dir('C:\\Users\\pp\\Desktop\\Mukhallad Project') {
                        bat 'npm install'
                    }
                }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {
                    // Change to project directory and run Playwright tests
                    dir('C:\\Users\\pp\\Desktop\\Mukhallad Project') {
                        bat 'npx playwright test'
                    }
                }
            }
        }
    }

    post {
        always {
            script {
                // Archive test results
                archiveArtifacts artifacts: '**/test-results/**/*.png', allowEmptyArchive: true
                junit '**/test-results/**/*.xml'
            }
        }
        success {
            script {
                echo 'Tests passed!'
            }
        }
        failure {
            script {
                echo 'Tests failed!'
            }
        }
    }
}
