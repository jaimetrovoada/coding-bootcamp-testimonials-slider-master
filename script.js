function Person(name, occupation, message, imageURL) {
  this.name = name;
  this.occupation = occupation;
  this.message = message;
  this.image = imageURL;
}

const tanya = new Person(
  "Tanya Sinclair",
  "UX Designer",
  " “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ” ",
  "./images/image-tanya.jpg"
);
const john = new Person(
  "John Tarkpor",
  "Junior Front-end Developer",
  " “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ” ",
  "./images/image-john.jpg"
);

const message = document.querySelector("#message");
const name = document.querySelector("#name");
const occupation = document.querySelector("#occupation");
const portrait = document.querySelector("#portrait");

window.addEventListener("load", (e) => {
  console.log("page loaded");
  displayMessage();
});

function displayMessage() {
  message.innerText = tanya.message;
  name.innerText = tanya.name;
  occupation.innerText = tanya.occupation;
  portrait.innerHTML = `<img src="${tanya.image}" alt="Tanya's portrait">`;
}

const testimonialArray = [tanya, john];
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

let i = 0;
next.addEventListener("click", (e) => {
  console.log("next clicked");
  displayNext();
});
prev.addEventListener("click", (e) => {
  console.log("previous clicked");
  displayPrev();
});

const arrayLast = testimonialArray.length - 1;

function displayNext() {
  if (i == 0) {
    i++;
    message.innerText = testimonialArray[i].message;
    name.innerText = testimonialArray[i].name;
    occupation.innerText = testimonialArray[i].occupation;
    portrait.innerHTML = `<img src="${testimonialArray[i].image}" alt="Tanya's portrait">`;
  } else if (i >= arrayLast) {
    i = 0;
    message.innerText = testimonialArray[i].message;
    name.innerText = testimonialArray[i].name;
    occupation.innerText = testimonialArray[i].occupation;
    portrait.innerHTML = `<img src="${testimonialArray[i].image}" alt="Tanya's portrait">`;
  }

  console.log(i);
}

function displayPrev() {
  if (i == 0) {
    i = arrayLast;
    message.innerText = testimonialArray[i].message;
    name.innerText = testimonialArray[i].name;
    occupation.innerText = testimonialArray[i].occupation;
    portrait.innerHTML = `<img src="${testimonialArray[i].image}" alt="Tanya's portrait">`;
  } /* if (i >= arrayLast) */ else {
    i--;
    message.innerText = testimonialArray[i].message;
    name.innerText = testimonialArray[i].name;
    occupation.innerText = testimonialArray[i].occupation;
    portrait.innerHTML = `<img src="${testimonialArray[i].image}" alt="Tanya's portrait">`;
  }

  console.log(i);
}
