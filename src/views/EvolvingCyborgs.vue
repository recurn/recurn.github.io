<template>
  <div class="content portfolio-page" id="evolving-cyborgs-portfolio">
    <div class="title">
      <h1>Evolving Cyborgs</h1>
      <p>A better gamified habit tracker</p>
      <a
        href="https://evolving-cyborgs.web.app"
        target="blank"
        class="slide-button"
      >
        <p>
          <span class="bg"></span><span class="base"></span
          ><span class="text">Demo</span>
        </p>
      </a>
      <a
        href="https://github.com/recurn/evolving-cyborgs/"
        target="blank"
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
      <Accordion header="1. Punishing the User">
        <p>
          A user should always have a positive experience when interacting with
          your application. This can be tricky to accomplish with something like
          a habit tracker because there needs to be a failure state when a habit
          is not completed. There needs to be a form of punishment for failure
          which doesn't cause your user to feel bad about using your app.
        </p>
        <h3>Habitica</h3>
        <p>
          Habitica is the most popular app within this area and unfornuately
          provides a form of punishment which does not feel good to use. When
          you log on to the app the first thing you are greeted with is a modal
          asking you about habits which were left uncomplete from the day before. If you haven't
          completed them, you take damage to your health.
        </p>
        <p><strong> This is a bad design. </strong></p>
        <p>
          Because the punishment is only applied the next time you log in the
          punishment can be avoided completely by not logging in to the app.
          This causes users to avoid logging in after they have had a bad day
          where habits were not completed.
        </p>
        <p>
          If you want to avoid being punished the next time you log in you have
          2 choices:
        </p>
        <ol>
          <li>Lie about completing habits</li>
          <li>
            Complete all habits the previous day without logging in to track
            them
          </li>
        </ol>
        <p>
          Both of these choices are bad and defeat the point of having a habit
          tracker in the first place. Personally, this is what caused me to stop
          using the app entirely, as I noticed I would start feeling anxious
          every time I opened the app and if I hadn't completed all my habits
          the previous day I wouldn't want to open the app at all.
        </p>
      </Accordion>
      <Accordion header="2. Device Restrictions">
      
      </Accordion>
      <Accordion header="3. User Avatar Disconnect"> </Accordion>
      <Accordion header="4. No Custom Tracking & Data Lock In"> </Accordion>
    </div>
    <div class="solution">
      <h2>The Solution</h2>
      <div class="flex-horz">
        <h3>Attempt #1 - Spring 2020</h3>
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
  width: 80%;
  max-width: 1000px;
  margin: auto;
  margin-top: 100px;
}

.portfolio-page .accordion .message-header {
  font-size: 0.7em;
}

.portfolio-page .accordion {
  width: 100%;
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
