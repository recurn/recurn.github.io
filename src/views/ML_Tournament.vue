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
        <h2>My Role</h2>
        <p>
          Lead developer on team of 2 teaching assistant students, done in
          collaboration with the professor of the course
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
      <div class="problem">
        <h2>The Problem</h2>
        <p>
          With the transition to an online-only teaching structure due to
          covid-19, the UBC course Cognitive Systems 300 could no longer use the
          existing in-person labs which involved the creation of physical robots
          using Arduinos.
        </p>
        <p>
          Myself, along with another student, were hired to design a set of new
          labs using Unity, a game design software. 10 brand-new labs would need
          to be created.
        </p>
      </div>
      <div class="solution">
        <div class="shadow-box">
          <h2>The Solution</h2>
        </div>
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

  #ml-tournament-portfolio {
    background: #fefefed0;
  }
</style>
