Gessaude API
Gessaude é uma API desenvolvida em NestJS para gerenciamento de serviços de saúde. Esta aplicação inclui integração com banco de dados MySQL via Prisma e usa ngrok para facilitar o desenvolvimento com URLs acessíveis externamente.

Requisitos
Node.js: v20.x.x
Docker: Para gerenciar o banco de dados MySQL
Prisma: Para ORM e migração do banco de dados
ngrok: Para expor a API local para acesso externo
Tecnologias
Node.js: Backend da aplicação
NestJS: Framework para construir a API
Prisma: ORM para interagir com o MySQL
MySQL: Banco de dados relacional
ngrok: Túnel HTTP para expor o ambiente local
Docker: Container para gerenciar o banco de dados MySQL
Configuração
1. Clone o repositório
bash
Copiar código
git clone https://github.com/usuario/gessaude.git
cd gessaude
2. Instale as dependências
Certifique-se de estar utilizando a versão 20 do Node.js.

bash
Copiar código
npm install
3. Configure o ambiente
Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente, como a URL de conexão do banco de dados MySQL. Um exemplo de .env:

bash
Copiar código
DATABASE_URL="mysql://user:password@localhost:3306/gessaude"
4. Inicialize o Docker para o MySQL
Certifique-se de ter o Docker instalado e em execução. Use o seguinte comando para iniciar um container MySQL:

bash
Copiar código
docker-compose up -d
5. Execute as migrações do Prisma
Após configurar o banco de dados, execute as migrações para garantir que as tabelas estejam criadas corretamente.

bash
Copiar código
npx prisma migrate dev
6. Inicie o servidor de desenvolvimento
Para iniciar o servidor em modo de desenvolvimento, utilize o comando:

bash
Copiar código
npm run dev
A aplicação estará acessível em http://localhost:3000.

7. Exponha o servidor local com ngrok
Para acessar a API de forma externa (por exemplo, para integração com serviços como o WhatsApp), use o ngrok para expor o servidor local.

Instale o ngrok, se ainda não tiver:

bash
Copiar código
npm install -g ngrok
Depois, execute o seguinte comando para criar o túnel:

bash
Copiar código
ngrok http 3000
O ngrok fornecerá uma URL pública (como https://abcd1234.ngrok.io), que poderá ser usada para testar a API externamente.

Comandos úteis
Iniciar o servidor: npm run dev
Executar migrações do Prisma: npx prisma migrate dev
Abrir o Prisma Studio (GUI para o banco de dados): npx prisma studio
Iniciar o ngrok: ngrok http 3000
Documentação da API
A documentação da API pode ser acessada via Swagger, disponível em http://localhost:3000/api