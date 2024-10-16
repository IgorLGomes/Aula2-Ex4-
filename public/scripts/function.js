  const produtosImgs = document.querySelectorAll('.produto-img');

  produtosImgs.forEach(img => {
    const originalSrc = img.getAttribute('data-original');
    const hoverSrc = img.getAttribute('data-hover');
    img.addEventListener('mouseover', () => {
      img.src = hoverSrc;
    });
    img.addEventListener('mouseout', () => {
      img.src = originalSrc;
    });
  });

  window.onload = function() {
    document.getElementById("popup").style.display = "flex";
};
document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});