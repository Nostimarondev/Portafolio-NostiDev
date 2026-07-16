<template>
  <div>
    <!-- New Hero Layout -->
    <section id="home" class="hero-new">
      <div class="hero-top">FRONTEND DEVELOPER</div>
      
      <div class="hero-title-container">
        <h1 class="hero-title" data-text="NostiDev" ref="titleRef">NostiDev</h1>
      </div>
      
      <nav class="hero-nav">
        <a href="#work" @click.prevent="scrollTo('#work')">WORK</a>
        <a href="#about" @click.prevent="scrollTo('#about')">ABOUT</a>
        <a href="#contact" @click.prevent="scrollTo('#contact')">CONTACT</a>
      </nav>
    </section>

    <!-- Featured Project (Datum style) -->
    <section id="featured" class="featured-section">
      <div class="container">
        <div class="featured-cards-wrapper">
          <!-- Service 1: Landing Pages -->
          <div class="bento-card featured-card fade-in-up-scroll" @click="openService('landing')">
            <div class="featured-content">
              <div class="featured-logo">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
                <h2>Web & Landing Pages</h2>
              </div>
              <p class="featured-desc">
                Want to make your business known? Need a virtual menu? Looking for a professional portfolio or a personal blog? Stand out in the digital world with a modern, fast, and fully responsive website. Create your landing page to give your brand more visibility!
              </p>
              <div class="featured-tags">
                <span class="tag">UI/UX Design</span>
                <span class="tag">Responsive Web</span>
                <button class="bento-btn">
                  SEE MORE 
                  <span class="btn-arrow">→</span>
                </button>
              </div>
            </div>
            
            <div class="featured-image">
              <video src="../assets/A_dynamic_and_fast-paced_10-second_202606301105.mp4" autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover;"></video>
            </div>
          </div>

          <!-- Service 2: Systems & Web Apps -->
          <div class="bento-card featured-card fade-in-up-scroll" @click="openService('systems')">
            <div class="featured-content">
              <div class="featured-logo">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
                <h2>Systems & Web Apps</h2>
              </div>
              <p class="featured-desc">
                Need a complete system to take your business to the next level? An inventory system? Tools that streamline your workflow? Automate and simplify your processes with custom software. Click here!
              </p>
              <div class="featured-tags">
                <span class="tag">Dashboards</span>
                <span class="tag">Inventarios</span>
                <button class="bento-btn">
                  SEE MORE 
                  <span class="btn-arrow">→</span>
                </button>
              </div>
            </div>
            
            <div class="featured-image">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Systems and Dashboards Service">
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="dark-background-wrapper">
      <!-- Multi-Discipline (Dark Section) -->
      <section id="about" class="multi-discipline-section">
        <div class="container">
          <h4 class="md-subtitle fade-in-up-scroll">ABOUT ME</h4>
          <h2 class="md-title fade-in-up-scroll">Full Stack Developer & Designer</h2>
          <p class="md-desc fade-in-up-scroll">
            Computer Science student with solid freelance experience in Full Stack web development, specializing in the design, development, and deployment of e-commerce platforms and commercial management systems. With technical proficiency in PHP, JavaScript (Vue.js), SQL, and version control using Git, I have experience leading project management, ranging from negotiation and requirements gathering with international clients to phased software architecture. I possess a multidisciplinary profile that integrates UI/UX design and multimedia production skills, standing out for a proactive, analytical approach oriented toward the efficient resolution of complex technical problems.
          </p>
          
          <div class="md-icons fade-in-up-scroll">
            <div class="md-icon" v-for="skill in skills" :key="skill.name" v-html="skill.icon"></div>
          </div>
        </div>
      </section>

      <!-- Bento Grid -->
      <section id="work" class="bento-section">
        <div class="container">
          <div class="bento-grid-new">
            
            <!-- Web Design (Horizontal Wide - Top) -->
            <div class="bento-card bento-web fade-in-up-scroll" @click="openProjects('landing')">
              <div class="bento-header split-header">
                <div>
                  <h3>Web Design</h3>
                  <p>500+ landing pages & sites</p>
                </div>
                <span class="arrow-icon">→</span>
              </div>
              <div class="web-images-container">
                <div class="carousel-track">
                  <img src="../assets/website1.png" alt="Web Design 1">
                  <img src="../assets/website2.png" alt="Web Design 2">
                  <img src="../assets/website3.jpg" alt="Web Design 3">
                  <img src="../assets/website4.png" alt="Web Design 4">
                  <img src="../assets/website5.png" alt="Web Design 5">
                  <img src="../assets/website1.png" alt="Web Design 1">
                  <img src="../assets/website2.png" alt="Web Design 2">
                  <img src="../assets/website3.jpg" alt="Web Design 3">
                  <img src="../assets/website4.png" alt="Web Design 4">
                  <img src="../assets/website5.png" alt="Web Design 5">
                </div>
                <div class="fade-overlay-bento"></div>
              </div>
            </div>

            <!-- SGI & UX Columns -->
            <div class="bento-grid-cols">
              <!-- SGI / IMS -->
              <div class="bento-card bento-sgi sgi-bounce-anim" @click="openProjects('systems')" style="cursor: pointer;" :style="{'--glow-color': sgiImages[currentSgiIndex].color}">
                <div class="bento-header split-header sgi-light-header">
                  <div>
                    <h3>SGI / IMS</h3>
                    <p>Sistemas de Gestión de Inventarios</p>
                  </div>
                  <span class="arrow-icon">→</span>
                </div>
                <div class="sgi-image-wrapper">
                  <Transition name="sgi-slide" mode="out-in">
                    <img :key="currentSgiIndex" :src="sgiImages[currentSgiIndex].src" alt="SGI Dashboard" class="sgi-reference-img">
                  </Transition>
                </div>
              </div>

              <!-- UX -->
              <div class="bento-card bento-ux fade-in-up-scroll">
                <div class="bento-header">
                  <h3>UX</h3>
                  <p>Always user-centered.</p>
                </div>
                <div class="bento-img-container dark-placeholder ux-mockup">
                  <div class="ux-bar"></div>
                  <div class="ux-list">
                    <div class="ux-item" v-for="i in 3" :key="i"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import sgi1 from '../assets/sgi1.png';
