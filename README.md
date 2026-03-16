# RPG&Coffee - Site Institucional

Um site institucional moderno e responsivo para a cafeteria RPG&Coffee, especializada em café artesanal, encontros literários e RPG.

## 🎯 Sobre o Projeto

O RPG&Coffee é uma cafeteria temática que combina a paixão por café de qualidade com a cultura geek. O site foi desenvolvido para apresentar todas as atividades, produtos e eventos da cafeteria de forma atrativa e moderna.

## ✨ Funcionalidades

### 🏠 Seções Principais
- **Hero Section**: Apresentação impactante com animações
- **Sobre**: História e missão da cafeteria
- **Atividades**: Encontros literários, RPG Nights, Board Game Café, Open Mic Poetry
- **Produtos**: Galeria de produtos com preços
- **Eventos**: Eventos passados com estatísticas
- **História**: Timeline interativa da cafeteria
- **Avaliações**: Reviews do Google com sistema de estrelas
- **Contato**: Formulário de contato e informações

### 🎨 Design Features
- Design responsivo para todos os dispositivos
- Animações suaves e modernas
- Paleta de cores temática (tons de marrom/café)
- Tipografia moderna (Poppins)
- Efeitos hover interativos
- Parallax scrolling
- Menu mobile hamburger

### ⚡ Funcionalidades Interativas
- Menu mobile responsivo
- Smooth scroll para navegação
- Animações baseadas em Intersection Observer
- Formulário de contato funcional
- Botões flutuantes para WhatsApp e Instagram
- Contador animado de avaliações
- Efeito de digitação no título principal
- Scroll to top button
- Easter egg (Konami Code)

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com Flexbox e Grid
- **JavaScript**: Interatividade e animações
- **Font Awesome**: Ícones
- **Google Fonts**: Tipografia Poppins
- **Unsplash**: Imagens de alta qualidade

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Como Executar

1. Clone ou baixe os arquivos do projeto
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Ou use um servidor local:
   ```bash
   # Com Python
   python -m http.server 8000
   
   # Com Node.js
   npx serve .
   
   # Com PHP
   php -S localhost:8000
   ```

## 📁 Estrutura do Projeto

```
RPG-Coffee/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript interativo
└── README.md           # Documentação
```

## 🎨 Paleta de Cores

- **Primária**: #8B4513 (Saddle Brown)
- **Secundária**: #A0522D (Sienna)
- **Acento**: #FFD700 (Gold - para estrelas)
- **Texto**: #333333 (Dark Gray)
- **Texto Secundário**: #666666 (Medium Gray)
- **Fundo**: #F5F5F5 (Light Gray)

## 📋 Seções Detalhadas

### Hero Section
- Título animado com efeito de digitação
- Subtítulo descritivo
- Botões de call-to-action
- Ícone de café animado com parallax

### Atividades
- **Encontros Literários**: Clube do livro mensal
- **RPG Nights**: Sessões semanais de RPG
- **Board Game Café**: Biblioteca de jogos
- **Open Mic Poetry**: Noite de poesia

### Produtos
- Café Expresso
- Cappuccino Clássico
- Latte Art
- Café Gelado
- Bolo de Chocolate
- Sanduíche Artesanal

### Eventos Passados
- Festival de Literatura Fantástica
- RPG Tournament
- Noite de Poesia Geek

### Timeline
- 2020: O Início
- 2021: Primeiro Encontro Literário
- 2022: Expansão
- 2023: Reconhecimento
- 2024: Futuro

## 🔧 Personalização

### Alterar Cores
Edite as variáveis CSS no arquivo `styles.css`:
```css
:root {
    --primary-color: #8B4513;
    --secondary-color: #A0522D;
    --accent-color: #FFD700;
}
```

### Adicionar Produtos
Adicione novos cards na seção de produtos:
```html
<div class="product-card">
    <img src="caminho-da-imagem.jpg" alt="Nome do Produto">
    <h3>Nome do Produto</h3>
    <p>Descrição do produto</p>
    <span class="price">R$ XX,XX</span>
</div>
```

### Modificar Atividades
Edite os cards de atividades na seção correspondente:
```html
<div class="activity-card">
    <div class="activity-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3>Nome da Atividade</h3>
    <p>Descrição da atividade</p>
    <span class="activity-time">Horário da atividade</span>
</div>
```

## 📞 Informações de Contato

- **Endereço**: Rua das Flores, 123 - Centro, São Paulo, SP
- **Telefone**: (11) 99999-9999
- **WhatsApp**: [Link direto](https://wa.me/5511999999999)
- **Instagram**: [@rpgcoffee](https://www.instagram.com/rpgecoffee/)
- **Email**: contato@rpgcoffee.com

## 🕒 Horário de Funcionamento

- **Segunda a Sexta**: 8h às 22h
- **Sábado e Domingo**: 10h às 23h

## 🎮 Easter Egg

Tente o Konami Code no site: ↑↑↓↓←→←→BA

## 📈 Performance

O site foi otimizado para:
- Carregamento rápido
- SEO básico
- Acessibilidade
- Compatibilidade cross-browser

## 🔮 Funcionalidades Futuras

- [ ] Sistema de reservas online
- [ ] Blog integrado
- [ ] Galeria de fotos dos eventos
- [ ] Sistema de newsletter
- [ ] Integração com redes sociais
- [ ] Chat online
- [ ] Sistema de pontos/fidelidade

## 📄 Licença

Este projeto é de uso livre para fins educacionais e comerciais.

## 👨‍💻 Desenvolvimento

Desenvolvido com ❤️ para a comunidade geek e amantes de café.

---

**RPG&Coffee** - Onde café, literatura e RPG se encontram para criar experiências únicas! ☕📚🎲 