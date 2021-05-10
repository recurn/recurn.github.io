<template>
  <div id="contact">
    <h1>Contact</h1>
    <p>Send me an email and I'll get back to you as soon as I can</p>
    <form v-if="!submit" class="contact-form" @submit.prevent="sendEmail">
      <label>Name</label>
      <input
        class="contact-input"
        v-model="name"
        type="text"
        name="from_name"
      />
      <label>Email</label>
      <input
        class="contact-input"
        v-model="email"
        type="email"
        name="reply_to"
      />
      <label>Message</label>
      <textarea
        class="contact-input"
        v-model="message"
        name="message"
      ></textarea>
      <input class="send-button" type="submit" value="Send Email" />
    </form>
    <div class="contact-form" v-else-if="submit">
      <h2>Thanks for contacting me!</h2>
    </div>
  </div>
</template>


<script>
import emailjs from "emailjs-com";

export default {
  name: 'ContactUs',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      submit: false
    }
  },
  methods: {
    sendEmail(e) {
      console.log(this.name, this.email, this.message);
      try {
        emailjs.sendForm('service_u3gv6fc', 'template_esnzlib', e.target,
        'user_APNEJmkNGSjX5gtLqF5xn', {
          name: this.name,
          email: this.email,
          message: this.message
        })
        this.submit = true;

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    }
  }
}
</script>

<style>
#contact {
  background: var(--primary);
  padding: 20px;
}

#contact h1, #contact p {
  color: var(--ivory);
}

.contact-form {
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  max-width: 500px;
  background: #fefefe;
  padding: 20px;
  text-align: left;
  border-radius: 5px;
  font-size: 1.5rem;
  border: 2px solid rgba(0, 0, 0, 0.513);
}

.contact-input {
  height: 2rem;
  font-size: 1.3rem;
  border-radius: 4px;
  margin-bottom: 20px;
  border: none;
  box-shadow: 2px 2px 2px 2px #0000005e;
  padding: 5px;
}

.contact-input:focus {
  border: none;
  outline: none;
}

.contact-form textarea {
  min-height: 150px;
}

.contact-form .send-button {
  margin-top: 20px;
  height: 50px;
  font-size: 1.5rem;
  cursor: pointer;
  border: 2px solid var(--ruby);
  border-radius: 4px;
  background: none;
  color: var(--ruby);
  box-shadow: 2px 2px 1px 1px #52014e5e;
}

.send-button:hover {
  background: var(--ruby);
  color: white;
}
</style>
