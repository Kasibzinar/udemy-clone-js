'use strict';

import { courses } from '../static/courses.js';
import { sections } from './datastore.js';
import { htmlTemplates } from './templates.js';
import { heroSlides } from './datastore.js';

////////////////////////////////////////////////////////////
/////////////////////// FOR LOADING ////////////////////////
document.addEventListener('DOMContentLoaded', function () {
  loadPageMessage();
  loadHeader();
  loadFooter();
  heroSlidesFun();

  initSection('recommended__section', 'recommended__section');
  initSection('cloudEngineers__section', 'cloudEngineers__section');
  initSection('trending__section', 'trendingCourses_section');
  initSection('featured__section', 'featured__section');
  initSection('webDesigner__section', 'webDesigner__section');

  handleSearch();
});

////////////////////////////////////////////////
// Selecting Element
const pageMessageContainer = document.querySelector('.message-container');
const header = document.querySelector('header');
const footerSection = document.querySelector('.footer-section');

/////////////////////////////////////////
// Dynmaic HTML Loading

const loadPageMessage = function () {
  pageMessageContainer.innerHTML = htmlTemplates.pageMessage;
};

const loadHeader = function () {
  header.innerHTML = htmlTemplates.header;
};

const loadFooter = function () {
  footerSection.innerHTML = htmlTemplates.footer;
};

//////////////////////////////////////////
// Hero Slides

const heroSlidesFun = function () {
  const slides = heroSlides;

  const heroSlider = document.querySelector('.hero-slider');
  const image = heroSlider.querySelector('img');
  const cardTitle = heroSlider.querySelector('.cart-title');
  const cardTextEx = heroSlider.querySelector('.cart__text-explain');
  const cardButton = heroSlider.querySelector('.btn-cart');
  const btnLeft = heroSlider.querySelector('.btn-left');
  const btnRight = heroSlider.querySelector('.btn-right');

  let currentSlide = 0;

  const showSlide = function (slideIndex) {
    const heroSection = document.querySelector('.hero-section');
    heroSection.classList.add('fade');

    setTimeout(() => {
      const slide = slides[slideIndex];
      image.src = slide.image;
      image.alt = slide.heading;
      cardTitle.textContent = slide.heading;
      cardTextEx.textContent = slide.body;
      cardButton.textContent = slide.buttonText;
      cardButton.href = slide.buttonLink || '#';
      heroSection.classList.remove('fade');
    }, 300);
  };

  const nextSlide = function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  };

  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide--;
    }

    showSlide(currentSlide);
  };

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  showSlide(0);
};

//////////////////////////////////////////
// Course Card

const renderStars = function (rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let stars = '';

  for (let i = 0; i < fullStars; i++) {
    stars += '⭐';
  }

  if (hasHalfStar) {
    stars += '☆';
  }

  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars += '☆';
  }

  return stars;
};

const getCourseById = function (id) {
  return courses.find((course) => course.id === id);
};

const createCourseCard = function (course) {
  const courseCard = document.createElement('div');
  courseCard.innerHTML = htmlTemplates.courseCard;

  const cardLink = courseCard.querySelector('.course-card-link');
  const cardImage = courseCard.querySelector('img');
  const cardTitle = courseCard.querySelector('.course-title');
  const instructor = courseCard.querySelector('.instructor');
  const ratingNumber = courseCard.querySelector('.rating-number');
  const ratingStars = courseCard.querySelector('.rating-stars');
  const ratingCount = courseCard.querySelector('.rating-count');
  const originalPrice = courseCard.querySelector('.original-price');
  const courseState = courseCard.querySelector('.course-state');

  cardLink.href = `course.html?course=${course.id}`;
  cardLink.dataset.course = course.id;
  cardImage.src = course.image;
  cardImage.alt = course.title;
  cardTitle.textContent = course.title;
  instructor.textContent = course.instructor;
  ratingNumber.textContent = course.rating;
  ratingStars.textContent = renderStars(course.rating);
  ratingCount.textContent = `(${course.reviews.toLocaleString()})`;
  originalPrice.textContent = `$${course.price}`;

  if (courseState && course.badge && course.badge.length > 0) {
    courseState.innerHTML = course.badge
      .map((btn) => `<a href="#" class = "btn-${btn.toLowerCase()}">${btn}</a>`)
      .join('');
  }

  return courseCard.firstElementChild;
};

const displayCourses = function (coursesArray, startIndex, container) {
  const coursesToShow = coursesArray.slice(startIndex, startIndex + 5);
  container.innerHTML = '';
  coursesToShow.forEach((course) => {
    const card = createCourseCard(course);
    container.appendChild(card);
  });
};

