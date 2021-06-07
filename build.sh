echo ''
echo 'choose the build version'
echo "1) build production"
echo "2) build web"
echo ''
read build_version
case $build_version in
    1)echo "build production"
    ecos_version='build'
    ;;
    2)echo " build web"
    ecos_version='web'
    ;;
    *) 
    echo "error! the version does not exits"
    exit
;;
esac
npm run $ecos_version

date=$(date +%Y%m%d%H%M)
gitHash=$(git rev-parse --short HEAD)

sudo docker build -t vue3-ts-build .
echo ''
echo 'enter docker_tag, like v0.6-test'
echo ''
read docker_tag

#TODO:使用公司内部的docker登录以及docker
sudo docker login https://hub.docker.com
sudo docker tag frontend-template https://hub.docker.com/docker-ecs/webui/frontend:$gitHash-$date
sudo docker tag frontend-template https://hub.docker.com/docker-ecs/webui/frontend:$docker_tag
sudo docker push https://hub.docker.com/docker-ecs/webui/frontend:$gitHash-$date
sudo docker push https://hub.docker.com/docker-ecs/webui/frontend:$docker_tag

echo https://hub.docker.com/docker-ecs/webui/frontend:$docker_tag