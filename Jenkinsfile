pipeline {
    agent any

    stages {
        stage('Subir servidor') {
            steps {
                bat 'start /b npm start'
            }
        }
        
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
                      npx cypress run --browser edge'''
            }
        }
    }
}
