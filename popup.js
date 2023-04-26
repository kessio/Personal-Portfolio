const portfolioDetails = [
  {
    id: 1,
    name: 'School Website',
    description: 'This is a coding Bootcamp school website that shocases services the school offers and a about us page',
    moreDetails: 'This is a single-page portfolio website with a header, work section, about section, and contact section which was parsed from Microverse Figma Template 1. The webpage is responsive and can be used on different screens. The contact section and all animation effects the portfolio was done by all the three authors listed below as contributing authors. This project was made with HTML, CSS and javascript linters and proper Github Flow was used. Javascript was used to toggle the mobile menu. The Personal-portfolio website has been deployed using github pages, the link is below.',
    img: 'images/home-banner.PNG',
    mobileImg: 'images/mobile-home-banner.png',
    technologies: ['html', 'css', 'javascript'],
    Tags: ['Website', 'Front End Dev', '2022'],
    tagsImg: ['dot.png', 'dot.png'],
    liveLink: ['https://kessio.github.io/capstoneProject-1/'],
    sourceLink: ['https://github.com/kessio/capstoneProject-1']
  },
  {
    id: 2,
    name: 'E-commerce Store',
    description: 'Ecommerce store built with react, commerce.js has been used to handle the backend of the store. Users can purchase items using stripe.',
    moreDetails: 'This project contains a fully functional eCommerce application built with react and commercejs. eCommercejs API has been used to build product displays, carts, checkouts on the backend. This application allows users to add products to cart, checkout and pay using stripe. Once they purchase an item they will get a receipt on their email. I enjoyed buiding this eCommerce shop and learnt a lot of new concepts in the process.',
    img: 'images/e-commerce.png',
    mobileImg: 'images/Snapshoot%20Portfolio-2.png',
    technologies: ['React', 'TailwindCSS', 'APIs'],
    Tags: ['commerceJs', 'Full Stack Dev', '2022'],
    liveLink: ['https://profound-malabi-179947.netlify.app/'],
    sourceLink: ['https://github.com/kessio/e-commerce-shop']
  },
  {
    id: 3,
    name: 'Crypto Price Tracker',
    description: 'Web application that fetches the top 100 cryptocurrencies from coincap API and displays them for users to view. Redux has been used in state management',
    moreDetails: 'Crypto-price-tracker is a web application that fetches the top 100 cryptocurrency from an api, displays ttem for users and users can click on each to check more details about the cryptocurrency. Redux has been used for state management, react testing library and jest has been used to test various redux functions and react components.',
    img: 'images/crytpo-price-tracker.png',
    mobileImg: 'images/Snapshoot%20Portfolio-3.png',
    technologies: ['React', 'Redux', 'TailwindCSS'],
    Tags: ['Crypto', 'Full Stack Dev', '2022'],
    liveLink: ['https://teal-banoffee-1720f7.netlify.app/'],
    sourceLink: ['https://github.com/kessio/crypto-price-tracker']
  },
  {
    id: 4,
    name: 'BookStore',
    description: 'This project contains a book store that posts data to a bookstore api, fetches it from the api and displays it on the UI',
    moreDetails: 'This project contains a book store that posts data to a bookstore api, fetches it from the api and displays it on the UI using react redux. Users can also add and delete books to the bookstore',
    img: 'images/bookstore.png',
    mobileImg: 'images/Snapshoot%20Portfolio-4.png',
    technologies: ['React', 'Redux', 'Css'],
    Tags: ['BookStore', 'Developer', '2022'],
    tagsImg: ['images/dot.png', 'dot.png'],
    liveLink: ['https://kessio.github.io/react-bookstore/'],
    sourceLink: ['https://github.com/kessio/react-bookstore'],
  },
  {
    id: 5,
    name: 'BlogPost',
    description: 'This project contains a blog that displays various blog posts to users, users can click on any article and read them. The articles are fecthed from hygraph CMS using graphql.',
    moreDetails: 'This project is a fully responsive CMS blogpost created with Nextjs and tailwind CSS. The application fetches articles from hygraph CMS using graphql. Users can see a list of blog posts available and read the various articles on the site.',
    img: 'images/blog-post.png',
    technologies: ['GraphQl', 'NextJs', 'Css'],
    Tags: ['BlogPost', 'Developer', '2022'],
    tagsImg: ['images/dot.png', 'dot.png'],
    liveLink: ['https://graphql-blog-website.vercel.app/'],
    sourceLink: ['https://github.com/kessio/graphql-blog-website'],
  },
  {
    id: 6,
    name: 'Budgeter',
    description: 'Budgeter app is a mobile application that allows users to add, delete, edit and keep track of their budget',
    moreDetails: 'Budget App is a mobile web application that allows users to create an account, login then manage their budget by adding, deleting, editing and view their transcations.',
    img: 'images/budgeter-new.png',
    technologies: ['Ruby on Rails', 'Css', 'Render'],
    Tags: ['FullStack Dev', 'Budgeter', '2023'],
    tagsImg: ['images/dot.png', 'dot.png'],
    liveLink: ['https://budgeter-uk8t.onrender.com/'],
    sourceLink: ['https://github.com/kessio/budget-app-rails'],
  },
];

