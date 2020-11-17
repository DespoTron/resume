import React from 'react';

import Layout from '../components/Layout'

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
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
            {config.firstName}
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
            implementation. I’m excited to utilize these skills in my career as
            a developer.
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
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Head Purchaser</h3>
              <div className="subheading mb-3">Sen Western Wholesale Lumber Ltd.</div>
              <ul>
                <li>
                  Managed inventory of over 1000 SKUs, planning for just in time inventory to acheieve 
                  cost and space efficiencies
                </li>
                <li>
                  Negotiated and sourced special order products from various suppliers as requested to meet
                  and exceed customer/business expectations
                </li>
                <li>
                  Organized and supervised a team for year-end inventory to ensure accurate account of all 
                  SKUs, reporting inconsistencies for investigation
                </li>
                <li>
                  Served as company's main point of contact for reolution of all IT related issues
                </li>
                <li>
                  Liaised with customers and sales team to identify delivery demands well in advance to 
                  ensure timely delivery of products
                </li>
                <li>
                  Mainted involvement in various  aspects of business including shipping, receiving, inside sales,
                  forklift operations and warehousing to ensure optimal operations through peak times
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
              <i className="fab fa-react"></i>
              React
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
              NodeJS
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
              SASS
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
              NPM
            </li>
            <li className="list-inline-item">
              <i className="fab fa-java"></i>
              JAVA
            </li>
          </ul>

          <div className="subheading mb-3">Frameworks</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              React JS
            </li>
            <li>
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
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy most of my time being
            outdoors. In the winter, I am an avid skier and novice ice climber.
            During the warmer months here in Colorado, I enjoy mountain biking,
            free climbing, and kayaking.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows, I am an aspiring chef, and I spend a
            large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>

      <hr className="m-0" />
    </div>
    </section>
    </div>
  </Layout>
)

export default IndexPage;