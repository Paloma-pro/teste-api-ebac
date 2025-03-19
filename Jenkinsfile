pipeline {
    agent any

    stages {
        stage('Subir servidor') {
            steps {
                bat 'start /b npm start'
            }
        }

        stage('Verificar se o servidor está ativo') {
            steps {
                bat 'curl http://localhost:3000'  // Altere para o seu endpoint do servidor
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