const portfolio = document.createElement('div');
portfolio.className = 'container';

const Card = (work) => {
  const card = document.createElement('div');
  if (work.id % 2 !== 0) {
    card.className = 'card';
  } else {
    card.className = 'card row-reverse';
  }

  const img = document.createElement('img');
  img.setAttribute('src', work.img);
  img.className = 'work-imgdesktop';
  card.appendChild(img);

  const divtext = document.createElement('div');
  divtext.className = 'card-text';
  card.append(divtext);

  const h3 = document.createElement('h3');
  h3.className = 'h3tag';
  h3.innerText = work.name;
  divtext.append(h3);

  const headTags = document.createElement('div');
  headTags.className = 'head-tags';
  divtext.append(headTags);

  for (let t = 0; t < (work.Tags).length; t += 1) {
    const tagsSpan = document.createElement('div');
    tagsSpan.className = 'tags';
    tagsSpan.innerHTML = work.Tags[t];
    headTags.append(tagsSpan);

    if ([t] % 2 === 0) {
      const img = document.createElement('img');
      img.setAttribute('src', 'images/Counter.png');
      img.setAttribute('alt', 'null');
      img.className = 'counter';
      headTags.appendChild(img);
      
    }
    
  }
  const p = document.createElement('p');
  p.innerText = work.description;
  p.className = 'description';
  divtext.append(p);

  const technologies = document.createElement('div');
  technologies.className = 'tech-section';
  divtext.append(technologies);
  for (let s = 0; s < (work.technologies).length; s += 1) {
    const techspan = document.createElement('span');
    techspan.className = 'techs';
    techspan.innerText = work.technologies[s];
    technologies.append(techspan);
  }

  const projectBtn = document.createElement('button');
  projectBtn.setAttribute('a', '');
  projectBtn.setAttribute('href', '#');
  projectBtn.setAttribute('id', `my-${work.id}`);
  projectBtn.className = 'view-project popup';
  projectBtn.innerHTML = 'See Project';
  divtext.append(projectBtn);

  return card;
};

for (let work = 0; work < portfolioDetails.length; work += 1) {
  portfolio.appendChild(Card(portfolioDetails[work]));
}

const workSection = document.body.querySelector('#projects-section');
workSection.appendChild(portfolio);

/* Modal */

const popUp = document.createElement('div');
popUp.className = 'container-popup1';

