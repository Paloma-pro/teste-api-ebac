pipeline {
    agent any

    stages {
        stage('Subir servidor') {
            steps {
                bat 'npm start'
            }
        }

        stage('Verificar se o servidor está ativo') {
            steps {
                bat 'curl http://localhost:3000/'  
            }
        }

        
        stage('Checkout Código') {
            steps {
                git branch: 'main', url: 'https://github.com/Paloma-pro/teste-api-ebac.git'
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
                      npx cypress run'''
            }
        }
    }
}
