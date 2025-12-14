<!-- 1. Crie um container em modo interativo, sem rodá-lo, nomeando-o como 01container e utilizando a imagem alpine na versão 3.12 -->

docker container create -it --name 01container alpine:3.12

<!-- 2. Inicie o container 01container -->

docker container start 01container

<!-- 3. Liste os containers filtrando pelo nome 01container -->

docker ps -f name=01container

<!-- 4. Execute o comando cat /etc/os-release no container 01container sem se acoplar a ele -->

docker exec -i 01container sh -c "cat /etc/os-release"