const modalWindow = (modal) => {
  const popUpRow = document.createElement('div');
  popUpRow.className = 'popup-row';
  popUpRow.setAttribute('id', `pop-${modal.id}`);
  const modalHead = document.createElement('div');
  modalHead.className = 'popup-head';
  popUpRow.append(modalHead);
  const h3 = document.createElement('h3');
  h3.innerText = modal.name;
  modalHead.append(h3);

  const closebtn = document.createElement('button');
  closebtn.className = 'closebutton';
  closebtn.setAttribute('id', `cl-${modal.id}`);
  popUpRow.appendChild(closebtn);

  const imgClose = document.createElement('img');
  imgClose.setAttribute('src', 'images/close-popup.png');
  imgClose.className = 'close-popup';
  imgClose.setAttribute('alt', 'close popup icon');
  closebtn.appendChild(imgClose);

  const headTags = document.createElement('div');
  headTags.className = 'head-tags';
  modalHead.append(headTags);
  for (let t = 0; t < (modal.Tags).length; t += 1) {
    const tagsSpan = document.createElement('div');
    tagsSpan.className = 'tags';
    tagsSpan.innerHTML = modal.Tags[t];
    headTags.append(tagsSpan);
    if ([t] % 2 === 0) {
      const img = document.createElement('img');
      img.setAttribute('src', 'images/counter.png');
      img.setAttribute('alt', 'null');
      img.className = 'counter';
      headTags.appendChild(img);
    }
  }
  const img = document.createElement('img');
  img.setAttribute('src', modal.img);
  img.className = 'work-img popupimg';
  popUpRow.appendChild(img);

  const details = document.createElement('div');
  details.className = 'row-details';
  popUpRow.append(details);
  const p = document.createElement('p');
  p.innerText = modal.moreDetails;
  p.className = 'description popup';
  details.append(p);

  const technologies = document.createElement('div');
  technologies.className = 'tech-section-modal';
  details.append(technologies);
  for (let s = 0; s < (modal.technologies).length; s += 1) {
    const techspan = document.createElement('span');
    techspan.className = 'techss';
    techspan.innerText = modal.technologies[s];
    technologies.append(techspan);
  }

  const buttons = document.createElement('div');
  buttons.className = 'buttons'
  details.append(buttons);
  const projectLive = document.createElement('a');
  projectLive.setAttribute('href', modal.liveLink)
  projectLive.setAttribute('target', 'blank');
  projectLive.className = 'view-project';
  projectLive.innerHTML = 'See Live';
  buttons.append(projectLive);

 const sourceProject = document.createElement('a')
 sourceProject.setAttribute('href', modal.sourceLink)
 sourceProject.setAttribute('target', 'blank')
 sourceProject.className = 'view-project source';
 sourceProject.innerHTML = 'See Source'

 buttons.append(sourceProject)
  return popUpRow;
};

for (let modal = 0; modal < portfolioDetails.length; modal += 1) {
  popUp.appendChild(modalWindow(portfolioDetails[modal]));
}
const modalSection = document.body.querySelector('#modal-section');
modalSection.appendChild(popUp);

const overlay = document.querySelector('.overlay');
const modal1 = document.getElementById('pop-1');
const modal2 = document.getElementById('pop-2');
const modal3 = document.getElementById('pop-3');
const modal4 = document.getElementById('pop-4');
const modal5 = document.getElementById('pop-5');
const modal6 = document.getElementById('pop-6');
const openModal = (event) => {
  if (event.target.nodeName === 'BUTTON') {
    const projectid = event.target.id;
    if (projectid === 'my-1') {
      modal1.style.display = 'block';
      overlay.style.display = 'inline-block';
    } else if (projectid === 'my-2') {
      modal2.style.display = 'block';
      overlay.style.display = 'inline-block';
    } else if (projectid === 'my-3') {
      modal3.style.display = 'block';
      overlay.style.display = 'inline-block';
    } else if (projectid === 'my-4') {
      modal4.style.display = 'block';
      overlay.style.display = 'inline-block';
    }else if (projectid === 'my-5') {
      modal5.style.display = 'block';
      overlay.style.display = 'inline-block';
    }else if (projectid === 'my-6') {
      modal6.style.display = 'block';
      overlay.style.display = 'inline-block';
    }
  }
};
window.addEventListener('click', openModal);

const closemodal1 = document.getElementById('cl-1');
const closemodal2 = document.getElementById('cl-2');
const closemodal3 = document.getElementById('cl-3');
const closemodal4 = document.getElementById('cl-4');
const closemodal5 = document.getElementById('cl-5');
const closemodal6 = document.getElementById('cl-6');

closemodal1.addEventListener('click', () => {
  modal1.style.display = 'none';
  overlay.style.display = 'none';
});
closemodal2.addEventListener('click', () => {
  modal2.style.display = 'none';
  overlay.style.display = 'none';
});
closemodal3.addEventListener('click', () => {
  modal3.style.display = 'none';
  overlay.style.display = 'none';
});
closemodal4.addEventListener('click', () => {
  modal4.style.display = 'none';
  overlay.style.display = 'none';
});
closemodal5.addEventListener('click', () => {
  modal5.style.display = 'none';
  overlay.style.display = 'none';
});
closemodal6.addEventListener('click', () => {
  modal6.style.display = 'none';
  overlay.style.display = 'none';
});
overlay.addEventListener('click', () => {
  modal1.style.display = 'none';
  modal2.style.display = 'none';
  modal3.style.display = 'none';
  modal4.style.display = 'none';
  modal5.style.display = 'none';
  overlay.style.display = 'none';
});
