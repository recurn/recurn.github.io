<template>
  <div class="portfolio-page" id="evolving-cyborgs-bg">
    <div id="evolving-cyborgs-portfolio" class="portfolio-content-page">
      <div class="title shadow-box" id="evolving-cyborgs-title">
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
          <span class="logo"
            ><img
              src="../assets/_presskit_primevue-logo.png"
              alt=""
            />PrimeVue</span
          >
          <span class="logo"><img src="../assets/PWA.png" alt="" />PWA</span>
        </div>
      </div>

      <div class="summary shadow-box">
        <h2>My Role</h2>
        <p>Owner, designer and sole creator of a personal project</p>
        <h3>What is a gamified habit tracker?</h3>
        <p>
          Gamified habit trackers are a genre of app in which elements from
          video games (such as experience, levels, acheievemnts and character
          stats) are used to provide additional motivation to the user to
          complete real world tasks.
        </p>
      </div>
      <div class="problem shadow-box">
        <h2>The Problem</h2>
        <p>
          This project was originally bourne out of frustrations with similar
          existing apps. Here's what I felt was wrong with other attempts:
        </p>
        <Accordion header="1. Punishing the User">
          <p>
            A user should always have a positive experience when interacting
            with your application. This can be tricky to accomplish with
            something like a habit tracker because there needs to be a failure
            state when a habit is not completed. There needs to be a form of
            punishment for failure which doesn't cause your user to feel bad
            about using your app.
          </p>
          <h3>Habitica</h3>
          <p>
            Habitica is the most popular app within this area and unfornuately
            provides a form of punishment which does not feel good to use. When
            you log on to the app the first thing you are greeted with is a
            modal asking you about habits which were left uncomplete from the
            day before. If you haven't completed them, you take damage to your
            health.
          </p>
          <p><strong> This is a bad design. </strong></p>
          <p>
            Because the punishment is only applied the next time you log in the
            punishment can be avoided completely by not logging in to the app.
            This causes users to avoid logging in after they have had a bad day
            where habits were not completed.
          </p>
          <p>
            If you want to avoid being punished the next time you log in you
            have 2 choices:
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
            tracker in the first place. Personally, this is what caused me to
            stop using the app entirely, as I noticed I would start feeling
            anxious every time I opened the app and if I hadn't completed all my
            habits the previous day I wouldn't want to open the app at all.
          </p>
        </Accordion>
        <Accordion header="2. Device Restrictions">
          I don't like being locked in to a single device. I want to be able to
          access the app on both desktop and mobile. This allows me the
          convenience of mobile, while still allowing the option of using a
          mouse and keyboard.
        </Accordion>
        <Accordion header="3. No Custom Tracking & Data Lock In">
          I like tracking lots of things about my life, but I don't like it when
          all this data is stuck in silos. Allowing custom data types for
          tracking, or at least having an API available to export the data
          somewhere else is a must for me.
        </Accordion>
      </div>
      <div class="solution shadow-box">
        <h2>The Solution</h2>
        <div class="shadow-box">
          <h3>Version 1 - Spring 2020</h3>
          <div class="logos">
            <span class="logo"
              ><img src="../assets/logo.png" alt="" height="50" />Vue 2</span
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
          </div>
          <p>
            I decided that the only way I was going to solve any of these
            problems is if I made an application myself. This project is what
            originally encouraged me to pursue web development
          </p>
          <p>---</p>
          <h4>Design Process</h4>
          <p>The first concepts</p>

          <div class="flex-horz">
            <img
              class="drawing-slides"
              src="../assets/evolving_cyborgs/drawing1.png"
              alt="first drawing"
            />
            <img
              class="drawing-slides"
              src="../assets/evolving_cyborgs/drawing2.jpg"
              alt="second drawing"
            />
            <img
              class="drawing-slides"
              src="../assets/evolving_cyborgs/drawing3.jpg"
              alt="third drawing"
            />
            <img
              class="drawing-slides"
              src="../assets/evolving_cyborgs/drawing4.jpg"
              alt="fourth drawing"
            />
            <img
              class="drawing-slides"
              src="../assets/evolving_cyborgs/drawing5.jpg"
              alt="first drawing"
            />
            <img
              class="drawing-slides"
              src="../assets/evolving_cyborgs/drawing6.jpg"
              alt="first drawing"
            />
          </div>
          <div class="slide-buttons">
            <button
              class="w3-button w3-display-left"
              @click="() => plusDivs(-1)"
            >
              &#10094;
            </button>
            <h5>{{ slideIndex }}</h5>
            <button
              class="w3-button w3-display-right"
              @click="() => plusDivs(+1)"
            >
              &#10095;
            </button>
          </div>
          <p>Video showing some of the basic features</p>
          <a
            href="https://www.youtube.com/watch?v=jHzjWNivhKY&t=26s"
            target="blank"
            class="slide-button"
          >
            <p>
              <span class="bg"></span><span class="base"></span
              ><span class="text">Open Video</span>
            </p>
          </a>
          <div>
            <h3>Final Product</h3>
            <img
              id="final_app"
              src="../assets/evolving_cyborgs/updatedApp.png"
              alt="first drawing"
            />
          </div>

          <div id="reflection1">
            <p>---</p>
            <h3>Reflection</h3>
            <p>
              This was my first time embarking on a serious web app project
              using a frontend framework. Here's some of the lessons I learned
              along the way:
            </p>
            <h4>1. How to use data reactivity the wrong way</h4>
            <p>
              I was modifying my data using google cloud functions instead of
              modifying the state on the front end directly (which I later
              realised was the entire point of a front-end framework like Vue).
              This introduced a noticeable amount of lag when you interacted
              with the interface.
            </p>
            <h4>2. Use tabs to navigate instead of scrolling</h4>
            <p>
              It felt strange to have all the components on the same page. Using
              tabs would feel much more natural and be easier to navigate.
            </p>
            <h4>3. No need to remake the wheel (of todo lists)</h4>
            <p>
              There's already a bunch of great software designed around todo
              lists. My implementation of one didn't end up being that useful as
              I would end up managing my tasks in a separate program only to
              have to copy them in. In the future, I would just connect to an
              external piece of software using their API.
            </p>
            <h3>Final Thoughts</h3>
            <p>
              Overall I felt like the concept I was going for was solid, but
              there was lots of room for improvement in the execution.
            </p>
            <p>
              Of my original 3 problems I set out to fix I was able to solve the
              first one - Punishing the User. My version of the app didn't
              actively punish you for missing a day, though it would reset your
              streaks and reduce your xp gain. I found this to be a good
              comprimise and it eliminated a major pain point I had with
              Habitica.
            </p>
          </div>
        </div>
        <div class="shadow-box">
          <h3>Version 2 - Winter/Spring 2021</h3>
          <div class="logos">
            <span class="logo"
              ><img src="../assets/logo.png" alt="" height="50" />Vue 3</span
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
            <span class="logo"
              ><img
                src="../assets/_presskit_primevue-logo.png"
                alt=""
              />PrimeVue</span
            >
            <span class="logo"><img src="../assets/PWA.png" alt="" />PWA</span>
          </div>
          <p>
            I decided to revisit the project almost a year later with the
            intention of improving on it. I still didn't feel like I had created
            the piece of software that I was looking for. Primary among these
            concerns was one piece of feedback I kept recieving from friends who
            tried the app - it wasn't very good on mobile.
          </p>
          <h3>Design Process</h3>
          <p>So this time, I decided to design for mobile first</p>
          <img
            src="../assets/evolving_cyborgs/evolving_cyborgs_concept.jpg"
            alt=""
          />
          <p>
            Opting for a card based design and changing tabs through a menu at
            the bottom allows for a very smooth mobile experience. Adding PWA
            support was a priority so that it could behave like a native mobile
            app.
          </p>
          <p>
            I also decided to focus on the habits section of the app, as this is
            what was being used the most.
          </p>
          <h3>Final Product</h3>
          <img
            src="../assets/evolving_cyborgs/evolving-cyborgs-mobile.png"
            alt=""
          />
          <a
            href="https://evolving-cyborgs.web.app"
            target="blank"
            class="slide-button"
          >
            <p>
              <span class="bg"></span><span class="base"></span
              ><span class="text">Live Demo</span>
            </p>
          </a>
          <h4>Features include:</h4>
          <p>A daily habit tracker & stats</p>
          <p>
            Vices - time since last performed an action you are trying to stop
          </p>
          <p>Friends list showing their level and current experience</p>
          <p>
            Daily checklist (works well for things like taking vitamins)
          </p>

          <h3>Reflections</h3>
          <p>
            This version of the app improved significantly upon the original and
            has become my daily habit tracker.
          </p>
          <p>
            The only major issue I see with it is the use of Firebase as a
            backend, which presents some problems if I want to extend this app
            and include more types of data tracking in the future as the
            collection/document structure of firebase seems like it can easily
            become an expensive mess if not properly managed
          </p>
        </div>
      </div>
      <div class="shadow-box">
        <h2>Future Directions/Road Map</h2>
        <h4>In Progress</h4>
        <p>
          Add in stats (like strength, dexterity, etc) which can be increased
          through gaining xp on a related action
        </p>
        <h4>Planned</h4>
        <p>
          Create activites tab - actions which can be performed multiple times
          per day
        </p>
        <p>Expanded stats and details pages for all actions</p>
        <h4>Considering</h4>
        <p>Switch over to Graph QL instead of a NoSQL like Firebase</p>
        <p>Make an API so it can integrate with other services</p>
        <p>Add custom data types for tracking</p>
        <p>Timeline view of all activites</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Accordion from "@/components/Accordion";
  import { ref, onMounted } from "vue";

  export default {
    components: { Accordion },
    setup() {
      const slideIndex = ref(1);

      onMounted(() => {
        showDivs(slideIndex.value);
      });

      const plusDivs = (n) => {
        slideIndex.value += n;
        showDivs(slideIndex.value);
      };

      const showDivs = (n) => {
        var i;
        var x = document.getElementsByClassName("drawing-slides");
        if (n > x.length) {
          slideIndex.value = 1;
        }
        if (n < 1) {
          slideIndex.value = x.length;
        }
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        x[slideIndex.value - 1].style.display = "block";
      };

      return { showDivs, plusDivs, slideIndex };
    },
  };
