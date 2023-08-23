import React from "react";
import { Link } from "react-router-dom";
import "./Experience.css";

const Phasetwo = () => {
  return (
    <div className="container-fluid min-vh-100 overflow-hidden">
      <div className="row mt-3 ">
        <div className="col text-center text-white">
          <h1>Phase 2-The Hackathon (CFG)</h1>
          <hr />
        </div>
      </div>
      <div className="row hey">
        <div className="col text-white mt-3">
          <p style={{ fontSize: "20px" }}>
            It's not just another hackathon but a hackathon with a cause.
            <hr />
            <b>Experience :-</b>After the coding round, we advanced to the next
            phase: the hackathon. This was a chance for me to polish my
            development skills, and the resources I used for preparation can be
            found in the <Link to="/Morgan/preparation">"Preparation"</Link> section.<br/>
            🚨I had a month to get ready
            before the hackathon kicked off. During this time, I completed
            learning the MERN stack. 
            <br/><br/>🚨JP Morgan released a survey where
            participants were required to indicate their proficiency in three
            skill categories: frontend, backend, and fullstack. Additionally,
            the survey inquired about previous hackathon attendance. The aim was
            to ensure well-balanced skills within teams.<br/><br/>🚨The hackathon revolved
            around crafting solutions for NGOs. There were three NGOs, each
            presenting a unique challenge. We had to choose a problem posed by
            one of these NGOs and develop a suitable solution. Mentors were
            assigned to us, often holding high positions like Vice Presidents or
            SDE3s at JP Morgan. Teams consisted of seven members, with teammates
            unknown until the hackathon's commencement. Teammates were
            identified through assigned team numbers, allowing us to locate each
            other and collaborate.<br/><br/> 🚨Participating in this hackathon offered
            several benefits: real-world problem solving, a chance to contribute
            to meaningful causes, and the possibility of recruitment. <br/><br/> 🚨JP Morgan
            conducted this initiative exclusively for selected top-tier colleges
            and universities, making the competition intense due to the high
            skill level of participants from these institutions. In order to
            foster diversity and collaboration, teammates were deliberately not
            selected from the same college. The team formation remained a
            mystery until the hackathon day.Mentors guided us
            throughout the hackathon, and the initial interaction was
            particularly interesting as it required teamwork with strangers.<br/><br/> 🚨The
            hackathon comprised two primary aspects: winning the competition and
            potential recruitment. 
            <br/><br/> 🚨<b>Securing victory did not guarantee job
            offers.</b> While my team emerged as winners, only I received a job
            offer. <br/><br/> 🚨In terms of recruitment, effective communication and
            showcasing one's expertise were key. Interacting with mentors,
            updating them regularly, and demonstrating skills were crucial. It's
            a common misconception that winning the hackathon guarantees
            recruitment. In reality, excelling during the event, meeting mentor
            expectations, and putting your best foot forward matter most. The
            mentors were incredibly supportive and helpful throughout.<br/><br/> 🚨Looking
            at the winning perspective, my one-month preparation prior to the
            hackathon played a pivotal role in our victory. <br/><br/> 🚨My approach involved
            identifying common elements in problem statements and brainstorming
            novel solutions. On the day of the hackathon, I applied these
            strategies to the specific problem statement. <br/><br/> 🚨Some tips for success
            in a hackathon include brainstorming before coding, being a
            collaborative team player, actively participating in group
            discussions, consistently updating mentors on progress, seeking 
            mentor advice, and maintaining a proactive approach.
          </p>
          <br />
        </div>
      </div>
      <div className="row d-flex justify-content-center text-danger">
        <h1 className="d-flex justify-content-center">
          9 people were given offer from my college and i was one of them. I was
          the only one from my team to get the offer.
        </h1>
      </div>
    </div>
  );
};

export default Phasetwo;
