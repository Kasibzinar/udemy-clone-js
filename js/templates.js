'use strict';

// window.udemyTemplates = window.udemyTemplates || {};

///////////////////////////////////////
// HTML Templates
export const htmlTemplates = {
  pageMessage: `
  <div class="page-message">
   <div class="container">
        <div class="message-text">
          <strong>Ready to go beyond free courses?</strong>
          | Unlock unlimited access to 26K+ courses with this
          <a href="#">special offer.</a>
        </div>
      </div>
  </div>
       
  `,
  header: `
      <div class="header-content">
        <div class="logo">
          <h1>Udemy</h1>
          <a href="#" class="nav-link">Explore</a>
        </div>

        <div class="search-container">
          <div class="search-bar">
            <input
              type="text"
              placeholder="Search for anything"
              class="search-input"
            />
            <button class="search-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <nav class="nav">
          <a href="#" class="nav-link">Udemy Business</a>
          <a href="#" class="nav-link">Teach on Udemy</a>
          <a href="#" class="nav-link">My Learning</a>
          <button class="cart-btn nav-link">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17C17 18.1 16.1 19 15 19H9C7.9 19 7 18.1 7 17V13M17 13H7"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <div class="user-avator">
            <div class="notification"></div>
            <div class="avator-view">KZ</div>
          </div>
    
        </nav>
      </div>
    `,

  section: `
  
      <div class="section-header">
        <h1 class="section-title"></h1>
        <h2 class="section-subtitle"></h2>
      </div>
      <div class="tabs">
        <button class="tab active"></button>
        <button class="tab"></button>
        <button class="tab"></button>
      </div>
      <div class="courses-grid ">
        <!-- Course cards will be dynamically inserted here -->
      </div>
      <button class="slider__btn btn-left" aria-label="Previous slide">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path d="M15 6L9 12L15 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="slider__btn btn-right" aria-label="Next slide">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
          <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    
  `,

  courseCard: `
    <div class="course-card-wrapper">
      <a href="#" class="course-card-link">
        <div class="course-card">
          <div class="course-image">
            <img src="" alt="" />
          </div>
          <div class="course-info">
            <div class="course-title"></div>
            <div class="instructor"></div>
            <div class="course-rating">
              <span class="rating-number"></span>
              <span class="rating-stars"></span>
              <span class="rating-count"></span>
            </div>
            <div class="original-price"></div>
            <div class="course-state">
            </div>
          </div>
        </div>
      </a>
    </div>
  `,

  footer: `      <footer class="footer">
        <h1>Explore top skills and certifications</h1>
        <div class="footer-all-links">
          <div class="footer-links">
            <h2>in-demand careers</h2>
            <a href="#" class="footer-link">Data Scientist</a>
            <a href="#" class="footer-link">Full Stack Web Developer</a>
            <a href="#" class="footer-link">Cloud Engineer</a>
            <a href="#" class="footer-link">Project Manager</a>
            <a href="#" class="footer-link">Game Developer</a>
            <a href="#" class="footer-link">All Career Accelerators</a>
          </div>
          <div class="footer-links">
            <h2>Web Development</h2>
            <a href="#" class="footer-link">Web Development</a>
            <a href="#" class="footer-link">JavaScript</a>
            <a href="#" class="footer-link">React JS</a>
            <a href="#" class="footer-link">Angular</a>
            <a href="#" class="footer-link">JavaScript</a>
          </div>
          <div class="footer-links">
            <h2>IT Certifications</h2>
            <a href="#" class="footer-link">Amazon AWS</a>
            <a href="#" class="footer-link">AWS Certified Practitioner</a>
            <a href="#" class="footer-link"
              >AZ-900: Microsoft Azure Fundamentals</a
            >
            <a href="#" class="footer-link"
              >AWS Certified Solutions Architect-Associate</a
            >
            <a href="#" class="footer-link">Kubernets</a>
          </div>
          <div class="footer-links">
            <h2>Leadership</h2>
            <a href="#" class="footer-link">Leadership</a>
            <a href="#" class="footer-link">Management Skills</a>
            <a href="#" class="footer-link">Project Management</a>
            <a href="#" class="footer-link">Personal Productivity</a>
            <a href="#" class="footer-link">Emotional Intelligence</a>
          </div>

          <div class="footer-links">
            <h2>Certifications by Skils</h2>
            <a href="#" class="footer-link">Cybersecurity Certification </a>
            <a href="#" class="footer-link">Project Management Certification</a>
            <a href="#" class="footer-link">Cloud Certification</a>
            <a href="#" class="footer-link">Data Analytics Certification</a>
            <a href="#" class="footer-link">HR Management Certification</a>
            <a href="#" class="footer-link">See all Certification</a>
          </div>
          <div class="footer-links">
            <h2>Data Science</h2>
            <a href="#" class="footer-link">Data Science</a>
            <a href="#" class="footer-link">Python</a>
            <a href="#" class="footer-link">Machine Learning</a>
            <a href="#" class="footer-link">ChatGPT </a>
            <a href="#" class="footer-link">Deep Learning</a>
          </div>
          <div class="footer-links">
            <h2>Communication</h2>
            <a href="#" class="footer-link">Communication Skills</a>
            <a href="#" class="footer-link">Presetation Skills</a>
            <a href="#" class="footer-link">Public Speaking</a>
            <a href="#" class="footer-link">Writing</a>
            <a href="#" class="footer-link">Power Point</a>
          </div>
          <div class="footer-links">
            <h2>Business Analytics and Intelligence</h2>
            <a href="#" class="footer-link">Microsoft Excel</a>
            <a href="#" class="footer-link">SQL</a>
            <a href="#" class="footer-link">Microsoft Power BI</a>
            <a href="#" class="footer-link">Data Analytics</a>
            <a href="#" class="footer-link">Business Analytics</a>
          </div>
        </div>
      </footer>`,
};
