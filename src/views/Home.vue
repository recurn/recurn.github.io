<template>
  <div class="home">
    <div id="boids-display"></div>
    <div class="content">
      <Splash />
      <About />
      <div class="divider" />
      <Portfolio />
      <div class="divider"></div>
      <Resume />
      <div class="divider"></div>
      <Contact />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Splash from "@/components/Splash.vue"
import About from "@/components/About.vue"
import Portfolio from "@/components/Portfolio.vue"
import Resume from "@/components/Resume.vue"
import Contact from "@/components/Contact.vue"

export default {
  components: {Splash, About, Portfolio, Resume, Contact},
  name: "Home"
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

$base: #0f192300;
$white: #ece8e1;
$pink: var(--primary);
$height: 54px;
$transition: 0.3s ease-out all;

#intro a {
  width: 100%;
  max-width: 240px;
  height: $height;
  padding: 8px;
  font-size: 0.8rem;
  font-weight: 900;
  color: $pink;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  margin: 10px 0;

  &:after,
  &:before {
    content: "";
    width: 1px;
    position: absolute;
    height: 8px;
    background: $base;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  &:before {
    right: 0;
    left: initial;
  }
  & p {
    margin: 0;
    height: $height;
    line-height: $height;
    box-sizing: border-box;
    z-index: 1;
    left: 0;
    font-size: 18px;
    width: 100%;
    position: relative;
    overflow: hidden;
    & span.base {
      box-sizing: border-box;
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
      left: 0;
      border: 1px solid $pink;
      &:before {
        content: "";
        width: 2px;
        height: 2px;
        left: -1px;
        top: -1px;
        background: $base;
        position: absolute;
        transition: $transition;
      }
    }
    & span.bg {
      left: -5%;
      position: absolute;
      background: $pink;
      width: 0;
      height: 100%;
      z-index: 3;
      transition: $transition;
      transform: skewX(-10deg);
    }
    & span.text {
      z-index: 4;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      &:after {
        content: "";
        width: 4px;
        height: 4px;
        right: 0;
        bottom: 0;
        background: $base;
        position: absolute;
        transition: $transition;
        z-index: 5;
      }
    }
  }
  &:hover {
    color: $white;
    & span.bg {
      width: 110%;
    }
  }
}
.content {
  min-width: 350px;
}

.divider {
  height: 50px;
  background: var(--primary);
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

#intro p {
  font-size: 1.5rem;
}
#mid-bar {
  height: 50px;
  bottom: 0px;
  position: fixed;
  background: #57cbab;
}

.portraits {
  margin-top: 50px;
  width: 500px;
  position: relative;
}
.portrait {
  width: 100%;
  max-width: 800px;
  min-width: 200px;
  top: 0;
  left: 0;
  border-radius: 35%;
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