import sgi2 from '../assets/sgi2.png';
import sgi3 from '../assets/sgi3.png';
import sgi4 from '../assets/sgi4.png';

const router = useRouter();

const sgiImages = [
  { src: sgi1, color: 'rgba(0, 255, 128, 0.7)' },
  { src: sgi2, color: 'rgba(0, 191, 255, 0.7)' },
  { src: sgi3, color: 'rgba(255, 165, 0, 0.7)' },
  { src: sgi4, color: 'rgba(138, 43, 226, 0.7)' }
];
const currentSgiIndex = ref(0);
let sgiInterval = null;

const skills = [
  { name: 'HTML5', icon: '<img src="https://cdn.simpleicons.org/html5/white" alt="HTML5" style="width: 100%; height: 100%; object-fit: contain;">' },
  { name: 'CSS3', icon: '<svg viewBox="0 0 24 24" fill="white" style="width: 100%; height: 100%;"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.16l-.24-2.65H4.69l.235 2.65h13.255zM4.4 7.69l.23 2.65h11.93l-.42 4.708-4.14 1.144-4.144-1.144-.26-2.906H4.69l.48 5.358 6.825 1.88 6.83-1.88.85-9.805H4.4z"/></svg>' },
  { name: 'JavaScript', icon: '<img src="https://cdn.simpleicons.org/javascript/white" alt="JavaScript" style="width: 100%; height: 100%; object-fit: contain;">' },
  { name: 'GSAP', icon: '<img src="https://cdn.simpleicons.org/greensock/white" alt="GSAP" style="width: 100%; height: 100%; object-fit: contain;">' },
  { name: 'PHP', icon: '<img src="https://cdn.simpleicons.org/php/white" alt="PHP" style="width: 100%; height: 100%; object-fit: contain;">' },
  { name: 'C++', icon: '<img src="https://cdn.simpleicons.org/cplusplus/white" alt="C++" style="width: 100%; height: 100%; object-fit: contain;">' },
  { name: 'Framer', icon: '<img src="https://cdn.simpleicons.org/framer/white" alt="Framer" style="width: 100%; height: 100%; object-fit: contain;">' },
  { name: 'Vue.js', icon: '<img src="https://cdn.simpleicons.org/vuedotjs/white" alt="Vue" style="width: 100%; height: 100%; object-fit: contain;">' },
  { name: 'Vite', icon: '<img src="https://cdn.simpleicons.org/vite/white" alt="Vite" style="width: 100%; height: 100%; object-fit: contain;">' }
];

const titleRef = ref(null);

const scrollTo = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const openService = (serviceType) => {
  router.push({ name: 'service', params: { tipo: serviceType } });
};

const openProjects = (type = 'landing') => {
  router.push({ name: 'projects', params: { tipo: type } });
};

onMounted(() => {
  sgiInterval = setInterval(() => {
    currentSgiIndex.value = (currentSgiIndex.value + 1) % sgiImages.length;
  }, 3500);

  const tl = gsap.timeline();
  
  gsap.set('.hero-top, .hero-nav a', { opacity: 0, y: 20 });
  if (titleRef.value) {
    gsap.set(titleRef.value, { clipPath: 'inset(0 100% 0 0)' });
  }
  
  tl.to('.hero-top', { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 })
    .to(titleRef.value, { 
      clipPath: 'inset(0 0% 0 0)', 
      duration: 1.5, 
      ease: 'power4.inOut' 
    }, "-=0.5")
    .to('.hero-nav a', { 
      opacity: 1, 
      y: 0, 
      duration: 0.8, 
      stagger: 0.15, 
      ease: 'power3.out' 
    }, "-=0.8")
    .call(() => {
      if (titleRef.value) {
        titleRef.value.classList.add('glitch-active');
      }
    });

  gsap.fromTo('.sgi-bounce-anim',
    { y: 100, opacity: 0, scale: 0.9 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: 'back.out(2)',
      scrollTrigger: {
        trigger: '.sgi-bounce-anim',
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );

  const scrollElements = gsap.utils.toArray('.fade-in-up-scroll');
  scrollElements.forEach(el => {
    gsap.fromTo(el,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });
});

onUnmounted(() => {
  if (sgiInterval) clearInterval(sgiInterval);
});
</script>
