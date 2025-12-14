<!-- 1. Crie um container em modo interativo, sem rodá-lo, nomeando-o como 01container e utilizando a imagem alpine na versão 3.12 -->

docker container create -it --name 01container alpine:3.12

<!-- 2. Inicie o container 01container -->

docker container start 01container

