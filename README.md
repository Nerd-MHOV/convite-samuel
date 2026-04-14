# 🐼 Chá do Samuel - Convite Interativo 🎋

Um convite digital super interativo e animado para o chá de bebê do Samuel, com tema de pandas e bambus!

## ✨ Funcionalidades

### 🎨 Design e Animações
- **Panda interativo** com olhos que seguem o cursor
- **Pandas decorativos espalhados** por todo o site com animações únicas
- **Partículas de folhas de bambu** flutuando pelo site
- **Efeito confete** ao carregar a página
- **Animações suaves** com parallax scroll
- **Caixa de presente animada** com abertura interativa
- **Countdown em tempo real** até o evento
- **Música de fundo** com controle de play/pause
- **Loading screen** animado com panda
- **Imagens de pandas fofos** com efeitos hover e flutuação

### 📱 Responsividade
- Design otimizado para **mobile, tablet e desktop**
- Touch-friendly para dispositivos móveis
- Animações adaptativas para melhor performance

### 🔗 Personalização via URL
O convite pode ser personalizado através de parâmetros na URL:

```
index.html?nome=Maria&presente=Carrinho
```

**Parâmetros disponíveis:**
- `nome`: Nome do convidado (personaliza a saudação)
- `presente`: Sugestão de presente específica

### 🎯 Seções do Site

1. **Hero Section**
   - Panda animado 3D com interação
   - Título com efeito shimmer
   - Bambus com efeito parallax

2. **Mensagem de Boas-vindas**
   - Saudação personalizada com nome do convidado
   - Texto emotivo sobre a chegada do bebê

3. **Countdown**
   - Contagem regressiva em tempo real
   - Dias, horas, minutos e segundos
   - Design em cards interativos

4. **Informações do Evento**
   - Data e hora destacadas
   - Badge animado com pulsação

5. **Localização**
   - Mapa interativo do Google Maps
   - Endereço completo
   - Botão para abrir no GPS

6. **Sugestão de Presentes**
   - Caixa de presente animada
   - Clique para abrir e ver sparkles
   - Presente personalizado via URL

7. **Confirmação de Presença**
   - Botão direto para WhatsApp
   - Mensagem pré-formatada com nome do convidado
   - Design destacado

## 🚀 Como Usar

### Instalação Básica

1. **Clone ou baixe** os arquivos:
   - `index.html`
   - `style.css`
   - `script.js`

2. **Abra o arquivo** `index.html` no navegador

### Personalização

#### 1. Alterar Número do WhatsApp

No arquivo `script.js`, linha 37, altere o número:

```javascript
const phoneNumber = '5511999999999'; // Coloque seu número aqui
```

Formato: código do país + DDD + número (sem espaços ou caracteres especiais)

#### 2. Alterar Data do Evento

No arquivo `script.js`, linha 43:

```javascript
const eventDate = new Date('2026-05-30T16:00:00').getTime();
```

Formato: `AAAA-MM-DDTHH:MM:SS`

#### 3. Alterar Endereço no Mapa

No arquivo `index.html`, procure pelo iframe do Google Maps (linha ~187) e substitua pela URL do seu endereço:

