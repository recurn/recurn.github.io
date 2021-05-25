<template>
  <div class="portfolio-page" id="ml-tournament-bg">
    <div id="ml-tournament-portfolio" class="portfolio-content-page">
      <div class="title shadow-box">
        <h1>Unity ML Tournament</h1>
        <p>
          A Unity based machine learning tournament designed for use by third
          year university students in Cognitve Systems 300 at the University of
          British Columbia
        </p>
        <!-- <a href="" target="blank" class="slide-button">
          <p>
            <span class="bg"></span><span class="base"></span
            ><span class="text">Demo</span>
          </p>
        </a> -->
        <a href="https://github.com/COGS300/lab7to9-robot-tournament" target="blank" class="slide-button">
          <p>
            <span class="bg"></span><span class="base"></span
            ><span class="text">Code</span>
          </p>
        </a>
        <div class="logos">
          <span class="logo"
            ><img src="../assets/c_sharp.png" alt="" height="50" />C#</span
          >
          <span class="logo"
            ><img
              src="../assets/unity-tab-circle-white.png"
              alt=""
            />Unity</span
          >
        </div>
      </div>
      <div class="summary shadow-box">
        <h2>My Role</h2>
        <p>
          Lead developer on team of 2 teaching assistant students, done in
          collaboration with the professor of the course. This projects was
          completed 100% asynchronously and online, with minimal oversight from
          the professor.
        </p>
        <h3>What did the tournament involve?</h3>
        <p>
          We created a Unity environment in which each team of 4 students would
          create an intelligent agent which would autonomously compete in a 1v1
          elimination tournament based on a capture the flag game. Both teams in
          a match had a home base, in which the goal was to carry as many of the
          9 targets available back to their base. Whoever ended the 2 minute
          match with more targets in their base would win the match and advance.
          Each agent had a short range laser which would stun opponents and
          cause them to drop any targets they were carrying.
        </p>
        <img
          class="portfolio-image"
          src="../assets/ML_Agents_scene.png"
          alt=""
        />
      </div>
      <div class="problem shadow-box">
        <h2>The Problem</h2>
        <p>
          With the transition to an online-only teaching structure due to
          covid-19, the UBC course Cognitive Systems 300 could no longer use the
          existing in-person labs which involved the creation of physical robots
          using Arduinos.
        </p>
        <p>
          Myself, along with another student were hired to design a set of new
          labs using Unity, a game design software. <br />10 completely new labs
          would need to be created.
        </p>
        <p>
          In addition to the labs, we also wanted to create a final project for
          the course where the students could apply the knowledge they had
          learned in labs and lectures.
        </p>
      </div>
      <div class="solution">
        <div class="shadow-box">
          <h2>The Solution</h2>
          <p>
            As the lead TA for the course it was my responsibility to take the
            lead on the final project for the course. The other TA on the
            project would focus on creating the content for the labs. 6 of these
            10 labs would teach basic Unity concepts and relate closely to
            content covered in the lectures of the course. The final 4 labs
            would teach about Unity ML Agents, which would be the foundation for
            the final project.
            <!-- Talk about responsibility
            I was the lead on these part of the project
            Conciseness????
            not showcasing knowledge and amount of responsibility?
            The final project -> labs taught this
            What is the solution? The 10 labs? The final project
            had to teach lecture material and teach about the final project
            "As the lead TA it was my responsibility to take lead on the final project for the course"
            This was completed 100% online -->
          </p>
          <h3>Unity Machine Learning Agents</h3>
          <p>
            We decided to use a new piece of software for the term project. We
            were already using Unity as our main tool, so we were very excited
            to learn that they launched version 1.0 of ML Agents earlier in the
            year. ML Agents is a machine learning API designed for interfacing
            with custom environments made in Unity. It uses PyTorch in the
            backend, but provides easy methods to interact with these tools
            within the unity code in a way which does not require a depth of
            previous machine learning or mathematics experience. This allows for
            the training of intelligent agent models in a way that is beginner
            friendly.
          </p>
          <a
            href="https://github.com/Unity-Technologies/ml-agents/blob/main/docs/ML-Agents-Overview.md"
            target="blank"
            class="outline-link"
          >
            Learn more about Unity ML Agents
          </a>
          <h3>Design Process</h3>
          <p>
            We wanted to give the students hands on experience with training an
            intelligent agent, and we wanted to do it in a way that had a low
            floor, but a high ceiling. This way, the students who weren't as
            proficient at coding could participate without it being too
            punishing, but those who wished to go deeper and wanted to win the
            tournament had lots of room to do so.
          </p>
          <p>
            We decided the best way to do this was to provide a framework for
            the students to build off of. So we created a class for them called
            Cogs Agent which included things like basic movement, shooting and
            object interaction. The students could then extend this class and
            build their own, more complex behaviours off of our simple ones.
          </p>
          <p>
            Due to time constraints and immovable deadlines (can't teach a lab
            with no content!), there wasn't a lot of room for prototyping or
            testing this one - we were thrown to the wolves and the students
            were our ginuea pig testers.
          </p>
          <h3>Final Product</h3>
          <p>
            This tournament was run during the final lecture for Cogs 300 in
            both the fall (Sep-Dec) and winter (Jan - Apr) terms. It was a
            resounding success both times, with the students enjoying themselves
            and learning lots.
          </p>
          <p>
            Unknown to the students, I also developed a TA bot to compete in the
            tournament, using the same limitations and rules the students were
            subject to. Below is a video showing the TA bot facing off against
            the tournament winner from the students, commentated by myself.
          </p>
          <iframe
            src="https://www.youtube.com/embed/dUhDrbfb-1U"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="shadow-box">
          <h2>Reflections</h2>
          <h3>Feedback</h3>
          <p>
            The feedback we received on this project was overwhelmingly
            positive. We had a lot of buy-in from the students, which is notable
            due to the fact that student engagement was difficult to create
            during online-only teaching.
          </p>
          <p class="quotation">
            "Thank you so much for not only keeping COGS 300 alive during these
            challenging times, but thriving and evolving." <br />
            - Cogs Course Coordinator
          </p>
          <h3>
            Lessons Learned
          </h3>
          <p>
            Pay more attention to dependencies. Some students (especially M1 mac
            users) had difficulties with the version of ML Agents and couldn't
            import their trained models. Understandably, this was frustrating
            for students, though it's effect was slightly mitigated due to them
            being in groups of 4 for the project.
          </p>
          <p>
            Make the installation process easier. Much of the installation of
            Unity ML must be done through the command line, which can be
            intimidating to students who have never used it before. Creating an
            install script for the students could reduce stress and errors in
            the install process.
          </p>
          <p>
            Adding more abilities/options to the agents would allow more varied
            strategy and gameplay. Instead of lasers there could be projectiles,
            which would add depth to the targeting algorithms. Adding obstacles,
            or other features to the arena would vary movement strategies.
            Creating different options for bots such as slower moving but
            tougher vs faster moving but fragile would allow greater
            customization and variation in strategies.
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
  .portfolio-image {
    max-width: 100%;
    max-height: 300px;
  }
  iframe {
    max-width: 100%;
  }
  .quotation {
    font-style: italic;
    font-size: 1.1em;
  }
  .outline-link {
    border: 2px solid var(--primary);
    text-decoration: none;
    color: var(--primary);
    padding: 10px 20px;
    font-size: 1rem;
    margin: 20px auto;
    display: block;
    max-width: 200px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  }
  .outline-link:hover {
    background: var(--primary);
    color: #fefefe;
  }
  .outline-link:active {
    box-shadow: none;
  }

  #ml-tournament-bg {
    width: 100%;
    position: absolute;
    background-image: url("../assets/ml_tournament/dark-honeycomb.png");
  }
  .portfolio-content-page {
    max-width: 90%;
    min-width: 250px;
    margin: auto;
    background: #fefefec0;
    margin-top: 150px;
    padding: 50px;

    max-width: 1000px;
  }

  #ml-tournament-portfolio {
    background: #fefefed0;
    max-width: 80%;
    padding: auto;
  }
</style>
