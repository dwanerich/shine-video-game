// === AVATAR CUSTOMIZER WITH ARROW CYCLING ===

window.addEventListener('DOMContentLoaded', () => {
  // Avatar Layers
  const skinLayer = document.getElementById('skinLayer');
  const hairLayer = document.getElementById('hairLayer');
  const outfitLayer = document.getElementById('outfitLayer');
  const auraLayer = document.getElementById('auraLayer');

  // Preview circles (optional visual update)
  const skinPreview = document.getElementById('skinPreview');
  const hairPreview = document.getElementById('hairPreview');
  const outfitPreview = document.getElementById('outfitPreview');
  const auraPreview = document.getElementById('auraPreview');

  // Available options
  const options = {
    skin: ['light', 'medium', 'dark'],
    hair: ['afro', 'braids', 'bun', 'curls'],
    outfit: ['practice', 'stage'],
    aura: ['none', 'gold']
  };

  // Add pink aura if unlocked
  if (localStorage.getItem('aura-pink-unlocked')) {
    options.aura.push('pink');
  }

  // Track current index for each
  const currentIndex = {
    skin: 1,
    hair: 0,
    outfit: 1,
    aura: 1
  };

  // Update avatar visuals
  function updateAvatar(category) {
    const value = options[category][currentIndex[category]];
    switch (category) {
      case 'skin':
        skinLayer.src = `/assets/skin-${value}.png`;
        skinPreview.style.background = value === 'light' ? '#f5d7b2' : value === 'medium' ? '#c88a5e' : '#4e2a1e';
        break;
      case 'hair':
        hairLayer.src = `/assets/hair-${value}.png`;
        hairPreview.style.backgroundImage = `url(/assets/hair-${value}.png)`;
        break;
      case 'outfit':
        outfitLayer.src = `/assets/outfit-${value}.png`;
        outfitPreview.style.backgroundImage = `url(/assets/outfit-${value}.png)`;
        break;
      case 'aura':
        auraLayer.src = value === 'none' ? '' : `/assets/aura-${value}.png`;
        auraLayer.style.display = value === 'none' ? 'none' : 'block';
        auraPreview.style.backgroundImage = value === 'none' ? 'none' : `url(/assets/aura-${value}.png)`;
        break;
    }
  }

  // Init all categories
  Object.keys(options).forEach(cat => updateAvatar(cat));

  // Handle arrow clicks
  document.querySelectorAll('.arrow-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      const direction = btn.dataset.direction;

      if (direction === 'next') {
        currentIndex[category] = (currentIndex[category] + 1) % options[category].length;
      } else {
        currentIndex[category] = (currentIndex[category] - 1 + options[category].length) % options[category].length;
      }

      updateAvatar(category);
    });
  });
});
