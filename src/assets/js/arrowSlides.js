import { ref } from 'vue';
import gsap from 'gsap';

export function arrowSlides() {
  const currentSlide = ref(1);
  const totalSlides = 20;

  const slideTo = (fromSelector, toSelector, direction = 'left') => {
        const offset = direction === 'left' ? '-100%' : '100%';

        // Animate current slide out (samo ga pomakni)
        gsap.to(fromSelector, {
        x: offset,
        duration: 0.5,
        ease: 'power2.inOut'
        });

        // Animate the next slide in
        gsap.set(toSelector, { x: direction === 'left' ? '100%' : '-100%' });
        gsap.to(toSelector, {
        x: '0%',
        duration: 0.5,
        ease: 'power2.inOut'
        });
    };

  const nextSlide = () => {
    if (currentSlide.value < totalSlides) {
      const current = `.scene-${currentSlide.value}`;
      const next = `.scene-${currentSlide.value + 1}`;
      slideTo(current, next, 'left');
      currentSlide.value++;
    }
  };

  const backSlide = () => {
    if (currentSlide.value > 1) {
      const current = `.scene-${currentSlide.value}`;
      const prev = `.scene-${currentSlide.value - 1}`;
      slideTo(current, prev, 'right');
      currentSlide.value--;
    }
  };

  return {
    currentSlide,
    nextSlide,
    backSlide
  };
}
