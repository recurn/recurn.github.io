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
    <article class="message" :class="accordionClasses">
      <div class="message-header" @click="toggleAccordion">
        <h2>Interests</h2>
      </div>
      <div class="message-body">
        <div class="message-content">
          These are some interests
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  setup() {
    const isOpen = ref(false);

    const toggleAccordion = () => {
      isOpen.value = !isOpen.value;
    };

    const seriousPic = require("../assets/SeriousPhone.png");
    const smilePic = require("../assets/SmilePhone-Green.png");

    const currentPicture = ref(seriousPic);

    const accordionClasses = computed(() => {
      return {
        "is-closed": !isOpen.value,
        "is-primary": !isOpen.value,
        "is-dark": !isOpen.value,
      };
    });

    return {
      seriousPic,
      currentPicture,
      smilePic,
      isOpen,
      toggleAccordion,
      accordionClasses,
    };
  },
};
</script>
  
<style>
#about {
  position: relative;
  margin: 50px auto;
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

#interests {
  margin: 50px auto;
}

.message {
  max-width: 500px;
  margin: auto;
}
.message-header {
  cursor: pointer;
}
.message-body {
  padding: 0;
  max-height: 10em;
  overflow: hidden;
  transition: 0.3s ease all;
}
.is-closed .message-body {
  max-height: 0;
}
.message-content {
  padding: 20px;
}
</style>