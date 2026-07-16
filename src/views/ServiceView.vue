<template>
  <div class="projects-view service-details-view">
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

              <button class="bento-btn cta-btn mt-4" @click="openProjects('landing')">
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

              <button class="bento-btn cta-btn mt-4" @click="openProjects('systems')">
                See examples of real pages
                <span class="btn-arrow">→</span>
              </button>
            </div>
            <div class="service-images">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="System Dashboard" class="service-detail-img">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const activeService = computed(() => route.params.tipo);

const openProjects = (type) => {
  router.push({ name: 'projects', params: { tipo: type } });
};

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
