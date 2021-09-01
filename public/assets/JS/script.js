//array of project details
var projectDetails = [
  {
    projectTitle: "Astro World Portal",
    projectDesc: "Explore interesting Space facts from NASA Libraries!",
    projecImg:
      "https://apod.nasa.gov/apod/image/2108/luna_antelao_Hofer1024.jpg",
    projectTechstack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Moment.js",
      "FontAwesome",
      "GoogleFonts",
      "NASA API",
    ],
    gitHubURL: "https://github.com/kjphelps90/NASA-daily-astronomy",
    gitPage: "https://kjphelps90.github.io/NASA-daily-astronomy/",
  },
  {
    projectTitle: "Kalyani Portfolio",
    projectDesc: "Portfolio of Full Stack Projects completed by Kalyani Joshi.",
    projecImg:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/cf5d8e64327927.5ae242ee600d6.png",
    projectTechstack: ["HTML", "CSS", "JavaScript"],
    gitHubURL: "https://github.com/kjphelps90/NASA-daily-astronomy",
    gitPage: "https://kjphelps90.github.io/NASA-daily-astronomy/",
  },
  {
    projectTitle: "Digital Marketing Website",
    projectDesc: "Demo business website for Digital Marketing.",
    projecImg:
      "https://i0.wp.com/marketbusinessnews.com/wp-content/uploads/2018/08/Digital-Marketing.jpg?w=708&ssl=1",
    projectTechstack: ["HTML", "CSS"],
    gitHubURL: "https://github.com/Kay-code-1/code-refactor",
    gitPage: "https://kay-code-1.github.io/code-refactor/",
  },
  {
    projectTitle: "Quiz",
    projectDesc: "Enjoy the F.R.I.E.N.D.S TV Series Trivia Quiz!",
    projecImg: "https://i.ytimg.com/vi/pTJ_2rjUoS0/maxresdefault.jpg",
    projectTechstack: ["HTML", "CSS", "JavaScript"],
    gitHubURL: "https://github.com/Kay-code-1/quiz-application",
    gitPage: "https://kay-code-1.github.io/quiz-application/",
  },
  {
    projectTitle: "Password Generator",
    projectDesc: "Generate a random password of your choice.",
    projecImg: "https://miro.medium.com/max/1400/1*KDUWoSI8R4I4VKTgHtSacQ.png",
    projectTechstack: ["HTML", "CSS", "JavaScript"],
    gitHubURL: "https://github.com/Kay-code-1/password-generator",
    gitPage: "https://kay-code-1.github.io/password-generator/",
  },
  {
    projectTitle: "Weather Forecast",
    projectDesc: "Get a 5-Day weather forecast of your location quickly.",
    projecImg:
      "https://i.pinimg.com/originals/6c/2b/9e/6c2b9eff4fec27241efe89adb847a7e4.png",
    projectTechstack: ["HTML", "CSS", "JavaScipt", "Open Weather API"],
    gitHubURL: "https://github.com/Kay-code-1/weather-forecast",
    gitPage: "https://kay-code-1.github.io/weather-forecast/",
  },
  {
    projectTitle: "Day Planner",
    projectDesc: "Plan your work day ahead with Day Planner!",
    projecImg:
      "https://i0.wp.com/wanderoffthebeatenpath.com/wp-content/uploads/Organized-Efficient-PurpleDaily-Planners.png?fit=2000%2C1545&ssl=1",
    projectTechstack: ["HTML", "CSS", "JavaScipt", "Moment JS"],
    gitHubURL: "https://github.com/Kay-code-1/day-planner",
    gitPage: "https://kay-code-1.github.io/day-planner/",
  },
  {
    projectTitle: "Fan Page",
    projectDesc: "Fan Page: Dr. Norman Bolaug!",
    projecImg:
      "https://cdn.britannica.com/50/136250-050-1673FCF0/Norman-Borlaug-1970.jpg",
    projectTechstack: ["HTML", "CSS"],
    gitHubURL: "https://github.com/Kay-code-1/Fan-Page",
    gitPage: "https://kay-code-1.github.io/Fan-Page",
  },
];

//fetch array of project details and append on index.HTML file using for Loop and DOM Element methods of JavaScript
console.log(projectDetails.length);
function addProjects() {
  let mainClass = document.getElementById("project-lists");

  for (let i = 0; i < projectDetails.length; i++) {
    //Create a Card to display project data
    //Parent node - L1
    projectEl = document.createElement("div");
    projectEl.classList.add("col-md-4");

    //Child node - L2
    projectCardEl = document.createElement("div");
    projectCardEl.classList.add("card", "mb-4", "box-shadow");

    // Create Anchor Tag
    projectLinkElm = document.createElement("a");
    projectLinkElm.setAttribute("href", projectDetails[i].gitPage);

    //Create project image and add to L2 node
    projectImgEl = document.createElement("img");
    projectImgEl.classList.add("card-img-top", "project-imgcard");
    projectImgEl.setAttribute("alt", projectDetails[i].projectTitle);
    projectImgEl.setAttribute("src", projectDetails[i].projecImg);
    projectLinkElm.appendChild(projectImgEl);

    projectCardEl.appendChild(projectLinkElm);

    //Create card body Element - L3 and add to L2 node
    projectCbodyEl = document.createElement("div");
    projectCbodyEl.classList.add("card-body");

    //Create Project title and add to L3
    projectTitleEl = document.createElement("h4");
    projectTitleEl.textContent = projectDetails[i].projectTitle;
    projectCbodyEl.appendChild(projectTitleEl);

    //Create Project description and and add to L3
    projectDescEl = document.createElement("div");
    projectDescEl.classList.add("card-text");
    projectDescEl.textContent = projectDetails[i].projectDesc;
    projectCbodyEl.appendChild(projectDescEl);

    projectCardEl.appendChild(projectCbodyEl);

    projectEl.appendChild(projectCardEl);

    // Append to main row
    mainClass.appendChild(projectEl);
  }
}

// add projects
addProjects();
