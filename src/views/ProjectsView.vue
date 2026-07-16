<template>
  <div class="projects-view">
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
                  <h3>{{ currentProjects[currentIndex].name }}</h3>
                  <div class="project-counter">
                    {{ currentIndex + 1 }} / {{ currentProjects.length }}
                  </div>
                </div>
                
                <BrowserMockup 
                  :url="currentProjects[currentIndex].url" 
                  :title="currentProjects[currentIndex].name" 
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
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { gsap } from 'gsap';
import BrowserMockup from '../components/BrowserMockup.vue';

const route = useRoute();
const activeProjectType = computed(() => route.params.tipo || 'landing');

const landingProjects = [
  { name: "Nasdank", url: "https://www.nasdank.xyz" },
  { name: "NOUS Girl", url: "https://nousgirl.xyz" },
  { name: "Ferris", url: "https://www.ferrisrustacean.xyz" },
  { name: "This is fine", url: "https://thisisfine.site" },
  { name: "Rial", url: "https://rialonsol.com" },
  { name: "Treal", url: "https://treal-three.vercel.app" }
];

const systemProjects = [
  { name: "SGI Dashboard", url: "https://pluscode-gilt.vercel.app/#dashboard" },
  { name: "E-Commerce Gaming", url: "https://aggressors.vercel.app" },
  { name: "Sistema de streaming", url: "https://nostflix.vercel.app" }
];

const currentProjects = computed(() => activeProjectType.value === 'landing' ? landingProjects : systemProjects);

const currentIndex = ref(0);
const isAnimating = ref(false);
const sliderRef = ref(null);

const next = () => {
  if (isAnimating.value) return;
  currentIndex.value = (currentIndex.value + 1) % currentProjects.value.length;
};

const prev = () => {
  if (isAnimating.value) return;
  currentIndex.value = (currentIndex.value - 1 + currentProjects.value.length) % currentProjects.value.length;
};

onMounted(() => {
  window.scrollTo(0, 0);
  nextTick(() => {
    if (sliderRef.value) {
      gsap.fromTo(sliderRef.value,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
    }
  });
});
</script>
