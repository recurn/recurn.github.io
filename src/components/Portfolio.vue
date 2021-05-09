<template>
  <div id="portfolio">
    <h1>Portfolio</h1>
    <div id="portfolio-container">
      <div class="portfolio-grid-container">
        <div class="portfolio-background" id="evolving-cyborgs"></div>
        <div class="portfolio-content">
          <h2>Evolving Cyborgs</h2>
          <p>A gamified habit tracker</p>
          <button class="slide-button">
            <p>
              <router-link to="/evolvingcyborgs">
                <span class="bg"></span>
                <span class="base"></span>
                <span class="text">Learn More</span>
              </router-link>
            </p>
          </button>
          <div class="logos">
            <span class="logo"
              ><img src="../assets/logo.png" alt="" height="50" />Vue</span
            >
            <span class="logo"
              ><img
                src="../assets/Firebase_Logo_Logomark.png"
                alt=""
              />FireBase</span
            >
            <span class="logo"
              ><img src="../assets/js_html_css.png" alt="" />Web</span
            >
            <span class="logo"><img src="../assets/PWA.png" alt="" />PWA</span>
          </div>
        </div>
      </div>
      <div class="portfolio-grid-container">
        <div class="portfolio-background darker" id="portfolio-ml-agents"></div>
        <div class="portfolio-content">
          <h2>ML Agents</h2>
          <p>A Machine Learning Tournament in Unity</p>
          <button class="slide-button">
            <p>
              <router-link to="/evolvingcyborgs">
                <span class="bg"></span>
                <span class="base"></span>
                <span class="text">Learn More</span>
              </router-link>
            </p>
          </button>
          <div class="logos">
            <span class="logo"
              ><img src="../assets/c_sharp.png" alt="" height="50" />C#</span
            >
            <span class="logo"
              ><img
                src="../assets/unity-tab-circle-white.png"
                alt=""
              />Unity</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from "@/components/Accordion.vue";

export default {
  components: { Accordion },
};
</script>

<style lang="scss">
#portfolio {
  color: var(--ivory);
  background: var(--primary);
  padding: 20px;

  & h1 {
    margin-top: 0px;
    padding: 20px;
  }

  & h2 {
    // color: var(--ruby);
  }
}
.logo {
  display: flex;
  flex-direction: column;
  margin: 0px 10px;

  & img {
    height: 100%;
    width: auto;
    max-height: 50px;
    object-fit: scale-down;
  }
}
.logos {
  display: flex;
}

#portfolio {
  $pink: var(--ruby);

  & .text,
  .bg .base {
    color: var(--ruby);
  }

  & span.base {
    background: var(--dark-blue);
  }
}

#portfolio p {
  padding: 0px;
  margin: 0px;
}

button {
  background: none;
  font-size: 25px;
  margin-bottom: 30px;
  padding: 10px 30px;
  box-shadow: none;
  border: none;
  color: var(--ruby);
  min-width: 200px;
  background-clip: content-box;

  & #portfolio span .text {
    color: var(--ruby);
  }

  &:hover {
    cursor: pointer;
  }
}
#portfolio p span.base {
  border: 2px solid var(--ruby);
  z-index: 4;
}
#portfolio p span.bg {
  background: rgb(68, 94, 143);
}

#evolving-cyborgs {
  background-image: url("../assets/evolving-cyborgs.png");
}

#portfolio-ml-agents {
  background-image: url("../assets/ML_Agents_scene.png");
}

#portfolio-container {
  display: grid;
  align-items: center;
  text-align: center;
  overflow: auto;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  margin: auto;
  max-width: 1200px;
  padding: 50px 10px;
}

.portfolio-grid-container {
  position: relative;
  box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.1);
}

.portfolio-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 5;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  opacity: 0;
}

.portfolio-background {
  height: 335px;
  background-size: cover;
  z-index: 1;
}

.portfolio-grid-container:hover {
  & .portfolio-background {
    filter: blur(3px) opacity(80%) brightness(30%);
  }
  & .darker {
    filter: blur(3px) opacity(90%) brightness(50%);
  }

  & .portfolio-content {
    transition: opacity 0.8s ease;
    opacity: 100;
  }
}

/* .hexagon {
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
} */
</style>
