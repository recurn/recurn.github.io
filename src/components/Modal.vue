<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<template>
  <transition name="modal-fade">
    <div class="modal-container">
      <div class="modal-backdrop" @click="close"></div>
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            This is the default tile!
          </slot>
        </header>

        <section class="modal-body" id="modalDescription">
          <slot name="body">
            This is the default body!
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
.modal-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9997;
}

.modal-backdrop {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9998;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modal {
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 2px 2px 20px 1px rgb(100, 100, 100);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  z-index: 9999;
  width: 60%;
  max-width: 800px;
  min-width: 350px;

  & h3 {
    padding-left: 10px;
  }

  & a {
    color: var(--ruby);

    &:active {
      color: var(--primary);
    }
  }
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: var(--primary);
  justify-content: center;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  color: var(--primary);
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  height: 10px;
  width: 10px;
  border: none;
  margin: 0;
  padding: 0;
  font-size: 20px;
  /* padding: 10px; */
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
