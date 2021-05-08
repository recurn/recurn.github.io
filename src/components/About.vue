<template>
  <div id="about">
    <div id="about-desc">
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
        id="portrait"
        :src="seriousPic"
        @mouseenter="swap"
        :style="{'z-index': seriousZ}"
        alt=""
      />
      <img class="portrait" :style="{zIndex: smileZ}" :src="smilePic" @mouseleave="swap" alt="">
    </div>
  </div>

  <div id="interests">
      <h1>Interests</h1>
      <div id="interests-content">
        <div><h3>Music</h3><img class="interest-icon" src="../assets/ukulele.png" alt=""></div>
        <div><h3>D&D</h3><img class="interest-icon" src="../assets/dndDice.png" alt=""></div>
        <div><h3>Meditation</h3><img class="interest-icon" src="../assets/meditation.png" alt=""></div>
        <div><h3>Quantified Self</h3><img class="interest-icon" src="../assets/growth.png" alt=""></div>
      </div>
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

    const seriousZ = ref(1);

    const smileZ = ref(-1);

    const swap = () => {
      seriousZ.value *= -1;
      smileZ.value *= -1; 
    }

    const open = ref(false);

    return {
      seriousPic,
      currentPicture,
      smilePic,
      seriousZ,
      smileZ,
      open,
      swap
    };
  },
};
</script>
  
<style lang="scss">
.interest-icon{
  filter: invert(9%) sepia(14%) saturate(343%) hue-rotate(358deg) brightness(113%) contrast(103%);
  max-width: 150px;
}

.portrait {
  height: 80%;
  border-radius: 35%;
  position: absolute;
  z-index: 1;
}
#action {
  height: 90%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px;
  padding: 0px;
}
#about-desc {
  margin: 0px;
}
#about {
  margin: 50px auto;
}
#about p{
  font-size: 20px;
}
#interests {
  color: var(--ivory);
  margin: auto;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  background: var(--primary);
}

#interests h2 {
  margin: 5px 10px;
}

#interests-content {
  display: grid;
  align-items: center;
  text-align: center;

  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  margin: auto;
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