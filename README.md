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

