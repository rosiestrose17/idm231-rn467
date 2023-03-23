let prevButton = null;
function getZodiacSign(day, month) {
  let zodiacSign = "";
  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    zodiacSign = "aries";
  } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    zodiacSign = "taurus";
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
    zodiacSign = "gemini";
  } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
    zodiacSign = "cancer";
  } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    zodiacSign = "leo";
  } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    zodiacSign = "virgo";
  } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
    zodiacSign = "libra";
  } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
    zodiacSign = "scorpio";
  } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    zodiacSign = "sagittarius";
  } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    zodiacSign = "capricorn";
  } else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    zodiacSign = "aquarius";
  } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    zodiacSign = "pisces";
  }
  return zodiacSign;
}

const descriptions = {
  aquarius:
    "You are an Aquarius, which strongly correlates with My Little Piano ! Like this sheep, you're gentle, pampered and is always there for your loved ones. People can always count on you to help them out. However, you also need a lot of freedom and space to do your own thing, as you always have a lot going on in your mind.,",
  capricorn:
    "You're a Capricorn, which aligns with Gudetama! Some people may call you lazy, but you just like to live life at your own relaxed pace. You don't see the point in stressing over the little things. You're happiest snuggled up in bed with no plans or obligations. Just make sure you don't procrastinate too much!",
  aries:
    "You are an Aries, which means you are most like Bad Badzt Maru! Like him, you are passionate, motivated, and confident leader who builds community with their cheerful disposition and relentless determination. Uncomplicated and direct in your approach, you often get frustrated by exhaustive details and unnecessary nuances. ",
  taurus:
    "You are a Taurus, which is most like Tuxedo Sam! You likes to eat all the time. Sometimes, you are a little naïve and open to making careless mistakes, however, lots of people still love you.  You're also very ambitious and are not afraid to roll up your sleeves and work hard to earn big rewards.",
  gemini:
    "You are a Gemini, which aligns with the Little Twin Stars ! Like these quick-witted twins, you are flexible, extroverted, and clever, and there is never a boring moment while you are around. You are the social butterflies of the zodiac who can talk to anyone about anything. You are always constantly willing to try new things.",
  cancer:
    "You are a Cancer, which aligns with My Melody. Sweet and kind, you truly wouldn not hurt a fly. You have an optimistic outlook on life and always try to find the silver lining in every situation. You sometimes have a hard time saying no to people and find yourself being too nice.",
  leo: "You are a Leo, which aligns with Pompompurin! You are radiantly joyful, liberal with your appeal and endowments. You love and live life to the fullest rather than being in charge at home, work, and play. Like Pompom, you are also extremely loyal and will fight tirelessly for the people you care about.",
  virgo:
    "You are a Virgo, which means you are most like Hello Kitty! Like her, you are a bright light in your friends lives. Kind and gentle, you would do anything for a pal in need. You're also artsy and imaginative — you thrive best in a creative environment with good energy.",
  libra:
    "Since you are a Libra, you are most like Cinnamonroll! Like this puppy, you are a workaholic — an excellent problem solver and can often find solutions to situations that others cannot. You hate being alone and often ask your friends to make decision for you, as you are super indecisive!.",
  scorpio:
    "You are a Scorpio, which means you are most like Kuromi! You might come off as pretty tough at first, but once people get to know you, they will see that you have a heart of gold underneath. You have a wicked sense of humor and a taste for the darker things in life.",
  sagittarius:
    "As a Sagittarius, you share a free spirit with Chococat. You tend to be straightforward to the point of being blunt. You qre laidback and easygoing, and the things that bother and stress out other people tend to not get to you! You roll with the punches, able to take on any situation life throws your way.",
  pisces:
    "You are a Pisces, which means you are most like Hello Keroppi! Like this little frog, you are outgoing and friendly — you can make a pal out of almost anyone. You thrive on having adventures and exploring, which can sometimes get you into trouble. At the end of the day, you just want to have the most fun you can in life.",
};

