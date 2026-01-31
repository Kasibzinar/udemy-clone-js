'use strict';

////////////////////////////////////////////////////////////
/////////////////////// FOR LOADING ////////////////////////

import { courses } from '../static/courses.js';
import { htmlTemplates } from './templates.js';

document.addEventListener('DOMContentLoaded', function () {
  loadPageMessage();
  loadHeader();
  loadFooter();
  loadCoursePage();
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

//////////////////////////////////////
// finding course by id
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

const getCourseIdFromURL = function () {
  const p = new URLSearchParams(window.location.search);
  return p.get('course');
};

const findCourseById = function (idStr) {
  const id = Number(idStr);

  return courses.find(c => Number(c.id) === id);
};

function loadCoursePage() {
  const courseTitle = document.getElementById('courseTitle');
  const courseShortDesc = document.getElementById('courseDetaisDescription');
  const courseState = document.getElementById('courseState');
  const courseInstructor = document.getElementById('instructorName');
  const courseUpdate = document.getElementById('updateDate');
  const courseBreadcrumbs = document.getElementById('courseBreadcrumbs');
  const courseImage = document.getElementById('courseImage');
  const courseAboutBtn = document.getElementById('aboutCourseBtn');
  const courseRatingNum = document.getElementById('ratingNumber');
  const ratingStars = document.getElementById('ratingStars');
  const ratingCount = document.getElementById('ratingCount');
  const learnersNum = document.querySelector('.learners-number span');
  const learningPointsLeft = document.querySelector('.learning-points-left');
  const learningPointsRight = document.querySelector('.learning-points-right');
  const courseIncludedLists = document.querySelectorAll('.included-list');
  const totalSections = document.getElementById('totalSections');
  const totalLectures = document.getElementById('totalLectures');
  const courseLength = document.getElementById('courseLength');
  const courseContentList = document.getElementById('courseContentList');

  const id = getCourseIdFromURL();
  const course = findCourseById(id);

  const courseDetails = course.details;
  courseTitle.textContent = course.title;
  courseShortDesc.textContent = courseDetails.shortDescription;
  courseInstructor.textContent = course.instructor;
  courseImage.src = course.image;
  courseImage.alt = course.title;
  const breadcrumbs = course.extendedDetails?.breadcrumbs;
  courseUpdate.textContent = `Last update ${
    course.metadata.lastUpdated || 'N/A'
  }`;

  if (courseState && course.badge && course.badge.length > 0) {
    courseState.innerHTML = course.badge
      .map(btn => `<span class="btn-${btn.toLowerCase()}">${btn}</span>`)
      .join(' ');
  }

  if (courseBreadcrumbs && breadcrumbs && Array.isArray(breadcrumbs)) {
    courseBreadcrumbs.innerHTML = breadcrumbs
      .map(
        breadcrumb =>
          `<a href="${breadcrumb.link || '#'}">${breadcrumb.text}</a>`
      )
      .join(' > ');
  }

  courseRatingNum.textContent = String(course.rating);
  ratingStars.textContent = renderStars(course.rating);
  ratingCount.textContent = `${course.reviews} Rating`;

  if (learnersNum && course.metadata.enrollmentCount) {
    learnersNum.textContent = course.metadata.enrollmentCount.toLocaleString();
  }

  const learningPoints = Array.isArray(courseDetails.learningObjectives)
    ? courseDetails.learningObjectives
    : [];

  const midPoints = Math.ceil(learningPoints.length / 2);
  const leftPoints = learningPoints.slice(0, midPoints);
  const rightPoints = learningPoints.slice(midPoints);

  const renderPoints = arr =>
    arr
      .map(
        point => `
    <li class="learning-point">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>${point}</span>
    </li>
  `
      )
      .join('');

  learningPointsLeft.innerHTML = renderPoints(leftPoints);
  learningPointsRight.innerHTML = renderPoints(rightPoints);

  if (courseIncludedLists.length > 0 && courseDetails.features) {
    const includes = [];
    if (courseDetails.features.lifetimeAccess) includes.push('Lifetime access');
    if (courseDetails.features.mobileAccess)
      includes.push('Access on mobile and TV');
    if (courseDetails.features.certificate)
      includes.push('Certificate of completion');
    if (courseDetails.totalHours)
      includes.push(`${courseDetails.totalHours} hours on-demand video`);

    const midIncludes = Math.ceil(includes.length / 2);

    if (courseIncludedLists[0])
      courseIncludedLists[0].innerHTML = includes
        .slice(0, midIncludes)
        .map(item => `<li class="includes-item">${item}</li>`)
        .join('');

    if (courseIncludedLists[1])
      courseIncludedLists[1].innerHTML = includes
        .slice(midIncludes)
        .map(item => `<li class="includes-item">${item}</li>`)
        .join('');
  }

  const courseContent = course.extendedDetails?.content;
  if (courseContent) {
    totalSections.textContent = `${courseContent.totalSections} sections`;
    totalLectures.textContent = `${courseContent.totalLectures} lectures`;
    courseLength.textContent = `${courseContent.totalLength} total lengths`;

    if (courseContentList && courseContent.sections) {
      courseContentList.innerHTML = courseContent.sections
        .map(
          section => `
        <div class="course__content--item">
          <div class="course__content--section">
            <div class="section__title-btn">
              <h3 class="section__title">${section.title}</h3>
            </div>
            <div class="section-duration">
              <span>${section.lectures} lectures</span>
              <span>${section.duration}</span>
            </div>
          </div>
        </div>`
        )
        .join('');
    }
  }

  displayInstructorCourses(course);
}

///////////////////////////////////////
// Find Instructor Courses

const findInstructorCourses = function (instructorName, currentCourseId) {
  return courses.filter(
    course =>
      course.instructor === instructorName &&
      Number(course.id) !== Number(currentCourseId)
  );
};

const createInstructorCourseCard = function (course) {
  return `
    <a href="course.html?course=${course.id}" class="instructor-course-card">
      <div class="instructor-course-image">
        <img src="${course.image}" alt="${course.title}" />
      </div>
      <div class="instructor-course-info">
        <h3 class="course-title">${course.title}</h3>
        <div class="course-rating instructor__course-rating">
          <span class="instructor-course-rating">${course.rating}</span>
          <span class="instructor-course-stars">${renderStars(
            course.rating
          )}</span>
          <span class="instructor-course-reviews">(${course.reviews.toLocaleString()})</span>
        </div>
        <div class="instructor-course-price">
          <span class="instructor-course-price-value">$${course.price}</span>
          ${
            course.badge && course.badge.length > 0
              ? `<div class="instructor-course-badges">
                ${course.badge
                  .map(
                    badge =>
                      `<span class="btn-${badge.toLowerCase()}">${badge}</span>`
                  )
                  .join('')}
               </div>`
              : ''
          }
        </div>
      </div>
    </a>
  `;
};

const displayInstructorCourses = function (course) {
  const instructorOtherCourses = document.querySelector('#instructorCourses');
  const instructorCoursesGrid = document.querySelector('#instructorGrid');
  const instructorNameTitle = document.querySelector('#instructorNameForTitle');

  const instructorName = course.instructor;
  const currentCourseId = course.id;
  instructorNameTitle.textContent = instructorName;

  const otherCourses = findInstructorCourses(instructorName, currentCourseId);

  if (otherCourses.length === 0) {
    instructorOtherCourses.style.display = 'none';
    return;
  }

  instructorOtherCourses.style.display = 'block';
  const coursesToShow = otherCourses.slice(0, 6);

  instructorCoursesGrid.innerHTML = coursesToShow
    .map(course => createInstructorCourseCard(course))
    .join('');
};
