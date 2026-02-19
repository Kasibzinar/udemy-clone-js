'use strict';

////////////////////////////////////
// All Courses Data
export const courses = [
  {
    id: 1,
    title: 'Build Responsive Real-World Websites with HTML and CSS',
    instructor: 'Jonas Schmedmann',
    rating: 4.7,
    reviews: 115553,
    price: 64.99,
    originalPrice: null,
    discount: null,
    image: 'images/recommended-images/html-css.png',
    language: 'English', // Course language

    category: 'Development',
    subcategory: 'Programming Languages',
    tags: ['development', 'programming-languages', 'html', 'css', 'responsive'],
    badge: ['Premium', 'Bestseller'],

    courseFeatures: ['quizzes', 'coding-exercises', 'projects'],

    details: {
      totalHours: 71,
      level: 'all-levels',
      shortDescription:
        'Build beautiful, responsive websites with HTML and CSS. Master modern web design techniques and create real-world projects.',
      learningObjectives: [
        'Become an advanced, confident, and modern JavaScript developer from scratch',
        'Build 6 beautiful real-world projects for your portfolio (not boring toy apps)',
        'Become job-ready by understanding how JavaScript really works behind the scenes',
        'Learn all JavaScript features: ES6, ES7, ES8 & beyond',
        'Master advanced JavaScript practices and OOP principles',
        'Practice your skills with 80+ coding challenges',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
        hasQuizzes: true,
        hasCodingExercises: true,
        hasPracticeTests: false,
        hasRolePlays: false,
      },
    },

    instructorDetails: {
      name: 'Jonas Schmedmann',
      rating: null,
      role: 'Web Developer, Designer, and Teacher',
    },

    metadata: {
      enrollmentCount: 234567,
      lastUpdated: '2024-12-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Programming Languages', link: '#' },
        { text: 'JavaScript', link: '#' },
      ],
      longDescription: [
        `Hi, I'm Jonas! I'm one of Udemy's Top Instructors and all my
              premium courses have earned the best-selling status for
              outstanding performance and student satisfaction.`,
        ` I'm a full-stack web developer and designer with a passion for
              building beautiful web interfaces from scratch. I've been
              building websites and apps since 2010 and also have a Master's
              degree in Engineering.`,
        `discovered my passion for teaching and helping others by sharing
              everything I knew during college. This passion led me to Udemy
              in 2015, where I now have the privilege of training 2,000,000+
              learners in the field of web development.`,
        ` I What learners love the most about all my courses is the fact
              that I take the time to explain every single concept in a way
              that everyone can easily understand.`,
      ],
      includes: [
        '71 hours on-demand video',
        '5 articles',
        '18 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
        '30 coding exercises',
        '15 practice tests',
        '20 quizzes',
        'Quiz assignments', 
      ],
      content: {
        totalSections: 12,
        totalLectures: 180,
        totalLength: '71h 15m',
        sections: [
          { title: 'Welcome to the Course', lectures: 5, duration: '25 min' },
        ],
      },
    },
  },

  {
    id: 2,
    title: 'The Complete JavaScript Course 2025: From Zero to Expert!',
    instructor: 'Jonas Schmedmann',
    rating: 4.7,
    reviews: 227610,
    price: 64.99,
    originalPrice: null,
    discount: null,
    image: 'images/recommended-images/js.png',
    language: 'English', // Course language

    category: 'Development',
    subcategory: 'Programming Languages',
    tags: ['development', 'programming-languages', 'javascript'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 71,
      level: 'all-levels',
      shortDescription:
        'The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!',
      learningObjectives: [
        'Become an advanced, confident, and modern JavaScript developer from scratch',
        'Build 6 beautiful real-world projects for your portfolio (not boring toy apps)',
        'Become job-ready by understanding how JavaScript really works behind the scenes',
        'Learn all JavaScript features: ES6, ES7, ES8 & beyond',
        'Master advanced JavaScript practices and OOP principles',
        'Practice your skills with 80+ coding challenges',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
        hasQuizzes: true,
        hasCodingExercises: true,
      },
    },

    instructorDetails: {
      name: 'Jonas Schmedmann',
      rating: null,
      role: 'Developer and Bootcamp Instructor',
    },

    metadata: {
      enrollmentCount: 234567,
      lastUpdated: '2024-12-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Programming Languages', link: '#' },
        { text: 'JavaScript', link: '#' },
      ],
      longDescription: [],
      includes: [
        '71 hours on-demand video',
        '5 articles',
        '18 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
        '25 quizzes',
      ],
      content: {
        totalSections: 12,
        totalLectures: 180,
        totalLength: '71h 15m',
        sections: [
          {
            title: 'Welcome to the Course',
            lectures: 5,
            duration: '25 min',
          },
          {
            title: 'JavaScript Fundamentals',
            lectures: 25,
            duration: '8h 30m',
          },
          {
            title: 'DOM Manipulation',
            lectures: 20,
            duration: '6h 45m',
          },
        ],
      },
    },
  },
  {
    id: 3,
    title: 'The Web Developer Bootcamp 2025',
    instructor: 'Colt Steele',
    rating: 4.6,
    reviews: 283500,
    price: 64.99,
    originalPrice: null,
    discount: null,
    image: 'images/recommended-images/web-botcamp.png',
    language: 'Spanish', // Course language (Español)

    category: 'Development',
    subcategory: 'Web Development',
    tags: ['development', 'web-development', 'html', 'css', 'javascript'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 73.5,
      level: 'all-levels',
      shortDescription:
        'The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!',
      learningObjectives: [
        'The ins and outs of HTML5, CSS3, and Modern JavaScript',
        'Make REAL web applications using cutting-edge technologies',
        'Create responsive, accessible, and beautiful layouts',
        'Recognize and prevent common security exploits like SQL-Injection & XSS',
        'Continue to learn and grow as a developer, long after the course ends',
        'Create a blog application from scratch using Node, Express, and MongoDB.',
        'Create a complicated yelp-like application from scratch',
        ' Deploy your applications and work with cloud databases',
        'Create static HTML and CSS portfolio sites and landing pages',
        ' Think like a developer. Become an expert at Googling code questions!',
        ' Create complex HTML forms with validations',
        'Implement full authentication from scratch!',
        'Use CSS Frameworks including Bootstrap 5, Semantic UI, and Bulma Implement responsive navbars on websites',
        'Use JavaScript variables, conditionals, loops, functions, arrays, and objects',
        'Use JavaScript variables, conditionals, loops, functions, arrays, and objects',
        'Write Javascript functions, and understand scope and higher order functions',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
        hasQuizzes: true,
        hasCodingExercises: true,
      },
    },

    instructorDetails: {
      name: 'Colt Steele',
      image: 'images/instructor-images/steel__instructor.png',
      rating: null,
      role: 'Developer and Bootcamp Instructor',
    },

    metadata: {
      enrollmentCount: 947544,
      lastUpdated: '2025-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Web Development', link: '#' },
        { text: 'Web Development', link: '#' },
      ],
      longDescription: [
        `Hi! I'm Colt. I'm a developer with a serious love for teaching. I've spent the last few years teaching people to program at 2 different immersive bootcamps where I've helped hundreds of people become web developers and change their lives. My graduates work at companies like Google, Salesforce, and Square.`,
        `Most recently, I led Galvanize's SF's 6 month immersive program as Lead Instructor and Curriculum Director. After graduating from my class, 94% of my students went on to receive full-time developer roles. I also worked at Udacity as a Senior Course Developer on the web development team where I got to reach thousands of students daily.`,
        `I've since focused my time on bringing my classroom teaching experience to an online environment. In 2016 I launched my Web Developer Bootcamp course, which has since gone on to become one of the best selling and top rated courses on Udemy. I was also voted Udemy's Best New Instructor of 2016.`,
        `I've spent years figuring out the "formula" to teaching technical skills in a classroom environment, and I'm really excited to finally share my expertise with you. I can confidently say that my online courses are without a doubt the most comprehensive ones on the market.`,
      ],
      includes: [
        '73.5 hours on-demand video',
        '38 articles',
        '94 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
        '30 quizzes',
      ],
      content: {
        totalSections: 74,
        totalLectures: 703,
        totalLength: '74h 9m ',
        sections: [
          {
            title: 'Course Orientation',
            lectures: 9,
            duration: '36 min',
          },
          {
            title: 'HTML: The Essentials',
            lectures: 13,
            duration: '1h 3m',
          },
          {
            title: 'HTML: Next Steps & Semantics',
            lectures: 9,
            duration: '1h 1m',
          },
          {
            title: 'HTML: Forms & Tables ',
            lectures: 17,
            duration: '1h 45m',
          },
          {
            title: ' CSS: The Very Basics',
            lectures: 11,
            duration: '1h',
          },
          {
            title: ' The World of CSS Selectors',
            lectures: 14,
            duration: '1h 10m',
          },
          {
            title: ' The CSS Box Model',
            lectures: 9,
            duration: '1h 18m',
          },
          {
            title: ' Other Assorted Useful CSS Properties',
            lectures: 11,
            duration: '1h 29m',
          },
        ],
      },
    },
  },
  {
    id: 4,
    title: 'JavaScript - The Complete Guide 2025 (Beginner + Advanced)',
    instructor: 'Academind by Maxmillian',
    rating: 4.6,
    reviews: 32366,
    price: 64.99,
    originalPrice: null,
    discount: null,
    image: 'images/recommended-images/max-js.png',
    language: 'Portuguese', // Course language (Português)

    category: 'Development',
    subcategory: 'Programming Languages',
    tags: ['development', 'programming-languages', 'javascript'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 52.5,
      level: 'all-levels',
      shortDescription:
        'Modern JavaScript from the beginning - all the way up to JS expert level! THE must-have JavaScript resource in 2025.',
      learningObjectives: [
        'Learn JavaScript from scratch and in great detail - from beginner to advanced',
        'All core features and concepts you need to know in modern JavaScript development',
        'Everything you need to become a JavaScript expert and apply for JavaScript jobs',
        'Project-driven learning with plenty of examples All about variables, functions, objects and arrays Object-oriented programming',
        'Deep dives into prototypes, JavaScript engines & how it works behind the scenes',
        'Understand advanced JavaScript concepts and patterns',
        'And so much more!',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
        hasQuizzes: true,
        hasCodingExercises: true,
      },
    },

    instructorDetails: {
      name: 'Academind by Maxmillian',
      image: 'images/instructor-images/max__instructor.png',
      rating: null,
      role: 'Online Education',
    },

    metadata: {
      enrollmentCount: 150000,
      lastUpdated: '2024-11-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Programming Languages', link: '#' },
        { text: 'JavaScript', link: '#' },
      ],
      longDescription: [
        `Starting out at the age of 12 I never stopped learning new programming skills and languages. Early I started creating websites for friends and just for fun as well. Besides web development I also explored Python and other non-web-only languages. This passion has since lasted and lead to my decision of working as a freelance web developer and consultant. The success and fun I have in this job is immense and really keeps that passion burningly alive.`,
        `Starting web development on the backend (PHP with Laravel, NodeJS, Python) I also became more and more of a frontend developer using modern frameworks like React, Angular or VueJS in a lot of projects. I love both worlds nowadays!`,
        `I also build full-stack applications and acquired expert DevOps and cloud computing knowledge - proven by the many AWS certifications I hold (incl. the top-level Solutions Architect Professional certification).`,
        `As a self-taught developer I had the chance to broaden my horizon by studying Business Administration where I hold a Master's degree. That enabled me to work in a major strategy consultancy as well as a bank. While learning, that I enjoy development more than these fields, the time in this sector greatly improved my overall experience and skills.`,
      ],
      includes: [
        '52 hours on-demand video',
        '77  articles',
        '696  downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
        '20 quizzes',
      ],
      content: {
        totalSections: 36,
        totalLectures: 617,
        totalLength: '52h 33m',
        sections: [
          {
            title: 'Introduction',
            lectures: 15,
            duration: '1h',
          },
          {
            title: 'Basics: Variables, Data Types, Operators & Functions',
            lectures: 39,
            duration: ' 3hr 16min',
          },
          {
            title: 'Efficient Development & Debugging',
            lectures: 19,
            duration: '19min',
          },
          {
            title:
              'Working with Control Structures (if Statements, Loops, Error Handling)',
            lectures: 38,
            duration: ' 3hr 52min ',
          },
        ],
      },
    },
  },
  {
    id: 5,
    title: 'Fundamentals of Backend Engineering',
    instructor: 'Hussian Nasser',
    rating: 4.7,
    reviews: 8309,
    price: 59.99,
    originalPrice: null,
    discount: null,
    image: 'images/recommended-images/backend-fundementals.png',
    language: 'French', // Course language (Français)

    category: 'Development',
    subcategory: 'Backend Development',
    tags: ['development', 'backend-development', 'backend'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 19.5,
      level: 'intermediate',
      shortDescription:
        ' Understand backend communication design patterns, protocols, execution and proxying',
      learningObjectives: [
        'Learn the fundamentals of backend engineering',
        'Backend communication design patterns',
        'Understand how backend communication protocols work',
        'Comprehend how OS Kernel communicate with Backend Applications   ',
        'Operating System fundamentals (Thread, Process, async IO in linux)',
        'Learn HTTP/1.1, HTTP/2, HTTP/3   ',
        'Learn gRPC, WebRTC, WebSockets',
        'Learn TLS 1.2, TLS 1.3, QUIC 0RTT',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
        hasQuizzes: true,
      },
    },

    instructorDetails: {
      name: 'Hussian Nasser',
      image: 'images/instructor-images/hussian__instructor.png',
      rating: null,
      role: 'Software Engineer, Author',
    },

    metadata: {
      enrollmentCount: 51615,
      lastUpdated: '2025-10-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Backend Development', link: '#' },
        { text: 'Backend Engineering', link: '#' },
      ],
      longDescription: [
        `Early in my career 20 years ago I built database applications without fully grasping their inner mechanics. Facing performance issues, racing conditions bug and even corruption often left me helpless.`,
        `I resolved to truly understand the workings of database systems, ensuring I knew every query from my app and its execution in the db and what I choose to make as a transaction and what I make into an atomic query.`,
        `From that day I have fascinated by pursuing deep understanding of what is happening behind the scenes in software. If you follow me here you would see deep dive posts about backend, databases and operating systems.`,
        `If you enjoy pursing the internals, I think you may like my courses.`,
      ],
      includes: [
        '19.5 hours on-demand video',
        '5 articles',
        '37 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
        '10 quizzes',
      ],
      content: {
        totalSections: 8,
        totalLectures: 63,
        totalLength: '19h 37m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '23 min',
          },
          {
            title: 'Backend Communication Design Patterns ',
            lectures: 11,
            duration: '3hr 26min ',
          },
          {
            title: 'Protocols',
            lectures: 14,
            duration: '8hr 53min',
          },
          {
            title: 'Many ways to HTTPS',
            lectures: 7,
            duration: '21min',
          },
          {
            title: 'Backend Execution Patterns',
            lectures: 13,
            duration: '2hr 7min',
          },
        ],
      },
    },
  },
  {
    id: 6,
    title: 'Fundamentals of Network Engineering',
    instructor: 'Hussian Nasser',
    rating: 4.7,
    reviews: 5802,
    price: 59.99,
    originalPrice: null,
    discount: null,
    image: 'images/recommended-images/network-fundemantals.png',
    language: 'German', // Course language (Deutsch)

    category: 'Development',
    subcategory: 'Backend Development',
    tags: ['development', 'backend-development', 'backend'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 18.5,
      level: 'intermediate',
      shortDescription:
        ' Understanding the first principles of networking to build low latency and high throughput backends',
      learningObjectives: [
        'Understand IP Protocol fundamentals',
        'Master TCP Protocol and its applications',
        'Learn UDP Protocol and when to use it',
        'Build low latency network systems',
        'Design high throughput backends',
        'Understand network security principles',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
        hasQuizzes: true,
      },
    },

    instructorDetails: {
      name: 'Hussian Nasser',
      rating: null,
      role: 'Software Engineer, Author',
    },

    metadata: {
      enrollmentCount: 48411,
      lastUpdated: '2025-05-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Backend Development', link: '#' },
        { text: 'Network Engineering', link: '#' },
      ],
      longDescription: [
        `I'm Hussam, specializing in network engineering and system design.`,
        `This course covers the fundamental principles of networking.`,
        `Learn how to build high-performance network systems.`,
        `Master networking protocols and their real-world applications.`,
      ],
      includes: [
        '18 hours on-demand video',
        '5 articles',
        '43 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 66,
        totalLength: '18h 22m',
        sections: [
          {
            title: 'Introduction',
            lectures: 4,
            duration: '16 min',
          },
          {
            title: 'Fundamentals of Networking',
            lectures: 3,
            duration: 'hr 10min',
          },
          {
            title: 'Internet Protocol (IP)',
            lectures: 7,
            duration: '1hr 54min',
          },
          {
            title: 'User Datagram Protocol (UDP)',
            lectures: 6,
            duration: '56min',
          },
          {
            title: 'Transmission Control Protocol (TCP)',
            lectures: 12,
            duration: '3hr 10min',
          },
        ],
      },
    },
  },
  {
    id: 7,
    title: 'Node.js, Express, MongoDB & More: The Complete Bootcamp',
    instructor: 'Jonas Schmedmann',
    rating: 4.6,
    reviews: 28716,
    price: 64.99,
    originalPrice: null,
    discount: null,
    image: 'images/recommended-images/nodejs.png',
    language: 'English', // Course language

    category: 'Development',
    subcategory: 'Web Development',
    tags: ['development', 'web-development', 'node', 'javascript'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 42,
      level: 'all-levels',
      shortDescription:
        ' Master Node by building a real-world RESTful API and web app (with authentication, Node.js security, payments & more)',
      learningObjectives: [
        'Master the entire modern back-end stack: Node, Express, MongoDB and Mongoose (MongoDB JS driver)',
        'Build a fast, scalable, feature-rich RESTful API (includes filters, sorts, pagination, and much more)',
        'CRUD operations with MongoDB and Mongoose',
        'How to work with data in NoSQL databases (including geospatial data)',
        'Build a complete, beautiful & real-world application from start to finish (API and server-side rendered website)',
        'Learn how Node really works behind the scenes: event loop, blocking vs non-blocking code, streams, modules, etc.',
        'Deep dive into mongoose (including all advanced features)',
        'Advanced authentication and authorization (including password reset)',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
        hasCodingExercises: true,
      },
    },

    instructorDetails: {
      name: 'Jonas Schmedmann',
      rating: null,
      role: 'Web Developer, Designer, and Teacher',
    },

    metadata: {
      enrollmentCount: 171712,
      lastUpdated: '2024-11-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Web Development', link: '#' },
        { text: 'Node.js', link: '#' },
      ],
      longDescription: [
        `Hi, I'm Jonas! I'm one of Udemy's Top Instructors and all my premium courses have earned the best-selling status.`,
        `I'm a full-stack web developer and designer with a passion for building beautiful web interfaces from scratch.`,
        `I've been building websites and apps since 2010 and also have a Master's degree in Engineering.`,
        `What learners love the most about all my courses is the fact that I take the time to explain every single concept in a way that everyone can easily understand.`,
      ],
      includes: [
        '42 hours on-demand video',
        '3 articles',
        '30 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 15,
        totalLectures: 229,
        totalLength: '42h 12m',
        sections: [
          {
            title: 'Welcome, Welcome, Welcome!',
            lectures: 3,
            duration: '13min',
          },
          {
            title: 'Introduction to Node.js and NPM',
            lectures: 20,
            duration: '3hr 20min',
          },
          {
            title: 'Introduction to Back-End Web Development',
            lectures: 5,
            duration: '35min',
          },
          {
            title: 'How Node.js Works: A Look Behind the Scenes',
            lectures: 11,
            duration: '1hr 46min',
          },
          {
            title:
              '[Optional] Asynchronous JavaScript: Promises and Async/Await',
            lectures: 7,
            duration: '1hr 2min',
          },
        ],
      },
    },
  },
  {
    id: 8,
    title: 'Probability and Statistics for Business and Data Science',
    instructor: 'Jose Portilla, Pierian Training',
    rating: 4.7,
    reviews: 7803,
    price: 69.99,
    originalPrice: null,
    discount: null,
    image: 'images/recommended-images/probibilty.png',
    language: 'Spanish', // Course language (Español)

    category: 'Development',
    subcategory: 'Data Science',
    tags: ['development', 'data-science', 'python'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 5,
      level: 'intermediate',
      shortDescription:
        'Master probability and statistics for business and data science applications',
      learningObjectives: [
        'Understand the basics of probability',
        'Understand how to use various statistical distributions',
        'Understand how regression models work',
        'Understand Chi Squared Tests',
        'Be able to implement basic statistics',
        'Apply statistical methods and hypothesis testing to business problems',
        'Implement one way and two way ANOVA',
        'Be able to understand different types of data',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Jose Portilla, Pierian Training',
      image: 'images/instructor-images/jose__instructor.png',
      rating: null,
      role: 'Head of Data Science at Pierian Training',
    },

    metadata: {
      enrollmentCount: 41235,
      lastUpdated: '2019-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Data Science', link: '#' },
        { text: 'Statistics', link: '#' },
      ],
      longDescription: [
        `Jose Marcial Portilla has a BS and MS in Mechanical Engineering from Santa Clara University and years of experience as a professional instructor and trainer for Data Science, Machine Learning and Python Programming.`,
        `He has publications and patents in various fields such as microfluidics, materials science, and data science.`,
        `Over the course of his career he has developed a skill set in analyzing data and he hopes to use his experience in teaching and data science to help other people learn the power of programming, the ability to analyze data, and the skills needed to present the data in clear and beautiful visualizations.`,
        `Feel free to check out the website link to find out more information about training offerings.`,
      ],
      includes: [
        '5 hours on-demand video',
        '10 articles',
        '35 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 9,
        totalLectures: 53,
        totalLength: '5h 14m',
        sections: [
          {
            title: 'Introduction',
            lectures: 2,
            duration: '6min',
          },
          {
            title: 'Data',
            lectures: 8,
            duration: '1hr 1min',
          },
          {
            title: 'Probability',
            lectures: 9,
            duration: '52min',
          },
          {
            title: 'Distributions',
            lectures: 8,
            duration: '55min',
          },
          {
            title: 'Statistics',
            lectures: 11,
            duration: '1hr 9min',
          },
        ],
      },
    },
  },
  {
    id: 9,
    title: 'Computer Science 101: Master the Theory Behind Programming',
    instructor: 'Kurt Anderson',
    rating: 4.6,
    reviews: 6561,
    price: 74.99,
    originalPrice: null,
    discount: null,
    image: 'images/recommended-images/computer-secience.png',

    category: 'Development',
    subcategory: 'Computer Science',
    tags: ['development', 'computer-science', 'programming'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 30,
      level: 'beginner',
      shortDescription:
        'Master the fundamental theory behind programming and computer science',
      learningObjectives: [
        'Understand the Fundamental Theories of Algorithm Analysis',
        'Be able to Compare Various Algorithms',
        'Learn data structures and algorithms',
        'Understand the Fundamentals of Computer Science theory',
        'Understand the Core Sorting Algorithms',
        'Build a strong theoretical foundation',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Kurt Anderson',
      image: 'images/instructor-images/kurt__instructor.png',
      rating: null,
      role: 'Computer Scientist, AI Specialist, Multi-Media Designer',
    },

    metadata: {
      enrollmentCount: 38990,
      lastUpdated: '2023-07-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Computer Science', link: '#' },
        { text: 'Programming Theory', link: '#' },
      ],
      longDescription: [
        `I'm Kurt, a computer science educator with a passion for teaching theory.`,
        `I make complex CS concepts accessible and understandable.`,
        `This course covers the essential theory every programmer should know.`,
        `Build a solid foundation in computer science principles.`,
      ],
      includes: [
        '11  hours on-demand video',
        '21 articles',
        '1 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 15,
        totalLectures: 200,
        totalLength: '30h 45m',
        sections: [
          {
            title: 'Introduction',
            lectures: 4,
            duration: '25min',
          },
          {
            title: 'Analyzing Algorithms',
            lectures: 12,
            duration: '1hr 16min',
          },
          {
            title: 'Arrays',
            lectures: 13,
            duration: '1hr 40min',
          },
          {
            title: 'Linked Lists',
            lectures: 10,
            duration: '1hr 5min',
          },
          {
            title: 'Stacks and Queues',
            lectures: 11,
            duration: '1hr 19min',
          },
        ],
      },
    },
  },
  {
    id: 10,
    title: "SQL and PostgreSQL: The Complete Developer's Guide",
    instructor: 'Stephen Grider',
    rating: 4.7,
    reviews: 11867,
    price: 74.99,
    originalPrice: null,
    discount: null,
    image: 'images/recommended-images/sql.png',

    category: 'Development',
    subcategory: 'Database',
    tags: ['development', 'database', 'sql', 'postgresql'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 22,
      level: 'intermediate',
      shortDescription: 'Master SQL and PostgreSQL to become a database expert',
      learningObjectives: [
        'Master SQL fundamentals and advanced queries',
        'Learn PostgreSQL database administration',
        'Build complex database schemas',
        'Optimize database performance',
        'Understand database design principles',
        'Work with advanced PostgreSQL features',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
        hasQuizzes: true,
      },
    },

    instructorDetails: {
      name: 'Stephen Grider',
      rating: null,
      role: 'Full-Stack Developer and Instructor',
    },

    metadata: {
      enrollmentCount: 55000,
      lastUpdated: '2024-10-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Database', link: '#' },
        { text: 'PostgreSQL', link: '#' },
      ],
      longDescription: [
        `I'm Stephen, a full-stack developer specializing in databases.`,
        `I've been teaching SQL and database concepts for years.`,
        `This comprehensive course will make you a SQL expert.`,
        `Learn PostgreSQL from scratch to advanced level.`,
      ],
      includes: [
        '22 hours on-demand video',
        '12 articles',
        '18 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
        '12 quizzes',
      ],
      content: {
        totalSections: 14,
        totalLectures: 180,
        totalLength: '22h 30m',
        sections: [
          {
            title: 'SQL Fundamentals',
            lectures: 10,
            duration: '1h 45m',
          },
          {
            title: 'PostgreSQL Basics',
            lectures: 12,
            duration: '2h 30m',
          },
          {
            title: 'Advanced SQL Queries',
            lectures: 15,
            duration: '3h 15m',
          },
        ],
      },
    },
  },

  {
    id: 11,
    title: 'Certified Kubernetes Administrator (CKA) with Practice Tests',
    instructor: 'Mumshad Mannambeth',
    rating: 4.7,
    reviews: 85400,
    price: 69.99,
    originalPrice: null,
    discount: null,
    image: 'images/cloud-images/kubernets.png',

    category: 'Development',
    subcategory: 'Cloud Computing',
    tags: ['development', 'cloud-computing', 'kubernetes', 'docker'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 26.5,
      level: 'all-levels',
      shortDescription:
        ' Prepare for the Certified Kubernetes Administrators Certification with live practice tests right in your browser - CKA',
      learningObjectives: [
        'How to Administer a Kubernetes Cluster',
        'How to Design a Kubernetes Cluster',
        'How to Build a Kubernetes Cluster from scratch',
        'Master Kubernetes core concepts',
        'Prepare for CKA certification exam',
        'Learn production-ready Kubernetes practices',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
        hasQuizzes: true,
        hasPracticeTests: true,
      },
    },

    instructorDetails: {
      name: 'Mumshad Mannambeth',
      rating: null,
      role: 'DevOps Engineer and Kubernetes Expert',
    },

    metadata: {
      enrollmentCount: 120000,
      lastUpdated: '2024-11-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Cloud Computing', link: '#' },
        { text: 'Kubernetes', link: '#' },
      ],
      longDescription: [
        `I'm Mumshad, a DevOps engineer and Kubernetes expert.`,
        `I specialize in container orchestration and cloud infrastructure.`,
        `This course will prepare you for the CKA certification exam.`,
        `Learn Kubernetes administration from an industry expert.`,
      ],
      includes: [
        '26.5 hours on-demand video',
        '15 articles',
        '20 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
        '15 quizzes',
      ],
      content: {
        totalSections: 18,
        totalLectures: 220,
        totalLength: '26h 30m',
        sections: [
          {
            title: 'Kubernetes Fundamentals',
            lectures: 10,
            duration: '1h 45m',
          },
          {
            title: 'Cluster Administration',
            lectures: 18,
            duration: '3h 30m',
          },
          {
            title: 'Advanced Kubernetes',
            lectures: 20,
            duration: '4h 15m',
          },
        ],
      },
    },
  },
  {
    id: 12,
    title: 'Ultimate AWS Certified Solutions Architect Associate 2025',
    instructor: 'Stephen Maarek',
    rating: 4.7,
    reviews: 270411,
    price: 79.99,
    originalPrice: null,
    discount: null,
    image: 'images/cloud-images/solutions-achitect.png',

    category: 'Development',
    subcategory: 'Cloud Computing',
    tags: ['development', 'cloud-computing', 'aws'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 71,
      level: 'all-levels',
      shortDescription:
        'Master AWS Solutions Architect Associate certification with comprehensive training',
      learningObjectives: [
        'Master AWS Solutions Architect Associate certification',
        'Learn all AWS core services and best practices',
        'Design scalable and highly available systems',
        'Understand AWS security and compliance',
        'Master AWS networking and storage',
        'Prepare for the SAA exam with confidence',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
        hasQuizzes: true,
        hasPracticeTests: true,
      },
    },

    instructorDetails: {
      name: 'Stephen Maarek',
      rating: null,
      role: 'AWS Solutions Architect and Cloud Expert',
    },

    metadata: {
      enrollmentCount: 234567,
      lastUpdated: '2024-12-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Cloud Computing', link: '#' },
        { text: 'AWS', link: '#' },
      ],
      longDescription: [
        `I'm Stephen, an AWS Solutions Architect and cloud expert.`,
        `I've helped thousands of students pass AWS certifications.`,
        `This course covers everything you need for the Solutions Architect Associate exam.`,
        `Learn AWS services and best practices from an industry expert.`,
      ],
      includes: [
        '71 hours on-demand video',
        '5 articles',
        '18 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
        '18 quizzes',
      ],
      content: {
        totalSections: 25,
        totalLectures: 450,
        totalLength: '71h 15m',
        sections: [
          {
            title: 'AWS Fundamentals',
            lectures: 10,
            duration: '2h 30m',
          },
          {
            title: 'EC2 and Compute Services',
            lectures: 20,
            duration: '5h 15m',
          },
          {
            title: 'S3 and Storage Services',
            lectures: 18,
            duration: '4h 45m',
          },
        ],
      },
    },
  },
  {
    id: 13,
    title: '[NEW] Ultimate AWS Certified AI Practitioner AIF-C01',
    instructor: 'Stephen Maarek',
    rating: 4.6,
    reviews: 28201,
    price: 34.99,
    originalPrice: null,
    discount: null,
    image: 'images/cloud-images/ai-pratitioner.png',

    category: 'Development',
    subcategory: 'Cloud Computing',
    tags: ['development', 'cloud-computing', 'aws'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 10.5,
      level: 'beginner',
      shortDescription:
        ' Practice Exam included + explanations | Learn Artificial Intelligence | Pass the AWS AI Practitioner AIF-C01 exam!',
      learningObjectives: [
        ' Pass the AWS Certified AI Practitioner Certification AIF-C01',
        'Practice Exam with Explanations included!',
        'Learn the Fundamentals of Artificial Intelligence, Machine Learning, Deep Learning & Generative AI',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Stephen Maarek',
      image: '',
      rating: null,
      role: '',
    },

    metadata: {
      enrollmentCount: 0,
      lastUpdated: null,
    },

    extendedDetails: {
      breadcrumbs: [],
      longDescription: [],
      includes: [],
      content: {},
    },
  },
  {
    id: 14,
    title: 'Ultimate AWS Certified Solutions Architect Professional 2025',
    instructor: 'Stephen Maarek',
    rating: 4.6,
    reviews: 23377,
    price: 64.99,
    originalPrice: null,
    discount: null,
    image: 'images/cloud-images/so.png',

    category: 'Development',
    subcategory: 'Cloud Computing',
    tags: ['development', 'cloud-computing', 'aws'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 16.5,
      level: 'advanced',
      shortDescription:
        ' Be AWS Certified Solutions Architect Professional. Full Amazon Web Services Solution Architecture deep-dive for SAP-C02',
      learningObjectives: [
        ' PASS the *NEW* AWS Certified Solutions Architect PROFESSIONAL Certification SAP-C02',
        'ALL 500+ SLIDES available as downloadable PDF',
        'TO THE POINT course to help you ace your exam!',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Stephen Maarek',
      image: '',
      rating: null,
      role: '',
    },

    metadata: {
      enrollmentCount: 0,
      lastUpdated: null,
    },

    extendedDetails: {
      breadcrumbs: [],
      longDescription: [],
      includes: [],
      content: {},
    },
  },
  {
    id: 15,
    title: 'Ultimate DevOps and Cloud Interview Guide',
    instructor: 'Abhishek Veeramalla',
    rating: 4.7,
    reviews: 1597,
    price: 34.99,
    originalPrice: null,
    discount: null,
    image: 'images/cloud-images/devops.png',

    category: 'Development',
    subcategory: 'Cloud Computing',
    tags: ['development', 'cloud-computing', 'devops'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 15,
      level: 'intermediate',
      shortDescription:
        'Master DevOps and cloud interview questions to land your dream job',
      learningObjectives: [
        'Master DevOps interview questions',
        'Understand cloud architecture concepts',
        'Learn CI/CD pipeline questions',
        'Prepare for technical interviews',
        'Understand system design questions',
        'Master container and orchestration topics',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Abhishek Veeramalla',
      rating: null,
      role: 'DevOps Engineer and Cloud Architect',
    },

    metadata: {
      enrollmentCount: 8000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Cloud Computing', link: '#' },
        { text: 'DevOps', link: '#' },
      ],
      longDescription: [
        `I'm Abhishek, a DevOps engineer and cloud architect.`,
        `I've helped many professionals prepare for DevOps interviews.`,
        `This course covers all essential DevOps and cloud interview topics.`,
        `Prepare confidently for your next DevOps interview.`,
      ],
      includes: [
        '15 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 10,
        totalLectures: 120,
        totalLength: '15h 30m',
        sections: [
          {
            title: 'DevOps Fundamentals',
            lectures: 8,
            duration: '1h 15m',
          },
          {
            title: 'Cloud Interview Questions',
            lectures: 12,
            duration: '2h 30m',
          },
          {
            title: 'CI/CD Deep Dive',
            lectures: 10,
            duration: '2h 15m',
          },
        ],
      },
    },
  },
  {
    id: 16,
    title: 'AZ-104 Microsoft Azure Administrator Exam Prep',
    instructor: 'Scott Duffy',
    rating: 4.6,
    reviews: 53283,
    price: 69.99,
    originalPrice: null,
    discount: null,
    image: 'images/cloud-images/microsoft-azure.png',

    category: 'Development',
    subcategory: 'Cloud Computing',
    tags: ['development', 'cloud-computing', 'azure'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 28,
      level: 'intermediate',
      shortDescription:
        'Prepare for the Microsoft Azure Administrator AZ-104 certification exam',
      learningObjectives: [
        'Master Azure Administrator AZ-104 certification',
        'Learn Azure core services and administration',
        'Understand Azure identity and access management',
        'Master Azure storage and compute',
        'Learn Azure networking fundamentals',
        'Prepare for the AZ-104 exam with confidence',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
        hasPracticeTests: true,
      },
    },

    instructorDetails: {
      name: 'Scott Duffy',
      rating: null,
      role: 'Azure Administrator and Cloud Expert',
    },

    metadata: {
      enrollmentCount: 95000,
      lastUpdated: '2024-10-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Cloud Computing', link: '#' },
        { text: 'Microsoft Azure', link: '#' },
      ],
      longDescription: [
        `I'm Scott, an Azure Administrator and cloud expert.`,
        `I've helped thousands pass the AZ-104 certification.`,
        `This course covers everything you need for the Azure Administrator exam.`,
        `Learn Azure services and administration from an expert.`,
      ],
      includes: [
        '28 hours on-demand video',
        '12 articles',
        '20 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 16,
        totalLectures: 200,
        totalLength: '28h 45m',
        sections: [
          {
            title: 'Azure Fundamentals',
            lectures: 10,
            duration: '2h',
          },
          {
            title: 'Azure Identity and Access',
            lectures: 15,
            duration: '3h 30m',
          },
          {
            title: 'Azure Storage and Compute',
            lectures: 18,
            duration: '4h 15m',
          },
        ],
      },
    },
  },
  {
    id: 17,
    title: 'HashiCorp Certified Terraform Associate 003 - Practice Exams',
    instructor: 'Bryan Krausen',
    rating: 4.7,
    reviews: 11850,
    price: 54.99,
    originalPrice: null,
    discount: null,
    image: 'images/cloud-images/hashicorp.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'terraform'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
        hasPracticeTests: true,
      },
    },

    instructorDetails: {
      name: 'Bryan Krausen',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 18,
    title: 'Complete Linux Training Course to Get Your Dream IT Job 2025',
    instructor: 'Imran Afzal',
    rating: 4.7,
    reviews: 43156,
    price: 59.99,
    originalPrice: null,
    discount: null,
    image: 'images/cloud-images/linux-training.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'linux'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Imran Afzal',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 19,
    title: '[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02 2025',
    instructor: 'Stephen Maarek',
    rating: 4.7,
    reviews: 266151,
    price: 79.99,
    originalPrice: null,
    discount: null,
    image: 'images/cloud-images/cloud-practitioner.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'aws'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
        hasPracticeTests: true,
      },
    },

    instructorDetails: {
      name: 'Stephen Maarek',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 20,
    title: 'GCP Associate Cloud Engineer - Google Cloud Certification',
    instructor: 'In28Minutes Officel Ranga Karanam',
    rating: 4.6,
    reviews: 34194,
    price: 94.99,
    originalPrice: null,
    discount: null,
    image: 'images/cloud-images/gcp.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'gcp'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
        hasRolePlays: true,
      },
    },

    instructorDetails: {
      name: 'In28Minutes Officel Ranga Karanam',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },

  {
    id: 21,
    title: '100 Days of Code: The Complete Python Pro Bootcamp',
    instructor: 'Dr. Angela Yu',
    rating: 4.7,
    reviews: 394098,
    price: 59.99,
    originalPrice: null,
    discount: null,
    image: 'images/trending-images/100-days-code.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'python'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
        hasCodingExercises: true,
        hasRolePlays: true,
      },
    },

    instructorDetails: {
      name: 'Dr. Angela Yu',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 22,
    title: 'The Complete Agentic AI Engineering Course (2025)',
    instructor: 'Ed Donner, ligency',
    rating: 4.7,
    reviews: 16160,
    price: 44.99,
    originalPrice: null,
    discount: null,
    image: 'images/trending-images/agentic-ai.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'ai'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Ed Donner, ligency',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 23,
    title: 'The Complete Python Bootcamp From Zero to Hero in Python',
    instructor: 'Jose Portilla, Pierian Training',
    rating: 4.7,
    reviews: 547269,
    price: 69.99,
    originalPrice: null,
    discount: null,
    image: 'images/trending-images/python.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'python'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
        hasCodingExercises: true,
      },
    },

    instructorDetails: {
      name: 'Jose Portilla, Pierian Training',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 24,
    title: 'The AI Engineer Course 2025: Complete AI Engineer Bootcamp',
    instructor: '365 Careers',
    rating: 4.6,
    reviews: 9588,
    price: 59.99,
    originalPrice: null,
    discount: null,
    image: 'images/trending-images/ai-engineer.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'ai'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: '365 Careers',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 25,
    title: 'Complete Data Science,Machine Learning,DL,NLP Bootcamp',
    instructor: 'Krish Naik',
    rating: 4.8,
    reviews: 18829,
    price: 59.99,
    originalPrice: null,
    discount: null,
    image: 'images/trending-images/data-science.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'python'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Krish Naik',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 26,
    title: 'Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2025]',
    instructor: 'Kirill Eremenko',
    rating: 4.5,
    reviews: 200036,
    price: 84.99,
    originalPrice: null,
    discount: null,
    image: 'images/trending-images/machine-learning.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'python'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Kirill Eremenko',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 27,
    title: 'Microsoft Power BI Desktop for Business Intelligence',
    instructor: 'Maven Analytics',
    rating: 4.7,
    reviews: 176417,
    price: 99.99,
    originalPrice: null,
    discount: null,
    image: 'images/trending-images/power-bi.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
        hasRolePlays: true,
      },
    },

    instructorDetails: {
      name: 'Maven Analytics',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 28,
    title: 'React - The Complete Guide 2025 (incl. Next.js, Redux)',
    instructor: 'Academind by Maxmillian',
    rating: 4.6,
    reviews: 234410,
    price: 64.99,
    originalPrice: null,
    discount: null,
    image: 'images/trending-images/react-maxmilian.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'react', 'javascript'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
        hasCodingExercises: true,
      },
    },

    instructorDetails: {
      name: 'Academind by Maxmillian',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 29,
    title: 'Complete web development course',
    instructor: 'Hitesh Choudhary',
    rating: 4.6,
    reviews: 15946,
    price: 59.99,
    originalPrice: null,
    discount: null,
    image: 'images/trending-images/complete-web-dev.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'web', 'javascript'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Hitesh Choudhary',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 30,
    title: 'The Complete SQL Bootcamp: Go from Zero to Hero',
    instructor: 'Jose Portilla, Pierian Training',
    rating: 4.7,
    reviews: 242211,
    price: 89.99,
    originalPrice: null,
    discount: null,
    image: 'images/trending-images/sql-bootcamp.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'sql'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
        hasCodingExercises: true,
      },
    },

    instructorDetails: {
      name: 'Jose Portilla, Pierian Training',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },

  {
    id: 31,
    title: 'Code & Play: JavaScript Game Projects',
    instructor: 'Andrew Tyranowaski',
    rating: 4.7,
    reviews: 35,
    price: 44.99,
    originalPrice: null,
    discount: null,
    image: 'images/popular/js-game-projects.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'javascript'],
    badge: [],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Andrew Tyranowaski',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 32,
    title: 'JavaScript Basics for Beginners',
    instructor: 'Mosh Hamedani',
    rating: 4.6,
    reviews: 48499,
    price: 74.99,
    originalPrice: null,
    discount: null,
    image: 'images/popular/js-basics.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'javascript'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Mosh Hamedani',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 33,
    title: 'The Fastest Javascript Course: From ZERO to HERO in 6 Hours',
    instructor: 'Ivan Lourenco Gomes',
    rating: 4.6,
    reviews: 2597,
    price: 49.99,
    originalPrice: null,
    discount: null,
    image: 'images/popular/fastest-js-course.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'javascript'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Ivan Lourenco Gomes',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 34,
    title: 'Learn JavaScript in 2 Weeks (Complete JavaScript Bootcamp)',
    instructor: 'Fabian & Paven Coding2Go',
    rating: 4.8,
    reviews: 55,
    price: 44.99,
    originalPrice: null,
    discount: null,
    image: 'images/popular/js-in-twoweeks.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'javascript'],
    badge: [],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Fabian & Paven Coding2Go',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 35,
    title: 'Modern JavaScript From The Beginning 2.0 (2024)',
    instructor: 'Brad Traversy',
    rating: 4.7,
    reviews: 65564,
    price: 64.99,
    originalPrice: null,
    discount: null,
    image: 'images/popular/modern-js-beginning.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'javascript'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Brad Traversy',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 36,
    title: 'JavaScript Unit Testing - The Practical Guide',
    instructor: 'Academind by Maxmillian',
    rating: 4.6,
    reviews: 5157,
    price: 59.99,
    originalPrice: null,
    discount: null,
    image: 'images/popular/js-unit-testing.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'javascript'],
    badge: ['Premium', 'Bestseller'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Academind by Maxmillian',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 37,
    title: 'JavaScript: Understanding the Weird Parts',
    instructor: 'Anthony Alicea',
    rating: 4.7,
    reviews: 49136,
    price: 74.99,
    originalPrice: null,
    discount: null,
    image: 'images/popular/js-weird.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'javascript'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Anthony Alicea',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 38,
    title: 'The Modern Javascript Bootcamp Course',
    instructor: 'Colt Steele, Stephen Grider',
    rating: 4.8,
    reviews: 13009,
    price: 69.99,
    originalPrice: null,
    discount: null,
    image: 'images/popular/modern-js.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'javascript'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Colt Steele, Stephen Grider',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 39,
    title: 'Complete JAVASCRIPT with HTML5,CSS3 from zero to Expert-2025',
    instructor: 'Hemanth Kumar',
    rating: 4.3,
    reviews: 5538,
    price: 59.99,
    originalPrice: null,
    discount: null,
    image: 'images/popular/comp-html-css-js.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'javascript', 'html', 'css'],
    badge: [],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Hemanth Kumar',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 40,
    title: 'Master JAVASCRIPT from Scratch: Build Real-World Project',
    instructor: 'Andre lacono',
    rating: 4.6,
    reviews: 815,
    price: 59.99,
    originalPrice: null,
    discount: null,
    image: 'images/popular/master-js-scratch.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'javascript'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Andre lacono',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },

  {
    id: 41,
    title: 'Advanced Javascript',
    instructor: 'Asim Hussain',
    rating: 4.4,
    reviews: 10599,
    price: 69.99,
    originalPrice: null,
    discount: null,
    image: 'images/intermidite-advance/advance-js.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'javascript'],
    badge: ['Premium'],

    details: {
      totalHours: 6.5,
      level: 'intermediate',
      shortDescription: 'Advanced JavaScript concepts and techniques',
      learningObjectives: [],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Asim Hussain',
      rating: null,
      role: null,
    },

    metadata: {
      enrollmentCount: null,
      lastUpdated: null,
    },

    extendedDetails: null,
  },
  {
    id: 42,
    title: 'Accelerated ES6 JavaScript Training',
    instructor: 'Maximilian Schwarzmüller',
    rating: 4.6,
    reviews: 6084,
    price: 64.99,
    originalPrice: null,
    discount: null,
    image: 'images/intermidite-advance/js-training.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'javascript', 'es6'],
    badge: ['Premium'],

    details: {
      totalHours: 6,
      level: 'intermediate',
      shortDescription: ' Learn and Use the Future of JavaScript - Today!',
      learningObjectives: [
        ' Understand and Use the new Features and Concepts introduced with ES6',
        'Get an Overview over the Language Additions and Changes',
        'Confidently apply the new Syntax, new APIs and other new Features in Web Applications',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Maximilian Schwarzmüller',
      rating: null,
      role: null,
    },

    metadata: {
      enrollmentCount: null,
      lastUpdated: null,
    },

    extendedDetails: null,
  },
  {
    id: 43,
    title: 'Object-oriented Programming in JavaScript',
    instructor: 'Mosh Hamedani',
    rating: 4.7,
    reviews: 4376,
    price: 59.99,
    originalPrice: null,
    discount: null,
    image: 'images/intermidite-advance/oop-js.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'javascript', 'oop'],
    badge: ['Premium'],

    details: {
      totalHours: 4,
      level: 'intermediate',
      shortDescription:
        ' Learn all about OOP, understand the most confusing parts of JavaScript and prepare for technical interviews',
      learningObjectives: [
        'Understand the most confusing parts of JavaScript',
        'Learn all about object-oriented programming',
        'Prepare for technical interviews',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Mosh Hamedani',
      rating: null,
      role: null,
    },

    metadata: {
      enrollmentCount: null,
      lastUpdated: null,
    },

    extendedDetails: null,
  },
  {
    id: 44,
    title: 'Learn JavaScript for Web Development',
    instructor: 'Irfan Dayan',
    rating: 4.2,
    reviews: 3251,
    price: 69.99,
    originalPrice: null,
    discount: null,
    image: 'images/intermidite-advance/js-for-web.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'javascript', 'web'],
    badge: [],

    details: {
      totalHours: 8.5,
      level: 'intermediate',
      shortDescription:
        ' Advance your Web Development Skills By Learning Javascript from JavaScript Expert!',
      learningObjectives: [
        'You will have a great skill set of writing JavaScript programs.',
        'You would be able to apply JavaScript programming skills to build dynamic and interactive web projects.',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Irfan Dayan',
      rating: null,
      role: null,
    },

    metadata: {
      enrollmentCount: null,
      lastUpdated: null,
    },

    extendedDetails: null,
  },
  {
    id: 45,
    title: 'JavaScript: Understanding ES6 and Beyond (Advanced ES Next)',
    instructor: 'Anthony Alicea',
    rating: 4.7,
    reviews: 998,
    price: 54.99,
    originalPrice: null,
    discount: null,
    image: 'images/intermidite-advance/understanding-es6.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'javascript', 'es6'],
    badge: ['Premium'],

    details: {
      totalHours: 3.5,
      level: 'intermediate',
      shortDescription:
        ' The sequel the bestselling "Weird Parts" course: symbols, iterators, classes, and more advanced concepts',
      learningObjectives: [
        'How let and const work under-the-hood',
        'Template Literals',
        'What Classes really are inside the JavaScript engine',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Anthony Alicea',
      rating: null,
      role: null,
    },

    metadata: {
      enrollmentCount: null,
      lastUpdated: null,
    },

    extendedDetails: null,
  },
  {
    id: 46,
    title: 'Advanced JavaScript Topics',
    instructor: 'Steven Hancock',
    rating: 4.4,
    reviews: 848,
    price: 79.99,
    originalPrice: null,
    discount: null,
    image: 'images/intermidite-advance/js-adv-topics.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'javascript'],
    badge: ['Premium'],

    details: {
      totalHours: 19,
      level: 'intermediate',
      shortDescription:
        ' In Depth JavaScript Training for Mastering Important Patterns, the Power of Functions, OOP Concepts, JavaScript Projects',
      learningObjectives: [
        ' Apply first-class and higher order functions in your coding practices.',
        'Explain the different scenarios that affect the value of this.',
        'Identify the object to which this is bound.',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Steven Hancock',
      rating: null,
      role: null,
    },

    metadata: {
      enrollmentCount: null,
      lastUpdated: null,
    },

    extendedDetails: null,
  },
  {
    id: 47,
    title: '70+ JavaScript Challenges: Data Structures & Algorithms',
    instructor: 'Brad Traversy',
    rating: 4.8,
    reviews: 700,
    price: 19.99,
    originalPrice: null,
    discount: null,
    image: 'images/intermidite-advance/70-js-challenge.png',
    stars: '⭐⭐⭐⭐⭐',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'javascript', 'algorithms'],
    badge: ['Premium'],

    details: {
      totalHours: 12.5,
      level: 'intermediate',
      shortDescription:
        ' Build better foundational skills as a developer by doing challenges and learning about data structures and algorithms',
      learningObjectives: [
        ' Explore 70+ coding challenges from beginner, intermediate and advanced levels',
        'Ace coding interviews by learning how to solve problems with iteration, recursion, array methods & more',
        'Master data structures like stacks, queues, linked lists, trees, maps and hash maps',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
        hasCodingExercises: true,
      },
    },

    instructorDetails: {
      name: 'Brad Traversy',
      rating: null,
      role: null,
    },

    metadata: {
      enrollmentCount: null,
      lastUpdated: null,
    },

    extendedDetails: null,
  },
  {
    id: 48,
    title: 'JavaScript and React for Developers: Master the Essentials',
    instructor: 'Cassidy Williams',
    rating: 4.4,
    reviews: 501,
    price: 19.99,
    originalPrice: null,
    discount: null,
    image: 'images/intermidite-advance/js-react.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'javascript', 'react'],
    badge: [],

    details: {
      totalHours: 3.5,
      level: 'intermediate',
      shortDescription:
        ' Advance your JavaScript skills and learn the modern approach to web applications by building projects from the ground up',
      learningObjectives: [
        'Build modern web applications with JavaScript and React',
        'Master core JavaScript concepts to nail a JavaScript-focused job interview',
        'Explore the differences between package managers, build tools, and deployment options',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Cassidy Williams',
      rating: null,
      role: null,
    },

    metadata: {
      enrollmentCount: null,
      lastUpdated: null,
    },

    extendedDetails: null,
  },
  {
    id: 49,
    title: 'Javascript Intermediate level 2 - All about functions',
    instructor: 'Edwin Diaz | 900,000+ Students, Coding Faculty Solutions',
    rating: 4.2,
    reviews: 480,
    price: 44.99,
    originalPrice: null,
    discount: null,
    image: 'images/intermidite-advance/js-intermidiate.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'javascript'],
    badge: [],

    details: {
      totalHours: 3,
      level: 'intermediate',
      shortDescription:
        ' Learn to create different types of function in JavaScript',
      learningObjectives: [
        'At the end of this course students will able to MASTER JavaScript Functions',
        'At the end of this course students will able to write more complex JavaScript code',
        'At the end of this course students will able create more flexible JavaScript applications',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Edwin Diaz | 900,000+ Students, Coding Faculty Solutions',
      rating: null,
      role: null,
    },

    metadata: {
      enrollmentCount: null,
      lastUpdated: null,
    },

    extendedDetails: null,
  },
  {
    id: 50,
    title: 'JavaScript Interview Masterclass: Top 300 Questions (2025)',
    instructor: 'Happy Rawat',
    rating: 4.7,
    reviews: 361,
    price: 19.99,
    originalPrice: null,
    discount: null,
    image: 'images/intermidite-advance/js-interview.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'javascript', 'interview'],
    badge: [],

    details: {
      totalHours: 9.5,
      level: 'intermediate',
      shortDescription:
        ' avaScript, HTML5, CSS & Bootstrap: 300 Interview Questions (with PDF Revision Book)',
      learningObjectives: [
        'How to Crack JavaScript Interviews',
        '200 JavaScript Interview Question and Answers',
        '50 JavaScript Coding and Scenario Based Interview Questions',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
        hasPracticeTests: true,
        hasRolePlays: true,
      },
    },

    instructorDetails: {
      name: 'Happy Rawat',
      rating: null,
      role: null,
    },

    metadata: {
      enrollmentCount: null,
      lastUpdated: null,
    },

    extendedDetails: null,
  },

  {
    id: 51,
    title: '100 Hours Web Development Bootcamp - Build 23 React Projects',
    instructor: 'Burak Orkmez',
    rating: 4.6,
    reviews: 850,
    price: 19.99,
    originalPrice: null,
    discount: null,
    image: 'images/web/100-hours-web.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'web', 'react'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Burak Orkmez',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 52,
    title: 'Ultimate Web Development Course 2025 - Build Modern Websites',
    instructor: 'Haris Ali Khan',
    rating: 4.7,
    reviews: 825,
    price: 44.99,
    originalPrice: null,
    discount: null,
    image: 'images/web/web-ultimate-course.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'web'],
    badge: ['Hot and new'],

    details: {
      totalHours: null,
      level: null,
      shortDescription: null,
      learningObjectives: [],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Haris Ali Khan',
      rating: null,
      role: null,
    },

    metadata: {
      enrollmentCount: null,
      lastUpdated: null,
    },

    extendedDetails: null,
  },
  {
    id: 53,
    title: 'Complete Full Stack Web Development Bootcamp - AI Integrated',
    instructor: 'Manik (Clouddaffle)',
    rating: 4.6,
    reviews: 351,
    price: 54.99,
    originalPrice: null,
    discount: null,
    image: 'images/web/complete-full-stack.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'web', 'full-stack'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Manik (Clouddaffle)',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 54,
    title: 'The Complete Web Development Course - Build 15 Projects',
    instructor: 'Development Island (UK)',
    rating: 4.5,
    reviews: 8715,
    price: 74.99,
    originalPrice: null,
    discount: null,
    image: 'images/web/web-complete.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'web'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Development Island (UK)',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 55,
    title: 'Pre-Programming: Everything you need to know before you code',
    instructor: 'Evan Kimbrell',
    rating: 4.6,
    reviews: 12875,
    price: 79.99,
    originalPrice: null,
    discount: null,
    image: 'images/web/pre-programming.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'web', 'programming'],
    badge: ['Premium', 'bestseller'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Evan Kimbrell',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 56,
    title: 'The Bubble Beginners Bootcamp Course',
    instructor: 'Gregory John',
    rating: 4.5,
    reviews: 1776,
    price: 59.99,
    originalPrice: null,
    discount: null,
    image: 'images/web/bubble-beginners.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'web'],
    badge: ['Premium', 'bestseller'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Gregory John',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 57,
    title: 'Building Web Applications with Go - Intermediate Level',
    instructor: 'Trevor Sawler',
    rating: 4.7,
    reviews: 551,
    price: 59.99,
    originalPrice: null,
    discount: null,
    image: 'images/web/build-web-apps.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'web', 'go'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Trevor Sawler',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 58,
    title: 'Building Amazon Style Full Stack Microservices',
    instructor: 'Rahual Sahy',
    rating: 5,
    reviews: 45,
    price: 44.99,
    originalPrice: null,
    discount: null,
    image: 'images/web/building-amazoon.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'web', 'microservices'],
    badge: ['New'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Rahual Sahy',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 59,
    title: 'Blazor:  From Beginner To Pro (.NET 8)',
    instructor: 'Bobby Davis, Jr',
    rating: 4.8,
    reviews: 10,
    price: 44.99,
    originalPrice: null,
    discount: null,
    image: 'images/web/blazor.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'web', 'blazor', 'dotnet'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Bobby Davis, Jr',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 60,
    title: 'The Complete PHP Full Stack Web Developer Bootcamp',
    instructor: 'Nitesh Sharma',
    rating: 4.4,
    reviews: 5470,
    price: 74.99,
    originalPrice: null,
    discount: null,
    image: 'images/web/complete-php.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'web', 'php', 'full-stack'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Nitesh Sharma',
      rating: null,
      role: 'Cloud Engineer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },

  {
    id: 61,
    title: 'The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert',
    instructor: 'Colt steele',
    rating: 4.6,
    reviews: 105200,
    price: 84.99,
    originalPrice: null,
    discount: null,
    image: 'images/my-sql/ultimate-mysql.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'mysql', 'sql'],
    badge: ['Premium', 'bestseller'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Colt steele',
      rating: null,
      role: 'Developer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },

  {
    id: 62,
    title: 'SQL Bootcamp: From Zero to Job-Ready (Updated 2025)',
    instructor: 'Kadhiravan',
    rating: 4.7,
    reviews: 2344,
    price: 19.99,
    originalPrice: null,
    discount: null,
    image: 'images/my-sql/sql-bootcamp.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'sql'],
    badge: ['Premium', 'bestseller'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Kadhiravan',
      rating: null,
      role: 'Developer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 63,
    title: 'Python Database Course: SQLite, PostgreSQL, MySQL,SQLAlchemy',
    instructor: 'Elshad Karimov',
    rating: 4.4,
    reviews: 70,
    price: 19.99,
    originalPrice: null,
    discount: null,
    image: 'images/my-sql/python-database.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'python', 'sql', 'database'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Elshad Karimov',
      rating: null,
      role: 'Developer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 64,
    title: 'SQL For Beginners 2025: Learn SQL Using MySQL Database',
    instructor: 'Ashutosh Pawar',
    rating: 4.7,
    reviews: 2213,
    price: 64.99,
    originalPrice: null,
    discount: null,
    image: 'images/my-sql/sql-for-beginner.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'sql', 'mysql'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Ashutosh Pawar',
      rating: null,
      role: 'Developer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 65,
    title: 'AWS Cloud DBA',
    instructor: 'Abid Malik',
    rating: 4.5,
    reviews: 99,
    price: 59.99,
    originalPrice: null,
    discount: null,
    image: 'images/my-sql/aws-cloud.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'aws', 'cloud'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Abid Malik',
      rating: null,
      role: 'Developer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },

  {
    id: 66,
    title: '10 Day MySQL Bootcamp | My SQL Database Design for Beginners',
    instructor: 'Faisal Memon',
    rating: 4.6,
    reviews: 232,
    price: 19.99,
    originalPrice: null,
    discount: null,
    image: 'images/my-sql/10-day-mysql.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'mysql', 'sql'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Faisal Memon',
      rating: null,
      role: 'Developer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 67,
    title: 'SQL Masterclass: From Absolute Beginner to Developer',
    instructor: 'Tharun Challa',
    rating: 4.5,
    reviews: 516,
    price: 19.99,
    originalPrice: null,
    discount: null,
    image: 'images/my-sql/sql-masterclass.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'sql'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Tharun Challa',
      rating: null,
      role: 'Developer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 68,
    title: 'The Complete SQL and MySQL Course - From Beginner to Expert',
    instructor: 'Holczer Balazs',
    rating: 4.1,
    reviews: 1410,
    price: 79.99,
    originalPrice: null,
    discount: null,
    image: 'images/my-sql/complete-sql.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'sql', 'mysql'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Holczer Balazs',
      rating: null,
      role: 'Developer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },

  {
    id: 69,
    title: 'Make a Spotify Clone from Scratch: JavaScript PHP and MySQL',
    instructor: 'Reece Kenney',
    rating: 4,
    reviews: 1872,
    price: 54.99,
    originalPrice: null,
    discount: null,
    image: 'images/my-sql/spotify-clone.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'javascript', 'php', 'mysql'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Reece Kenney',
      rating: null,
      role: 'Developer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 70,
    title: 'The Complete MySQL Bootcamp:From SQL Beginner to Expert-2025',
    instructor: 'Vertex Academy',
    rating: 4.6,
    reviews: 500,
    price: 69.99,
    originalPrice: null,
    discount: null,
    image: 'images/my-sql/complete-mysql.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'mysql', 'sql'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Vertex Academy',
      rating: null,
      role: 'Developer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },

  {
    id: 71,
    title: 'Bootstrap 5 From Scratch | Build 5 Modern Websites',
    instructor: 'Brad Traversy',
    rating: 4.8,
    reviews: 1572,
    price: 54.99,
    originalPrice: null,
    discount: null,
    image: 'images/bootstrap/bootsrap-from-scratch.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'bootstrap', 'web'],
    badge: ['Premium', 'bestseller'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Brad Traversy',
      rating: null,
      role: 'Developer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 72,
    title: 'The Ultimate Bootstrap Guide - Bootstrap 5 from Scratch',
    instructor: 'Fatah Gabrial',
    rating: 4.4,
    reviews: 3246,
    price: 74.99,
    originalPrice: null,
    discount: null,
    image: 'images/bootstrap/bootstrap-ultimate-guide.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'bootstrap', 'web'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Fatah Gabrial',
      rating: null,
      role: 'Developer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 73,
    title: 'WordPress Development with Bootstrap: The Complete Course',
    instructor: 'Brad Hussy',
    rating: 4.5,
    reviews: 8378,
    price: 74.99,
    originalPrice: null,
    discount: null,
    image: 'images/bootstrap/wordpress-deveploment.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'bootstrap', 'wordpress', 'web'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Brad Hussy',
      rating: null,
      role: 'Developer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 74,
    title: 'Mastery Of Bootstrap 5 - Unlock Bootstrap From Basic To Pro',
    instructor: 'Pamch Tutor',
    rating: 4.6,
    reviews: 18,
    price: 39.99,
    originalPrice: null,
    discount: null,
    image: 'images/bootstrap/mastery-of-bootstrap.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'bootstrap', 'web'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Pamch Tutor',
      rating: null,
      role: 'Developer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 75,
    title: 'The Bootstrap 4 Bootcamp',
    instructor: 'Colt Steele',
    rating: 4.7,
    reviews: 7230,
    price: 69.99,
    originalPrice: null,
    discount: null,
    image: 'images/bootstrap/bootsrap-4.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'bootstrap', 'web'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Colt Steele',
      rating: null,
      role: 'Developer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 76,
    title: 'Learning Bootstrap - From HTML to Wordpress Theme',
    instructor: 'Tim Buchalka',
    rating: 4.5,
    reviews: 179,
    price: 77.99,
    originalPrice: null,
    discount: null,
    image: 'images/bootstrap/learning-bootstrap.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'bootstrap', 'wordpress', 'web'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Tim Buchalka',
      rating: null,
      role: 'Developer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 77,
    title: 'Bootstrap | Bootstrap 5 Course with CSS Bootstrap Practices',
    instructor: 'Oak Academy',
    rating: 4.6,
    reviews: 18,
    price: 19.99,
    originalPrice: null,
    discount: null,
    image: 'images/bootstrap/bootstrap-5-course.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'bootstrap', 'css', 'web'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Oak Academy',
      rating: null,
      role: 'Developer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 78,
    title: 'Bootstrap 5 - The Complete Guide',
    instructor: 'Setfan Omerovic',
    rating: 4.4,
    reviews: 46,
    price: 39.99,
    originalPrice: null,
    discount: null,
    image: 'images/bootstrap/bootsrap-guide.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'bootstrap', 'web'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Setfan Omerovic',
      rating: null,
      role: 'Developer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 79,
    title: 'HTML5 + CSS3 + Bootstrap: The Beginner Web Design Course',
    instructor: 'Phil Ebiner',
    rating: 4.4,
    reviews: 2218,
    price: 74.99,
    originalPrice: null,
    discount: null,
    image: 'images/bootstrap/html-css.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: ['development', 'technology', 'html', 'css', 'bootstrap', 'web'],
    badge: ['Premium'],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Phil Ebiner',
      rating: null,
      role: 'Developer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
  {
    id: 80,
    title: 'Build 13 Projects with PHP MySQL Bootstrap and PDO',
    instructor: 'Web Coding',
    rating: 4.6,
    reviews: 165,
    price: 44.99,
    originalPrice: null,
    discount: null,
    image: 'images/bootstrap/php-13-projects.png',

    category: 'Development',
    subcategory: 'Technology',
    tags: [
      'development',
      'technology',
      'php',
      'mysql',
      'bootstrap',
      'pdo',
      'web',
    ],
    badge: [],

    details: {
      totalHours: 20,
      level: 'intermediate',
      shortDescription:
        'Comprehensive course covering essential concepts and practical skills',
      learningObjectives: [
        'Master fundamental concepts and principles',
        'Learn practical skills and techniques',
        'Build real-world projects',
        'Understand best practices',
        'Apply knowledge in real scenarios',
        'Advance your career with new skills',
      ],
      requirements: [],
      targetAudience: [],
      features: {
        lifetimeAccess: true,
        mobileAccess: true,
        certificate: true,
      },
    },

    instructorDetails: {
      name: 'Web Coding',
      rating: null,
      role: 'Developer and Instructor',
    },

    metadata: {
      enrollmentCount: 25000,
      lastUpdated: '2024-09-01',
    },

    extendedDetails: {
      breadcrumbs: [
        { text: 'Development', link: 'index.html' },
        { text: 'Technology', link: '#' },
        { text: 'Course Category', link: '#' },
      ],
      longDescription: [
        `I'm an experienced instructor passionate about teaching.`,
        `This course provides comprehensive coverage of essential topics.`,
        `You'll learn practical skills you can apply immediately.`,
        `Join me to master these concepts and advance your career.`,
      ],
      includes: [
        '20 hours on-demand video',
        '10 articles',
        '15 downloadable resources',
        'Access on mobile and TV',
        'Certificate of completion',
      ],
      content: {
        totalSections: 12,
        totalLectures: 150,
        totalLength: '20h 30m',
        sections: [
          {
            title: 'Introduction',
            lectures: 5,
            duration: '45 min',
          },
          {
            title: 'Core Concepts',
            lectures: 12,
            duration: '3h 15m',
          },
          {
            title: 'Advanced Topics',
            lectures: 15,
            duration: '4h 30m',
          },
        ],
      },
    },
  },
];
