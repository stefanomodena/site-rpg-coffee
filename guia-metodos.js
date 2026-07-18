(function () {
  const methods = window.COFFEE_METHODS || {};
  const quiz = window.COFFEE_QUIZ || [];

  function $(sel, root = document) {
    return root.querySelector(sel);
  }

  function $all(sel, root = document) {
    return [...root.querySelectorAll(sel)];
  }

  function formatMl(n) {
    return `${Math.round(n)} ml`;
  }

  function updateRecipe(section) {
    const id = section.dataset.method;
    const base = methods[id];
    if (!base) return;

    const coffeeInput = $('.js-coffee', section);
    const coffee = Number(coffeeInput.value);
    $('.js-coffee-value', section).textContent = `${coffee} g`;

    const advanced = $('.js-advanced', section)?.checked;
    let ratio = base.ratio;
    let temp = base.temp;
    let bloomTime = base.bloomTime;
    let time = base.time;

    if (advanced) {
      const ratioEl = $('.js-ratio', section);
      const tempEl = $('.js-temp', section);
      const bloomEl = $('.js-bloom', section);
      const timeEl = $('.js-time', section);
      if (ratioEl) ratio = Number(ratioEl.value) || ratio;
      if (tempEl) temp = Number(tempEl.value) || temp;
      if (bloomEl) bloomTime = Number(bloomEl.value) || bloomTime;
      if (timeEl && timeEl.value.trim()) time = timeEl.value.trim();
    }

    const water = coffee * ratio;
    const bloomWater = base.bloomRatio > 0 ? coffee * (advanced && $('.js-bloom-ratio', section)
      ? Number($('.js-bloom-ratio', section).value) || base.bloomRatio
      : base.bloomRatio) : 0;

    $('.js-water', section).textContent = formatMl(water);
    $('.js-temp-out', section).textContent = `${temp} °C`;
    $('.js-time-out', section).textContent = time;
    $('.js-grind-out', section).textContent = base.grind;
    const isEn = document.documentElement.lang.toLowerCase().startsWith('en');
    $('.js-bloom-out', section).textContent = bloomWater > 0
      ? `${Math.round(bloomWater)} ml / ${bloomTime}s`
      : (isEn ? 'No bloom' : 'Sem bloom');
    $('.js-pours-out', section).textContent = String(base.pours);
  }

  function initRecipes() {
    $all('[data-method]').forEach((section) => {
      const id = section.dataset.method;
      const base = methods[id];
      if (!base) return;

      const coffeeInput = $('.js-coffee', section);
      const advancedToggle = $('.js-advanced', section);
      const advancedPanel = $('.advanced-panel', section);

      if (coffeeInput) {
        coffeeInput.addEventListener('input', () => updateRecipe(section));
      }

      if (advancedToggle && advancedPanel) {
        advancedToggle.addEventListener('change', () => {
          advancedPanel.classList.toggle('is-open', advancedToggle.checked);
          advancedPanel.hidden = !advancedToggle.checked;
          updateRecipe(section);
        });
      }

      $all('.js-ratio, .js-temp, .js-bloom, .js-bloom-ratio, .js-time', section).forEach((el) => {
        el.addEventListener('input', () => updateRecipe(section));
      });

      updateRecipe(section);
    });
  }

  function initScrollSpy() {
    const links = $all('.js-method-link');
    const sections = $all('.method-section');
    if (!links.length || !sections.length) return;

    const map = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        links.forEach((l) => l.classList.remove('is-active'));
        $all(`.js-method-link[href="#${id}"]`).forEach((l) => l.classList.add('is-active'));
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 });

    sections.forEach((s) => observer.observe(s));
  }

  function initReveal() {
    const els = $all('.reveal');
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
  }

  function initHeader() {
    const header = $('.header');
    if (!header) return;
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 80);
    }, { passive: true });

    const hamburger = $('.hamburger');
    const menu = $('.nav-menu');
    if (hamburger && menu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
      });
    }
  }

  function initQuiz() {
    const root = $('#quiz');
    if (!root || !quiz.length) return;

    let index = 0;
    const scores = {};
    Object.keys(methods).forEach((k) => { scores[k] = 0; });

    const progress = $('.quiz-progress i', root);
    const questionEl = $('.quiz-question', root);
    const optionsEl = $('.quiz-options', root);
    const playEl = $('.quiz-play', root);
    const resultEl = $('.quiz-result', root);
    const resultName = $('.quiz-result-name', root);
    const resultText = $('.quiz-result-text', root);
    const resultLink = $('.quiz-result-link', root);
    const restartBtn = $('.quiz-restart', root);

    const isEn = document.documentElement.lang.toLowerCase().startsWith('en');

    function render() {
      const item = quiz[index];
      progress.style.width = `${(index / quiz.length) * 100}%`;
      questionEl.textContent = item.q;
      optionsEl.innerHTML = '';
      item.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = opt.label;
        btn.setAttribute('aria-label', isEn
          ? `Option ${i + 1}: ${opt.label}`
          : `Opção ${i + 1}: ${opt.label}`);
        btn.addEventListener('click', () => {
          Object.entries(opt.scores).forEach(([k, v]) => {
            scores[k] = (scores[k] || 0) + v;
          });
          index += 1;
          if (index >= quiz.length) finish();
          else render();
        });
        optionsEl.appendChild(btn);
      });
    }

    function finish() {
      progress.style.width = '100%';
      playEl.hidden = true;
      resultEl.classList.add('is-visible');
      const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
      const method = methods[winner];
      resultName.textContent = method.name;
      resultText.textContent = isEn
        ? `Based on your preferences, ${method.name} is the best match for your style. Explore the interactive recipe and come try it at RPG&Coffee.`
        : `Com base nas suas preferências, o método ${method.name} combina melhor com o seu estilo. Explore a receita interativa e venha provar na RPG&Coffee.`;
      resultLink.href = `#${winner}`;
      resultLink.textContent = isEn
        ? `See the ${method.name} guide`
        : `Ver guia do ${method.name}`;
    }

    restartBtn?.addEventListener('click', () => {
      index = 0;
      Object.keys(scores).forEach((k) => { scores[k] = 0; });
      playEl.hidden = false;
      resultEl.classList.remove('is-visible');
      render();
    });

    render();
  }

  document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initRecipes();
    initScrollSpy();
    initReveal();
    initQuiz();
  });
})();
