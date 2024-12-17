# 🎵 **NFT Music Hub API**

---

## **📖 Descrição do Projeto**

O **NFT Music Hub** é uma plataforma que permite que **artistas independentes** criem, vendam e gerenciem **NFTs de músicas** e experiências exclusivas diretamente com seus fãs.  
Este repositório contém a **API Back-end**, desenvolvida em **Spring Boot**, que gerencia artistas, NFTs, transações e integração com a **blockchain**.

---

## 🚀 **Funcionalidades Principais**

- **Cadastro de Artistas**: Registre e gerencie informações dos músicos.
- **Criação de NFTs**: Transforme músicas e conteúdos em NFTs armazenados no IPFS.
- **Marketplace**: Listagem de NFTs disponíveis para venda.
- **Compra de NFTs**: Registro seguro de transações integradas à blockchain.
- **Dashboard do Artista**: Estatísticas de NFTs criados e vendidos.
- **Autenticação JWT**: Controle de acesso aos recursos da plataforma.

---

## 🛠️ **Tecnologias Utilizadas**

| **Tecnologia**         | **Uso**                             |
|-------------------------|-------------------------------------|
| **Java 17**            | Linguagem de programação           |
| **Spring Boot 3.x**     | Framework para APIs REST           |
| **PostgreSQL**          | Banco de dados relacional          |
| **Ethereum (Goerli)**   | Rede blockchain para NFTs          |
| **Solidity**            | Contratos inteligentes             |
| **IPFS**                | Armazenamento descentralizado      |
| **Swagger/OpenAPI**     | Documentação da API                |
| **JWT**                 | Autenticação e controle de acesso  |

---

## 📂 **Estrutura do Projeto**

```bash
nft-music-hub-api/
│
├── src/
│   ├── main/
│   │   ├── java/com/nftmusichub/api/
│   │   │   ├── controllers/      # Endpoints da API
│   │   │   ├── models/           # Entidades do banco de dados
│   │   │   ├── repositories/     # Interfaces de persistência JPA
│   │   │   ├── services/         # Lógica de negócios
│   │   │   ├── config/           # Configurações (DB, JWT, Blockchain)
│   │   │   └── utils/            # Classes utilitárias
│   │   ├── resources/
│   │   │   ├── application.yml   # Configurações do ambiente
│   │   │   └── schema.sql        # Script inicial do banco de dados
│   └── test/                     # Testes unitários e de integração
│
├── pom.xml                       # Dependências do Maven
└── README.md                     # Documentação do projeto
````
---

## ⚙️ **Configuração do Projeto**

### **Pré-requisitos**
- **Java 17**  
- **Maven**  
- **PostgreSQL**  
- Carteira Ethereum (ex.: MetaMask)

---

### **Passos para Instalação**

1. **Clone o repositório**  
   ```bash
   git clone https://github.com/seu-usuario/nft-music-hub-api.git
   cd nft-music-hub-api
   ```
2. **Configure o banco de dados**  
   Edite o arquivo `application.yml` com suas credenciais do PostgreSQL:
   ```yaml
   spring:
     datasource:
       url: jdbc:postgresql://localhost:5432/nftmusicdb
       username: seu-usuario
       password: sua-senha
     jpa:
       hibernate:
         ddl-auto: update
       show-sql: true
     application:
       name: NFT Music Hub API
   ```
3. **Instale as dependências**
   Utilize o Maven para baixar todas as dependências necessárias:
   ```bash
   mvn clean install
   ```
4. **Execute a aplicação**
   Inicie o servidor com o comando abaixo:
   ```bash
   mvn spring-boot:run
   ```
5. **Acesse a API:**  
   - Base URL: [http://localhost:8080](http://localhost:8080)  
   - Documentação Swagger: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

---

## 🔗 **Endpoints Principais**

| **Método** | **Rota**             | **Descrição**                       |
|------------|----------------------|-------------------------------------|
| `POST`     | `/api/artistas`      | Cadastrar um novo artista.          |
| `POST`     | `/api/nfts`          | Criar um novo NFT.                  |
| `GET`      | `/api/nfts`          | Listar NFTs disponíveis.            |
| `POST`     | `/api/transacoes`    | Registrar uma transação de compra.  |
| `GET`      | `/api/dashboard`     | Dados de vendas do artista.         |

---

## 🧪 **Testes**

1. **Execução dos Testes**  
   Utilize o Maven para rodar os testes unitários e de integração:  
   ```bash
   mvn test
2. **Cobertura de Testes**
   - Validação dos endpoints da API.
   - Testes de lógica de negócios para criação de NFTs e transações.
   - Testes de persistência para o banco de dados.
     
---

## 🚀 **Deploy**

### **Configuração para Produção**
1. **Configurar variáveis de ambiente**  
   Atualize as configurações de produção no arquivo `application-prod.yml`:
   ```yaml
   spring:
     datasource:
       url: jdbc:postgresql://seu-banco-prod:5432/nftmusicdb
       username: usuario-prod
       password: senha-prod
     jpa:
       hibernate:
         ddl-auto: validate
