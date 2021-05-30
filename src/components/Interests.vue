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
      <div @click="() => showModal(4)" class="interest">
        <h3>Ergonomic Keyboards</h3>
        <img class="interest-icon" src="../assets/keyboard.png" alt="" />
      </div>
    </div>

    <Modal v-show="isModalVisible[0]" @close="() => closeModal(0)">
      <template v-slot:header>
        <img class="modal-icon" src="../assets/ukulele.png" alt="" />
        <h3>Music</h3>
      </template>
      <template v-slot:body>
        <p>
          Music has always been a very important piece of my life. For me it's
          an amazing creative outlet and a great way of conveying emotions. In
          the past, I played french horn and performed in on stage in musicals.
          These days, my instruments of choice are singing and playing my
          ukulele.
        </p>
        <div>
          <h3>Have a listen!</h3>
          <p>Hungover in the city of dust - Autoheart</p>
          <audio controls>
            <source
              src="@/assets/audio/hungover_in_the_city_of_dust.mp3"
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
          <p>Wretch - Autoheart</p>
          <audio controls>
            <source src="@/assets/audio/wretch.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </template>
    </Modal>
    <Modal v-show="isModalVisible[1]" @close="() => closeModal(1)">
      <template v-slot:header>
        <img class="modal-icon" src="../assets/dndDice.png" alt="" />
        <h3>Dungeons and Dragons</h3>
      </template>
      <template v-slot:body>
        <p>
          A favoured pastime of many nerds, I am no exception. There's something
          incredibly entertaining about setting off on an epic adventure with
          your friends.
        </p>
        <p>
          Don't know what D&D is?
          <a
            href="https://dnd.wizards.com/dungeons-and-dragons/what-is-dd"
            target="blank"
            >See an explanation here</a
          >
        </p>
      </template>
    </Modal>
    <Modal v-show="isModalVisible[2]" @close="() => closeModal(2)">
      <template v-slot:header>
        <img class="modal-icon" src="../assets/meditation.png" alt="" />
        <h3>Meditation</h3>
      </template>
      <template v-slot:body>
        <p>
          If I had to choose what one skill has had the most impact on my life,
          it would be meditation. As a daily practitioner for more than 5 years
          I can confidently say that it has improved my quality of life an
          incredible amount.
        </p>
      </template>
    </Modal>
    <Modal v-show="isModalVisible[3]" @close="() => closeModal(3)">
      <template v-slot:header>
        <img class="modal-icon" src="../assets/growth.png" alt="" />
        <h3>Quantified Self</h3>
      </template>
      <template v-slot:body>
        <p>Measurement of self!</p>
      </template>
    </Modal>
    <Modal v-show="isModalVisible[4]" @close="() => closeModal(4)">
      <template v-slot:header>
        <img class="modal-icon" src="../assets/keyboard.png" alt="" />
        <h3>Ergonomic Keyboards</h3>
      </template>
      <template v-slot:body>
        <p>
          My keyboard is one of the most important items in my life and it gets
          used for several hours each day. However, I find many keyboards
          incredibly uncomfortable and so embarked on a mission to find the
          perfect keyboard.
        </p>
        <p>
          After several tries on keyboards which felt unsatisfying, I realized
          the only way I would be completely satisfied is if I built one myself.
        </p>
        <p>
          Here enters the
          <a
            href="https://github.com/abstracthat/dactyl-manuform"
            target="blank"
          >
            Dactyl Manuform.</a
          >
           It's a mechanical, ortho-linear, concave, split keyboard and in it I think I've finally found my true love.
        </p>

        <p>-insert pictures here-</p>
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
      isModalVisible: [false, false, false, false, false],
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

.modal-icon {
  filter: invert(0%) sepia(0) saturate(0) hue-rotate(0) brightness(0%)
    contrast(1000%);
  max-height: 50px;
  max-width: 50px;
  position: absolute;
  top: 20px;
  left: 20px;
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
