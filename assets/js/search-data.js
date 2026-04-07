// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-teaching",
          title: "Teaching",
          description: "I have taught the following courses.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-courses",
          title: "Courses",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/courses/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-captures",
          title: "Captures",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photography/";
          },
        },{id: "post-finitary-approach-to-infinite-dimensional-systems-a-geometric-transformation",
        
          title: "Finitary approach to infinite-dimensional systems: A geometric transformation",
        
        description: "Coming soon....",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/parPDE/";
          
        },
      },{id: "post-representations-in-control",
        
          title: "Representations in control",
        
        description: "Coming Soon...",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/repCont/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-received-the-undergraduate-research-award-in-recognition-of-exceptional-research-work",
          title: 'Received the Undergraduate Research Award in recognition of exceptional research work.',
          description: "",
          section: "News",},{id: "news-academic-visit-to-waga-lab-kitakyushu-institute-of-technology-fukuoka-japan-i-am-grateful-to-prof-hiroaki-wagatsuma-for-hosting-the-visit",
          title: 'Academic visit to Waga Lab, Kitakyushu Institute of Technology, Fukuoka, Japan. I am...',
          description: "",
          section: "News",},{id: "news-received-a-phd-offer-from-the-university-of-illinois-urbana-champaign-as-a-research-assistant-under-prof-daniel-liberzon",
          title: 'Received a PhD offer from the University of Illinois Urbana-Champaign as a Research...',
          description: "",
          section: "News",},{id: "news-awarded-the-ece-distinguished-research-fellowship-for-doctoral-studies-at-the-university-of-illinois-urbana-champaign",
          title: 'Awarded the ECE Distinguished Research Fellowship for doctoral studies at the University of...',
          description: "",
          section: "News",},{id: "news-i-am-excited-to-join-the-graduate-school-of-advanced-science-and-engineering-at-hiroshima-university-as-a-short-term-exchange-student-until-1-may-2026-where-i-will-be-pursuing-collaborative-research-on-audio-signals-under-the-supervision-of-prof-masaaki-nagahara-and-prof-debasish-chatterjee",
          title: 'I am excited to join the Graduate School of Advanced Science and Engineering...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%76%61%69%62%68%61%76.%75@%69%69%74%62.%61%63.%69%6E", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=gcfRoAQAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
