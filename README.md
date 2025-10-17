# Igreja de Deus Fortalecendo Famílias

## Como testar o site

O projeto é um site estático composto por `index.html`, `styles.css`, `script.js` e a pasta `assets`. Não há dependências de Node.js ou pacotes externos, portanto **não é necessário executar `npm install` nem `npm run dev`**.

### Opção 1 — Abrir o arquivo diretamente
1. Baixe ou clone o repositório para a sua máquina.
2. Navegue até a pasta do projeto.
3. Clique duas vezes em `index.html` ou arraste o arquivo para o seu navegador (Chrome, Edge, Firefox, etc.).
4. O site será renderizado imediatamente; verifique se todas as seções e animações são exibidas corretamente.

### Opção 2 — Usar um servidor local simples (recomendado)
1. Abra um terminal na raiz do projeto.
2. Execute o comando abaixo para iniciar um servidor HTTP simples usando Python:
   ```bash
   python3 -m http.server 8000
   ```
3. Abra o navegador e acesse `http://localhost:8000/index.html`.
4. Navegue pelas seções "Início", "Quem Somos", "Nossos Ministérios", "Palavra Viva", "Próximos Eventos" e "Fale Conosco".
5. Redimensione a janela ou use o modo responsivo das ferramentas de desenvolvedor para conferir o comportamento em diferentes tamanhos de tela.
6. Interaja com os botões dourados, links e animações para garantir que os efeitos estejam funcionando.
7. Observe o console do navegador (F12) para confirmar que não há erros de carregamento.

### Checklist rápido de validação
- Logotipo em destaque no topo e cores dourado/preto carregando corretamente.
- Tipografia artística nos títulos e fonte moderna nos textos.
- Transições suaves de seções e animações discretas.
- Conteúdo fictício exibido conforme descrito (mensagens, eventos e formulário de contato).

Seguindo qualquer uma das opções acima você conseguirá validar o site por completo.
