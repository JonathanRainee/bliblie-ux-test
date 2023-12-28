const footer = document.getElementById('footer');
const toggleBtn = document.getElementById('toggle-btn');
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

toggleBtn.addEventListener('click', () => {
  if (footer.classList.contains('expanded')) {
      footer.classList.remove('expanded');
      footer.classList.add('collapsed');
  } else {
      footer.classList.remove('collapsed');
      footer.classList.add('expanded');
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});

function scrollCarousel(scrollAmount) {
  const productContainer = document.querySelector('.product-container');
  const currentTransform = getComputedStyle(productContainer).getPropertyValue('transform');
  const currentTranslateX = parseInt(currentTransform.split(',')[4]) || 0;
  const newTranslateX = currentTranslateX + scrollAmount;

  const maxTranslateX = Math.min(0, productContainer.clientWidth - productContainer.scrollWidth);
  
  const boundedTranslateX = Math.max(maxTranslateX, Math.min(0, newTranslateX));

  productContainer.style.transform = `translateX(${boundedTranslateX}px)`;
}

