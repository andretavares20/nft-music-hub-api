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
| **MySQL**          | Banco de dados relacional          |
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
- **MySQL**  
- Carteira Ethereum (ex.: MetaMask)

---

### **Passos para Instalação**

1. **Clone o repositório**  
   ```bash
   git clone https://github.com/andretavares20/nft-music-hub-api.git
   cd nft-music-hub-api
   ```
2. **Configure o banco de dados**  
   Edite o arquivo `application.yml` com suas credenciais do MySQL:
   ```yaml
   spring:
     datasource:
       url: jdbc:mysql://localhost:3306/nftmusicdb
       username: seu-usuario
       password: sua-senha
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
       url: jdbc:mysql://seu-banco-prod:5432/nftmusicdb
       username: usuario-prod
       password: senha-prod
     jpa:
       hibernate:
         ddl-auto: validate
2. **Gerar o artefato .jar**
   Compile o projeto para produção:
   ```bash
   mvn clean package
3. **Executar o arquivo .jar**
   Use o seguinte comando:
   ```bash
   java -jar target/nft-music-hub-api.jar --spring.profiles.active=prod
4. **Acesso à API em Produção**
   - Acesse sua aplicação em produção pela URL configurada no servidor.

---

## 🤝 **Como Contribuir**

Contribuições são **muito bem-vindas**! Siga os passos abaixo para colaborar com o projeto:

1. **Faça um fork** do repositório.  
2. **Crie uma branch** para a sua feature ou correção:  
   ```bash
   git checkout -b minha-feature
3. Adicione suas alterações:
   ```bash
   git add .
   git commit -m "Adicionei nova funcionalidade X"
4. Envie suas alterações para o fork:
   ```bash
   git push origin minha-feature
5. Abra um Pull Request no repositório principal.

---

## 📜 **Licença**

Este projeto está licenciado sob a **MIT License**.  
Consulte o arquivo [LICENSE](LICENSE) para mais informações.

---

## 💡 **Próximas Funcionalidades**

- **Leilão de NFTs**: Implementar funcionalidade para venda de NFTs em formato de leilão.  
- **Royalties Automatizados**: Distribuição automática de royalties entre artistas e colaboradores.  
- **Multi-Blockchain**: Integração com outras blockchains como Polygon e Solana.  
- **Notificações em Tempo Real**: Alerta de transações e vendas usando WebSocket.  
- **Análises Avançadas**: Estatísticas detalhadas sobre NFTs, vendas e engajamento.  

---

## 🌐 **Contato**

**Desenvolvido por André Tavares**  

- GitHub: [andre-tavares](https://github.com/)  
- LinkedIn: [André Tavares](https://www.linkedin.com/)  
- Email: [andre.tavares@example.com](mailto:andre.tavares@example.com)

---

## 🎉 **Agradecimentos**

Agradecemos a todos os colaboradores, artistas e apoiadores que fazem parte do desenvolvimento do **NFT Music Hub**.  
Este projeto visa revolucionar o mercado da música com o poder da **blockchain** e dos **NFTs**. 🚀🎶

---
