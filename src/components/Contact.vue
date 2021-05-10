<template>
  <div id="contact">
    <h1>Contact</h1>
    <form class="contact-form" @submit.prevent="sendEmail">
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
      message: ''
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

#contact h1 {
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
  font-size: 1.5rem;
  border-radius: 4px;
  border: none;
  box-shadow: 2px 2px 3px 3px #0000005e;
}

.contact-input:focus {
  border: none;
}

.contact-form textarea {
  min-height: 100px;
  font-size: 1.5rem;
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
