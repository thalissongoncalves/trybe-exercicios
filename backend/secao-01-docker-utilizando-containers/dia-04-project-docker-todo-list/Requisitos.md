<!-- 1. Crie um container em modo interativo, sem rodá-lo, nomeando-o como 01container e utilizando a imagem alpine na versão 3.12 -->

docker container create -it --name 01container alpine:3.12

<!-- 2. Inicie o container 01container -->

docker container start 01container

<!-- 3. Liste os containers filtrando pelo nome 01container -->

docker ps -f name=01container

<!-- 4. Execute o comando cat /etc/os-release no container 01container sem se acoplar a ele -->

docker exec -i 01container sh -c "cat /etc/os-release"

<!-- 5. Remova o container 01container -->

docker container rm -f 01container

<!-- 6. Faça o download da imagem nginx com a versão 1.21.3-alpine sem criar ou rodar um container -->

docker image pull nginx:1.21.3-alpine

<!-- 7. Rode um novo container com a imagem nginx com a versão 1.21.3-alpine em segundo plano nomeando-o como 02images e mapeando sua porta padrão de acesso para porta 3000 do sistema hospedeiro -->

docker run -d --name 02images -p 3000:80 nginx:1.21.3-alpine

<!-- 8. Pare o container 02images que está em andamento -->

docker stop -t 0 02images

<!-- 9. Gere uma build a partir do Dockerfile do back-end do todo-app nomeando a imagem para todobackend -->

docker build -t todobackend ./todo-app/back-end

Dockerfile:
FROM node:16-alpine
EXPOSE 3001
WORKDIR /app/back-end
ADD node_modules.tar.gz /app/back-end
COPY . .
ENTRYPOINT ["npm"]
CMD ["start"]

<!-- 10. Gere uma build a partir do Dockerfile do front-end do todo-app nomeando a imagem para todofrontend -->

docker build -t todofrontend ./todo-app/front-end

Dockerfile:
FROM node:16-alpine
EXPOSE 3000
WORKDIR /app/front-end
ADD node_modules.tar.gz /app/front-end
COPY . .
ENTRYPOINT ["npm"]
CMD ["start"]

