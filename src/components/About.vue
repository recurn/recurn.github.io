<template>
  <div id="about">
    <div>
      <h1>About</h1>
      <p>
        A recent grad from the University of British Columbia, where I studied
        cognitive systems - a combination of psychology, computer science,
        philosophy and linguistics.
      </p>
      <p>
        I LOVE creating and teaching with interactive computer programs.
        Everything from web apps to video games to AI, if I can make interacting
        with the system a playful, interesting experience I'll do it!
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

  <div id="interests">
    <Accordion :header="'Interests'">
      <div id="interests-content">
        <div><h3>Music</h3></div>
        <div><h3>D&D</h3></div>
      </div>
    </Accordion>
  </div>
</template>

<script>
import { ref } from "vue";
import Accordion from "@/components/Accordion.vue";

export default {
  components: { Accordion },
  setup() {
    const seriousPic = require("../assets/SeriousPhone.png");
    const smilePic = require("../assets/SmilePhone-Green.png");

    const currentPicture = ref(seriousPic);

    const open = ref(false);

    return {
      seriousPic,
      currentPicture,
      smilePic,
      open,
    };
  },
};
</script>
  
<style>
.accordion-enter-active,
.accordion-leave-active {
  transition: opacity 0.5s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
}

#about {
  position: relative;
  margin: 50px auto;
}
#interests {
  display: flex;
  margin: auto;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 0;
  margin: 0 auto;
  background: var(--dark-blue);
}

#interests .accordion .message-body {
  color: var(--ivory);
}

#interests .accordion .message-header {
  color: var(--ivory);
  border-color: var(--ivory);
  margin: 10px auto;
}

#interests .accordion .message-header:hover {
  color: var(--dark-blue);
  background: var(--ivory);
}

#interests h2 {
  margin: 5px 10px;
}

#interests-content {
  display: grid;
  align-items: center;
  text-align: center;

  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  justify-content: center;
  max-width: 1200px;
  padding: 0px 1em;
}

#about {
  display: grid;
  align-items: center;
  text-align: center;

  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  justify-content: center;
  max-width: 1200px;
  padding: 0px 1em;
}

#about div {
  padding: 10%;
}
</style>