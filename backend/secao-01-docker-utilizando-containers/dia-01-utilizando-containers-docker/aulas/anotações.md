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

<!-- 
1. Criamos um novo container a partir da imagem alpine, com a tag 3.14:
- No modo detached (-d);
- Atribuindo o nome de meu-container (--name);
- Solicitando sua remoção após finalização (--rm);
- Substituindo o comando padrão para um comando customizado (sleep 300).

2. Verificamos a lista de containers usando docker ps -a, apenas para validar o sucesso do comando anterior:
- A flag -a lista todos os containers existentes.

3. Executamos o comando docker exec -it meu-container sh;
- Passando a flag -t e solicitando a criação de uma sessão de terminal;
- Passando a flag -i, necessária para que a sessão seja interativa;
- O comando a ser executado será sh, que é um programa de terminal linux.

4. Já dentro do container, executamos um comando ps aux:
- Este comando lista todos os processos em execução no momento;
- Veja que legal: dentro do container, os únicos processos em execução são:
  - sleep 300, que especificamos na inicialização do container;
  - sh, que especificamos na hora de abrir a sessão interativa;
  - ps aux, que acabamos de executar para obter esta lista;
- É só isso! Dentro do container, não existe mais nenhum outro processo em execução! Aqui temos a confirmação do isolamento dos containers do resto dos processos da nossa máquina!

5. Usamos o comando exit para sair da do terminal do container;

6. Forçamos a parada de execução do container usando o comando docker stop;

7. Validamos que não há nenhum container restante na máquina usando docker ps -a. -->