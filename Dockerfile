# Use a imagem oficial do Node.js como base
FROM node:18-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o arquivo de configuração do package.json e o lock para o container
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todo o código fonte para o container
COPY . .

# Exponha a porta 3000 para o NestJS
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "start:dev"]
