# 💚 VITA: Sistema Inteligente de Gestão de Estoque Hospitalar
O Projeto VITA busca implementar um sistema de gestão de estoque inteligente em hospitais, garantindo disponibilidade e prevenindo desperdícios. Com funcionalidades como controle em tempo real e rastreamento por código de barras, o projeto visa melhorar eficiência operacional, oferecer controle rigoroso e facilitar a integração na rotina dos profissionais de saúde.

### 🎯 Objetivos
- Assegurar que hospitais tenham acesso contínuo a materiais e medicamentos essenciais, evitando escassez.
- Evitar a expiração de medicamentos e materiais, reduzindo desperdícios e otimizando recursos financeiros.
- Melhorar a reposição de estoque, evitando a falta de itens essenciais e proporcionando rápido acesso aos profissionais de saúde.
- Manter um controle preciso sobre o estoque, reduzindo erros manuais e aprimorando a precisão dos registros.
- Integrar facilmente o sistema na rotina dos profissionais de saúde, utilizando a simplicidade do escaneamento de códigos de barras.

### 🩹 Dores que Busca Suprir
- Escassez de Materiais Essenciais.
- Desperdício de Recursos Financeiros.
- Ineficiência na Reposição de Estoque.
- Controle Fragilizado.
- Dificuldade de Rastreamento.
- Falta de Alertas Antecipados.
- Complexidade na Integração ao Fluxo de Trabalho.

## 📑 Projeto Web Development com React e JavaScript
Este projeto de Web Development foi desenvolvido utilizando React e JavaScript, com o auxílio da ferramenta Vite. O objetivo principal do projeto é demonstrar a utilização do localStorage e sessionStorage para o tratamento de dados, incluindo a alocação de usuários e senhas. Utilizamos o método Math para gerar chaves aleatórias para cada cadastro, garantindo que não existam repetições das mesmas keys.

Alguns pontos chave deste projeto incluem:

- LocalStorage e SessionStorage: Utilizados para armazenar dados de forma persistente e temporária, respectivamente. Eles são fundamentais para o armazenamento seguro de informações como usuários e senhas.

- Hooks em React: Foram utilizados hooks como useState e useEffect para a transição e gerenciamento de dados entre os componentes, garantindo uma experiência de usuário fluente e interativa.

- React Router DOM: Implementado para facilitar as transições entre páginas, oferecendo uma navegação suave e amigável dentro do aplicativo.

- Styled Components: Foram utilizados para estilizar alguns componentes do projeto, proporcionando uma melhor organização e manutenção do código.

### 🌐 Tecnologias Utilizadas
- React: Biblioteca JavaScript para a criação de interfaces de usuário interativas.

- JavaScript: Linguagem de programação fundamental para o desenvolvimento web.

- Vite: Ferramenta de construção rápida para projetos web modernos.

- React Router DOM: Biblioteca para controle de navegação em aplicativos React.

- Styled Components: Biblioteca para estilização de componentes em React.

- React Bootstrap: Uma biblioteca de componentes Bootstrap para React, facilitando o desenvolvimento responsivo.

- JSON Server: Um servidor JSON local utilizado para fornecer dados para a aplicação.

## Funcionalidades Principais
- Cadastro de Usuários: Os usuários podem se cadastrar no EcoChoice, fornecendo informações essenciais para o projeto.

- API Local: A aplicação é alimentada por uma API local que armazena os dados dos usuários cadastrados no arquivo clients.json.

- Área de Admin: Uma seção específica para administradores, onde é possível visualizar os dados dos usuários cadastrados.

### Credenciais de Admin:
Usuário: admin
Senha: 12345

## 📂 Deploy do Projeto com Vercel
Para acessar e visualizar a versão mais recente do projeto EcoChoice, você pode visitar a aplicação hospedada na plataforma Vercel. A Vercel é uma plataforma de deploy que oferece escalabilidade e desempenho para garantir uma ótima experiência ao usuário.

### Para acessar o projeto, https://ecochoice.netlify.app

## 🤝 Integrantes do Grupo
- Matheus Cavasini - 97722
- Allan Von Ivanov - 98705
- Cassio Yonetsuka - 99678
- Guilherme Brazioli - 98237
- Lourenzo Ramos - 99951

## ⚙️ Executando o Projeto
Siga os passos abaixo para executar o projeto em sua máquina local:

- Clone este repositório em sua máquina: git clone https://github.com/Cavasini/EcoChoice-FrontEnd
- Navegue até o diretório do projeto: cd EcoChoice-FrontEnd
- Instale as dependências: npm install ou yarn install

### Iniciando o Projeto
Existem duas maneiras de iniciar o projeto, dependendo das suas necessidades.

#### Primeiro método

- Iniciar o Vite (Frontend): npm run dev
- Acesse http://localhost:5173/ para visualizar a interface do EcoChoice.

- Iniciar o JSON Local Server (Backend):npm run backend
- Os dados da API estarão disponíveis em http://localhost:5000/clients.

#### Segundo método

- Iniciar Ambos Simultaneamente: npm start
- Utilizando o Concurrently, este comando iniciará tanto o servidor Vite quanto o JSON Server ao mesmo tempo.


- Agora você pode acessar o aplicativo em http://localhost:5173 e explorar as funcionalidades implementadas.
