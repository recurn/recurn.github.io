<template>
  <div class="portfolio-page" id="gu-workshop-bg">
    <div id="ml-tournament-portfolio" class="portfolio-content-page">
      <div class="title shadow-box">
        <h1>Geering Up Workshops Chat</h1>
        <p>
          A small app containing code to be copied and a chat section to
          communicate with instructors
        </p>
        <!-- <a href="" target="blank" class="slide-button">
          <p>
            <span class="bg"></span><span class="base"></span
            ><span class="text">Demo</span>
          </p>
        </a> -->
        <a
          href="https://github.com/recurn/geering-up-workshops"
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
        </div>
      </div>
      <div class="summary shadow-box">
        <h2>My Role</h2>
        <p>
          I was the sole creator of this application, made for the non-profit
          STEM outreach organization Geering Up
        </p>
      </div>
      <div class="problem shadow-box">
        <h2>The Problem</h2>
        <p>
          Geering Up provides workshops for elementary schools located around
          British Columbia. Because of covid-19, these have been provided
          remotely for the year 2021.
        </p>
        <p>
          For several of these workshops, we require the students to begin with
          a template for their python code, which we were originally hosting on
          a google doc. The link to this google doc was given to teachers
          beforehand, but it was not always distributed from there to the
          students before the beginning of the workshop. This sometimes created
          delays and frustrations during the workshop.
        </p>
        <p>
          In addition, the workshops are usually delivered through the teacher's
          computer. This means that the instructors do not have access to the
          students computers or screens, making debugging code very difficult.
          To fix this, we would get them to post web links to their code at the
          bottom of the google doc. But this created additional problems, as
          there was no enforced order of posting (students often budge in line),
          replying to students would quickly become messy, and giving students
          edit access to the google doc resulted in frequent errors being added
          to the code (usually through accidental cutting instead of copying the
          code).
        </p>
      </div>
      <div class="solution">
        <div class="shadow-box">
          <h2>The Solution</h2>
          <p>We needed 3 things to change in order to solve our problems</p>
          <p>
            <strong> 1. Easy to navigate link </strong><br />
            Google Docs are not easy to navigate to without copy and pasting the
            link. By hosting with firebase, I was able to make a custom domain
            name which was significantly shorter and which students could easily
            type in themselves.
          </p>
          <p>
            <strong>2. Easy to copy, uneditable code</strong><br />
            Instead of students copying and pasting code from a google doc, I
            made a code block inside the webpage and an easy button which would
            copy all the code when pressed.
          </p>
          <p>
            <strong>3. Live Chat</strong>
            <br />
            The last component needed was the ability for two way communication
            between students and the workshop instructors. I created a chat box
            at the bottom of the page which would allow students to choose a
            name, then post messages. These messages could be replied to,
            ensuring easy communication between students and instructors. Only
            messages sent within the last hour are loaded to avoid incurring
            charges from firebase.
          </p>
          <img src="../assets/gu_chat/WorkshopChat.jpg" alt="" />
          <p>
            As this was a professional project, the theme chosen had to be
            within Geering Up's branding guidelines. The style therefore mimics
            the main website in colour and feel as much as possible.
          </p>
        </div>
        <div class="shadow-box">
          <h2>Reflections</h2>
          <p>
            The very first time this app was tested with live students, a
            critical problem became apparent immediately. The students were
            spamming junk into the chat, rendering it unusable for its intended
            purpose of communicating with instructors. <br />
            To solve this problem, I first changed the title of the component
            from "Chat" to "Help and Announcements". I also realized that there
            was no need for students to be able to contact one another - they
            have other ways of doing this and are often physically in the same
            room as one another. So I added a way for instructors to add in and
            use admin privilleges. Anyone who is not logged in can only see
            their own messages and those sent by an admin. Admins can see all
            messages. This effectively deplatformed the students and without an
            audience to see their spam, the quantity of messages decreased
            dramatically and the app began to fulfill its intended purpose.
          </p>
          <p>
            A possible future problem is if multiple workshops are running
            simultaneously and they are all trying to use the chat. This would
            get confusing quicly. It can be solved through adding in multiple
            different threads which can be selected from when choosing a name
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#gu-workshop-bg {
  width: 100%;
  position: absolute;
  background: #50c8eb;
}
</style>
