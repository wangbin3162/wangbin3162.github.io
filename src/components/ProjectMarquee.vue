<template>
  <div class="project-marquee">
    <!-- 桌面端：CSS marquee 无限水平滚动 -->
    <div v-if="!isMobile" class="marquee-viewport">
      <div class="marquee-track">
        <a
          v-for="(item, i) in loopItems"
          :key="`${item.name}-${i}`"
          :href="item.href"
          class="project-card glass-card"
        >
          <img :src="item.imageSrc" :alt="item.imageAlt" loading="lazy" class="card-image" />
          <div class="card-body">
            <h3 class="card-title">{{ item.name }}</h3>
            <p class="card-desc">{{ item.description }}</p>
            <div class="card-tags">
              <span v-for="tech in item.techs" :key="tech" class="tech-chip">{{ tech }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>

    <!-- 移动端：Swiper 触摸滑动 -->
    <Swiper
      v-else
      :slides-per-view="'auto'"
      :space-between="20"
      :free-mode="true"
      class="marquee-swiper"
    >
      <SwiperSlide v-for="item in projects" :key="item.name" class="swiper-slide-fixed">
        <a :href="item.href" class="project-card glass-card">
          <img :src="item.imageSrc" :alt="item.imageAlt" loading="lazy" class="card-image" />
          <div class="card-body">
            <h3 class="card-title">{{ item.name }}</h3>
            <p class="card-desc">{{ item.description }}</p>
            <div class="card-tags">
              <span v-for="tech in item.techs" :key="tech" class="tech-chip">{{ tech }}</span>
            </div>
          </div>
        </a>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

interface ProjectCardItem {
  name: string
  year: number
  techs: string[]
  description: string
  imageSrc: string
  imageAlt: string
  href: string
}

const props = defineProps<{ projects: ProjectCardItem[] }>()

// 列表复制一份拼接，配合 translateX(-50%) 实现无缝循环
const loopItems = computed(() => [...props.projects, ...props.projects])

const isMobile = ref(false)
let mql: MediaQueryList | null = null

const handleMediaChange = (e: MediaQueryListEvent) => {
  isMobile.value = e.matches
}

onMounted(() => {
  mql = window.matchMedia('(max-width: 768px)')
  isMobile.value = mql.matches
  mql.addEventListener('change', handleMediaChange)
})

onBeforeUnmount(() => {
  mql?.removeEventListener('change', handleMediaChange)
})
</script>

<style scoped>
.project-marquee {
  width: 100%;
}

/* 桌面端 marquee */
.marquee-viewport {
  overflow: hidden;
  width: 100%;
}
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 60s linear infinite;
}
.marquee-track:hover {
  animation-play-state: paused;
}
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

/* 卡片：用 margin-right 代替 gap，保证 -50% 落点恰好为一组宽度，循环无缝 */
.project-card {
  display: block;
  width: 300px;
  flex-shrink: 0;
  margin-right: var(--space-md);
  overflow: hidden;
  text-decoration: none;
}
.card-image {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  display: block;
}
.card-body {
  padding: var(--space-md);
}
.card-title {
  margin-bottom: var(--space-xs);
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 600;
  color: var(--text-primary);
  transition: color 0.2s var(--ease-in-out);
}
.project-card:hover .card-title {
  color: var(--accent);
}
.card-desc {
  margin-bottom: var(--space-sm);
  color: var(--text-muted);
  font-size: var(--text-small);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

/* 移动端 Swiper */
.marquee-swiper {
  width: 100%;
  padding: 0 var(--space-sm);
  overflow: visible;
}
.swiper-slide-fixed {
  width: 260px;
}

/* 移动端隐藏桌面 marquee（避免 hydration 前的桌面卡片闪现） */
@media (max-width: 768px) {
  .marquee-viewport {
    display: none;
  }
}
</style>
