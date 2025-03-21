pipeline {
    agent any

    stages {
        stage('Subir servidor') { 
            steps { bat 'start /b npm start' 
                   script { waitUntil { bat(script: "curl -s ", returnStatus: true) == 0} 
                          } 
                  } 
        }

        stage('Rodar test') {
            steps {
                bat 'npm test'
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
