def commit_id
def DOCKER_COMMON_CREDS
def DOCKER_REPO
def DOCKER_IMAGE
try{
    node {
        environment {
            DOCKER_COMMON_CREDS = credentials('docker-user')
            DOCKER_REPO = "cerveraman"
            DOCKER_IMAGE = "sneakertest"
        }
        stage('Preparation'){
            checkout scm
            sh "git rev-parse --short HEAD > .git/commit-id"
            commit_id = readFile('.git/commit-id').trim()
            sh "curl -L ""https://github.com/docker/compose/releases/download/1.29.2/docker-compose-\(uname -s)-\(uname -m)"" -o /usr/local/bin/docker-compose"
            
        }  
        stage('Build & Test'){
            nodejs(nodeJSInstallationName: 'NodeJS'){
                sh "npm install"
                //sh "npm test"
            }
            sh "docker build -t cerveraman/sneakertest ."
            sh "docker-compose up"
        }
        stage('Deploy'){
            withCredentials([usernamePassword(credentialsId: DOCKER_COMMON_CREDS, usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                sh "docker login -u ${env.DOCKER_USER} -p ${env.DOCKER_PASS} ${DOCKER_REPO}"
            }
            sh "docker push ${DOCKER_REPO}/${DOCKER_IMAGE}:${commit_id}"
        }
    }
} catch (def e) {
    echo "An error occurred: ${e}"
    currentBuild.result = 'FAILURE'
}