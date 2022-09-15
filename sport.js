const sports = document.querySelector('.sports');
const main1 = document.querySelector('.main1');
const row = document.createElement('div');
row.className = 'row';

const sport = [
  
  {
    img: 'assets/images/walking2.jpg',
    title: 'Walking',
    description:
      'You carry your own body weight when you walk. This is known as weight-bearing exercise. ',
  },
  {
    img: 'assets/images/jumping.jpg',
    title: 'Jumping Jack',
    description:
      'In Jumping Jacks, you bring your arms and legs together or apart at the same time while jumping up in the air.',
  },
  {
    img: 'assets/images/squat.jpg',
    title: 'Squats',
    description:
      'Position your feet hip-wide. Crouch down. Do not push your knees forward. ',
  },
  {
    img: 'assets/images/plank.jpg',
    title: 'Planks',
    description:
      'You lie on your stomach. Now lean on your forearms. Your elbows are at shoulder level and your forearms are parallel.',
  },
  {
    img: 'assets/images/push.jpg',
    title: 'Push-ups',
    description:
      'Put your hands parallel and shoulder-width apart. Keep your back straight and your neck as unstrained as possible. ',
  },
  {
    img: 'assets/images/super.jpg',
    title: 'Superman',
    description:
      'Lie on your stomach. The legs are parallel. Stretch out your arms above your head and put them down. ',
  },
  
];
function createCard() {
  for (let i = 0; i < sport.length; i += 1) {
    const col = document.createElement('div');
    col.className = 'col-sm-6';
    const card = document.createElement('div');
    card.className = 'card1';
    const image = new Image();
    image.src = sport[i].img;
    card.appendChild(image);
    col.appendChild(card);
    const div2 = document.createElement('div');
    div2.className = 'card2';
    col.appendChild(div2);
    const h = document.createElement('h3');
    h.innerHTML = sport[i].title;
    div2.appendChild(h);
    const redTxt = document.createElement('p');
    redTxt.classList.add('redTxt');
    redTxt.innerHTML = 'Ecsersise ';
    div2.appendChild(redTxt);
    const horizantalLine = document.createElement('hr');
    horizantalLine.className = 'horizantalLine';
    div2.appendChild(horizantalLine);
    const desc = document.createElement('p');
    desc.innerHTML = sport[i].description;
    div2.appendChild(desc);
    row.appendChild(col);
  }
  sports.appendChild(row);
  main1.append(sports);
}
createCard();
