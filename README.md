# ClickSocorro — (Linhagem SPARK)

## Descrição

ClickSocorro é uma aplicação web de discagem rápida de emergência projetada para facilitar o acesso imediato aos principais serviços de emergência e utilidade pública do Brasil. Com uma interface intuitiva e visualmente organizada, o sistema resolve o problema de memorização e acesso rápido aos números de emergência em momentos críticos, permitindo que usuários discar para serviços como Polícia Militar, Bombeiros, SAMU, Defesa Civil e muitos outros com um único clique.

## Stack

### Frontend
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização moderna com gradientes e design responsivo
- **JavaScript (Vanilla)**: Lógica de interação e detecção de dispositivo
- **Lucide Icons**: Biblioteca de ícones moderna e leve

### Ferramentas e Bibliotecas
- **Lucide Icons**: Ícones SVG modernos para interface visual
- **Clipboard API**: Funcionalidade de copiar números em desktop
- **Geolocation API**: Recursos de localização (implementação futura)

## Funcionalidades

- **Discagem Rápida**: Links diretos `tel:` para discagem imediata em dispositivos móveis
- **Categorização Visual**: Botões coloridos por categoria (emergências, proteção civil, serviços úteis)
- **Ícones Intuitivos**: Cada serviço possui um ícone representativo para fácil identificação
- **Cópia Automática**: Em desktop, os números são copiados automaticamente para a área de transferência
- **Design Responsivo**: Interface adaptável para celulares, tablets e desktops
- **Modo Escuro**: Tema escuro moderno para melhor conforto visual
- **Organização por Categoria**: Serviços divididos em três categorias principais:
  - 🚨 Principais Emergências (PM, Bombeiros, SAMU, PRF, PR Estadual)
  - 🛡️ Proteção Civil e Apoio Social (Defesa Civil, Direitos Humanos, Central da Mulher, Disque-Denúncia)
  - 🛠️ Outros Serviços Úteis (Polícia Civil, CVV, Guarda Municipal, Disque Saúde, PROCON, Central da Prefeitura)

## Como Rodar

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, para desenvolvimento)

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/mauriciospark/clicksocorro.git
   cd clicksocorro
   ```

2. **Abra o projeto**
   - Opção 1: Abra o arquivo `index.html` diretamente no navegador
   - Opção 2: Use um servidor local como Live Server (VS Code) ou Python:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     ```

3. **Acesse a aplicação**
   - Se estiver usando servidor local: `http://localhost:8000`
   - Se abriu diretamente: O arquivo estará disponível no navegador

### Estrutura de Arquivos

```
clicksocorro/
├── index.html          # Página principal
├── css/
│   └── style.css      # Estilos da aplicação
├── js/
│   └── script.js      # Lógica JavaScript
├── favicon/
│   └── logo.jpeg      # Logo da aplicação
└── docs/              # Documentação do projeto
```

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.

## Contato

Desenvolvido por Mauricio Spark - Spark Mauricio
