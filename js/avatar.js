const layerPaths = {
  skin: {
    light: "/assets/skin-light.png",
    medium: "/assets/skin-medium.png",
    dark: "/assets/skin-dark.png",
  },
  hair: {
    afro: "/assets/hair-afro.png",
    braids: "/assets/hair-braids.png",
    bun: "/assets/hair-bun.png",
    curls: "/assets/hair-curls.png",
  },
  outfit: {
    practice: "/assets/outfit-practice.png",
    stage: "/assets/outfit-stage.png",
  },
  aura: {
    none: "",
    pink: "/assets/aura-pink.png",
    gold: "/assets/aura-gold.png",
  }
};

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("skinSelect").onchange = e => {
    document.getElementById("skinLayer").src = layerPaths.skin[e.target.value];
  };
  document.getElementById("hairSelect").onchange = e => {
    document.getElementById("hairLayer").src = layerPaths.hair[e.target.value];
  };
  document.getElementById("outfitSelect").onchange = e => {
    document.getElementById("outfitLayer").src = layerPaths.outfit[e.target.value];
  };
  document.getElementById("auraSelect").onchange = e => {
    document.getElementById("auraLayer").src = layerPaths.aura[e.target.value];
  };
});
