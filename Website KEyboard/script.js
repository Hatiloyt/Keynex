// Volume Knob Rotation
const volumeKnob = document.getElementById('volumeKnob');
const knobBody = volumeKnob.querySelector('.knob-body');
let rotation = 45;

volumeKnob.addEventListener('mousemove', (e) => {
  const rect = volumeKnob.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
  rotation = angle + 90;
  knobBody.style.transform = `rotate(${rotation}deg)`;
});

// Key Press Effect
document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('mousedown', () => {
    key.style.transform = 'translateY(2px)';
    key.style.boxShadow = 'none';
  });
  
  key.addEventListener('mouseup', () => {
    key.style.transform = '';
    key.style.boxShadow = '';
  });
  
  key.addEventListener('mouseleave', () => {
    key.style.transform = '';
    key.style.boxShadow = '';
  });
});

// Module Click Toggle
document.querySelectorAll('.module').forEach(module => {
  module.addEventListener('click', () => {
    module.classList.toggle('active');
  });
});