</script>

<style>
  #evolving-cyborgs-title {
  }
  .solution .logos {
    justify-content: center;
    margin: 20px auto;
  }
  .solution .logos .logo img {
    object-fit: scale-down;
  }
  #evolving-cyborgs-bg {
    width: 100%;
    position: absolute;
    background-image: url("../assets/evolving_cyborgs/webb.png");
  }
  /* #evolving-cyborgs-portfolio {
    width: 90%;
    max-width: 1000px;
    background: #fefefeb4;
    margin: 0px auto;
    padding: 50px;
  } */
  #evolving-cyborgs-portfolio .accordion {
    background: #fefefe;
  }

  .shadow-box {
    padding: 20px;
    background: #fefefe;
    margin: 30px auto;
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.2);
  }

  .accordion img,
  .accordion p,
  .accordion h2 {
    text-align: center;
  }
  .slide-buttons {
    display: flex;
    justify-content: center;
  }
  .slide-button button {
    width: 20px;
  }
  .slide-button h5 {
    width: 20px;
  }
  .portfolio-page {
    position: absolute;
    top: 0px;
  }

  .portfolio-page .accordion .message-header {
    font-size: 0.7em;
  }

  .portfolio-page .accordion {
    width: 100%;
  }

  .title {
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
    flex-wrap: wrap;
  }

  .solution img {
    object-fit: fill;
    height: 400px;
    max-width: 100%;
  }
</style>
