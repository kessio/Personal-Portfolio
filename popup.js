const portfolioDetails = [
  {
    id: 1,
    name: 'School Website',
    description: 'This is a coding Bootcamp school website that shocases services the school offers and a about us page',
    moreDetails: 'This website was created using HTML5, CSS and JavaScript. Javascript was used to dynamically display testimonials section on the DOM. JavaSCript was also used to display and hide the navigation menu on small devices.',
    img: 'images/home-banner.png',
    mobileImg: 'images/mobile-home-banner.png',
    technologies: ['html', 'css', 'javascript'],
    Tags: ['Website', 'Front End Dev', '2022'],
    tagsImg: ['dot.png', 'dot.png'],
    liveLink: ['https://kessio-microverse-projects.github.io/capstoneProject-1/'],
    sourceLink: ['#'],
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming theirfriends.',
    moreDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    img: 'images/Snapshoot%20Portfolio-2-desktop.png',
    mobileImg: 'images/Snapshoot%20Portfolio-2.png',
    technologies: ['html', 'css', 'ruby', 'javascript'],
    Tags: ['Facebook', 'Full Stack Dev', '2015'],
    tagsImg: ['dot.png', 'dot.png'],
    liveLink: ['#'],
    sourceLink: ['#'],
  },
  {
    id: 3,
    name: 'Facebook 360',
    description: 'Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear   VR..',
    moreDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    img: 'images/Snapshoot%20Portfolio-3-desktop.png',
    mobileImg: 'images/Snapshoot%20Portfolio-3.png',
    technologies: ['html', 'css', 'ruby', 'javascript'],
    Tags: ['Facebook', 'Full Stack Dev', '2015'],
    tagsImg: ['dot.png', 'dot.png'],
    liveLink: ['#'],
    sourceLink: ['#'],
  },
  {
    id: 4,
    name: 'Uber Navigation',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    moreDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    img: 'images/Snapshoot%20Portfolio-4-desktop.png',
    mobileImg: 'images/Snapshoot%20Portfolio-4.png',
    technologies: ['html', 'css', 'ruby', 'javascript'],
    Tags: ['Uber', 'Lead Developer', '2015'],
    tagsImg: ['images/dot.png', 'dot.png'],
    liveLink: ['#'],
    sourceLink: ['#'],
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
      img.setAttribute('src', 'images/counter.png');
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
  details.append(buttons);

  const projectBtn = document.createElement('a');
  projectBtn.setAttribute('href', 'https://kessio-microverse-projects.github.io/capstoneProject-1/');
  projectBtn.setAttribute('target', 'blank');
  projectBtn.className = 'view-project';
  projectBtn.innerHTML = 'See Live';
  buttons.append(projectBtn);

  const liveIcon = document.createElement('img');
  liveIcon.setAttribute('src', 'images/icon-live.svg');
  projectBtn.append(liveIcon);

  const projectBtn2 = document.createElement('a');
  projectBtn2.setAttribute('href', 'https://github.com/kessio/Personal-Portfolio');
  projectBtn2.setAttribute('target', 'blank');
  projectBtn2.className = 'view-project source';
  projectBtn2.innerHTML = 'See Source';
  buttons.append(projectBtn2);

  const sourceIcon = document.createElement('img');
  sourceIcon.setAttribute('src', 'images/vector.png');
  projectBtn2.append(sourceIcon);

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
    }
  }
};
window.addEventListener('click', openModal);

const closemodal1 = document.getElementById('cl-1');
const closemodal2 = document.getElementById('cl-2');
const closemodal3 = document.getElementById('cl-3');
const closemodal4 = document.getElementById('cl-4');

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
overlay.addEventListener('click', () => {
  modal1.style.display = 'none';
  modal2.style.display = 'none';
  modal3.style.display = 'none';
  modal4.style.display = 'none';
  overlay.style.display = 'none';
});
