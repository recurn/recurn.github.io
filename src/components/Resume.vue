<template>
  <div id="resume">
    <h1>Resume</h1>
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
          Taught labs,graded assignmentsand exams for over 600 students in 3
          different courses across11 terms
        </li>
        <li>
          Demonstrated strong communication skillsby providing constructive
          feedback to students
        </li>
        <li>Received an average of 4.5 (out of 5) on teaching evaluations</li>
      </ul>
      <p>UBC COMPUTER SCIENCE | SEP 2017 - MAY 2018, JUL 2015 - APR 2016</p>
      <ul>
        <li></li>
      </ul>

      <h3>ONLINE CURRICULUM DESIGNER</h3>
      <p>UBC COGNITIVE SYSTEMS | MAY - DEC 2020</p>
      <ul>
        <li>
          Created 10 brand-new labs using Unity in collaboration with another
          student and the professor for use in Cogs300
        </li>
        <li>
          Created game environment and API for students to use in final project
          when interacting with Unity Machine Learning Agents
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
    <Accordion :header="'Other Experience'"> Experience </Accordion>
    <Accordion :header="'Skills'"> I am skills </Accordion>
  </div>
</template>

<script>
import Accordion from "@/components/Accordion.vue";
export default {
  components: { Accordion },
};
</script>

<style>
#resume {
  position: relative;
  left: 0px;
}

#resume .accordion {
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.4);
}

#resume .accordion:hover {
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