pipeline {
    agent any

    environment {
        NODE_HOME = tool name: 'NodeJS 14.x', type: 'NodeJSInstallation'
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Mukhallad91/Mukhallad_p.git', credentialsId: 'github-token'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    dir('C:\\Users\\pp\\Desktop\\Mukhallad Project') {
                        bat 'npm install'
                    }
                }
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {
                    dir('C:\\Users\\pp\\Desktop\\Mukhallad Project') {
                        bat 'npx playwright test'
                    }
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