1. Acesse [Google Maps](https://www.google.com/maps)
2. Pesquise pelo endereço
3. Clique em "Compartilhar" > "Incorporar um mapa"
4. Copie o código e substitua

#### 4. Alterar Música de Fundo

No arquivo `index.html`, linha 22, substitua a URL da música:

```html
<source src="SUA_MUSICA_AQUI.mp3" type="audio/mpeg">
```

**Dica:** Use músicas de sites gratuitos como [Pixabay](https://pixabay.com/music/) ou [Free Music Archive](https://freemusicarchive.org/)

#### 5. Personalizar Cores

No arquivo `style.css`, no início (`:root`), você pode alterar as cores:

```css
:root {
    --green-primary: #7FB069;  /* Verde principal */
    --green-dark: #4A7C3F;     /* Verde escuro */
    --beige: #F5F1E8;          /* Bege */
    --brown: #6B4423;          /* Marrom */
    --pink: #FFD7E5;           /* Rosa das bochechas */
}
```

## 🌐 Compartilhamento

### URLs Personalizadas para Convidados

Crie links únicos para cada convidado:

```
https://seusite.com/index.html?nome=João&presente=Kit%20de%20Fraldas
https://seusite.com/index.html?nome=Maria&presente=Roupinhas
https://seusite.com/index.html?nome=Pedro&presente=Mamadeiras
```

**Dica:** Use `%20` para espaços no presente

### Hospedagem Gratuita

Você pode hospedar gratuitamente em:

1. **GitHub Pages**
   - Crie um repositório no GitHub
   - Faça upload dos arquivos
   - Ative GitHub Pages nas configurações
   - Seu site estará em: `https://seuusuario.github.io/nome-do-repo`

2. **Netlify**
   - Arraste a pasta para [Netlify Drop](https://app.netlify.com/drop)
   - Receba um link instantâneo

3. **Vercel**
   - Faça upload em [Vercel](https://vercel.com)
   - Deploy automático

## 🎮 Easter Eggs e Interações

- **Clique 5 vezes no panda** para vê-lo dançar
- **Passe o mouse** sobre o panda para ver seus olhos seguindo
- **Clique na caixa de presente** para ver o efeito de abertura
- **Scroll suave** com efeito parallax nos bambus
- **Hover nos botões** para ver animações

## 📱 Compatibilidade

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera
- ✅ Mobile browsers (iOS Safari, Chrome Mobile, Samsung Internet)

## ⚡ Performance

- Animações otimizadas com GPU acceleration
- Particles system leve e eficiente
- Lazy loading para recursos
- CSS minificável para produção
- JavaScript vanilla (sem dependências externas)

## 🛠️ Tecnologias Utilizadas

- **HTML5** semântico
- **CSS3** com animações avançadas
- **JavaScript ES6+** vanilla
- **Canvas API** para partículas
- **Google Maps API** para localização
- **Web Animations API** para efeitos

## 📋 Checklist de Personalização

Antes de enviar o convite, verifique:

- [ ] Número do WhatsApp atualizado
- [ ] Data e hora do evento corretas
- [ ] Endereço no mapa atualizado
- [ ] Link do endereço funcionando
- [ ] Música de fundo (opcional)
- [ ] Testado em dispositivo móvel
- [ ] URLs personalizadas criadas
- [ ] Site hospedado online

## 🎨 Estrutura de Arquivos

```
convite/
│
├── index.html          # Estrutura principal do site
├── style.css           # Estilos e animações
├── script.js           # Lógica e interatividade
└── README.md           # Este arquivo
```

## 💡 Dicas Extras

### Para melhor experiência mobile:
- Teste em diferentes tamanhos de tela
- Certifique-se que todos os botões são facilmente clicáveis
- Verifique que as animações não deixam o site lento

### Para compartilhamento:
- Use um encurtador de URL para links mais bonitos
- Crie QR Codes para o convite físico
- Adicione meta tags Open Graph para preview bonito no WhatsApp

### Para impressão:
- Você pode criar QR Codes que apontam para o convite
- Imprima o QR Code em cartões físicos
- Combine convite digital + físico

## 📞 Suporte

Se tiver dúvidas ou problemas:
1. Verifique o console do navegador (F12)
2. Certifique-se que todos os arquivos estão na mesma pasta
3. Teste em modo anônimo para evitar cache

## 🎉 Créditos

Desenvolvido com ❤️ para celebrar a chegada do pequeno Samuel!

**Tema:** Pandas e Bambus 🐼🎋
**Evento:** Chá de Bebê
**Data:** 30 de Maio de 2026, às 16h

---

## 📝 Notas Técnicas

### Estrutura de Animações
- Loading screen: 2 segundos
- Confetti: dispara após loading
- Typewriter do nome: inicia 1 segundo após loading
- Scroll animations: IntersectionObserver API
- Particles: Canvas com requestAnimationFrame

### Performance Tips
- Animações usam `transform` e `opacity` para melhor performance
- Particles limitadas a 30 elementos
- Scroll events throttled
- GPU acceleration ativado com `will-change`

### Acessibilidade
- Contraste adequado de cores
- Texto legível em todos os tamanhos
- Botões com área de toque adequada (mínimo 44x44px)
- Suporte a navegação por teclado

---

**Divirta-se celebrando a chegada do Samuel!** 🎊👶🐼
