# Guia de Contribuição - ClickSocorro

## Histórico de Contribuições

### [Added]
- Adicionado suporte a novos serviços de emergência
- Implementado sistema de ícones com Lucide Icons
- Adicionado modo escuro para melhor conforto visual
- Implementado layout responsivo com container centralizado
- Adicionado logo e favicon para identidade visual

### [Changed]
- Atualizado estrutura HTML para melhor semântica
- Modificado sistema de cores para categorização visual
- Melhorado organização CSS com classes específicas
- Atualizado JavaScript para detecção de dispositivo móvel

### [Fixed]
- Corrigido problema de alinhamento em dispositivos móveis
- Corrigido contraste de texto em modo escuro
- Corrigido bug de cópia de número em desktop
- Corrigido problema de renderização de ícones

## Guia de Boas Práticas

### Padrão de Código

#### HTML
- Use tags semânticas (`header`, `main`, `section`, `nav`)
- Mantenha indentação consistente (4 espaços)
- Use atributos `alt` descritivos em imagens
- Mantenha estrutura hierárquica correta (h1 → h2 → h3)

#### CSS
- Use BEM ou convenção similar para nomes de classes
- Agrupe estilos relacionados com comentários
- Use unidades relativas quando possível (rem, em, %)
- Mantenha ordem lógica: propriedades alfabéticas ou por categoria

#### JavaScript
- Use `const` e `let` em vez de `var`
- Use arrow functions para callbacks
- Adicione comentários para lógica complexa
- Evite funções anônimas longas

### Padrão de Commits

Use o formato conventional commits:

```
<tipo>(<escopo>): <descrição>

[corpo opcional]

[rodapé opcional]
```

**Tipos permitidos:**
- `feat`: Novo recurso
- `fix`: Correção de bug
- `docs`: Alterações na documentação
- `style`: Formatação, ponto e vírgula, etc.
- `refactor`: Refatoração de código
- `test`: Adição de testes
- `chore`: Atualização de ferramentas, configurações

**Exemplos:**
```
feat(emergency): add support for new service number 156
fix(mobile): correct button alignment on small screens
docs(readme): update installation instructions
```

## Regras de Organização

### Nomenclatura de Branches

Use o seguinte padrão para branches:

```
<tipo>/<descrição-curta>
```

**Tipos de branches:**
- `feature/`: Novos recursos
- `bugfix/`: Correções de bugs
- `hotfix/`: Correções urgentes em produção
- `docs/`: Alterações na documentação
- `refactor/`: Refatorações

**Exemplos:**
```
feature/add-emergency-service-156
bugfix/mobile-button-alignment
docs/update-readme
refactor/css-organization
```

### Fluxo de Trabalho

1. **Crie um branch** a partir de `main`
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```

2. **Faça suas alterações** seguindo os padrões de código
   ```bash
   git add .
   git commit -m "feat(scope): descrição da mudança"
   ```

3. **Sincronize com main** antes de abrir PR
   ```bash
   git checkout main
   git pull origin main
   git checkout feature/nova-funcionalidade
   git rebase main
   ```

4. **Push e abra Pull Request**
   ```bash
   git push origin feature/nova-funcionalidade
   ```

### Validações Obrigatórias

Antes de submeter uma Pull Request, certifique-se de:

- [ ] Código segue os padrões de estilo definidos
- [ ] Commits seguem o formato conventional commits
- [ ] Não há console.log() ou código de debug
- [ ] Funciona em pelo menos dois navegadores modernos
- [ ] Funciona em dispositivos móveis (testado em Chrome Mobile ou similar)
- [ ] Documentação atualizada se necessário
- [ ] Sem conflitos com branch main

### Código de Conduta

- Seja respeitoso e construtivo em todas as interações
- Aceite feedback construtivo de forma positiva
- Foze no que é melhor para a comunidade
- Mostre empatia com outros contribuidores

## Processo de Revisão

### Critérios de Aceitação

Uma Pull Request será aceita quando:

1. **Funcionalidade**: O código funciona conforme especificado
2. **Qualidade**: Segue os padrões de código e estilo
3. **Testes**: Testado em múltiplos navegadores e dispositivos
4. **Documentação**: Documentação atualizada se necessário
5. **Performance**: Não degrada performance da aplicação
6. **Acessibilidade**: Mantém ou melhora acessibilidade

### Tempo de Resposta

- Mantenedores irão responder dentro de 48 horas
- Revisões podem levar até 1 semana para serem completadas
- PRs críticos (security fixes) têm prioridade

## Reportando Issues

### Template de Issue

```markdown
## Descrição
Breve descrição do problema ou sugestão

## Passos para Reproduzir
1. Vá para '...'
2. Clique em '....'
3. Role até '....'
4. Veja erro

## Comportamento Esperado
Descrição do comportamento esperado

## Ambiente
- Sistema Operacional: [ex: Windows 10, macOS, iOS]
- Navegador: [ex: Chrome 91, Firefox 90, Safari]
- Versão: [ex: v1.0.0]

## Screenshots
Se aplicável, adicione screenshots para ajudar a explicar

## Contexto Adicional
Qualquer outra informação relevante sobre o problema
```

## Licença de Contribuição

Ao contribuir com o ClickSocorro, você concorda que suas contribuições serão licenciadas sob a Licença MIT, mesma licença do projeto.

## Contato

Para dúvidas sobre contribuição:
- Abra uma Issue no GitHub
- Entre em contato com: Mauricio Spark - Spark Mauricio

---

Obrigado por considerar contribuir com o ClickSocorro! Sua ajuda é fundamental para manter e melhorar este projeto.
