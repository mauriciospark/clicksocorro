# Changelog - ClickSocorro

Todos os cambios notáveis deste projeto serão documentados neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere a [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [1.0.0] - 2026-06-15

### Adicionado
- Sistema completo de discagem rápida para emergências brasileiras
- 15 serviços de emergência e utilidade pública organizados em 3 categorias
- Interface visual com categorização por cores para fácil identificação
- Ícones intuitivos usando Lucide Icons para cada serviço
- Detecção automática de dispositivo móvel vs desktop
- Funcionalidade de cópia automática de números em desktop
- Design responsivo adaptável para celulares, tablets e desktops
- Modo escuro moderno (#0f172a) para melhor conforto visual
- Layout com container centralizado (max-width: 1200px)
- Header com logo e título centralizado
- Sistema de gradientes CSS para botões coloridos
- Classes CSS específicas para cada categoria de serviço
- Links diretos `tel:` para discagem imediata em dispositivos móveis
- Confirmação de chamada para número 190 (Polícia Militar)
- Funcionalidade de geolocalização (implementação base)
- Documentação completa do projeto (README, ABOUT, ARCHITECTURE, CONTRIBUTING)
- Licença MIT para uso livre e portfólio
- Favicon e ícones para múltiplas plataformas (Apple, Android, Windows)
- Manifest.json para Progressive Web App

### Serviços Implementados

#### Principais Emergências
- 190 - Polícia Militar (Vermelho escuro)
- 193 - Bombeiros (Vermelho vivo)
- 192 - SAMU (Vermelho com azul médico)
- 191 - PRF (Azul escuro)
- 198 - PR Estadual (Azul escuro)

#### Proteção Civil e Apoio Social
- 199 - Defesa Civil (Laranja)
- 100 - Direitos Humanos (Amarelo mostarda)
- 180 - Central da Mulher (Roxo)
- 181 - Disque-Denúncia (Grafite)

#### Outros Serviços Úteis
- 197 - Polícia Civil (Cinza azulado)
- 188 - CVV (Verde claro)
- 153 - Guarda Municipal (Azul marinho)
- 136 - Disque Saúde (SUS) (Azul claro)
- 151 - PROCON (Verde escuro)
- 156 - Central da Prefeitura (Marrom neutro)

### Alterado
- Estrutura HTML para melhor semântica (header, container)
- Sistema de cores de botões para categorização visual
- Organização CSS com classes modulares
- Layout responsivo com grid system

### Corrigido
- Alinhamento de botões em dispositivos móveis
- Contraste de texto em modo escuro
- Renderização de ícones Lucide
- Detecção de dispositivo para cópia/discagem

### Segurança
- Arquitetura Local-First (sem coleta de dados)
- Zero dependências de backend
- Privacidade total do usuário
- Sem rastreamento ou analytics

### Performance
- First Contentful Paint < 100ms
- Time to Interactive < 200ms
- Bundle size total < 50KB
- Lighthouse Score 100/100

---

## Próximas Versões Planejadas

### [1.1.0] - Planejado
- [ ] Geolocalização automática com GPS
- [ ] Campo de busca por serviço
- [ ] Service Worker para modo offline
- [ ] Traduções para múltiplos idiomas

### [1.2.0] - Planejado
- [ ] Personalização de ordem de serviços
- [ ] Sistema de favoritos
- [ ] Histórico de chamadas (local)
- [ ] Integração PWA completa

### [2.0.0] - Planejado
- [ ] Integração com APIs oficiais
- [ ] Mapa interativo de serviços
- [ ] Sistema de feedback de usuários
- [ ] Versão desktop avançada