//////////////////////////////////////////////
// Section Initializing

const initSection = function (sectionId, sectionDataId) {
  const sectionData = sections.find((section) => section.id === sectionDataId);
  const section = document.getElementById(sectionId);

  section.innerHTML = htmlTemplates.section;

  const sectionTitle = section.querySelector('.section-title');
  const sectionSubtitle = section.querySelector('.section-subtitle');
  const tabsContainer = section.querySelector('.tabs');
  const container = section.querySelector('.courses-grid');
  const btnLeft = section.querySelector('.btn-left');
  const btnRight = section.querySelector('.btn-right');
  const btnSection = section.querySelector('.slider__btn');

  if (
    section.id === 'recommended__section' ||
    section.id === 'cloudEngineers__section' ||
    section.id === 'featured__section' ||
    section.id === 'webDesigner__section'
  ) {
    btnSection.style.top = '46%';
    btnRight.style.top = '46%';
  } else if (section.id === 'trending__section') {
    btnSection.style.top = '36%';
    btnRight.style.top = '36%';
  }

  sectionTitle.textContent = sectionData.title;
  if (sectionData.subtitle) {
    sectionSubtitle.textContent = sectionData.subtitle;
  } else {
    sectionSubtitle.style.display = 'none';
  }

  const tabs = sectionData.tabs ? sectionData.tabs.list : null;

  if (tabs && tabs.length > 0) {
    const tabButtons = tabsContainer.querySelectorAll('.tab');

    while (tabButtons.length < tabs.length) {
      const newTab = document.createElement('button');
      newTab.className = 'tab';
      tabsContainer.appendChild(newTab);
      tabButtons.push(newTab);
    }

    tabs.forEach((tabName, tabIndex) => {
      if (tabButtons[tabIndex]) {
        tabButtons[tabIndex].textContent = tabName;
        if (tabIndex === 0) {
          tabButtons[tabIndex].classList.add('active');
        }
      }
    });
  } else {
    tabsContainer.style.display = 'none';
  }

  let currentIndex = 0;
  let currentTab = tabs ? tabs[0] : null;

  const getCurrentCourses = () => {
    const courseIds =
      currentTab && currentTab !== sectionData.tabs.list[0]
        ? sectionData.tabs.tabCourses[currentTab] || []
        : sectionData.courses;

    return courseIds.map((id) => getCourseById(id)).filter(Boolean);
  };

  const updateDisplay = function () {
    const courses = getCurrentCourses();
    const maxIndex = Math.max(0, courses.length - 5);

    displayCourses(courses, currentIndex, container);

    if (currentIndex === 0) {
      btnLeft.style.display = 'none';
    } else {
      btnLeft.style.display = 'block';
      btnLeft.style.opacity = '0.9';
      btnLeft.style.transform = 'translateY(-50%) scale(1)';
    }

    if (currentIndex >= maxIndex) {
      btnRight.style.display = 'none';
    } else {
      btnRight.style.display = 'grid';
      btnRight.style.opacity = '0.9';
      btnRight.style.transform = 'translateY(-50%) scale(1)';
    }
  };

  if (tabs && tabs.length > 0) {
    const tabButtons = tabsContainer.querySelectorAll('.tab');
    tabButtons.forEach((tab, tabIndex) => {
      tab.addEventListener('click', function () {
        tabButtons.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');

        currentTab = tabs[tabIndex];
        currentIndex = 0;

        updateDisplay();
      });
    });
  }

  btnRight.addEventListener('click', function () {
    const courses = getCurrentCourses();
    const maxIndex = Math.max(0, courses.length - 5);

    if (currentIndex < maxIndex) {
      currentIndex += 5;
      updateDisplay();
    }
  });

  btnLeft.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex -= 5;
      updateDisplay();
    }
  });

  updateDisplay();
};

///////////////////////////////////////////
// COURSE SEARCH

