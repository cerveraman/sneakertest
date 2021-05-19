def commit_id
def DOCKER_COMMON_CREDS='docker-user'
def DOCKER_REPO = "cerveraman"
def DOCKER_IMAGE = "sneakertest"
try{
    node {
        stage('Preparation'){
            checkout scm
            sh "git rev-parse --short HEAD > .git/commit-id"
            commit_id = readFile('.git/commit-id').trim()
            //sh "curl -L "'https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)'" -o /usr/local/bin/docker-compose"
            
        }  
        stage('Build & Test'){
            sh "docker build -t cerveraman/sneakertest ."
            
        }
        stage('Deploy'){
            
            withCredentials([usernamePassword(credentialsId: DOCKER_COMMON_CREDS, usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                sh "docker login -u ${env.DOCKER_USER} -p ${env.DOCKER_PASS} ${DOCKER_REPO}"
            }
            echo "hecho"
            sh "docker push ${DOCKER_REPO}/${DOCKER_IMAGE}:${commit_id}"
        }
    }
} catch (def e) {
    echo "An error occurred: ${e}"
    currentBuild.result = 'FAILURE'
}