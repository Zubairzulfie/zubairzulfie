const links = document.querySelectorAll('a');

links.forEach(link => {
  // Glow Effect
  link.addEventListener('mouseenter', () => {
    link.style.textDecoration = 'none';
    link.style.boxShadow = '0px 0px 10px rgba(209, 49, 0, 0.7)';
  });

  link.addEventListener('mouseleave', () => {
    link.style.textDecoration = 'underline'; // Reset text decoration when not hovered
    link.style.boxShadow = 'none'; // Reset box shadow when not hovered
  });

  // Ripple Effect
  link.addEventListener('click', event => {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    link.appendChild(ripple);

    const rect = link.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});