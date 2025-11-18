// Simple slider with prev/next and auto-advance
(function(){
  const slides = document.querySelectorAll('.slide');
  const prev = document.querySelector('.slider-prev');
  const next = document.querySelector('.slider-next');
  let i = 0;
  function show(idx){
    slides.forEach(s => s.classList.remove('active'));
    slides[idx].classList.add('active');
  }
  function nextSlide(){ i = (i+1) % slides.length; show(i); }
  function prevSlide(){ i = (i-1 + slides.length) % slides.length; show(i); }

  next.addEventListener('click', ()=>{ nextSlide(); resetTimer(); });
  prev.addEventListener('click', ()=>{ prevSlide(); resetTimer(); });

  let timer = setInterval(nextSlide, 4000);
  function resetTimer(){ clearInterval(timer); timer = setInterval(nextSlide,4000); }

  // show first
  show(0);
})();
