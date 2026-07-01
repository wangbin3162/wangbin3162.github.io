<template>
  <div class="collapsible">
    <div class="collapsible-header">
      <span v-if="label" class="collapsible-label">{{ label }}</span>
      <button
        type="button"
        class="collapse-toggle"
        :aria-expanded="open"
        @click="toggle"
      >
        {{ open ? 'CLOSE' : 'OPEN' }}
      </button>
    </div>
    <Transition :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave">
      <div v-show="open" class="collapsible-content">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'

const props = withDefaults(
  defineProps<{
    defaultOpen?: boolean
    label?: string
  }>(),
  {
    defaultOpen: true,
    label: ''
  }
)

const open = ref(props.defaultOpen)

const toggle = () => {
  open.value = !open.value
}

// 展开前先归零高度，避免从自然高度闪现
const onBeforeEnter = (el: Element) => {
  gsap.set(el as HTMLElement, { height: 0, overflow: 'hidden' })
}

const onEnter = (el: Element, done: () => void) => {
  gsap.to(el as HTMLElement, {
    height: 'auto',
    duration: 0.6,
    ease: 'power3.out',
    overwrite: true,
    onComplete: done
  })
}

const onLeave = (el: Element, done: () => void) => {
  gsap.to(el as HTMLElement, {
    height: 0,
    overflow: 'hidden',
    duration: 0.6,
    ease: 'power3.inOut',
    overwrite: true,
    onComplete: done
  })
}
</script>

<style scoped>
.collapsible {
  width: 100%;
}
.collapsible-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
}
.collapsible-label {
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  letter-spacing: var(--ls-tag);
  text-transform: uppercase;
}
.collapse-toggle {
  margin-left: auto;
  background: none;
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  padding: 0.4rem 1rem;
  color: var(--text-secondary);
  font-family: var(--font-display);
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--ls-nav);
  cursor: pointer;
  transition: color 0.2s var(--ease-in-out), border-color 0.2s var(--ease-in-out);
}
.collapse-toggle:hover {
  color: var(--accent);
  border-color: var(--accent);
}
.collapsible-content {
  /* 高度由 GSAP 在过渡期间控制；展开结束后回到自然高度 */
}
</style>
