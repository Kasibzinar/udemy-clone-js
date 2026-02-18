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
  return courses.find(course => course.id === id);
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
      .map(btn => `<a href="#" class = "btn-${btn.toLowerCase()}">${btn}</a>`)
      .join('');
  }

  return courseCard.firstElementChild;
};

const displayCourses = function (coursesArray, startIndex, container) {
  const coursesToShow = coursesArray.slice(startIndex, startIndex + 5);
  container.innerHTML = '';
  coursesToShow.forEach(course => {
    const card = createCourseCard(course);
    container.appendChild(card);
  });
};

//////////////////////////////////////////////
// Section Initializing

const initSection = function (sectionId, sectionDataId) {
  const sectionData = sections.find(section => section.id === sectionDataId);
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

    return courseIds.map(id => getCourseById(id)).filter(Boolean);
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
        tabButtons.forEach(t => t.classList.remove('active'));
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

const createSearchCourseCard = function (course) {
  let badgesHTML = '';

  if (course.badge && course.badge.length > 0) {
    badgesHTML = course.badge
      .map(badge => {
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
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
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
  if (!gridContainer) return;

  gridContainer.innerHTML = '';
  filteredCourses.forEach(course => {
    const cardHTML = createSearchCourseCard(course);
    gridContainer.insertAdjacentHTML('beforeend', cardHTML);
  });
};

//////////////////////////////////////////////
// Searching

const createFilterState = function () {
  return {
    quizzes: false,
    codingExercises: false,
    practiceTests: false,
    rolePlays: false,
    language: [],
    rating: [],
    level: [],
    duration: [],
    handsOn: {
      quizzes: false,
      codingExercises: false,
      practiceTests: false,
      rolePlays: false,
    },
  };


};

const applyFilters = function (coursesArray, filters) {
  return coursesArray.filter(course => courseMatchesFilters(course, filters));
};

const openFiltersSidebar = function (
  filtersSidebar,
  filtersOverlay,
  tempFilters,
  filters,
  syncSidebarUI
) {
  if (!filtersSidebar || !filtersOverlay) return;

  Object.assign(tempFilters, filters);
  syncSidebarUI(tempFilters);

  filtersSidebar.classList.add('active');
  filtersOverlay.classList.add('active');
  filtersSidebar.setAttribute('aria-hidden', 'false');
  filtersOverlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};

const closeFiltersSidebar = function (filtersSidebar, filtersOverlay) {
  if (!filtersSidebar || !filtersOverlay) return;

  filtersSidebar.classList.remove('active');
  filtersOverlay.classList.remove('active');
  filtersSidebar.setAttribute('aria-hidden', 'true');
  filtersOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};

const syncSidebarUI = function(filterState) {
  const ratingRadios = document.querySelectorAll('.rating-radio');
  const languageCheckboxes = document.querySelectorAll('.language-checkbox');
  const levelCheckboxes = document.querySelectorAll('.level-checkbox');
  const durationCheckboxes = document.querySelectorAll('.duration-checkbox');
  const handsOnCheckboxes = document.querySelectorAll('.hands-on-checkbox');
  

  ratingRadios.forEach(radio=> {
    const shouldBeChecked = filterState.rating.length > 0 && radio.value === filterState.rating[0];
    radio.checked = shouldBeChecked
  })

  languageCheckboxes.forEach(checkbox=> {
    const isSelected = filterState.language.includes(checkbox.value)
    checkbox.checked = isSelected
  })

  handsOnCheckboxes.forEach(checkbox=> {
    const key = checkbox.value
    const isSelected = filterState.handsOn[key] || false
    checkbox.checked = isSelected;
  })

  durationCheckboxes.forEach(checkbox => {
    const isSelected = filterState.duration.includes(checkbox.value);
    checkbox.checked = isSelected;
  });

  levelCheckboxes.forEach(checkbox=> {
    const isSelected = filterState.level.includes(checkbox.value)
    checkbox.checked = isSelected
  })
};

const courseMatchesFilters = function(course, testFilters) {
  if(testFilters.rating.length > 0) {
    const minRating = Number(testFilters.rating[0])
    if(course.rating < minRating) return false
  }

  if(testFilters.language.length > 0) {
    if(!course.language || !testFilters.language.includes(course.language)) {
      return false;
    }
  }

  if (testFilters.level.length > 0) {
    if (!testFilters.level.includes(course.details.level)) 
      return false;
  }

 if(testFilters.duration.length > 0) {
  const hours = course.details.totalHours;
  let matchesDuration = false

  const DURATION_RANGES = {
    '0-1': { min: 0, max: 1 },
    '1-3': { min: 1, max: 3 },
    '3-6': { min: 3, max: 6 },
    '6-17': { min: 6, max: 17 },
    '17+': { min: 17, max: Infinity }
  };

  testFilters.duration.forEach(dur => {
    const range = DURATION_RANGES[dur];
    if (range && hours >= range.min && hours < range.max) {
      matchesDuration = true;
    }
  });

  if(!matchesDuration) return false
 }

 const handsOnSelected = Object.values(testFilters.handsOn).some(v => v===true)

 if(handsOnSelected) {
  const features = course.details.features || {}
  let matchesHandsOn = false

  if(testFilters.handsOn.quizzes && features.hasQuizzes) matchesHandsOn = true
  if (testFilters.handsOn.codingExercises && features.hasCodingExercises) matchesHandsOn = true;
  if (testFilters.handsOn.practiceTests && features.hasPracticeTests) matchesHandsOn = true;
  if (testFilters.handsOn.rolePlays && features.hasRolePlays) matchesHandsOn = true;

  if (!matchesHandsOn) return false;
 }
 
 return true
}

const countFilterOption = function(coursesArray, tempFilters, filterConfig) {
  const testFilters = JSON.parse(JSON.stringify(tempFilters));
  
  switch (filterConfig.type) {
    case 'rating':
      testFilters.rating = [filterConfig.value];
      break;
      
    case 'language':
      if (!testFilters.language.includes(filterConfig.value)) {
        testFilters.language.push(filterConfig.value);
      }
      break;
      
    case 'level':
      if (!testFilters.level.includes(filterConfig.value)) {
        testFilters.level.push(filterConfig.value);
      }
      break;
      
    case 'duration':
      if (!testFilters.duration.includes(filterConfig.value)) {
        testFilters.duration.push(filterConfig.value);
      }
      break;
      
    case 'handsOn':
      testFilters.handsOn[filterConfig.value] = true;
      break;
      
    default:
      console.warn('Unknown filter type:', filterConfig.type);
      return 0;
  }
  
  const matchingCourses = coursesArray.filter(course => 
    courseMatchesFilters(course, testFilters)
  );
  
  return matchingCourses.length;
};

const calculateFilterCounts = function(coursesArray, tempFilters) {
  const counts = {};
  
  const ratingValues = ['4.5', '4.0', '3.5', '3.0'];
  ratingValues.forEach(rating => {
    counts[`rating-${rating}`] = countFilterOption(coursesArray, tempFilters, {
      type: 'rating',
      value: rating,
      countKey: `rating-${rating}`
    });
  });
  
  const languages = ['English', 'Spanish', 'Portuguese', 'French', 'German'];
  languages.forEach(lang => {
    counts[`lang-${lang}`] = countFilterOption(coursesArray, tempFilters, {
      type: 'language',
      value: lang,
      countKey: `lang-${lang}`
    });
  });
  
  const handsOnOptions = ['quizzes', 'codingExercises', 'practiceTests', 'rolePlays'];
  handsOnOptions.forEach(option => {
    counts[`hands-${option}`] = countFilterOption(coursesArray, tempFilters, {
      type: 'handsOn',
      value: option,
      countKey: `hands-${option}`
    });
  });
  
  const levels = ['all-levels', 'beginner', 'intermediate', 'advanced'];
  levels.forEach(level => {
    counts[`level-${level}`] = countFilterOption(coursesArray, tempFilters, {
      type: 'level',
      value: level,
      countKey: `level-${level}`
    });
  });
  
  const durations = ['0-1', '1-3', '3-6', '6-17', '17+'];
  durations.forEach(dur => {
    const countKey = dur === '17+' ? 'dur-17plus' : `dur-${dur}`;
    counts[countKey] = countFilterOption(coursesArray, tempFilters, {
      type: 'duration',
      value: dur,
      countKey: countKey
    });
  });
  
  return counts;
}

const updateFilterCounts = function (coursesArray, tempFilters) {
  const counts = calculateFilterCounts(coursesArray, tempFilters);
  
  const countElements = document.querySelectorAll('.filter-count');  
  countElements.forEach((element, index) => {
    const dataCount = element.getAttribute('data-count');
    
    const count = counts[dataCount] || 0;
    element.textContent = `(${count})`;
  });
  };




const handleSearch = function () {
  const searchInput = document.querySelector('.search-input');
  const prevBtn = document.querySelector('#search-prev-btn');
  const nextBtn = document.querySelector('#search-next-btn');
  const searchSection = document.querySelector('#search-section');
  const hideContainer = document.querySelector('.hide-container');
  const queryText = document.querySelector('.search-query-text');
  const allFiltersBtn = document.querySelector('.all-filters-btn');
  const filtersOverlay = document.querySelector('#filters-overlay');
  const filtersSidebar = document.querySelector('#filters-sidebar');
  const filtersCloseBtn = document.querySelector('#filters-close-btn');
  const filtersClearBtn = document.querySelector('#filters-clear-btn');
  const filtersApplyBtn = document.querySelector('#filters-apply-btn');
  const quizBtn = document.querySelector('.quiz-btn');
const exerciseBtn = document.querySelector('.excercise-btn');
const practiceBtn = document.querySelector('.practice-btn');
const roleplayBtn = document.querySelector('.roleplay-btn');

  if (!searchInput || !prevBtn || !nextBtn || !searchSection || !hideContainer)
    return;

  const state = {
    page: 0,
    perPage: 12,
    matches: [],
    filtered: [],
  };


  const filters = createFilterState();
  const tempFilters = createFilterState();

  const updateDisplay = () => {
    const currentPageEl = document.querySelector('.current-page');
    const totalPagesEl = document.querySelector('.total-pages');
    const resultsCount = document.querySelector('.results-count');

    state.filtered = applyFilters(state.matches, filters);

    const totalPages = Math.ceil(state.filtered.length / state.perPage);
    const maxPageIndex = Math.max(0, totalPages - 1);

    if (state.page > maxPageIndex) state.page = 0;
    const startIndex = state.page * state.perPage;

    const coursesToShow = state.filtered.slice(
      startIndex,
      startIndex + state.perPage
    );

    // Display the courses
    displaySearchResults(coursesToShow);

    prevBtn.style.display = state.page > 0 ? 'grid' : 'none';
    nextBtn.style.display = state.page < totalPages - 1 ? 'grid' : 'none';

    if (currentPageEl) currentPageEl.textContent = state.page + 1;
    if (totalPagesEl) totalPagesEl.textContent = totalPages || 1;
    if (resultsCount) resultsCount.textContent = `${state.filtered.length}`;
  };

  const setQuickButtonsActiveUI = function (activeKey) {
    quizBtn?.classList.toggle('active', activeKey === 'quizzes');
    exerciseBtn?.classList.toggle('active', activeKey === 'codingExercises');
    practiceBtn?.classList.toggle('active', activeKey === 'practiceTests');
    roleplayBtn?.classList.toggle('active', activeKey === 'rolePlays');
  };

  const applySingleQuickHandsOn = function (key) {
    const isAlreadyOn = !!filters.handsOn[key];
  
    filters.handsOn.quizzes = false;
    filters.handsOn.codingExercises = false;
    filters.handsOn.practiceTests = false;
    filters.handsOn.rolePlays = false;
  
    if (!isAlreadyOn) {
      filters.handsOn[key] = true;
    }

    quizBtn.classList.toggle('active', filters.handsOn.quizzes);
    exerciseBtn.classList.toggle('active', filters.handsOn.codingExercises);
    practiceBtn.classList.toggle('active', filters.handsOn.practiceTests);
    roleplayBtn.classList.toggle('active', filters.handsOn.rolePlays);
  
    state.page = 0;
    updateDisplay();
  };

quizBtn.addEventListener('click', () => applySingleQuickHandsOn('quizzes'));
exerciseBtn.addEventListener('click', () => applySingleQuickHandsOn('codingExercises'));
practiceBtn.addEventListener('click', () => applySingleQuickHandsOn('practiceTests'));
roleplayBtn.addEventListener('click', () => applySingleQuickHandsOn('rolePlays'));



  prevBtn.addEventListener('click', () => {
    if (state.page <= 0) return;
    state.page -= 1;
    updateDisplay();
  });

  nextBtn.addEventListener('click', () => {
    const totalPages = Math.ceil(state.matches.length / state.perPage);
    if (state.page >= totalPages - 1) return;
    state.page += 1;
    updateDisplay();
  });

  searchInput.addEventListener('input', e => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      searchSection.style.display = 'none';
      hideContainer.style.display = 'block';
      state.matches = [];
      state.page = 0;
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
      return;
    }

    const matches = courses.filter(course =>
      course.title.toLowerCase().includes(query)
    );
    searchSection.style.display = 'block';
    hideContainer.style.display = matches.length > 0 ? 'none' : 'block';

    state.matches = matches;
    state.page = 0;

    if (queryText) queryText.textContent = `"${e.target.value}"`;

    updateDisplay();

    if (matches.length === 0) {
      const gridContainer = document.querySelector('#search-courses-grid');
      if (gridContainer) {
        gridContainer.innerHTML = `
          <div class="no-result-container">
            <p>
              No courses found for "${e.target.value}". Try a different search term.
            </p>
          </div>`;
      }

      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    }
  });



  if(allFiltersBtn) {
    allFiltersBtn.addEventListener('click', ()=> {
      Object.assign(tempFilters, JSON.parse(JSON.stringify(filters)));

      syncSidebarUI(tempFilters);

   openFiltersSidebar(filtersSidebar, filtersOverlay, tempFilters, filters, syncSidebarUI);

      updateFilterCounts(state.matches, tempFilters);
    })
  }

  if(filtersCloseBtn) {
    filtersCloseBtn.addEventListener('click', ()=> {
      closeFiltersSidebar(filtersSidebar, filtersOverlay);
    })
  }

  if(filtersOverlay) {
    filtersOverlay.addEventListener('click', ()=> {
      closeFiltersSidebar(filtersSidebar, filtersOverlay);
    })
  }

  if (filtersClearBtn) {
    filtersClearBtn.addEventListener('click', () => {  
      Object.assign(tempFilters, createFilterState());
      syncSidebarUI(tempFilters);
      updateFilterCounts(state.matches, tempFilters);
    });
  }

  if (filtersApplyBtn) {
    filtersApplyBtn.addEventListener('click', () => {
      Object.assign(filters, JSON.parse(JSON.stringify(tempFilters)));

      state.page = 0;

      updateDisplay();
      closeFiltersSidebar(filtersSidebar, filtersOverlay);
    });
  }
 
  document.querySelectorAll('.rating-radio').forEach(radio => {
    radio.addEventListener('change', () => {
      tempFilters.rating = [radio.value];
      updateFilterCounts(state.matches, tempFilters);
    });
  });
  
  document.querySelectorAll('.language-checkbox').forEach(cb => {
    cb.addEventListener('change', () => {
      if (cb.checked) {
        if (!tempFilters.language.includes(cb.value)) tempFilters.language.push(cb.value);
      } else {
        tempFilters.language = tempFilters.language.filter(v => v !== cb.value);
      }
      updateFilterCounts(state.matches, tempFilters);
    });
  });
  
  document.querySelectorAll('.level-checkbox').forEach(cb => {
    cb.addEventListener('change', () => {
      if (cb.checked) {
        if (!tempFilters.level.includes(cb.value)) tempFilters.level.push(cb.value);
      } else {
        tempFilters.level = tempFilters.level.filter(v => v !== cb.value);
      }
      updateFilterCounts(state.matches, tempFilters);
    });
  });
  
  document.querySelectorAll('.duration-checkbox').forEach(cb => {
    cb.addEventListener('change', () => {
      if (cb.checked) {
        if (!tempFilters.duration.includes(cb.value)) tempFilters.duration.push(cb.value);
      } else {
        tempFilters.duration = tempFilters.duration.filter(v => v !== cb.value);
      }
      updateFilterCounts(state.matches, tempFilters);
    });
  });
  
  document.querySelectorAll('.hands-on-checkbox').forEach(cb => {
    cb.addEventListener('change', () => {
      const key = cb.value; 
      tempFilters.handsOn[key] = cb.checked;
  
      updateFilterCounts(state.matches, tempFilters);
    });
  });
};