const form = document.querySelector("form");
const input = document.getElementById("birthdate");
const image = document.getElementById("sanrios");
const displayDescription = document.getElementById("description");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const birthdate = input?.value?.split("-");
  const day = Number(birthdate[2]);
  const month = Number(birthdate[1]);
  const userSign = getZodiacSign(day, month);
  displayDescription.innerText = descriptions[userSign];

  if (userSign === "aries") {
    aries();
  } else if (userSign === "taurus") {
    taurus();
  } else if (userSign === "gemini") {
    gemini();
  } else if (userSign === "cancer") {
    cancer();
  } else if (userSign === "leo") {
    leo();
  } else if (userSign === "virgo") {
    virgo();
  } else if (userSign === "libra") {
    libra();
  } else if (userSign === "scorpio") {
    scorpio();
  } else if (userSign === "sagittarius") {
    sagittarius();
  } else if (userSign === "capricorn") {
    capricorn();
  } else if (userSign === "aquarius") {
    aquarius();
  } else if (userSign === "pisces") {
    pisces();
  }
});

function aries() {
  const audio = new Audio("./audio/Maru.mp3");
  	audio.play();
  displayDescription.innerText = descriptions["aries"];
  image.src = "./images/badzt.png";
  image.style.width = "60%";
  document.getElementsByTagName("BODY")[0].setAttribute("class", "aries");
  
}
function taurus() {
  const audio = new Audio("./audio/tuxedo.mp3");
  audio.play();
  displayDescription.innerText = descriptions["taurus"];
  image.src = "./images/tuxedo.png";
  image.style.width = "45%";
  document.getElementsByTagName("BODY")[0].setAttribute("class", "taurus")
}
function gemini() {
  const audio = new Audio("./audio/twinstars.mp3");
  audio.play();
  displayDescription.innerText = descriptions["gemini"];
  image.src = "./images/twinstars.png";
  image.style.width = "45%";
  document.getElementsByTagName("BODY")[0].setAttribute("class", "gemini")
}
function cancer() {
  const audio = new Audio("./audio/melody.mp3");
  audio.play();
  displayDescription.innerText = descriptions["cancer"];
  image.src = "./images/melody.png";
  image.style.width = "55%";
  document.getElementsByTagName("BODY")[0].setAttribute("class", "cancer")
}
function virgo() {
  const audio = new Audio("./audio/hellokitty.mp3");
  audio.play();
  displayDescription.innerText = descriptions["virgo"];
  image.src = "./images/hello_kitty.png";
  image.style.width = "45%";
  document.getElementsByTagName("BODY")[0].setAttribute("class", "virgo")
}
function leo() {
  const audio = new Audio("./audio/pompom.mp3");
  audio.play();
  displayDescription.innerText = descriptions["leo"];
  image.src = "./images/pompom.webp";
  image.style.width = "50%";
  document.getElementsByTagName("BODY")[0].setAttribute("class", "leo")
}
function libra() {
  const audio = new Audio("./audio/cinnamonroll.mp3");
  audio.play();
  displayDescription.innerText = descriptions["libra"];
  image.src = "./images/cinnamonroll.png";
  image.style.width = "70%";
  document.getElementsByTagName("BODY")[0].setAttribute("class", "libra")
}
function scorpio() {
  const audio = new Audio("./audio/kuromi.mp3");
  audio.play();
  displayDescription.innerText = descriptions["scorpio"];
  image.src = "./images/kuromi.png";
  image.style.width = "40%";
  document.getElementsByTagName("BODY")[0].setAttribute("class", "scorpio")
}
function aquarius() {
  const audio = new Audio("./audio/sweetpiano.mp3");
  audio.play();
  displayDescription.innerText = descriptions["aquarius"];
  image.src = "./images/little_piano.png";
  image.style.width = "35%";
  document.getElementsByTagName("BODY")[0].setAttribute("class", "aquarius")
}
function capricorn() {
  const audio = new Audio("./audio/gudetama.mp3");
  audio.play();
  displayDescription.innerText = descriptions["capricorn"];
  image.src = "./images/gudetama.png";
  image.style.width = "80%";
  document.getElementsByTagName("BODY")[0].setAttribute("class", "capricorn")
}
function sagittarius() {
  const audio = new Audio("./audio/chococat.mp3");
  audio.play();
  displayDescription.innerText = descriptions["sagittarius"];
  image.src = "./images/chococat.png";
  image.style.width = "45%";
  document.getElementsByTagName("BODY")[0].setAttribute("class", "sagittarius")
}
function pisces() {
  const audio = new Audio("./audio/keroppi.mp3");
  audio.play();
  displayDescription.innerText = descriptions["pisces"];
  image.src = "./images/keroppi.png";
  image.style.width = "53%";
  document.getElementsByTagName("BODY")[0].setAttribute("class", "pisces")
}
function reset_animation() {
}
