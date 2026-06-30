<template>
  <div class="portfolio">
    <canvas id="canvas-waves" class="canvas-bg"></canvas>

    <!-- Secondary Nav Bar (Sticky) -->
    <nav v-if="isViewingProjects || isViewingService" class="secondary-nav sticky-nav">
      <div class="nav-logo" @click="goToSection('home')">NOSTIDEV</div>
      <div class="nav-links">
        <a href="#" @click.prevent="goToSection('work')">WORK</a>
        <a href="#" @click.prevent="goToSection('about')">ABOUT</a>
        <a href="#" @click.prevent="goToSection('contact')">CONTACT</a>
      </div>
    </nav>

    <div v-show="!isViewingProjects && !isViewingService">
      
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
                <video src="./assets/A_dynamic_and_fast-paced_10-second_202606301105.mp4" autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover;"></video>
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
              <div class="bento-card bento-web fade-in-up-scroll" @click="openProjects">
                <div class="bento-header split-header">
                  <div>
                    <h3>Web Design</h3>
                    <p>500+ landing pages & sites</p>
                  </div>
                  <span class="arrow-icon">→</span>
                </div>
                <div class="web-images-container">
                  <div class="carousel-track">
                    <img src="./assets/website1.png" alt="Web Design 1">
                    <img src="./assets/website2.png" alt="Web Design 2">
                    <img src="./assets/website3.jpg" alt="Web Design 3">
                    <img src="./assets/website4.png" alt="Web Design 4">
                    <img src="./assets/website5.png" alt="Web Design 5">
                    <!-- Duplicate for infinite scroll effect -->
                    <img src="./assets/website1.png" alt="Web Design 1">
                    <img src="./assets/website2.png" alt="Web Design 2">
                    <img src="./assets/website3.jpg" alt="Web Design 3">
                    <img src="./assets/website4.png" alt="Web Design 4">
                    <img src="./assets/website5.png" alt="Web Design 5">
                  </div>
                  <div class="fade-overlay-bento"></div>
                </div>
              </div>

              <!-- SGI & UX Columns -->
              <div class="bento-grid-cols">
                <!-- SGI / IMS -->
                <div class="bento-card bento-sgi fade-in-up-scroll">
                  <div class="bento-header split-header">
                    <div>
                      <h3>SGI / IMS</h3>
                      <p>Sistemas de Gestión de Inventarios</p>
                    </div>
                    <span class="arrow-icon">→</span>
                  </div>
                  <div class="bento-img-container dark-placeholder sgi-placeholder">
                    <svg viewBox="0 0 24 24" width="64" height="64" fill="#333">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
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

    <!-- Projects View (Full Screen) -->
    <div v-if="isViewingProjects" class="projects-view">
      <div class="projects-content">
        <div class="container">
          <div class="text-center mb-8">
            <h2 class="section-title">My Projects</h2>
          </div>
          <div class="slider-container" ref="sliderRef">
            
            <button class="slider-btn prev-btn" @click="prev" :disabled="isAnimating">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            <div class="slider-content-wrapper">
              <Transition name="slide" mode="out-in" @before-leave="isAnimating = true" @after-enter="isAnimating = false">
                <div :key="currentIndex" class="project-item">
                  <div class="project-info mb-4 text-center">
                    <h3>{{ projects[currentIndex].name }}</h3>
                    <div class="project-counter">
                      {{ currentIndex + 1 }} / {{ projects.length }}
                    </div>
                  </div>
                  
                  <BrowserMockup 
                    :url="projects[currentIndex].url" 
                    :title="projects[currentIndex].name" 
                  />
                </div>
              </Transition>
            </div>

            <button class="slider-btn next-btn" @click="next" :disabled="isAnimating">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

          </div>
        </div>
      </div>
    </div>

    <!-- Service Details View (Full Screen) -->
    <div v-if="isViewingService" class="projects-view service-details-view">
      <div class="projects-content">
        <div class="container">
          <div class="service-content" v-if="activeService === 'landing'">
            <div class="text-center mb-8">
              <h2 class="section-title">Web & Landing Pages</h2>
            </div>
            <div class="service-details-layout">
              <div class="service-text">
                <h3>Boost your online presence</h3>
                <p>In today's world, if you're not on the internet, you don't exist. I offer the creation of modern, fast websites completely tailored to your business needs.</p>
                
                <h4>What does this service include?</h4>
                <ul class="benefits-list">
                  <li><strong>Custom Design:</strong> Attractive interfaces focused on user experience (UX/UI).</li>
                  <li><strong>Responsive Design:</strong> Your site will look perfect on mobile phones, tablets, and computers.</li>
                  <li><strong>SEO Optimization:</strong> Make it easy for your customers to find you on Google.</li>
                  <li><strong>Integrations:</strong> Contact forms, WhatsApp buttons, virtual menus, etc.</li>
                </ul>

                <button class="bento-btn cta-btn mt-4" @click="openProjects">
                  See examples of real pages
                  <span class="btn-arrow">→</span>
                </button>
              </div>
              <div class="service-images">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" alt="Web Design" class="service-detail-img">
              </div>
            </div>
          </div>

          <div class="service-content" v-if="activeService === 'systems'">
            <div class="text-center mb-8">
              <h2 class="section-title">Systems & Web Apps</h2>
            </div>
            <div class="service-details-layout">
              <div class="service-text">
                <h3>Custom solutions for your company</h3>
                <p>Repetitive tasks and lack of data control slow down growth. I develop robust systems and web applications to digitize and automate your processes.</p>
                
                <h4>Common use cases:</h4>
                <ul class="benefits-list">
                  <li><strong>Inventory Systems:</strong> Real-time stock control, inputs, and outputs.</li>
                  <li><strong>Admin Dashboards:</strong> Visualize your business performance with charts and key metrics.</li>
                  <li><strong>Booking Systems:</strong> Scheduling for clinics, salons, or consulting.</li>
                  <li><strong>Management Software (ERP/CRM):</strong> Centralized tools to manage clients and resources.</li>
                </ul>
              </div>
              <div class="service-images">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="System Dashboard" class="service-detail-img">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer id="contact" class="footer">
      <div class="container">
        <h4 class="footer-subtitle">CONTACT ME</h4>
        <div class="footer-links">
          <a href="https://linkedin.com" target="_blank">LINKEDIN</a>
          <a href="https://telegram.org" target="_blank">TELEGRAM</a>
          <a href="mailto:contact@nostidev.com">EMAIL</a>
          <a href="/cv.pdf" target="_blank">CV</a>
        </div>
        <div class="footer-divider"></div>
        <p class="footer-copyright text-center">© 2026 NOSTIDEV • Full Stack Developer</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BrowserMockup from './components/BrowserMockup.vue';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { name: "NOUS Girl", url: "https://nousgirl.xyz" },
  { name: "Ferris", url: "https://www.ferrisrustacean.xyz" },
  { name: "This is fine", url: "https://thisisfine.site" },
  { name: "Rial", url: "https://rialonsol.com" },
  { name: "Treal", url: "https://treal-three.vercel.app" }
];

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

