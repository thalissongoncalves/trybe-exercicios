"docker images" = Visualiza todas as imagens docker que já estão presentes na máquina.

"docker ps" OU "docker container ls" = Lista todos os containers em execução neste momento na máquina.

"docker container ls -a" = Lista todos os containers atuais, tanto quanto em execução e também parados.

"docker container run alpine:3.14 echo 'Hello World'" = Executa um container usando a imagem docker alpine e a tag 3.14.

"docker container run --name meu-container alpine3:14 echo 'Hello World2'" = Executa um container usando a imagem docker alpine e a tag 3.14 já definindo um nome pro container como 'meu-container'.

"docker rm <nome-container>" = Remove um container (Ele precisa estar parado).

"docker container run --rm alpine:3.14 echo 'Hello World'" = Cria o container porém já o remove ao terminar a execução.

"docker container run --rm -d alpine:3.14 sleep 300" = Cria o container definindo-o em segundo plano por 300 seg. (5 minutos).

"docker stop -t 0 <nome-container>" = Faz o container parar sua execução.

"docker exec -it meu-container sh" = Acessa o terminal do container e executa o comando 'sh'.

"docker container run --rm -d --name meu-container alpine:3.14 sleep 300" = Cria um container adicionando o auto-remove e executando-o em segundo plano, adicionando o nome meu-container com a imagem alpine:3.14 ficando em segundo plano por 300 seg.

"docker logs meu-container" = Ver informações do container sem precisar entrar nele

"docker top meu-container" = exibe os processos que estão rodando dentro do container

"docker container prune" = remove todos os containers inativos do seu computador

"docker container ps -l" = retorna o último container da lista

"docker container start <containerID>" = inicia a execução do container referente ao id mencionado

"docker container rm -f" = força a remoção de um container mesmo que esteja em execução

"docker pull alpine:3.14" = obtém a imagem Docker diretamente do Registry e deixa no computador sem precisar criar container.

"docker rmi <IMAGE ID>" = remove a imagem do computador.

"docker system prune -af" = remove todas as imagens e containers existentes no computador.

"docker build <flags> -t <nome-da-imagem> <contexto>" = 
- Uma flag -t, que indicará qual será o nome da imagem, e também a tag, se utilizar o formato <nome>:<tag>;
- Um contexto, ou seja, em qual caminho de pasta o Docker deve se basear para processar o arquivo Dockerfile.
Normalmente utilizamos apenas . (ponto final), que indica a pasta atual.

"docker container list" = Para verificar em quais portas os seus containers estão executando e verificar a coluna PORTS.

"docker port <nome_ou_id_do_container>" = Para verificar a porta específica de um container.

sudo curl -L "https://github.com/docker/compose/releases/download/v2.5.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

docker-compose --version

<!-- Simulação de uma arquitetura muito comum com um banco de dados, um serviço de back-end e um serviço de front-end -->
aula-docker-compose/
├── backend
│   └── Dockerfile
├── frontend
│   └── Dockerfile
└── docker-compose.yaml

<!-- O Compose possui quatro políticas de reinicialização, sendo elas:

no: define que o container não reiniciará automaticamente (Padrão);

on-failure: define que o container será reiniciado caso ocorra alguma falha apontada pelo exit code, diferente de zero;

always: especifica que sempre que o serviço parar, seja por um falha ou porque ele simplesmente finalizou sua execução, ele deverá ser reiniciado;

unless-stopped: define que o container sempre será reiniciado, a menos que utilizemos o comando docker stop <container> manualmente. -->

<!-- Anota aí 🖊: A ideia de variáveis de ambiente é trazer mais dinamismo entre ambientes. Por exemplo: Na maioria das empresas, usualmente temos o ambiente de teste e o ambiente de produção, esses dois ambientes possuem nome de pessoa usuária e senha diferentes para cada ambiente. Deixar esses dados fixos ou expostos no código, engessaria a aplicação e seria inseguro. As variáveis de ambiente entram para reduzir esse problema. Tendo variáveis com o mesmo nome em cada ambiente, por exemplo DB_USER e DB_PASSWORD. Em cada ambiente a aplicação consegue se conectar em banco de dados diferentes, isolando assim o ambiente de teste e o de produção. -->

docker compose down: desce todos os serviços

docker network create --driver bridge rede-local: cria uma rede com o driver de 'bridge' com o nome 'rede-local'

docker network ls: lista todas redes criadas

docker network connect rede-local novo_container: adiciona um container na rede, por exemplo 'novo_container' foi adicionado a 'rede-local'

docker network disconnect minha-rede meu-container: serve para desconectar um container da rede

docker container run -it --name outro_container --network rede-local <nome_imagem>: na criação do container já configura para qual rede vai alocar o container, no caso 'outro_container' foi alocado a 'rede-local'

docker login = faz login no docker hub

docker push <docker-id>/<image>:<tag> = manda imagens para o docker hub

docker pull <docker-id>/<image>:<tag> = baixa imagens do docker hub