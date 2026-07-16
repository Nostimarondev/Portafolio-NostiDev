<template>
  <div class="portfolio">
    <canvas id="canvas-waves" class="canvas-bg"></canvas>

    <!-- Secondary Nav Bar (Sticky) -->
    <nav v-if="route.name && route.name !== 'home'" class="secondary-nav sticky-nav">
      <div class="nav-logo" @click="goToSection('home')">NOSTIDEV</div>
      <div class="nav-links">
        <a href="#" @click.prevent="goToSection('work')">WORK</a>
        <a href="#" @click.prevent="goToSection('about')">ABOUT</a>
        <a href="#" @click.prevent="goToSection('contact')">CONTACT</a>
      </div>
    </nav>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- Footer -->
    <footer id="contact" class="footer">
      <div class="container">
        <h4 class="footer-subtitle">CONTACT ME</h4>
        <div class="footer-links">
          <a href="https://www.linkedin.com/in/kevintorrealba" target="_blank">LINKEDIN</a>
          <a href="https://t.me/nosti23" target="_blank">TELEGRAM</a>
          <a href="mailto:nostioficial@gmail.com">EMAIL</a>
          <router-link :to="{ name: 'cv' }">CV</router-link>
        </div>
        <div class="footer-divider"></div>
        <p class="footer-copyright text-center">© 2026 NOSTIDEV • Full Stack Developer</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const route = useRoute();
const router = useRouter();

let lenis;

const goToSection = (sectionId) => {
  if (route.name !== 'home') {
    router.push({ name: 'home', hash: `#${sectionId}` }).then(() => {
      setTimeout(() => scrollTo(sectionId), 300); // Wait for transition
    });
  } else {
    scrollTo(sectionId);
  }
};

const scrollTo = (sectionId) => {
  nextTick(() => {
    ScrollTrigger.refresh();
    if (sectionId === 'home') {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      if (lenis) {
        lenis.scrollTo(`#${sectionId}`);
      } else {
        const el = document.getElementById(sectionId);
        if(el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  });
};

const initWaveCanvas = () => {
  const canvas = document.getElementById('canvas-waves');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const SEPARATION = 90;
  const AMOUNTX = 100;
  const AMOUNTY = 100;
  let count = 0;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const render = () => {
    ctx.clearRect(0, 0, width, height);
    
    ctx.fillStyle = 'rgba(10, 10, 10, 1.25)'; 
    
    const angle = 0.9; 
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);

    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        let x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
        let z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
        
        let y = Math.sin((ix + count) * 0.3) * 60 + Math.sin((iy + count) * 0.5) * 60;

        let ry = y * cosA - z * sinA;
        let rz = y * sinA + z * cosA;

        let cameraZ = 1000;
        let focal = 600;
        let scale = focal / (focal + rz + cameraZ);
        
        let px = width / 2 + x * scale;
        let py = height / 2 + ry * scale + 50; 

        let dotSize = scale * 3.5; 
        if(dotSize > 0.1 && px > -20 && px < width + 20 && py > -20 && py < height + 20) {
           ctx.fillRect(px, py, dotSize, dotSize);
        }
      }
    }
    
    count += 0.04; 
    requestAnimationFrame(render);
  };
  
  render();
};

onMounted(() => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    smooth: true,
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  initWaveCanvas();
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
