FROM node:15

WORKDIR /usr/src/app

#Copiando tudo da pasta atual(onde está sendo feito o build da imagem) para a pasta atual do container(que no caso é a pasta do WORKDIR)
COPY . .

EXPOSE 3000

CMD ["node", "src/index.js"]