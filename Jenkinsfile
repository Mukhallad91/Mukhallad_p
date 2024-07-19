pipeline {
    agent any

    environment {
        NODE_HOME = tool name: 'NodeJS 14.x', type: 'NodeJSInstallation'
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Change to project directory
                    dir('C:\\Users\\pp\\Desktop\\Mukhallad Project') {
                        sh 'npm install'
                    }
                }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {
                    // Change to project directory
                    dir('C:\\Users\\pp\\Desktop\\Mukhallad Project') {
                        sh 'npx playwright test'
                    }
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'test-results/**/*.png', allowEmptyArchive: true
            junit 'test-results/**/*.xml'
        }
        success {
            echo 'Tests passed!'
        }
        failure {
            echo 'Tests failed!'
        }
    }
}
