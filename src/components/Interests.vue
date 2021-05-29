<template>
  <div id="interests">
    <h1>Interests</h1>
    <div id="interests-content">
      <div @click="() => showModal(0)" class="interest">
        <h3>Music</h3>
        <img class="interest-icon" src="../assets/ukulele.png" alt="" />
      </div>
      <div @click="() => showModal(1)" class="interest">
        <h3>D&D</h3>
        <img class="interest-icon" src="../assets/dndDice.png" alt="" />
      </div>
      <div @click="() => showModal(2)" class="interest">
        <h3>Meditation</h3>
        <img class="interest-icon" src="../assets/meditation.png" alt="" />
      </div>
      <div @click="() => showModal(3)" class="interest">
        <h3>Quantified Self</h3>
        <img class="interest-icon" src="../assets/growth.png" alt="" />
      </div>
    </div>

    <Modal v-show="isModalVisible[0]" @close="() => closeModal(0)">
      <template v-slot:header>
        <h3>Music</h3>
      </template>
      <template v-slot:body>
        <p>
          Music has always been a very important piece of my life. For me it's
          an amazing creative outlet and a great way of conveying emotions.
        </p>
      </template>
    </Modal>
    <Modal v-show="isModalVisible[1]" @close="() => closeModal(1)">
      <template v-slot:header>
        <h3>Dungeons and Dragons</h3>
      </template>
      <template v-slot:body>
        <p>D&D!!! WHOOO</p>
      </template>
    </Modal>
    <Modal v-show="isModalVisible[2]" @close="() => closeModal(2)">
      <template v-slot:header>
        <h3>Meditation</h3>
      </template>
      <template v-slot:body>
        <p>Meditation</p>
      </template>
    </Modal>
    <Modal v-show="isModalVisible[3]" @close="() => closeModal(3)">
      <template v-slot:header>
        <h3>Quantified Self</h3>
      </template>
      <template v-slot:body>
        <p>Measurement of self!</p>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      isModalVisible: [false, false, false, false],
    };
  },
  methods: {
    showModal(i) {
      this.isModalVisible[i] = true;
    },
    closeModal(i) {
      this.isModalVisible[i] = false;
    },
  },
};
</script>

<style lang="scss">
.interest {
  cursor: pointer;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h3 {
    margin: 0;
  }

  &:hover {
    .interest-icon {
      filter: invert(0%) sepia(0) saturate(0) hue-rotate(0) brightness(0%)
        contrast(1000%);
    }
    color: black;
    //background: rgba(255, 255, 255, 0.1);
    filter: invert(37%) sepia(88%) saturate(3024%) hue-rotate(324deg)
      brightness(92%) contrast(84%);
  }
}
.interest-icon {
  filter: invert(9%) sepia(14%) saturate(343%) hue-rotate(358deg)
    brightness(113%) contrast(103%);
  max-width: 150px;
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

  grid-template-columns: repeat(auto-fit, minmax(175px, 1fr));
  grid-gap: 30px;
  justify-content: center;
  margin: auto;
  max-width: 1200px;
  padding: 0px 1em;
}
</style>
