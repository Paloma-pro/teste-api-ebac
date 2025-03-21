pipeline {
    agent any

    stages {
        
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

        stage('Subir servidor') { 
            steps { bat 'start /b npm start' 
                   script { waitUntil { bat(script: "curl -s http://localhost:3000", returnStatus: true) == 0} 
                          } 
                  } 
        }

        stage('Executar Testes de API') {
            steps {
                bat '''set NO_COLOR=1
                      npx cypress run'''
            }
        }

        stage('Rodar test') {
            steps {
                bat 'npm test'
            }
        }
    }
}
