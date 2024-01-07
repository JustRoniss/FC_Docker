#Apesar de ser um meme aqui temos algumas coisas interessantes

#Estou copiando um script da minha máquina pessoal para dentro do container

#Depois rodo um comando que da as permissões de execução para o script

#E por fim defino o ENTRYPOINT, onde estou setando para sempre que iniciar o container o script.sh sejá iniciado logo de cara


from nginx:latest

WORKDIR /app

COPY ./script.sh /app/

RUN chmod +x /app/script.sh 

ENTRYPOINT [ "/app/script.sh" ]