<template>
  <div id="resume">
    <h1>Resume</h1>
    <Accordion :header="'Skills'">
      <h3>Languages</h3>
      <div>
        <div class="resume-rating">
          <h4>Javascript</h4>
          <star-rating
            :isIndicatorActive="false"
            :rating="rating.js"
            :star-style="starStyle"
          ></star-rating>
        </div>
        <div class="resume-rating">
          <h4>HTML/CSS</h4>
          <star-rating
            :isIndicatorActive="false"
            :rating="rating.htmlcss"
            :star-style="starStyle"
          ></star-rating>
        </div>
        <div class="resume-rating">
          <h4>C#</h4>
          <star-rating
            :isIndicatorActive="false"
            :rating="rating.cSharp"
            :star-style="starStyle"
          ></star-rating>
        </div>
      </div>
      <h3>Technologies</h3>
      <div>
        <div class="resume-rating">
          <h4>Unity - ML Agents</h4>
          <star-rating
            :isIndicatorActive="false"
            :rating="rating.unityML"
            :star-style="starStyle"
          ></star-rating>
        </div>
        <div class="resume-rating">
          <h4>Vue</h4>
          <star-rating
            :isIndicatorActive="false"
            :rating="rating.vue"
            :star-style="starStyle"
          ></star-rating>
        </div>
        <div class="resume-rating">
          <h4>Firebase</h4>
          <star-rating
            :isIndicatorActive="false"
            :rating="rating.firebase"
            :star-style="starStyle"
          ></star-rating>
        </div>
        <div class="resume-rating">
          <h4>Unity</h4>
          <star-rating
            :isIndicatorActive="false"
            :rating="rating.unity"
            :star-style="starStyle"
          ></star-rating>
        </div>
        <div class="resume-rating">
          <h4>React</h4>
          <star-rating
            :isIndicatorActive="false"
            :rating="rating.react"
            :star-style="starStyle"
          ></star-rating>
        </div>
      </div>
    </Accordion>
    <Accordion :header="'Education'">
      <h3>BACHELOR OF ARTS, COGNITIVE SYSTEMS - PSYCHOLOGY</h3>
      <p>UNIVERSITY OF BRITISH COLUMBIA | 2014 - 2021</p>
      <ul>
        <li>
          Study of natural and artificial intelligence systems and how the two
          interface
        </li>
        <li>
          Multi-disciplinary degree involving psychology, computer science,
          philosophy, linguistics
        </li>
      </ul>
    </Accordion>
    <Accordion :header="'Work Experience'">
      <h3>TEACHING ASSISTANT</h3>
      <p>UBC COGNITIVE SYSTEMS | SEP 2018 - APR 2021</p>
      <ul>
        <li>
          Most experienced TA in charge of creating, editing and delivering lab
          content to students in a 300 level course.
        </li>
        <li>
          Demonstrated character and good judgement by successfully navigating
          the complex relationship of being both a mentor and a peer for fellow
          students
        </li>
        <li>Received an average of 4.6 (out of 5) on teaching evaluations</li>
      </ul>
      <p>UBC COMPUTER SCIENCE | SEP 2017 - MAY 2018, JUL 2015 - APR 2016</p>
      <ul>
        <li>Taught labs, marked assignments/exams and held office hours for two 100 level cpsc courses</li>
        <li>Directly interacted with over 500 students across 6 terms of teaching</li>
        <li>Received an average of 4.5 (out of 5) on teaching evaluations</li>
      </ul>

      <h3>ONLINE CURRICULUM DESIGNER</h3>
      <p>UBC COGNITIVE SYSTEMS | MAY - DEC 2020</p>
      <ul>
        <li>
          Successfully transitioned full term of labs to online only delivery by
          creating 10 brand-new labs using Unity in collaboration with another
          student and the professor
        </li>
        <li>
          Created game environment and API for students to use in final project
          when interacting with Unity Machine Learning Agents
        </li>
        <li>
          Showed passion and dedication by going above and beyond the
          requirements through tremendous effort and creativity during a difficult time period
        </li>
      </ul>

      <h3>CODEMAKER HEAD, INSTRUCTOR</h3>
      <p>GEERING UP | MAY 2021 - PRESENT, MAY - AUG 2019, JUN - AUG 2018</p>
      <ul>
        <li>
          Demonstrated creativity and initiative through development of a
          tracking and security system for over 200 laptops and other high-value
          technology
        </li>
        <li>
          Worked effectively independently and showed reliability by juggling
          multiple responsibilities with little oversight
        </li>
        <li>
          Developed curriculum for 2 separate UBC summer engineering day camps
          for 7-12 year olds
        </li>
      </ul>
    </Accordion>
    <Accordion :header="'Other Experience'">
      <h3>PRESIDENT, VOLUNTEER</h3>
      <p>UBC MEDITATION COMMUNITY | SEP 2017 - APR 2020</p>
      <ul>
        <li>
          Coordinate schedules of teachers to provide free daily meditations to
          students
        </li>
        <li>
          Personally taught a guided meditation one day a week for students
          during lunch
        </li>
        <li>
          Engaged with students in the UBC community to develop practical
          solutions and strategies
        </li>
      </ul>
      <h3>LEAD ACTOR</h3>
      <p>UBC MUSICAL THEATER TROUPE | SEP 2017 - APR 2018</p>
      <ul>
        <li>
          Cast in lead male roles for 2 musicals over 2 terms
        </li>
        <li>
          Showed ability to be coachable and directable by bringing my unique
          character and adapting it into the larger theme and feeling of each
          show
        </li>
        <li>
          Participated in large team of over 80 people and worked in synchrony
          with cast on stage and crew backstage
        </li>
        <li>
          Demonstrated ability to perform under pressure in front of a crowd
        </li>
      </ul>
    </Accordion>
  </div>
</template>

<script>
import Accordion from "@/components/Accordion.vue";
import StarRating from "vue-dynamic-star-rating";
import { ref } from "vue";

export default {
  components: { Accordion, StarRating },
  setup() {
    const rating = ref({
      js: 4.5,
      htmlcss: 4,
      cSharp: 3.5,
      vue: 4,
      unityML: 4.5,
      firebase: 3.5,
      unity: 3.5,
      react: 2.5,
    });

    const starStyle = ref({
      fullStarColor: "#DA4167",
      emptyStarColor: "#737373",
      starWidth: 30,
      starHeight: 30,
    });

    return { rating, starStyle };
  },
};
</script>

<style>
.resume-rating {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin: 10px 0px;
  border-bottom: 1px dotted rgba(0, 0, 0, 0.3);
}

.resume-rating h4 {
  margin: 0px;
  margin-right: 10px;
}

#resume {
  position: relative;
  left: 0px;
  max-width: 1000px;
  margin: auto;
}

#resume .accordion {
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.4);
}

#resume .message-header {
  justify-content: space-between;
  margin: 0;
  max-width: 100%;
  border: none;
}

#resume .accordion .message-body {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  background: white !important;
  text-align: left;
  margin: 0px;
  padding: 0px;
}

#resume .accordion .message-header,
#resume .accordion .message-content {
  padding-left: 30px;
}

#resume .message-body .is-closed {
  border-top: none !important;
  background: white !important;
}

#resume .message-header:hover {
  color: black;
  background: rgba(0, 0, 0, 0.1);
}
</style>
