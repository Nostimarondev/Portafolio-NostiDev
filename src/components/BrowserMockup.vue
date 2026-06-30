<template>
  <div class="browser-mockup" ref="mockupRef">
    <div class="browser-header">
      <div class="browser-buttons">
        <span class="btn close"></span>
        <span class="btn minimize"></span>
        <span class="btn maximize"></span>
      </div>
      <div class="browser-address-bar">
        <span class="lock-icon">
          <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </span>
        {{ displayUrl }}
      </div>
      <div class="browser-actions">
        <!-- Spacer for centering address bar -->
      </div>
    </div>
    <div class="browser-content">
      <div v-if="loading" class="loader">Cargando...</div>
      <iframe 
        :src="url" 
        :title="title"
        @load="onIframeLoad"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: 'Website'
  }
});

const loading = ref(true);

const displayUrl = computed(() => {
  try {
    const urlObj = new URL(props.url);
    return urlObj.hostname;
  } catch (e) {
    return props.url; // Fallback for local paths like /pages/...
  }
});

const onIframeLoad = () => {
  loading.value = false;
};
</script>

<style scoped>
.browser-mockup {
  width: 100%;
  background: var(--mockup-bg);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.browser-mockup:hover {
  transform: translateY(-5px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.08);
}

.browser-header {
  height: 44px;
  background: var(--mockup-bar);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  padding: 0 16px;
  position: relative;
}

.browser-buttons {
  display: flex;
  gap: 8px;
  width: 60px; /* fixed width to balance header */
}

.btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  background-color: #d1d1d1; /* Minimalist grey instead of colorful traffic lights */
}

/* Optional: Slight color on hover for elegance */
.browser-mockup:hover .btn.close { background-color: #ff5f56; }
.browser-mockup:hover .btn.minimize { background-color: #ffbd2e; }
.browser-mockup:hover .btn.maximize { background-color: #27c93f; }

.browser-address-bar {
  flex: 1;
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  height: 28px;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: var(--text-color);
  gap: 6px;
}

.lock-icon {
  display: flex;
  align-items: center;
  color: var(--text-muted);
}

.browser-actions {
  width: 60px; /* Match buttons width to center address bar */
}

.browser-content {
  width: 100%;
  /* Set a fixed height or aspect ratio. A 16:9 ratio or fixed height works well */
  height: 600px; 
  position: relative;
  background: white;
}

@media (max-width: 768px) {
  .browser-content {
    height: 400px;
  }
}

.browser-content iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--text-muted);
  font-size: 14px;
}
</style>
