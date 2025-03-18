pipeline {
    agent any

    stages {
        stage('Checkout Código') {
            steps {
                git branch: 'main', url: 'https://github.com/Paloma-pro/teste-e2e-ebac.git'
            }
        }

        stage('Instalar Dependências') {
            steps {
                bat 'npm install'  
            }
        }

        stage('Executar Testes de API') {
            steps {
                bat '''set NO_COLOR=1
                npx mocha file:///C:/ProgramData/Jenkins/.jenkins/workspace/Testes%20API/cypress/e2e/**/*.js --reporter spec'''
            }
        }

    }
}
