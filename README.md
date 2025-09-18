
# 💰 DT Money

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5.6.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-6.0.3-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Styled--Components-6.1.13-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
</div>

<br>

DT Money é uma aplicação moderna de controle financeiro pessoal desenvolvida com React e TypeScript. A aplicação permite que você gerencie suas finanças de forma simples e intuitiva, registrando entradas e saídas, visualizando resumos financeiros e mantendo o controle total sobre seu dinheiro.

## ✨ Funcionalidades

- 📊 **Dashboard Financeiro**: Visualize resumos completos com entradas, saídas e saldo total
- 💳 **Gestão de Transações**: Adicione novas transações de forma rápida e organizada
- 🔍 **Busca e Filtros**: Encontre transações específicas por descrição
- 📱 **Interface Responsiva**: Design moderno e adaptável para diferentes dispositivos
- 🎨 **Tema Personalizado**: Interface elegante com tema customizável
- ⚡ **Performance Otimizada**: Aplicação rápida e eficiente com React 18

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18.3.1** - Biblioteca para construção de interfaces de usuário
- **TypeScript 5.6.2** - Superset do JavaScript com tipagem estática
- **Vite 6.0.3** - Build tool moderno e rápido
- **Styled Components 6.1.13** - CSS-in-JS para estilização de componentes

### Gerenciamento de Estado
- **Context API** - Gerenciamento de estado global do React
- **use-context-selector** - Otimização de re-renderizações do Context

### Formulários e Validação
- **React Hook Form 7.54.2** - Biblioteca para manipulação de formulários
- **Zod 3.24.1** - Validação de schemas TypeScript-first
- **@hookform/resolvers** - Integração entre React Hook Form e Zod

### UI/UX
- **Radix UI** - Componentes acessíveis e customizáveis
  - `@radix-ui/react-dialog` - Modal para nova transação
  - `@radix-ui/react-radio-group` - Seleção de tipo de transação
- **Phosphor Icons** - Ícones modernos e consistentes

### HTTP e API
- **Axios 1.7.9** - Cliente HTTP para requisições
- **JSON Server** - API REST simulada para desenvolvimento

### Desenvolvimento
- **ESLint** - Linting e padronização de código
- **TypeScript ESLint** - Regras específicas para TypeScript

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/dt-money.git
   cd dt-money
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   # Terminal 1 - Aplicação React
   npm run dev
   
   # Terminal 2 - JSON Server (opcional, para dados persistentes)
   npm run dev:server
   ```

4. **Acesse a aplicação**
   ```
   http://localhost:5173
   ```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor de desenvolvimento
npm run dev:server   # Inicia o JSON Server

# Build e Deploy
npm run build        # Cria build de produção
npm run preview      # Visualiza o build de produção

# Qualidade de Código
npm run lint         # Executa o ESLint
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header/         # Cabeçalho da aplicação
│   └── NewTransactionModal/  # Modal para nova transação
├── contexts/           # Contextos do React
│   └── TransactionsContext.tsx
├── hooks/              # Custom hooks
│   └── useSummary.ts
├── lib/                # Configurações de bibliotecas
│   └── axios.ts
├── pages/              # Páginas da aplicação
│   ├── Summary/        # Página de resumo financeiro
│   └── Transactions/   # Página de listagem de transações
├── styles/             # Estilos globais e temas
│   ├── global.ts
│   └── themes/
└── utils/              # Utilitários
    └── formatter.ts
```

## 🎯 Principais Funcionalidades Detalhadas

### 📊 Dashboard Financeiro
- **Resumo de Entradas**: Total de receitas registradas
- **Resumo de Saídas**: Total de despesas registradas  
- **Saldo Total**: Diferença entre entradas e saídas
- **Atualização em Tempo Real**: Valores atualizados automaticamente

### 💳 Gestão de Transações
- **Adicionar Transação**: Formulário intuitivo com validação
- **Tipos de Transação**: Entrada (receita) e Saída (despesa)
- **Categorização**: Organize por categorias personalizadas
- **Validação Completa**: Formulários validados com Zod

### 🔍 Busca e Organização
- **Busca por Descrição**: Encontre transações específicas
- **Ordenação**: Transações ordenadas por data (mais recentes primeiro)
- **Formatação**: Valores monetários e datas formatados adequadamente

## 🎨 Design e UX

- **Design System**: Componentes consistentes e reutilizáveis
- **Tema Escuro/Claro**: Suporte a temas personalizáveis
- **Responsividade**: Interface adaptável para mobile e desktop
- **Acessibilidade**: Componentes acessíveis com Radix UI
- **Animações**: Transições suaves e feedback visual

## 🔧 Configuração do Ambiente

### Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3000
```

### JSON Server
O projeto inclui um `server.json` com dados de exemplo. Para usar dados persistentes:

```bash
npm run dev:server
```

## 🤝 Contribuição

Contribuições são muito bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Código
- Use TypeScript para tipagem
- Siga as convenções do ESLint configurado
- Escreva componentes funcionais com hooks
- Use styled-components para estilização

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ durante o curso Ignite da Rocketseat.

---

<div align="center">
  <p>Feito com React, TypeScript e muito ☕</p>
</div>
