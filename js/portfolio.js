const portfolioData = {
  "contactInfo": {
    "name": "Jeff Corpac",
    "title": "Front-end Software Developer",
    "tel": "14794262290",
    "email": "jcorpac@gmail.com",
    "linkedIn": "https://www.linkedin.com/in/jeffrey-corpac-3382313a",
    "resumeGoogleDocId": "1cQdIgK9soTWS_Ixb2K8vWXsm01YhIWwjtnjJzAP9UIc"
  },
  "portfolioItems": [
    {
      "title": "Matching Game",
      "image": {
        "location": "images/Matching-game-screenshot.webp",
        "altText": "Matching game"
      },
      "description": "<p>This is a memory/concentration game focused on matching cards. The game uses Javascript to modify the content of the page, responding to user clicks to flip cards. It also keeps track of the number of moves and time since the game started, and presents them to the player when the game is done.</p><p>The page is my third project for the Udacity Front-end Web Developer nanodegree.</p>",
      "technologies": ["HTML5", "CSS3", "JavaScript(for game functions and page element manipulation)", "Docker (included Dockerfile)", "Git/GitHub"],
      "githubUrl": "https://github.com/jcorpac/fend-project-memory-game",
      "dockerhubUrl": "https://hub.docker.com/r/jcorpac/memory_game/"
    },{
      "title": "Popular Movies",
      "image": {
        "location": "images/Popular-Movies-screenshot.webp",
        "altText": "Popular Movies App"
      },
      "description": "<p>This app was developed to retrieve information from TheMovieDb and present it to the user on an Android device. It can present lists of movies sorted by popularity, title, etc, then present information, trailers, and reviews for the movie that a user selects. It can also save a local database of the user's favorite movies.</p><p>The app was a project for the Udacity Android Developer nanodegree.</p>",
      "technologies": ["Java", "Android SDK", "SQLite Database", "Kotlin (available in Git branch)", "REST Web API (requires TheMovieDb API key)", "Git/GitHub"],
      "githubUrl": "https://github.com/jcorpac/Popular-Movies"
    },{
      "title": "Portfolio Website",
      "image": {
        "location": "images/portfolio-site-screenshot.webp",
        "altText": "Portfolio Website"
      },
      "description": "<p>This is the page that you're looking at right now, and is made to serve as a portfolio for projects that I'll be making in the future. I developed it to build on HTML and CSS to create a scalable, responsive webpage.</p><p>The page is my second project for the Udacity Front-end Web Developer nanodegree.</p>",
      "technologies": ["HTML5", "CSS3", "JavaScript (generating this page from stored data)", "Docker (included Dockerfile)", "Git/GitHub"],
      "githubUrl": "https://github.com/jcorpac/portfolio-site",
      "dockerhubUrl": "https://hub.docker.com/r/jcorpac/portfolio/"
    },{
      "title":"Animal Trading Card",
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

const portfolioPlatform = document.querySelector('main');
const headerPlatform = document.querySelector('header');
const footerPlatform = document.querySelector('footer');

const contactInfo = portfolioData.contactInfo;
const portfolioItems = portfolioData.portfolioItems;

let newItem, itemTitle, itemImage, technologyDesc, detailList, listItem, gitHubLink, dockerLink;
function buildPortfolioItem(item) {
  // Create the new item and set its classname.
  newItem = document.createElement("article");
  newItem.className ="portfolio-item";
  // Create and append the item title.
  itemTitle = document.createElement('h3');
  itemTitle.innerText = item.title;
  newItem.appendChild(itemTitle);
  // Create and append the image element.
  itemImage = document.createElement("img");
  itemImage.className = "portfolio-item-screenshot";
  itemImage.src = item.image.location;
  itemImage.alt = item.image.altText;
  newItem.appendChild(itemImage);
  // Create the description div and append the description html.
  technologyDesc = document.createElement('div');
  technologyDesc.classList = "portfolio-item-description";
  technologyDesc.innerHTML = item.description;
  // Add list of detail information
  detailList = document.createElement('ul');
  listItem = document.createElement('li');
  // Turn the list of technologies used into a string, and add it as a list item.
  let techString = "<strong>Technologies Used</strong>: ";
  for(let i = 0; i < item.technologies.length; i++) {
    techString += item.technologies[i];
    if(i < item.technologies.length-1) {
      techString += ", ";
    }
  }
  listItem.innerHTML = techString;
  detailList.appendChild(listItem);
  // If a github URL is included, add a button link to the list.
  if(item.githubUrl) {
    listItem = document.createElement('li');
    gitHubLink = document.createElement('a');
    gitHubLink.className = "zocial github";
    gitHubLink.href = item.githubUrl;
    gitHubLink.innerText = "Source Code on GitHub";
    listItem.appendChild(gitHubLink);
    detailList.appendChild(listItem);
  }
  // If a dockerhub URL is included, add a button link to the list.
  if(item.dockerhubUrl) {
    listItem = document.createElement('li');
    dockerLink = document.createElement('a');
    dockerLink.className = "zocial secondary";
    dockerLink.href = item.dockerhubUrl;
    dockerLink.innerText = "Docker Image Available";
    listItem.appendChild(dockerLink);
    detailList.appendChild(listItem);
  }
  technologyDesc.appendChild(detailList);
  newItem.appendChild(technologyDesc);
  return newItem;
}

function buildPortfolio() {
  for(let item in portfolioItems) {
    portfolioPlatform.appendChild(buildPortfolioItem(portfolioItems[item]));
  }
}

function buildHeader() {
  const iconRow = document.createElement('div');
  iconRow.classList = "contact-icon-row row";

  // Create an icon for the email link and append it to the contact row.
  let rowIcon = document.createElement('div');
  rowIcon.classList = "layout-grid";
  const emailLink = document.createElement('a');
  emailLink.classList = "zocial email";
  emailLink.href=`mailto:${contactInfo.email}`;
  emailLink.innerText = contactInfo.email;
  rowIcon.appendChild(emailLink);
  iconRow.appendChild(rowIcon);

  // Create an icon for the LinkedIn link and append it to the contact row.
  rowIcon = document.createElement('div');
  rowIcon.classList = "layout-grid";
  const linkedInLink = document.createElement('a');
  linkedInLink.classList = "zocial linkedin";
  linkedInLink.href=contactInfo.linkedIn;
  linkedInLink.innerText = 'LinkedIn';
  rowIcon.appendChild(linkedInLink);
  iconRow.appendChild(rowIcon);

  // Create an icon for the Telephone link and append it to the contact row.
  rowIcon = document.createElement('div');
  rowIcon.classList = "layout-grid";
  const phoneLink = document.createElement('a');
  phoneLink.classList = "zocial call";
  phoneLink.href=`tel:${contactInfo.tel}`;
  phoneLink.innerText = `(${contactInfo.tel.substring(1,4)})${contactInfo.tel.substring(4,7)}-${contactInfo.tel.substring(7)}`;
  rowIcon.appendChild(phoneLink);
  iconRow.appendChild(rowIcon);

  // Create a row for the name/title and Udacity logo
  const introRow = document.createElement('div');
  introRow.classList = "row introduction";
  introRow.innerHTML = '<div class="logo"><img src="images/udacity.svg" alt="Udacity logo" class="logo"></div>';
  const name = document.createElement('div');
  name.classList = "name";
  name.innerHTML = `<h1>${contactInfo.name}</h1><h3>${contactInfo.title}</h3>`;
  introRow.appendChild(name);

  // Append the icon row and introduction row to the header element.
  headerPlatform.appendChild(iconRow);
  headerPlatform.appendChild(introRow);
}

function buildFooter() {
  footerPlatform.innerHTML = '<div class="row">Find a copy of my resume for</div>';
  // Generate an icon for the Google Docs link, and append it to the footer.
  let rowIcon = document.createElement('div');
  rowIcon.classList = "layout-grid";
  let resumeLink = document.createElement('a');
  resumeLink.href=`https://docs.google.com/document/d/${contactInfo.resumeGoogleDocId}/edit?usp=sharing`;
  resumeLink.innerHTML = '<img src="images/google-icon.svg" class="link-icon" alt="Google Icon"> Google Docs';
  rowIcon.appendChild(resumeLink);
  footerPlatform.appendChild(rowIcon);

  // Generate a link to export the Resume doc to a .docx file, and append it to the footer.
  rowIcon = document.createElement('div');
  rowIcon.classList = "layout-grid";
  resumeLink = document.createElement('a');
  resumeLink.href=`https://docs.google.com/document/export?format=docx&id=${contactInfo.resumeGoogleDocId}`;
  resumeLink.innerHTML = '<img src="images/microsoft-word-2013-logo.svg" class="link-icon" alt="Microsoft Word Icon"> Microsoft Word';
  rowIcon.appendChild(resumeLink);
  footerPlatform.appendChild(rowIcon);

  // Generate a link to export the Resume doc to a .pdf file, and append it to the footer.
  rowIcon = document.createElement('div');
  rowIcon.classList = "layout-grid";
  resumeLink = document.createElement('a');
  resumeLink.href=`https://docs.google.com/document/export?format=pdf&id=${contactInfo.resumeGoogleDocId}`;
  resumeLink.innerHTML = '<img src="images/adobe-pdf-icon.svg" class="link-icon" alt="Adobe PDF Icon"> Adobe PDF';
  rowIcon.appendChild(resumeLink);
  footerPlatform.appendChild(rowIcon);
}

buildHeader();
buildPortfolio();
buildFooter();
