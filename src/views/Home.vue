<template>
  <div class="home">
    <div id="boids-display"></div>
    <div class="content">
      <div id="splash">
        <div id="intro">
          <h1>
            Hi, I'm <br />
            Reid Patterson
          </h1>
          <p>I make interactive web experiences</p>
          <a href="/#portfolio"
            ><p>
              <span class="bg"></span><span class="base"></span
              ><span class="text">My Work</span>
            </p></a
          >
          <a href="/#portfolio"
            ><p>
              <span class="bg"></span><span class="base"></span
              ><span class="text">Contact</span>
            </p></a
          >
        </div>
      </div>
      <div class="divider"></div>
      <div id="about">
        <div>
          <h1>About</h1>
          <p>
            A recent grad from the University of British Columbia, where I
            studied cognitive systems - a combination of psychology, computer
            science, philosophy and linguistics.
          </p>
          <p>
            I LOVE creating and teaching with interactive computer programs.
            Everything from web apps to video games to AI, if I can make
            interacting with the system a playful, interesting experience I'll
            do it!
          </p>
        </div>

        <div id="action">
          <img
            class="portrait"
            :src="currentPicture"
            @mouseenter="currentPicture = smilePic"
            @mouseleave="currentPicture = seriousPic"
            alt=""
          />
        </div>
      </div>
      <div class="divider" />
      <div id="portfolio">
        <h1>Portfolio</h1>
        <div class="hexagon">
          <p>Text</p>
        </div>
      </div>
      <div class="divider"></div>
      <div id="resume">
        <h1>Resume</h1>
        <h2>Education</h2>
        <h2>Work Experience</h2>
        <h2>Skills</h2>
      </div>
      <div class="divider"></div>
      <div id="contact">
        <h1>Contact</h1>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";

export default {
  name: "Home",
  setup() {
    const serious = ref(true);

    const seriousStyle = ref(100);
    const smileStyle = ref(0);

    const enterImage = () => {
      seriousStyle.value = 0;
      smileStyle.value = 100;
    };

    const leaveImage = () => {
      seriousStyle.value = 100;
      smileStyle.value = 0;
    };

    const seriousPic = require("../assets/SeriousPhone.png");
    const smilePic = require("../assets/SmilePhone-Green.png");

    const currentPicture = ref(seriousPic);

    return {
      seriousStyle,
      smileStyle,
      enterImage,
      leaveImage,
      seriousPic,
      serious,
      currentPicture,
      smilePic,
    };
  },
};
</script>

<style lang="scss">
.hexagon {
  width: 100px;
  height: 57.735px;
  background: var(--primary);
  position: relative;
}
.hexagon::before {
  content: "";
  position: absolute;
  top: -28.8675px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 28.8675px solid var(--primary);
}
.hexagon::after {
  content: "";
  position: absolute;
  bottom: -28.8675px;
  left: 0;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 28.8675px solid var(--primary);
}

#about {
  position: relative;
  margin: 50px;
}
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

#about {
  display: grid;
  align-items: center;
  text-align: center;

  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  justify-content: center;
  max-width: 1200px;
  padding: 100px;
  margin: auto;
}

#intro {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.transparent {
  opacity: 0;
}

.visible {
  opacity: 100;
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
