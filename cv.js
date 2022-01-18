console.log("this is start");
const data = [
  {
    name: "Rohan Das",
    age: 18,
    language: "Python",
  
    image:"https://randomuser.me/api/portraits/men/79.jpg"
  },

  {
    name: "Sharanya  Damodar",
    age: 18,
    language: "Flask",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },

  {
    name: "Deep Amer",
    age: 18,
    language: "React",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    name: "Rachit Jain",
    age: 18,
    language: "Javascript",
    image: "https://randomuser.me/api/portraits/men/99.jpg",
  },
  {
    name: "Arath Krish",
    age: 18,
    language: "Django",
    image: "https://randomuser.me/api/portraits/men/89.jpg",
  },

  {
    name: "Rohan Das",
    age: 18,
    language: "Python",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
  },
]

function cviterator(profiles) {
  let nextindex = 0;
  return {
    next: function () {
      return nextindex < profiles.length
        ? { value: profiles[nextindex++], done: false }
        : { done: true };
    }
  };
}
//the data fetched from cviterator gets stored in candidates
//so candidate is my instance which is iterating cv iterator
const candidates = cviterator(data);
nextcv();

const next = document.getElementById('next');

next.addEventListener('click',nextcv);

function nextcv() {


  const currentcandidate = candidates.next().value;
  let image = document.getElementById('image');
  let profile = document.getElementById('profile');
  if (currentcandidate != undefined) {
    image.innerHTML = `<img src='${currentcandidate.image}'>`;
    profile.innerHTML = `<ol class="list-group list-group-numbered">
<li class="list-group-item d-flex justify-content-between align-items-start">
  <div class="ms-2 me-auto">
    <div class="fw-bold">NAME</div>
   ${currentcandidate.name}
  </div>
  <span class="badge bg-primary rounded-pill">${Math.floor(Math.random() * 10)}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-start">
  <div class="ms-2 me-auto">
    <div class="fw-bold">AGE</div>
    ${currentcandidate.age}
  </div>
  <span class="badge bg-primary rounded-pill">${Math.floor(Math.random() * 10)}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-start">
  <div class="ms-2 me-auto">
    <div class="fw-bold">SKILLS</div>
    ${currentcandidate.language}
  </div>
  <span class="badge bg-primary rounded-pill">${Math.floor(Math.random() * 10)}</span>
</li>
</ol>`;

  } else {
    alert("end of application");
    window.location.reload();
  }
}
