import React from "react";
import "./Timeline.css";
import Navbar from "./Navbar";

const Timeline = () => {
  return (
    <section className="time ">
      {<Navbar />}
      <container className="bo">
        <div class="title dream ">
          <h2>Code For Good Timeline</h2>
          <p>FTE Recruitment</p>
        </div>
        <div class="timeline">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="timeline-container">
                  <div class="timeline-end">
                    <p>March</p>
                  </div>
                  <div class="timeline-continue">
                    <div class="row timeline-right">
                      <div class="col-md-6">
                        <p class="timeline-date">22 Mar 2023</p>
                      </div>
                      <div class="col-md-6">
                        <div class="timeline-box">
                          <div class="timeline-icon">
                            <i class="fa fa-gift"></i>
                          </div>
                          <div class="timeline-text">
                            <h3>Registration</h3>
                            <p>
                              Only hiring process by JPMorgan Chase & Co. through CFG hackathon
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row timeline-left">
                      <div class="col-md-6 d-md-none d-block">
                        <p class="timeline-date">07 Apr 2023</p>
                      </div>
                      <div class="col-md-6">
                        <div class="timeline-box">
                          <div class="timeline-icon d-md-none d-block">
                            <i class="fa fa-business-time"></i>
                          </div>
                          <div class="timeline-text">
                            <h3>Coding Test</h3>
                            <p>
                              2 Coding Questions (DSA)
                            </p>
                          </div>
                          <div class="timeline-icon d-md-block d-none">
                            <i class="fa fa-business-time"></i>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 d-md-block d-none">
                        <p class="timeline-date">07 Apr 2023</p>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-12">
                        <div class="timeline-year">
                          <p>2023</p>
                        </div>
                      </div>
                    </div>

                    <div class="row timeline-right">
                      <div class="col-md-6">
                        <p class="timeline-date">17 Apr 2023</p>
                      </div>
                      <div class="col-md-6">
                        <div class="timeline-box">
                          <div class="timeline-icon">
                            <i class="fa fa-briefcase"></i>
                          </div>
                          <div class="timeline-text">
                            <h3>Hirevue Interview</h3>
                            <p>
                              Video Interview (HR) Questions
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row timeline-left">
                      <div class="col-md-6 d-md-none d-block">
                        <p class="timeline-date">29 May 2023</p>
                      </div>
                      <div class="col-md-6">
                        <div class="timeline-box">
                          <div class="timeline-icon d-md-none d-block">
                            <i class="fa fa-cogs"></i>
                          </div>
                          <div class="timeline-text">
                            <h3>Shortlist For CFG Hackathon</h3>
                            <p>
                              17 Shortlisted From PES
                            </p>
                          </div>
                          <div class="timeline-icon d-md-block d-none">
                            <i class="fa fa-cogs"></i>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 d-md-block d-none">
                        <p class="timeline-date">29 May 2023</p>
                      </div>
                    </div>

                    <div class="row timeline-right">
                      <div class="col-md-6">
                        <p class="timeline-date">01 July 2023</p>
                      </div>
                      <div class="col-md-6">
                        <div class="timeline-box">
                          <div class="timeline-icon">
                            <i class="fa fa-running"></i>
                          </div>
                          <div class="timeline-text">
                            <h3>Code For Good Hackathon</h3>
                            <p>
                            Largest in-person Code for
Good hackathon ever in the history of Tech
for Social Good in Bengaluru on July 1-2
where 225 students from all over India participated
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row timeline-left">
                    <div class="col-md-6 d-md-none d-block">
                        <p class="timeline-date">02 July 2023</p>
                      </div>
                      <div class="col-md-6">
                        <div class="timeline-box">
                          
                          <div class="timeline-text">
                            <h3>CFG Results Announced</h3>
                            <p>
                              Winners of CFG 2023
                            </p>
                          </div>
                          <div class="timeline-icon d-md-block d-none">
                            <i class="fa fa-home"></i>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 d-md-block d-none">
                        <p class="timeline-date">02 July 2023</p>
                      </div>
                    </div>
                  </div>
                  <div class="timeline-start">
                    <p>OFFER</p>
                  </div>
                  <div class="timeline-launch">
                    <div class="timeline-box">
                      <div class="timeline-text">
                        <h3>Got Offer From JPMorgan on 18 Aug 2023</h3>
                        <p>9/17 got offer(From PES).I was the only one to get offer from my team(Note:We had won the hackathon)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </container>
    </section>
  );
};

export default Timeline;
