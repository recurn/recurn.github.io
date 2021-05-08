<template>
  <div class="home">
    <div id="boids-display"></div>
    <div class="content">
      <Splash />
      <Portfolio />
      <About />
      <div class="divider" />
      <Resume />
      <Contact />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Splash from "@/components/Splash.vue";
import About from "@/components/About.vue";
import Portfolio from "@/components/Portfolio.vue";
import Resume from "@/components/Resume.vue";
import Contact from "@/components/Contact.vue";

export default {
  components: { Splash, About, Portfolio, Resume, Contact },
  name: "Home",
};
</script>

<style lang="scss">
#boids-display {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  width: 100%;
  height: 100%;
  filter: blur(2px);
}

.content {
  min-width: 350px;
}

.divider {
  height: 5px;
  background: var(--dark-blue);
}

#intro {
  min-height: 100vh;
  align-items: center;
  text-align: center;
}

#intro {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#intro h1 {
  font-size: 3rem;
}
#mid-bar {
  height: 50px;
  bottom: 0px;
  position: fixed;
  background: #57cbab;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
canvas {
  display: block;
}
</style>
