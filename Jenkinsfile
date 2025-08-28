pipeline {
    agent any

    environment {
        CI = 'true'
    }

    tools {
        // Install the NodeJS version configured in the Jenkins Global Tool configuration
        nodejs 'nodejs'
    }

    options {
        timestamps()
        buildDiscarder(logRotator(numToKeepStr: '10'))
        disableConcurrentBuilds()
        timeout(time: 15, unit: 'MINUTES')
    }

    stages {
        // Stage 1: Clean Workspace
        stage('1. Clean Workspace') {
      steps {
        script {
          echo '🧹 Cleaning workspace...'
          cleanWs()
        }
      }
        }

        // Stage 2: Checkout
        stage('2. Checkout') {
      steps {
        script {
          echo '⬇️ Checking out source code...'
          checkout scm
        }
      }
        }

        // Stage 3: Install Dependencies
        stage('3. Install Dependencies') {
      steps {
        script {
          echo '📦 Installing dependencies using pnpm...'
          sh 'pnpm install --frozen-lockfile'
        }
      }
        }

        // Stage 6: Build Application
        stage('6. Build') {
      steps {
        script {
          echo '🏗️ Building production application...'
          sh 'pnpm build'
        }
      }
        }

        // Stage 7: Deploy (Example: Static Hosting via SSH)
        stage('7. Deploy') {
      steps {
        script {
          echo '🚀 Deploying application...'
          // Jenkins step: Wraps steps needing SSH credentials (already setup to the babogaya repo)
          sshagent(credentials: ['koket-server-delpoy-key']) {
            sh '''
                             docker compose -f docker-compose.yml down || true
                             docker compose -f docker-compose.yml up -d --build
                         '''
          }
        }
      }
        }
    }

    post {
        always {
      script {
        echo '🧹 Cleaning up workspace...'
        cleanWs()
      }
        // will add notification steps here ( Email) later
        }
        success {
      script { echo '✅ Build successful!' }
        }
        failure {
      script { echo '❌ Build failed!' }
        }
    }
}
