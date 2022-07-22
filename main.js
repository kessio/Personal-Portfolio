const portfolioDetails = [
  {
    id: 1,
    name: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or  sign-ups required',
    moreDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    img: 'images/Snapshoot%20Portfolio-desktop.png',
    mobileImg: 'images/Snapshoot%20Portfolio-1.png',
    technologies: ['html', 'css', 'ruby', 'javascript'],
    Tags: ['Canopy', 'Back End Dev', '2015'],
    tagsImg: ['dot.png', 'dot.png'],
    liveLink: ['#'],
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


const menuNav = document.getElementById('mobile-menu-nav'); // \r\n
const hamburger = document.getElementById('hamburger-menu'); // \r\n
const menuItems = document.querySelectorAll('.mobile-list-items'); // \r\n
const closemenu = document.getElementById('close-menu-mobile');
hamburger.addEventListener('click', () => {
  menuNav.classList.toggle('active');
});
closemenu.addEventListener('click', () => { menuNav.classList.remove('active'); });
menuItems.forEach((n) => n.addEventListener('click', () => {
  menuNav.classList.remove('active');
}));


const container =document.querySelector('.desktop-work-section');
const pop = document.querySelector('.try-me');

function createCards () {
portfolioDetails.forEach((item) => {
  container.innerHTML += `
  <div class="work-row">
<img
  src="images/Snapshoot%20Portfolio-desktop.png"
  class="work-img-desktop"
  alt=""
/>
<div class="col-description">
  <h3>${item.name}</h3>
  <span class="work-title">${item.Tags[0]}</span>
  <img src="${item.tagsImg[0]}" class="work-dot" alt="sd" />
  <span class="skills-text">${item.Tags[0]}</span>
  <img src="${item.tagsImg[1]}" class="work-dot" alt="so" />
  <span class="skills-text">${item.Tags[2]}</span>
  <p class="work-text">${item.description}
  </p>
  <div class="skills-btn">
    <a href="#" class="work-skills">${item.technologies[0]}</a>
    <a href="#" class="work-skills">${item.technologies[1]}</a>
    <a href="#" class="work-skills">${item.technologies[3]}a>
  </div>
  <a href="#" class="view-project-btn"> See Project </a>
</div>
</div> `
})
}

createCards()

function createPop (idx) {
modal.innerHTML = `
<div class="work-row">
<img
src="images/Snapshoot%20Portfolio-desktop.png"
class="work-img-desktop"
alt=""
/>
<div class="col-description">
<h3>${portfolioDetails[idx].name}</h3>
<span class="work-title">${portfolioDetails[idx].Tags[0]}</span>
<img src="${portfolioDetails[idx].tagsImg[0]}" class="work-dot" alt="sd" />
<span class="skills-text">${portfolioDetails[idx].Tags[0]}</span>
<img src="${portfolioDetails[idx].tagsImg[1]}" class="work-dot" alt="so" />
<span class="skills-text">${portfolioDetails[idx].Tags[2]}</span>
<p class="work-text">${portfolioDetails[idx].description}
</p>
<div class="skills-btn">
  <a href="#" class="work-skills">${portfolioDetails[idx].technologies[0]}</a>
  <a href="#" class="work-skills">${portfolioDetails[idx].technologies[1]}</a>
  <a href="#" class="work-skills">${portfolioDetails[idx].technologies[3]}a>
</div>
<a href="#" class="view-project-btn">See Project</a>
</div>
</div>`
}

const seeMe = document.querySelectorAll('.view-project-btn');
const modal = document.querySelector('.try-me');

seeMe.forEach((n, idx) => {
  n.addEventListener('click', () => {
    createPop(idx)
    modal.classList.add('active')
  })
})


