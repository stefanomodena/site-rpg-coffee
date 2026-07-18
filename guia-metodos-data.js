/**
 * Dados reutilizáveis dos métodos — calculadora, quiz e comparação.
 */
window.COFFEE_METHODS = {
  v60: {
    id: 'v60',
    name: 'V60',
    ratio: 16,
    temp: 92,
    time: '2:30 – 3:00',
    grind: 'Média-fina',
    bloomRatio: 2,
    bloomTime: 30,
    pours: 2,
    filter: 'Papel cônico',
    difficulty: 'Média',
    body: 3, acidity: 5, sweetness: 4, aroma: 5, complexity: 5,
    ease: 3, clean: 4
  },
  chemex: {
    id: 'chemex',
    name: 'Chemex',
    ratio: 16.5,
    temp: 94,
    time: '4:00 – 5:00',
    grind: 'Média-grossa',
    bloomRatio: 2,
    bloomTime: 45,
    pours: 2,
    filter: 'Papel espesso',
    difficulty: 'Média',
    body: 2, acidity: 4, sweetness: 4, aroma: 5, complexity: 4,
    ease: 3, clean: 3
  },
  'prensa-francesa': {
    id: 'prensa-francesa',
    name: 'Prensa Francesa',
    ratio: 15,
    temp: 93,
    time: '4:00',
    grind: 'Grossa',
    bloomRatio: 0,
    bloomTime: 0,
    pours: 1,
    filter: 'Metal (ímersion)',
    difficulty: 'Fácil',
    body: 5, acidity: 2, sweetness: 3, aroma: 3, complexity: 3,
    ease: 5, clean: 3
  },
  aeropress: {
    id: 'aeropress',
    name: 'AeroPress',
    ratio: 14,
    temp: 88,
    time: '1:30 – 2:00',
    grind: 'Fina a média',
    bloomRatio: 2,
    bloomTime: 20,
    pours: 1,
    filter: 'Papel / metal',
    difficulty: 'Fácil',
    body: 4, acidity: 3, sweetness: 4, aroma: 4, complexity: 4,
    ease: 5, clean: 5
  },
  'hario-switch': {
    id: 'hario-switch',
    name: 'Hario Switch',
    ratio: 15,
    temp: 93,
    time: '3:00 – 3:30',
    grind: 'Média',
    bloomRatio: 2,
    bloomTime: 30,
    pours: 1,
    filter: 'Papel V60 + válvula',
    difficulty: 'Média',
    body: 4, acidity: 4, sweetness: 4, aroma: 4, complexity: 4,
    ease: 4, clean: 4
  },
  'clever-dripper': {
    id: 'clever-dripper',
    name: 'Clever Dripper',
    ratio: 16,
    temp: 93,
    time: '3:00 – 4:00',
    grind: 'Média',
    bloomRatio: 0,
    bloomTime: 0,
    pours: 1,
    filter: 'Papel (ímersion)',
    difficulty: 'Fácil',
    body: 4, acidity: 3, sweetness: 4, aroma: 4, complexity: 3,
    ease: 5, clean: 4
  },
  origami: {
    id: 'origami',
    name: 'Origami',
    ratio: 16,
    temp: 92,
    time: '2:30 – 3:30',
    grind: 'Média-fina',
    bloomRatio: 2,
    bloomTime: 30,
    pours: 2,
    filter: 'Papel / metal',
    difficulty: 'Média',
    body: 3, acidity: 5, sweetness: 4, aroma: 5, complexity: 5,
    ease: 3, clean: 4
  },
  koar: {
    id: 'koar',
    name: 'Koar',
    ratio: 15.5,
    temp: 92,
    time: '2:30 – 3:30',
    grind: 'Média-fina',
    bloomRatio: 2,
    bloomTime: 30,
    pours: 2,
    filter: 'Papel cônico',
    difficulty: 'Média',
    body: 3, acidity: 5, sweetness: 4, aroma: 5, complexity: 5,
    ease: 3, clean: 4
  },
  moka: {
    id: 'moka',
    name: 'Moka Italiana',
    ratio: 8,
    temp: 95,
    time: '4:00 – 6:00',
    grind: 'Fina (tipo espresso)',
    bloomRatio: 0,
    bloomTime: 0,
    pours: 1,
    filter: 'Disco metálico',
    difficulty: 'Média',
    body: 5, acidity: 2, sweetness: 3, aroma: 3, complexity: 3,
    ease: 4, clean: 3
  }
};

window.COFFEE_QUIZ = [
  {
    q: 'Como você prefere o sabor do café?',
    options: [
      { label: 'Intenso e encorpado', scores: { 'prensa-francesa': 2, moka: 2, aeropress: 1 } },
      { label: 'Equilibrado', scores: { 'hario-switch': 2, 'clever-dripper': 2, origami: 1 } },
      { label: 'Delicado e aromático', scores: { v60: 2, chemex: 2, koar: 2, origami: 1 } }
    ]
  },
  {
    q: 'Você gosta mais de ritual ou de praticidade?',
    options: [
      { label: 'Ritual e precisão', scores: { v60: 2, origami: 2, koar: 2, chemex: 1 } },
      { label: 'Equilíbrio entre os dois', scores: { 'hario-switch': 2, aeropress: 1, origami: 1 } },
      { label: 'Máxima praticidade', scores: { 'prensa-francesa': 2, 'clever-dripper': 2, aeropress: 2, moka: 1 } }
    ]
  },
  {
    q: 'Cafés frutados e com acidez viva te agradam?',
    options: [
      { label: 'Sim, adoro', scores: { v60: 2, origami: 2, koar: 2, chemex: 1 } },
      { label: 'Depende do dia', scores: { 'hario-switch': 2, aeropress: 1, 'clever-dripper': 1 } },
      { label: 'Prefiro notas mais baixas e chocolatadas', scores: { moka: 2, 'prensa-francesa': 2, aeropress: 1 } }
    ]
  },
  {
    q: 'Quanto tempo você costuma dedicar ao preparo?',
    options: [
      { label: 'Menos de 3 minutos', scores: { aeropress: 2, moka: 1, 'clever-dripper': 1 } },
      { label: 'Entre 3 e 5 minutos', scores: { v60: 1, origami: 1, 'hario-switch': 2, koar: 1 } },
      { label: 'Posso investir 5 minutos ou mais', scores: { chemex: 2, 'prensa-francesa': 2, v60: 1 } }
    ]
  },
  {
    q: 'Como prefere a limpeza depois?',
    options: [
      { label: 'Rápida e simples', scores: { aeropress: 2, 'clever-dripper': 1, v60: 1 } },
      { label: 'Não me importo se for um pouco mais', scores: { origami: 1, koar: 1, 'hario-switch': 1, chemex: 1 } },
      { label: 'Aceito mais trabalho pelo resultado', scores: { chemex: 1, 'prensa-francesa': 1, moka: 2 } }
    ]
  },
  {
    q: 'Você curte experimentar equipamentos brasileiros ou clássicos do café especial?',
    options: [
      { label: 'Clássicos internacionais', scores: { v60: 2, chemex: 2, aeropress: 1, moka: 1 } },
      { label: 'Inovações e versatilidade', scores: { origami: 2, 'hario-switch': 2, 'clever-dripper': 1 } },
      { label: 'Design brasileiro e precisão', scores: { koar: 3, origami: 1, v60: 1 } }
    ]
  }
];
