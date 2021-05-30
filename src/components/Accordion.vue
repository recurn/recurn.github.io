<template>
  <div class="accordion">
    <article class="message" :class="accordionClasses">
      <div class="message-header" @click="toggleAccordion">
        <h2>{{ header }}</h2>
        <span v-if="!isOpen" class="material-icons"> expand_more </span>
        <span v-else class="material-icons"> expand_less </span>
      </div>
      <transition
        name="expand"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave"
      >
        <div v-if="isOpen" class="message-body">
          <div class="message-content">
            <slot></slot>
          </div>
        </div>
      </transition>
    </article>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  props: ["header", "message", "startOpen"],
  setup(props) {
    const isOpen = ref(props.startOpen);

    const toggleAccordion = () => {
      isOpen.value = !isOpen.value;
    };

    const accordionClasses = computed(() => {
      return {
        "is-closed": !isOpen.value,
        "is-primary": !isOpen.value,
        "is-dark": !isOpen.value,
      };
    });

    const enter = (element) => {
      const width = getComputedStyle(element).width;

      element.style.width = width;
      element.style.position = "absolute";
      element.style.visibility = "hidden";
      element.style.height = "auto";

      const height = getComputedStyle(element).height;

      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = 0;

      // Force repaint to make sure the
      // animation is triggered correctly.
      getComputedStyle(element).height;

      // Trigger the animation.
      // We use `requestAnimationFrame` because we need
      // to make sure the browser has finished
      // painting after setting the `height`
      // to `0` in the line above.
      requestAnimationFrame(() => {
        element.style.height = height;
      });
    };

    const afterEnter = (element) => {
      element.style.height = "auto";
    };
    const leave = (element) => {
      const height = getComputedStyle(element).height;

      element.style.height = height;

      // Force repaint to make sure the
      // animation is triggered correctly.
      getComputedStyle(element).height;

      requestAnimationFrame(() => {
        element.style.height = 0;
      });
    };

    return {
      isOpen,
      toggleAccordion,
      accordionClasses,
      enter,
      afterEnter,
      leave,
    };
  },
};
</script>

<style scoped>
* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>

<style lang="scss">
.expand-enter-active,
.expand-leave-active {
  transition: height 0.5s ease-in-out;
  overflow: hidden;
}

.expand-enter,
.expand-leave-to {
  height: 0;
}
.accordion {
  margin: 20px;
  margin: 20px auto;
  width: 80%;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.4);

  & p {
    text-align: left;
  }
}

.message {
  margin: auto;
}
.message-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px 10px;
  // max-width: 200px;
  margin: auto;
  color: var(--primary);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.message-header h2 {
  margin-right: 10px;
}

.message-header:hover {
  background: var(--primary);
  color: #fefefe;
}
.message-body {
  padding: 0;

  border-top: none;
  text-align: left !important;
  // overflow: hidden;
  // transition: 0.5s ease all;
}
.message-content {
  padding: 20px;
}
</style>
