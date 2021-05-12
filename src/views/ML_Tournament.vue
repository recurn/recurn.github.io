<template>
  <div class="portfolio-page" id="ml-tournament-bg">
    <div id="ml-tournament-portfolio" class="portfolio-content-page">
      <div class="title">
        <h1>Unity ML Tournament</h1>
        <p>
          A Unity based machine learning tournament designed for use in Cognitve
          Systems 300
        </p>
        <a href="" target="blank" class="slide-button">
          <p>
            <span class="bg"></span><span class="base"></span
            ><span class="text">Demo</span>
          </p>
        </a>
        <a href="" target="blank" class="slide-button">
          <p>
            <span class="bg"></span><span class="base"></span
            ><span class="text">Code</span>
          </p>
        </a>
        <h2>My Role:</h2>
        <p>
          Lead developer on team of 2 students, created in collaboration with
          the professor of the course
        </p>
      </div>
      <div class="summary">
        <h3>What did the tournament involve?</h3>
        <p>
          We created a Unity environment in which students could create an agent
          which would autonomously compete in a 1v1 tournament based on a
          capture the flag game
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  #ml-tournament-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url("../assets/ml_tournament/dark-honeycomb.png");
  }
  .portfolio-content-page {
    width: 90%;
    margin: auto;
    background: #fefefec0;
    margin-top: 150px;
    padding: 50px;
    max-width: 1000px;
  }
</style>
