🎵 NFT Music Hub API
Descrição do Projeto
O NFT Music Hub é uma plataforma que permite que artistas independentes criem, vendam e gerenciem NFTs de músicas e experiências exclusivas diretamente com seus fãs. Este repositório contém a API back-end desenvolvida em Spring Boot, responsável por gerenciar artistas, NFTs, transações e integração com blockchain.

🚀 Funcionalidades
Cadastro de Artistas: Permite que músicos independentes se cadastrem na plataforma.
Criação de NFTs: Upload de músicas, imagens ou conteúdos exclusivos, transformando-os em NFTs.
Marketplace: Listagem de NFTs disponíveis para venda.
Compra de NFTs: Registro seguro de transações com integração blockchain.
Dashboard do Artista: Acompanhamento de vendas e receitas.
Autenticação JWT: Proteção e controle de acesso aos recursos.
🛠️ Tecnologias Utilizadas
Linguagem: Java 17
Framework: Spring Boot 3.x
Banco de Dados: PostgreSQL
Blockchain: Ethereum (Testnet Goerli) + Solidity
Armazenamento: IPFS
Autenticação: JWT (JSON Web Token)
Documentação: Swagger/OpenAPI
📂 Estrutura do Projeto
bash
Copiar código
nft-music-hub-api/
│
├── src/
│   ├── main/
│   │   ├── java/com/nftmusichub/api/
│   │   │   ├── controllers/      # Endpoints da API
│   │   │   ├── models/           # Entidades do banco de dados
│   │   │   ├── repositories/     # Interfaces de persistência JPA
│   │   │   ├── services/         # Lógica de negócios
│   │   │   ├── config/           # Configurações do projeto (DB, JWT, blockchain)
│   │   │   └── utils/            # Classes utilitárias
│   │   ├── resources/
│   │   │   ├── application.yml   # Configurações do ambiente
│   │   │   └── schema.sql        # Script inicial do banco de dados
│   └── test/                     # Testes unitários e de integração
│
├── pom.xml                       # Dependências do Maven
└── README.md                     # Documentação do projeto
⚙️ Configuração do Projeto
Pré-requisitos
Antes de iniciar o projeto, você precisará ter instalado:

Java 17
Maven
PostgreSQL
Carteira Ethereum para testes (ex.: MetaMask)
Passos para Configuração
Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/nft-music-hub-api.git
cd nft-music-hub-api
Configure o banco de dados: Crie um banco de dados no PostgreSQL e atualize as configurações no arquivo application.yml:

yaml
Copiar código
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/nftmusicdb
    username: seu-usuario
    password: sua-senha
  jpa:
    hibernate:
      ddl-auto: update
Execute a aplicação:

bash
Copiar código
mvn spring-boot:run
Acesse a API:

Base URL: http://localhost:8080
Documentação Swagger: http://localhost:8080/swagger-ui.html
🔗 Endpoints Principais
Método	Rota	Descrição
POST	/api/artistas	Cadastrar um novo artista.
POST	/api/nfts	Criar um novo NFT.
GET	/api/nfts	Listar NFTs disponíveis.
POST	/api/transacoes	Registrar uma transação de compra.
GET	/api/dashboard	Dados de vendas do artista.
🧪 Testes
Para rodar os testes unitários, utilize:

bash
Copiar código
mvn test
🤝 Contribuindo
Contribuições são bem-vindas! Para contribuir:

Faça um fork do projeto.
Crie uma branch para sua feature:
bash
Copiar código
git checkout -b minha-feature
Faça um commit claro:
bash
Copiar código
git commit -m "Adicionei funcionalidade X"
Envie um pull request.
📜 Licença
Este projeto é licenciado sob a MIT License.

💡 Próximas Features
Leilão de NFTs.
Repartição automática de royalties.
Gamificação para fãs e colecionadores.
