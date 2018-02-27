const portfolioData = {
  "contactInfo": {
    "name": "Jeff Corpac",
    "title": "Front-end Software Developer",
    "tel": "14794262290",
    "email": "jcorpac@gmail.com",
    "linkedIn": "https://www.linkedin.com/in/jeffrey-corpac-3382313a",
    "resumeGoogleDocId": "1cQdIgK9soTWS_Ixb2K8vWXsm01YhIWwjtnjJzAP9UIc"
  },
  "portfolioItems": [{
    "title": "Matching Game",
    "image": {
      "location": "images/Matching-game-screenshot.webp",
      "altText": "Matching game"
    },
    "description": "<p>This is a memory/concentration game focused on matching cards. The game uses Javascript to modify the content of the page, responding to user clicks to flip cards. It also keeps track of the number of moves and time since the game started, and presents them to the player when the game is done.</p><p>The page is my third project for the Udacity Front-end Web Developer nanodegree.</p>",
    "technologies": ["HTML5", "CSS3", "JavaScript(for game functions and page element manipulation)", "Docker (included Dockerfile)", "Git/GitHub"],
    "githubUrl": "https://github.com/jcorpac/fend-project-memory-game",
    "dockerhubUrl": "https://hub.docker.com/r/jcorpac/memory_game/"
  }, {
    "title": "Popular Movies",
    "image": {
      "location": "images/Popular-Movies-screenshot.webp",
      "altText": "Popular Movies App"
    },
    "description": "<p>This app was developed to retrieve information from TheMovieDb and present it to the user on an Android device. It can present lists of movies sorted by popularity, title, etc, then present information, trailers, and reviews for the movie that a user selects. It can also save a local database of the user's favorite movies.</p><p>The app was a project for the Udacity Android Developer nanodegree.</p>",
    "technologies": ["Java", "Android SDK", "SQLite Database", "Kotlin (available in Git branch)", "REST Web API (requires TheMovieDb API key)", "Git/GitHub"],
    "githubUrl": "https://github.com/jcorpac/Popular-Movies"
  }, {
    "title": "Portfolio Website",
    "image": {
      "location": "images/portfolio-site-screenshot.webp",
      "altText": "Portfolio Website"
    },
    "description": "<p>This is the page that you're looking at right now, and is made to serve as a portfolio for projects that I'll be making in the future. I developed it to build on HTML and CSS to create a scalable, responsive webpage.</p><p>The page is my second project for the Udacity Front-end Web Developer nanodegree.</p>",
    "technologies": ["HTML5", "CSS3", "JavaScript (generating this page from stored data)", "Docker (included Dockerfile)", "Git/GitHub"],
    "githubUrl": "https://github.com/jcorpac/portfolio-site",
    "dockerhubUrl": "https://hub.docker.com/r/jcorpac/portfolio/"
  }, {
    "title": "Animal Trading Card",
    "image": {
      "location": "images/animal-card-screenshot.webp",
      "altText": "Animal Trading Card"
    },
    "description": "<p>A simple page to demonstrate understanding of HTML and CSS. This project contains a static page styled using a separate CSS stylesheet and shares facts about an animal.</p><p>The page was an inital project for the Udacity Front-end Web Developer nanodegree.</p>",
    "technologies": ["HTML5", "CSS3", "Docker (included Dockerfile)", "Git/GitHub"],
    "githubUrl": "https://github.com/jcorpac/animal-trading-cards",
    "dockerhubUrl": "https://hub.docker.com/r/jcorpac/animal-trading-cards/"
  }]
};

var controller = {
  init: function() {
    headerView.buildHeader();
    portfolioView.buildPortfolio();
    footerView.buildFooter();
  },
  getPortfolioItems: function() {
    return portfolioData.portfolioItems;
  },
  getPortfolioItem: function(index) {
    return portfolioData.portfolioItems[index];
  },
  getContactInfo: function() {
    return portfolioData.contactInfo;
  }
}

var portfolioView = {
  portfolioPlatform: document.querySelector('main'),
  buildPortfolio: function() {
    const portfolioItems = controller.getPortfolioItems();
    for (let item in portfolioItems) {
      this.portfolioPlatform.appendChild(this.buildPortfolioItem(portfolioItems[item]));
    }
  },
  buildPortfolioItem: function(item) {
    // Create the new item and set its classname.
    newItem = document.createElement("article");
    newItem.className = "portfolio-item";

    var itemTemplate = `<h3>${item.title}</h3>
      <img class="portfolio-item-screenshot" src="${item.image.location}" alt="${item.image.altText}">
      <div class="portfolio-item-description">${item.description}
      <ul class="detail-list">
      <li>${this.buildTechString(item.technologies)}</li>`;

    if (item.githubUrl) {
      itemTemplate += `<li><a class="zocial github" href="${item.githubUrl}">Source Code on GitHub</a></li>`;
    }
    if (item.dockerhubUrl) {
      itemTemplate += `<li><a class="zocial secondary" href="${item.dockerHubUrl}">Docker Image Available</a></li>`;
    }
    itemTemplate += '</ul></div>';

    newItem.innerHTML = itemTemplate;
    return newItem;
  },
  buildTechString: function(technologyList) {
    let techString = "<strong>Technologies Used</strong>: ";
    for (let i = 0; i < technologyList.length; i++) {
      techString += technologyList[i];
      if (i < technologyList.length - 1) {
        techString += ", ";
      }
    }
    return techString;
  }
}

var headerView = {
  emailLink: document.querySelector("header .email"),
  linkedInLink: document.querySelector("header .linkedin"),
  phoneLink: document.querySelector("header .call"),
  nameLine: document.querySelector("header .name"),
  titleLine: document.querySelector("header .title"),

  buildHeader: function() {
    var contactInfo = controller.getContactInfo();
    this.emailLink.href = `mailto:${contactInfo.email}`;
    this.emailLink.innerText = contactInfo.email;
    this.linkedInLink.href = contactInfo.linkedIn;
    this.phoneLink.href = `tel:${contactInfo.tel}`;
    this.phoneLink.innerText = `(${contactInfo.tel.substring(1,4)})${contactInfo.tel.substring(4,7)}-${contactInfo.tel.substring(7)}`;
    this.nameLine.innerText = contactInfo.name;
    this.titleLine.innerText = contactInfo.title;
  }
};

var footerView = {
  googleDocsLink: document.querySelector("footer .google-docs"),
  msWordLink: document.querySelector("footer .ms-word"),
  pdfLink: document.querySelector("footer .pdf"),

  buildFooter: function() {
    var contactInfo = controller.getContactInfo();
    this.googleDocsLink.href = `https://docs.google.com/document/d/${contactInfo.resumeGoogleDocId}/edit?usp=sharing`;
    this.msWordLink.href = `https://docs.google.com/document/export?format=docx&id=${contactInfo.resumeGoogleDocId}`;
    this.pdfLink.href = `https://docs.google.com/document/export?format=pdf&id=${contactInfo.resumeGoogleDocId}`;
  }
};

controller.init();
