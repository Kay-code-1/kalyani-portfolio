const renderProjectlist = () => {
  //array of project details
  const projectDetails = [
    {
      projectTitle: 'Investor Portfolio',
      projectDesc:
        'A full stack application which allows users to login and manage portfolios of stocks.',
      projecImg: '/assets/images/investor-portfolio.png',
      projectTechstack: [
        'HTML',
        'CSS',
        'JavaScript',
        'Chart.js',
        'Node.js',
        'Express',
        'Third Party API: Polygon, Marketstack',
        'MySQL',
      ],
      gitHubURL: 'https://github.com/Kay-code-1/investor-portfolio',
      deployLink: 'https://investor-portfolio.herokuapp.com',
    },
    {
      projectTitle: 'Astro World Portal',
      projectDesc: 'Explore interesting Space facts from NASA Libraries!',
      projecImg: '/assets/images/astroworld.png',
      projectTechstack: [
        'HTML',
        'CSS',
        'JavaScript',
        'Moment.js',
        'FontAwesome',
        'GoogleFonts',
        'NASA API',
      ],
      gitHubURL: 'https://github.com/Kay-code-1/astronomy-world',
      deployLink: 'https://kay-code-1.github.io/astronomy-world/',
    },
    {
      projectTitle: 'Note Taker',
      projectDesc: 'A business application to take and maintain notes.',
      projecImg: '/assets/images/notes.jpg',
      projectTechstack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js'],
      gitHubURL: 'https://github.com/Kay-code-1/note-taker',
      deployLink: 'https://notetaker-app-k.herokuapp.com/',
    },
    {
      projectTitle: 'Quiz',
      projectDesc: 'Enjoy the F.R.I.E.N.D.S TV Series Trivia Quiz!',
      projecImg: '/assets/images/quiz.jpg',
      projectTechstack: ['HTML', 'CSS', 'JavaScript'],
      gitHubURL: 'https://github.com/Kay-code-1/quiz-application',
      deployLink: 'https://kay-code-1.github.io/quiz-application/',
    },
    {
      projectTitle: 'Password Generator',
      projectDesc: 'Generate a random password of your choice.',
      projecImg: '/assets/images/password.jpg',
      projectTechstack: ['HTML', 'CSS', 'JavaScript'],
      gitHubURL: 'https://github.com/Kay-code-1/password-generator',
      deployLink: 'https://kay-code-1.github.io/password-generator/',
    },
    {
      projectTitle: 'Weather Forecast',
      projectDesc: 'Get a 5-Day weather forecast of your location quickly.',
      projecImg: '/assets/images/weather.png',
      projectTechstack: ['HTML', 'CSS', 'JavaScipt', 'Open Weather API'],
      gitHubURL: 'https://github.com/Kay-code-1/weather-forecast',
      deployLink: 'https://kay-code-1.github.io/weather-forecast/',
    },
    {
      projectTitle: 'Day Planner',
      projectDesc: 'Plan your work day ahead with Day Planner!',
      projecImg: '/assets/images/day-planner.png',
      projectTechstack: ['HTML', 'CSS', 'JavaScipt', 'Moment JS'],
      gitHubURL: 'https://github.com/Kay-code-1/day-planner',
      deployLink: 'https://kay-code-1.github.io/day-planner/',
    },
    {
      projectTitle: 'Fan Page',
      projectDesc: 'Fan Page - freecodecamp.org',
      projecImg: '/assets/images/dr-norman-borlaug.jpg',
      projectTechstack: ['HTML', 'CSS'],
      gitHubURL: 'https://github.com/Kay-code-1/Fan-Page',
      deployLink: 'https://kay-code-1.github.io/Fan-Page',
    },
    // {
    //   projectTitle: "Digital Marketing Website",
    //   projectDesc: "Demo business website for Digital Marketing.",
    //   projecImg:
    //     "https://i0.wp.com/marketbusinessnews.com/wp-content/uploads/2018/08/Digital-Marketing.jpg?w=708&ssl=1",
    //   projectTechstack: ["HTML", "CSS"],
    //   gitHubURL: "https://github.com/Kay-code-1/code-refactor",
    //   deployLink: "https://kay-code-1.github.io/code-refactor/",
    // },
  ];

  //fetch array of project details and append on index.HTML file using for Loop and DOM Element methods of JavaScript
  console.log(projectDetails.length);
  let mainClass = document.getElementById('project-lists');

  for (let i = 0; i < projectDetails.length; i++) {
    //Create a Card to display project data
    //Parent node - L1
    const projectEl = document.createElement('div');
    projectEl.classList.add('col-4');

    //Child node - L2
    const projectCardEl = document.createElement('div');
    projectCardEl.classList.add('card', 'mb-4', 'box-shadow');

    // Create Anchor Tag
    const projectLinkElm = document.createElement('a');
    projectLinkElm.setAttribute('href', projectDetails[i].deployLink);

    //Create project image and add to L2 node
    const projectImgEl = document.createElement('img');
    projectImgEl.classList.add('card-img-top', 'project-imgcard');
    projectImgEl.setAttribute('alt', projectDetails[i].projectTitle);
    projectImgEl.setAttribute('src', projectDetails[i].projecImg);
    projectLinkElm.appendChild(projectImgEl);

    projectCardEl.appendChild(projectLinkElm);

    //Create card body Element - L3 and add to L2 node
    const projectCbodyEl = document.createElement('div');
    projectCbodyEl.classList.add('card-body');

    //Create Project title and add to L3
    const projectTitleEl = document.createElement('h4');
    projectTitleEl.textContent = projectDetails[i].projectTitle;
    projectCbodyEl.appendChild(projectTitleEl);

    //Create Project description and and add to L3
    const projectDescEl = document.createElement('div');
    projectDescEl.classList.add('card-text');
    projectDescEl.textContent = projectDetails[i].projectDesc;
    projectCbodyEl.appendChild(projectDescEl);

    const projectLink = document.createElement('div');
    projectLink.classList.add('card-footer', 'd-flex', 'justify-content-between');
    
    const gitElm = document.createElement('a');
    gitElm.setAttribute('href', projectDetails[i].gitHubURL);
    gitElm.setAttribute('alt', projectDetails[i].gitHubURL);
    gitElm.setAttribute('target', '_blank');
    gitElm.innerHTML = '<i class="fab fa-github"></i>';

    const deployElm = document.createElement('a');
    deployElm.setAttribute('href', projectDetails[i].deployLink);
    deployElm.setAttribute('alt', projectDetails[i].deployLink);
    deployElm.setAttribute('target', '_blank');
    deployElm.innerHTML = '<i class="fas fa-server"></i>';

    projectLink.appendChild(gitElm);
    projectLink.appendChild(deployElm);

    projectCardEl.appendChild(projectCbodyEl);
    projectCardEl.appendChild(projectLink);

    projectEl.appendChild(projectCardEl);

    // Append to main row
    mainClass.appendChild(projectEl);
  }
};

// // add projects
// addProjects();

window.addEventListener('DOMContentLoaded', () => {
  renderProjectlist();
});
