# Para Levantar o Projeto 
1. Instale o Docker no seu computador
2. Instale o Docker Compose
3. Vai na raiz do projeto e execute o comando ```docker-compose up -d``` 
4. Depois Execute o comando  ```docker-compose exec server npx sequelize-cli db:migrate```
5. Server estará rodando em localhost:3333
6. Para acessar o client, vá no localhost:3000

