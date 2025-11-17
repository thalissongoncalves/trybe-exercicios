# 📐 Exercício – Layout e Box Model no meu Portfólio Web

## 🧩 Descrição

Neste exercício, a proposta foi **estruturar o Portfólio Web utilizando princípios de layout e Box Model**, organizando visualmente a página de forma mais profissional.  
O objetivo foi separar o conteúdo em blocos, ajustar espaçamentos e posicionamentos, e mover o CSS para um arquivo externo para deixar o projeto mais organizado.

---

## 🚀 Etapas Realizadas

### 🔧 1. Preparação do ambiente
- Acessei o diretório do portfólio criado nos exercícios anteriores.
- Localizei a tag `<style></style>` que continha todo o CSS interno.
- Removi esse conteúdo da tag e transferi tudo para um novo arquivo chamado **style.css**.
- ImporteI o arquivo CSS no `index.html` usando a tag `<link>`.
- Após confirmar o funcionamento, removi totalmente a tag `<style>` do HTML.
- Continuei usando o **Live Server** para acompanhar o resultado em tempo real.

---

## 🎨 2. Implementação do Layout e do Box Model

Para aplicar o layout e o box model, fiz as seguintes alterações:

### 📦 Organização em blocos
- Agrupei:
  - meu **nome**,
  - minha **foto**,
  - e minha **descrição pessoal**  
  em seções separadas, cada uma representada por **blocos visuais**.

### 🖼️ Foto e descrição lado a lado
- Posicionei a **foto** ao lado da **descrição**, simulando um layout de apresentação pessoal mais moderno.

### 🧭 Centralização do nome
- Configurei o nome como elemento centralizado na página para criar destaque visual.

### 🎨 Estilos específicos
- Apliquei um **background diferente** na área onde fica a foto, destacando essa seção das demais.
- Ajustei **padding** e **margin** nos lugares necessários para criar respiro visual entre os blocos.
- Estilizei **somente os itens ímpares** da lista de habilidades, usando seletores adequados.

---

## 🧠 3. Aprendizados

Com este exercício, pude reforçar:

- Como organizar layouts simples usando propriedades do **Box Model**.
- Como posicionar elementos lado a lado usando blocos.
- Importância do espaçamento (margin/padding) para criar harmonia visual.
- Como mover estilos para um arquivo CSS externo e organizar melhor a estrutura do projeto.
- Como manipular estilos no navegador usando a ferramenta de inspeção.
