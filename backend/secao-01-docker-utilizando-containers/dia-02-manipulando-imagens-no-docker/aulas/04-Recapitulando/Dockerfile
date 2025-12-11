# Usando a imagem nginx
FROM nginx
# Copia o index.html para a pasta que o nginx pede para colar
COPY ./index.html /usr/share/nginx/html
# Configura a porta do pc para o container definindo qual porta vai rodar
EXPOSE 3000
# Cria tipo uma constante para armazenar informação
ENV API_URL=http://localhost:8000/api/
# Pasta de trabalho da nossa imagem:
WORKDIR /usr/share/nginx/html
#
RUN ls
# Serve para definir qual o executável nosso container deve usar
ENTRYPOINT ["/usr/sbin/nginx"]
# Serve para configurar os parametros enviados para esse executável
CMD ["-g", "daemon off;"]