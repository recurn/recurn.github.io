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
        Coding has always felt to me like the closest thing humans have to a
        magic superpower. I'm passionate about humanizing the technology space
        and creating a world where computers help humans solve problems.
      </p>
    </div>

    <div id="action">
      <img
        class="portrait"
        id="portrait"
        :src="seriousPic"
        @mouseenter="swap"
        :style="{ 'z-index': seriousZ }"
        alt=""
      />
      <img
        class="portrait"
        :style="{ zIndex: smileZ }"
        :src="smilePic"
        @mouseleave="swap"
        alt=""
      />
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
      };

      const open = ref(false);

      return {
        seriousPic,
        currentPicture,
        smilePic,
        seriousZ,
        smileZ,
        open,
        swap,
      };
    },
  };
</script>

<style lang="scss">


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
  #about p {
    font-size: 20px;
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