const createSearchCourseCard = function (course) {
  let badgesHTML = '';

  if (course.badge && course.badge.length > 0) {
    badgesHTML = course.badge
      .map((badge) => {
        const badgeClass = badge.toLowerCase();
        return `<span class=" btn-${badgeClass}">${badge}</span>`;
      })
      .join('');
  }

  const totalHours = course.details?.totalHours || 0;
  const totalLectures = course.extendedDetails?.content?.totalLectures || 0;
  const level = course.details?.level || 'all-levels';
  const shortDescription = course.details?.shortDescription || '';

  const levelText = level
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const starsHTML = renderStars(course.rating);
  const reviewsFormatted = course.reviews.toLocaleString();

  return `
  <div class="search-course-card">
    <a href="course.html?course=${course.id}" class="search-course-card-link">
      <img src="${course.image}" alt="${
    course.title
  }" class="search-course-image">
      <div class="search-course-content">
        
        <h3 class="search-course-title">${course.title}</h3>
        <p class="search-course-description">${shortDescription}</p>
        ${badgesHTML ? `<div class="course-state">${badgesHTML}</div>` : ''}
        <span class="instructor ">${course.instructor}</span>
        <div class="course-rating">
          <span class="rating-number">${course.rating}</span>
          <span class="rating-stars">${starsHTML}</span>
          <span class="rating-count">(${reviewsFormatted})</span>
        </div>
        <div class="search-course-details">
          <span class="search-course-detail-item">${totalHours} total hours</span>
          <span class="search-course-detail-item">${totalLectures} lectures</span>
          <span class="search-course-detail-item">${levelText}</span>
        </div>
        <div class="search-course-price">$${course.price}</div>
      </div>
    </a>
  </div>
`;
};

const displaySearchResults = function (filteredCourses) {
  const gridContainer = document.getElementById('search-courses-grid');

  gridContainer.innerHTML = '';
  filteredCourses.forEach((course) => {
    const cardHTML = createSearchCourseCard(course);
    gridContainer.insertAdjacentHTML('beforeend', cardHTML);
  });
};

const handleSearch = function () {
  const searchInput = document.querySelector('.search-input');
  const prevBtn = document.getElementById('search-prev-btn');
  const nextBtn = document.getElementById('search-next-btn');

  let currentSearchPage = 0;
  let currentFilteredCourses = [];
  const coursesPerPage = 12;

  const updateDisplay = function () {
    const totalPages = Math.ceil(
      currentFilteredCourses.length / coursesPerPage
    );

    const startIndex = currentSearchPage * coursesPerPage;
    const coursesToShow = currentFilteredCourses.slice(
      startIndex,
      startIndex + coursesPerPage
    );

    displaySearchResults(coursesToShow);

    prevBtn.style.display = currentSearchPage > 0 ? 'grid' : 'none';
    nextBtn.style.display =
      currentSearchPage < totalPages - 1 ? 'grid' : 'none';

    document.querySelector('.current-page').textContent = currentSearchPage + 1;
    document.querySelector('.total-pages').textContent = totalPages || 1;
  };

  prevBtn.addEventListener('click', function () {
    if (currentSearchPage > 0) {
      currentSearchPage--;
      updateDisplay();
    }
  });

  nextBtn.addEventListener('click', function () {
    const totalPages = Math.ceil(
      currentFilteredCourses.length / coursesPerPage
    );
    if (currentSearchPage < totalPages - 1) {
      currentSearchPage++;
      updateDisplay();
    }
  });

  searchInput.addEventListener('input', function (e) {
    const searchQuery = e.target.value.toLowerCase().trim();
    const courseFiltering = courses.filter((course) => {
      return course.title.toLocaleLowerCase().includes(searchQuery);
    });

    const searchSection = document.getElementById('search-section');
    const hideContainer = document.querySelector('.hide-container');

    if (searchQuery.length > 0 && courseFiltering.length > 0) {
      searchSection.style.display = 'block';
      hideContainer.style.display = 'none';

      const queryText = document.querySelector('.search-query-text');
      const resultsCount = document.querySelector('.results-count');

      queryText.textContent = `"${e.target.value}"`;
      resultsCount.textContent = `${courseFiltering.length}`;

      currentFilteredCourses = courseFiltering;
      currentSearchPage = 0;
      updateDisplay();
    } else if (searchQuery.length > 0 && courseFiltering.length === 0) {
      searchSection.style.display = 'block';
      hideContainer.style.display = 'block';

      const gridContainer = document.getElementById('search-courses-grid');
      const queryText = document.querySelector('.search-query-text');
      const resultsCount = document.querySelector('.results-count');

      gridContainer.innerHTML = ` 
        <div class="no-result-container">
          <p>
            No courses found for "${e.target.value}". Try a different search
            term.
          </p>
        </div>`;

      queryText.textContent = `"${e.target.value}"`;
      resultsCount.textContent = '0';

      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    } else {
      searchSection.style.display = 'none';
      hideContainer.style.display = 'block';
    }
  });
};

///////////////////////////////////////
//////////////////////////////////////
