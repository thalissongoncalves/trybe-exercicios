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