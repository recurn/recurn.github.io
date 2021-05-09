<template>
  <div class="content portfolio-page" id="evolving-cyborgs-portfolio">
    <div class="title">
      <h1>Evolving Cyborgs</h1>
      <p>A better gamified habit tracker</p>
      <a href="https://evolving-cyborgs.web.app" class="slide-button">
        <p>
          <span class="bg"></span><span class="base"></span
          ><span class="text">Demo</span>
        </p>
      </a>
      <a
        href="https://github.com/recurn/evolving-cyborgs/"
        class="slide-button"
      >
        <p>
          <span class="bg"></span><span class="base"></span
          ><span class="text">Code</span>
        </p>
      </a>
    </div>
    <div class="summary">
      <h3>What is a gamified habit tracker?</h3>
      <p>
        Gamified habit trackers are a genre of app in which elements from video
        games (such as experience, levels, acheievemnts and character stats) are
        used to provide additional motivation to the user to complete real world
        tasks.
      </p>
    </div>
    <div class="problem">
      <h2>The problem</h2>
      <p>
        This project was originally bourne out of frustrations with similar
        existing apps. What I felt was wrong about other attempts:
      </p>
      <Accordion header="1. Punishing the User"> </Accordion>
      <Accordion header="2. Device restrictions"> </Accordion>
      <Accordion header="3. User Avatar Disconnect"> </Accordion>
      <Accordion header="4. Punishing the User"> </Accordion>
    </div>
    <div class="solution">
      <h2>The Solution</h2>
      <div class="flex-horz">
        <h3>Attempt #1</h3>
        <p>Spring 2020</p>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from "@/components/Accordion";
export default {
  components: { Accordion },
};
</script>

<style lang="scss">
.portfolio-page {
  margin-top: 50px;
}
.title {
  max-width: 1000px;
  margin: auto;
}

.slide-button p {
  max-width: 240px;
  margin: auto;
}

.flex-horz {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
