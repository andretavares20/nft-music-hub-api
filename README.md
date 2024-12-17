# 🎵 **NFT Music Hub API**

---

## **📖 Descrição do Projeto**

O **NFT Music Hub** é uma plataforma que permite que **artistas independentes** criem, vendam e gerenciem **NFTs de músicas** e experiências exclusivas diretamente com seus fãs.  
Este repositório contém a **API Back-end**, desenvolvida em **Node.js** com **NestJS** e integração com a **blockchain Ethereum**.

---

## 🚀 **Funcionalidades Principais**

- **Cadastro de Artistas**: Registre e gerencie informações dos músicos.
- **Criação de NFTs**: Transforme músicas e conteúdos exclusivos em NFTs armazenados no **IPFS**.
- **Marketplace**: Listagem de NFTs disponíveis para venda.
- **Compra de NFTs**: Registro seguro de transações integradas à blockchain.
- **Dashboard do Artista**: Estatísticas de NFTs criados e vendidos.
- **Autenticação JWT**: Controle de acesso seguro aos recursos da plataforma.

---

## 🛠️ **Tecnologias Utilizadas**

| **Tecnologia**         | **Uso**                             |
|-------------------------|-------------------------------------|
| **Node.js + TypeScript**| Back-end e APIs REST               |
| **NestJS**             | Framework modular para Node.js      |
| **PostgreSQL**         | Banco de dados relacional          |
| **Ethereum (Goerli)**   | Rede blockchain para NFTs          |
| **Solidity**            | Contratos inteligentes             |
| **ethers.js**           | Integração blockchain no back-end  |
| **IPFS (Pinata/Infura)**| Armazenamento descentralizado      |
| **AWS S3**              | Armazenamento de arquivos (músicas)|
| **Swagger/OpenAPI**     | Documentação da API                |
| **JWT**                 | Autenticação e controle de acesso  |

---

## 📺 **Estrutura do Projeto**

```bash
nft-music-hub-api/
🔹
🔹│
🔹├── src/
🔹│   ├── main/
🔹│   │   ├── controllers/      # Endpoints da API
🔹│   │   ├── models/           # Entidades e interfaces de dados
🔹│   │   ├── services/         # Lógica de negócios
🔹│   │   ├── blockchain/       # Serviços para smart contracts
🔹│   │   ├── storage/          # Serviços para AWS S3 e IPFS
🔹│   │   ├── config/           # Configurações (DB, JWT, Blockchain)
🔹│   │   └── utils/            # Classes utilitárias
🔹│   
🔹│   └── test/                 # Testes unitários e de integração
🔹│
🔹├── ormconfig.json            # Configuração do TypeORM
🔹├── package.json              # Dependências do projeto
🔹└── README.md                 # Documentação do projeto
```

---

## ⚙️ **Configuração do Projeto**

### **Pré-requisitos**
- **Node.js (v18+)**  
- **Yarn ou npm**  
- **PostgreSQL**  
- Carteira Ethereum (ex.: MetaMask)
- Ganache (para testes locais)

---

### **Passos para Instalação**

1. **Clone o repositório**  
   ```bash
   git clone https://github.com/andretavares20/nft-music-hub-api.git
   cd nft-music-hub-api
   ```

2. **Configure o banco de dados**  
   Crie um arquivo `.env` com suas configurações:
   ```env
   DATABASE_URL=postgres://usuario:senha@localhost:5432/nftmusicdb
   JWT_SECRET=supersecret
   AWS_ACCESS_KEY_ID=your-aws-access-key
   AWS_SECRET_ACCESS_KEY=your-aws-secret
   ETHEREUM_NODE_URL=https://goerli.infura.io/v3/your-infura-key
   IPFS_GATEWAY_URL=https://gateway.pinata.cloud
   ```

3. **Instale as dependências**
   ```bash
   yarn install
   ```

4. **Execute as migrações do banco**
   ```bash
   yarn typeorm migration:run
   ```

5. **Inicie o servidor**
   ```bash
   yarn start:dev
   ```

6. **Acesse a API:**  
   - Base URL: [http://localhost:3000](http://localhost:3000)  
   - Documentação Swagger: [http://localhost:3000/docs](http://localhost:3000/docs)

---

## 🔗 **Endpoints Principais**

| **Método** | **Rota**             | **Descrição**                       |
|------------|----------------------|-------------------------------------|
| `POST`     | `/api/artistas`      | Cadastrar um novo artista.          |
| `POST`     | `/api/nfts`          | Criar um novo NFT.                  |
| `GET`      | `/api/nfts`          | Listar NFTs disponíveis.            |
| `GET`      | `/api/nfts/:id`      | Detalhar um NFT específico.         |
| `POST`     | `/api/transactions`  | Registrar compra de um NFT.         |
| `GET`      | `/api/dashboard`     | Estatísticas de vendas do artista.  |

---

## 💪 **Como Contribuir**

1. **Faça um fork** do repositório.  
2. **Crie uma branch** para sua feature ou correção:  
   ```bash
   git checkout -b minha-feature
   ```
3. Adicione suas alterações:  
   ```bash
   git add .
   git commit -m "Adicionei nova funcionalidade X"
   ```
4. Envie suas alterações:  
   ```bash
   git push origin minha-feature
   ```
5. Abra um **Pull Request** no repositório principal.

---

## 📃 **Licença**

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
- Email: [andre.tavares@gmail.com](mailto:andre.tavares@gmail.com)

---

## 🎉 **Agradecimentos**

Agradecemos a todos os colaboradores, artistas e apoiadores que fazem parte do desenvolvimento do **NFT Music Hub**.  
Este projeto visa revolucionar o mercado da música com o poder da **blockchain** e dos **NFTs**. 🚀🎶  
