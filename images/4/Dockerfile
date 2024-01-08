FROM ubuntu:latest

CMD ["echo", "Hello World"]

#Quando utilizamos o CMD(command) estamos definindo um comando que será executado ao iniciar o container

#Acontece que ao utilizar o CMD esse comando pode ser alterado pelo usuário via parâmetro na execução. Exemplo
# docker run --rm justronis/hello echo "flinstons"
#No comando acima, estamos "tomando controle" do CMD e alterando aquilo que está definido por padrão que seria o "echo Hello World"

#---------------------------------------------------

ENTRYPOINT [ "Hello!!" ]

#Já o ENTRYPOINT é um comando sempre fixo,
#Ao contrário do comando CMD que é um comando variável

# ----------------------------------------

#Algo interessante que podemos fazer com esse comportamento, é o seguinte:
#Podemos definir um comando pelo ENTRYPOINT que irá chamar um script.
#Supondo que na inicialização desse script, aceita parâmetros de entrada.
#Então podemos definir um CMD passando um comando como parâmetro para o script executado pelo entrypoint
#Considerando que o usuário ao inciar o container pode passar um parâmetro diferente quando quiser pois o CMD é variável
#Exemplo:

#ENTRYPOINT ["echo", "Hello"]
#CMD ["WORLD"]

#Ao iniciar o container sem passar nenhum parâmetro: docker run --rm justronis/hello
#A saída será: Hello WORLD

#Podemos também iniciar alterando o parâmetro na mão: docker run --rm justronis/hello Estrelinha
#A saída será: Hello Estrelinha
