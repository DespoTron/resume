import React from "react"

import Layout from "../components/Layout"
import resume from "../assets/images/resume.pdf"
// import { Link } from 'gatsby';
import Sidebar from "../components/Sidebar"
import config from "../../config"
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}{" "}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Full Stack web developer with 9+ years of experience as a purchasing
            manager in the retail lumber industry. Optimizing and streamlining
            operations to achieve high levels of efficiency and effective
            resource allocation share many parallels to software design and
            implementation. I’m excited to utilize these skills for an
            opportunity to take the next step in my career.
          </p>
          <p className="lead mb-5">
            Here's a link to a PDF version of my <a href={resume}>resume</a>.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
              HTML5
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
              CSS
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
              Javascript
            </li>
            <li className="list-inline-item">
              <i className="fab fa-java"></i>
              JAVA
            </li>
            <li className="list-inline-item">
              {/* <img src="c.png">C++</img> */}
              <i className="fab fa-npm"></i>
              NPM
            </li>
          </ul>

          <div className="subheading mb-3">Frameworks</div>
          <ul className="fa-ul mb-0">
            <li className="list-inline-item">
              <i className="fa-li fa fa-check"></i>
              Node JS
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Express JS
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Ruby On Rails
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Bootstrap
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              JQuery
            </li>
          </ul>

          <br />

          <div className="subheading mb-3">Testing</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Storybook
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cypress
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Mocha &amp; Chai
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Jest
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Capybara
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Rspec
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="portfolio"
      >
        <div className="w-100">
          <h2 className="mb-5">Portfolio</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                <a href="https://github.com/DespoTron/adtime-scheduling">
                  ADTime Scheduling
                </a>
              </h3>
              <p>
                A Scheduler/Calendar app that allows users to create, edit,
                delete and transfer shifts. Allowing a seemless update of
                employees work schedule with text reminders through Twilio and
                Slack notifications.
                <br />
                Here's a link to a live running application{" "}
                <a href="https://adtime-scheduling.herokuapp.com/">here</a>
                <br />
                <b>Front-End:</b> React, React Router, Material UI, SASS
                <br />
                <b>Back-End:</b> Node JS, Express, Postgres
              </p>
              <br />
              <h3 className="mb-0">
                <a href="https://github.com/DespoTron/spotify-clone">
                  Spotify Clone App
                </a>
              </h3>
              <p>
                A Spotify clone built using React JS using spotify web api
                <br />
                Here's a link to a live runnning application deployed on heroku{" "}
                <a href="https://spotify-clone-application.herokuapp.com/">
                  here
                </a>
                <br />
                <b>Front-End:</b> React, CSS, Material UI
              </p>
              <br />
              <h3 className="mb-0">
                <a href="https://github.com/DespoTron/trading-app">
                  Simple RobinHood Clone
                </a>
              </h3>
              <p>
                A simple RobinHood Clone, it's a investing application that
                allows the user to purchase stocks in publicly traded companies.
                <br />
                <b>Front-End:</b> React, CSS
                <br />
                <b>Back-End:</b> FireBase
              </p>
              <br />
              <h3 className="mb-0">
                <a href="https://github.com/DespoTron/Jungle-Project">
                  Jungle Project
                </a>
              </h3>
              <p>
                A simple full-stack E-Commerce Web App that is built using MVC
                architecture design. It allows users to add new category and
                products, add items to cart, purchase items, and make a payment
                using Stripe API. The app is built using React, Ruby on Rails,
                ActiveRecord, PostgreSQL and tested using Capybara, Poltergeist,
                and Rspec.
                <br />
                <b>Front-End:</b> React
                <br />
                <b>Back-End:</b> Ruby on Rails, ActiveRecord, PostgreSQL
                <br />
                <b>Testing:</b> Capybara, Poltergeist, Rspec
              </p>
              <br />
              <h3 className="mb-0">
                <a href="https://github.com/DespoTron/scheduler">Scheduler</a>
              </h3>
              <p>
                A Scheduler that the user can create, edit and delete interview
                appointments.
                <br />
                Deployed the Client to Netlify here's the link{" "}
                <a href="https://wonderful-elion-f9f0c1.netlify.app/">
                  Scheduler App
                </a>
                <br />
                <b>Front-end:</b> HTML, CSS, React
                <br />
                <b>Back-end:</b> Node JS, Express, Postgres
                <br />
                <b>Testing Tools:</b> Jest, Storybook, Cypress
              </p>
              <br />
              <h3 className="mb-0">
                <a href="https://github.com/DespoTron/storyCreator">
                  Story Creator
                </a>
              </h3>
              <p>
                A web app that allows users to create, read and contribute to
                unique stories. Also allows the user to upvote preferred
                stories.
                <br />
                <b>Front-end:</b> HTML, SASS, EJS
                <br />
                <b>Back-end:</b> Node JS, Express, Postgres, JQuery
                <br />
              </p>
              <br />
              <h3 className="mb-0">
                <a href="https://github.com/DespoTron/tinyapp">Tiny App</a>
              </h3>
              <p>
                My first full stack app that allows users to shorten long URLs.
                <br />
                <b>Front-end:</b> HTML, EJS, Javascript
                <br />
                <b>Back-end:</b> Node JS, Express, Postgres
                <br />
              </p>
              <br />
              <h3 className="mb-0">
                <a href="https://github.com/DespoTron/tweeter">Tweeter</a>
              </h3>
              <p>
                A simple tweeter clone app that is a single page application
                focused on front-end learning.
                <br />
                <b>Front-end:</b> HTML, CSS, Javascript, AJAX, JQuery
                <br />
                <b>Back-end:</b> Node JS, Express, MongoDB
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Lighthouse Labs</h3>
              <div className="subheading mb-3">Diploma of Web Development</div>
              <div>Web Development Bootcamp</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2020 - November 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">British Columbia Institute of Technology</h3>
              <div className="subheading mb-3">In Progress</div>
              <div>
                ACIS (Applied Computer Information Systems) & ASD (Applied
                Software Development)
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2018 - Ongoing</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Purchaser</h3>
              <div className="subheading mb-3">
                Sen Western Wholesale Lumber Ltd.
              </div>
              <ul>
                <li>
                  Managed inventory of over 1000 SKUs, planning for just in time
                  inventory to achieve cost and space efficiencies
                </li>
                <li>
                  Negotiated and sourced special order products from various
                  suppliers as requested to meet and exceed customer/business
                  expectations
                </li>
                <li>
                  Organized and supervised a team for year-end inventory to
                  ensure accurate account of all SKUs, reporting inconsistencies
                  for investigation
                </li>
                <li>
                  Served as company's main point of contact for resolution of
                  all IT related issues
                </li>
                <li>
                  Liaised with customers and sales team to identify delivery
                  demands well in advance to ensure timely delivery of products
                </li>
                <li>
                  Maintained involvement in various aspects of business
                  including shipping, receiving, inside sales, forklift
                  operations and warehousing to ensure optimal operations
                  through peak times
                </li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2010 - July 2020</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      {/* <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>

          </p>
          <p className="mb-0">

          </p>
        </div>
      </section>

      <hr className="m-0" /> */}
    </div>
  </Layout>
)

export default IndexPage