const currentIndex = ref(0);
const isAnimating = ref(false);
const sliderRef = ref(null);
const titleRef = ref(null);
const isViewingProjects = ref(false);
const isViewingService = ref(false);
const activeService = ref('');

const next = () => {
  if (isAnimating.value) return;
  currentIndex.value = (currentIndex.value + 1) % projects.length;
};

const prev = () => {
  if (isAnimating.value) return;
  currentIndex.value = (currentIndex.value - 1 + projects.length) % projects.length;
};

const scrollTo = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 40,
      behavior: 'smooth'
    });
  }
};

const openProjects = () => {
  isViewingProjects.value = true;
  isViewingService.value = false; // Cierra el de servicio si estaba abierto
  window.scrollTo(0, 0);
  
  nextTick(() => {
    if (sliderRef.value) {
      gsap.fromTo(sliderRef.value,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
    }
  });
};

const openService = (serviceType) => {
  activeService.value = serviceType;
  isViewingService.value = true;
  window.scrollTo(0, 0);
};

const goToSection = (sectionId) => {
  isViewingProjects.value = false;
  isViewingService.value = false;
  activeService.value = '';
  
  nextTick(() => {
    ScrollTrigger.refresh();
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if(el) {
        el.scrollIntoView({ behavior: 'smooth' });
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
    
    // Color de los puntos: negro con opacidad
    ctx.fillStyle = 'rgba(10, 10, 10, 1.25)'; 
    
    // Ángulo de inclinación
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
        // Ajuste vertical para centrar mejor
        let py = height / 2 + ry * scale + 50; 

        let dotSize = scale * 3.5; 
        if(dotSize > 0.1 && px > -20 && px < width + 20 && py > -20 && py < height + 20) {
           // fillRect es mucho más rápido que arc y a este tamaño se ven como puntos
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
  initWaveCanvas();
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
</script>
