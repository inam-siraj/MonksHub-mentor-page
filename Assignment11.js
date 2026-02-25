const track = document.querySelector('.subcontainer2');
let slides = Array.from(track.children);
const gap = 20;          // gap between slides
const visibleCount = 3;   // always show 3 slides
let index = 0;

function autoMove() {
  index++;
  const slideWidth = slides[0].getBoundingClientRect().width + gap;

  // Add smooth transition
  track.style.transition = 'transform 0.5s ease';
  track.style.transform = `translateX(${-index * slideWidth}px)`;

  // Circular loop logic
  if (index > slides.length - visibleCount) {
    setTimeout(() => {
      track.style.transition = 'none';      // remove transition for instant reposition
      track.appendChild(slides[0]);         // move first slide to end
      slides.push(slides.shift());           // update array
      index--;                               // reset index
      track.style.transform = `translateX(${-index * slideWidth}px)`; // immediate position
    }, 500); // match transition duration
  }
}

// Auto-slide every 2 seconds
setInterval(autoMove, 2000);
