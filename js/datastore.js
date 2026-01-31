'use strict';

import { courses } from '../static/courses.js';

// window.udemyData = window.udemyData || {};
// window.udemyData.courses = courses;

///////////////////////////////////////
// Hero Sliders
export const heroSlides = [
  {
    image: 'images/main-images/hero-image-1.png',
    heading: 'The skills for now — now on sale',
    body: "Courses that meet today's challenges (and tomorrow's). They start at just $9.99. Sale ends tomorrow.",
    buttonText: 'Get your offer',
    buttonLink: '#',
  },
  {
    image: 'images/main-images/hero-image-2.jpg',
    heading: 'Slow and steady',
    body: 'Try learning just 5–10 minutes a day. Continue your course and reach your peak potential.',
    buttonText: 'Continue your course',
    buttonLink: '#',
  },
  {
    image: 'images/main-images/hero-image-3.jpg',
    heading: 'Prep for your IT certificate',
    body: 'Explore a future in IT. Start learning toward AWS certification, CompTIA A+ certification, and more.',
    buttonText: 'Explore certifications',
    buttonLink: '#',
  },
];

/////////////////////////////////////////
// All Sections Data
export const sections = [
  {
    id: 'recommended__section',
    title: 'What to learn next',
    subtitle: 'Recommended for you',
    courses: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },

  {
    id: 'cloudEngineers__section',
    title: 'Popular for Cloud Engineers',
    subtitle: 'Edit occupation',
    courses: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  },

  {
    id: 'trendingCourses_section',
    title: 'Trending Courses',
    subtitle: '',
    courses: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  },

  {
    id: 'featured__section',
    title: 'Featured Courses',
    subtitle: '',
    courses: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],

    tabs: {
      enabled: true,
      list: ['Most popular', 'Intermediate & advanced'],
      defaultTab: 'Most popular',
      tabCourses: {
        'Most popular': [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
        'Intermediate & advanced': [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
      },
    },
  },

  {
    id: 'webDesigner__section',
    title: 'What people who learn JavaScript take next',
    subtitle: '',
    courses: [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],

    tabs: {
      enabled: true,
      list: ['Web', 'MySQL', 'Bootstrap'],
      defaultTab: 'Web',
      tabCourses: {
        Web: [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
        MySQL: [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
        Bootstrap: [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
      },
    },
  },
];
