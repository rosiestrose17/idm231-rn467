function getZodiacSign(day, month) {
    let zodiacSign = "";
    if((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
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
   const form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
     event.preventDefault();
     calculateZodiac();
   });

  const buttons = document.querySelectorAll('.sign');
  const descriptions = {
    aries: 'You are an Aries, which means you are most like Bad Badzt Maru! Like him, you are passionate, motivated, and confident leader who builds community with their cheerful disposition and relentless determination. ',
    taurus: 'You are a Taurus, which is most like Tuxedo Sam! You likes to eat all the time. Sometimes, you are a little naïve and open to making careless mistakes, however, lots of people still love you.',
    gemini: 'You are a Gemini, which aligns with the Little Twin Stars ! Like these quick-witted twins, you are flexible, extroverted, and clever, and there is never a boring moment while you are around. You are the social butterflies of the zodiac who can talk to anyone about anything.',
    cancer: 'You are a Cancer,which aligns with My Melody. Sweet and kind, you truly wouldn not hurt a fly. You have an optimistic outlook on life and always try to find the silver lining in every situation.',
    leo: 'You are a Leo, which aligns with Pompompurin! You are radiantly joyful, liberal with your appeal and endowments. You love and live life to the fullest rather than being in charge at home, work, and play. Like Pompom, you are also extremely loyal and will fight tirelessly for the people you care about.',
    virgo: 'You are a Virgo, which means you are most like Hello Kitty! Like her, you are a bright light in your friends lives. Kind and gentle, you would do anything for a pal in need.',
    libra: 'Since you are a Libra, you are most like Cinnamonroll! Like this puppy, you are a workaholic — an excellent problem solver and can often find solutions to situations that others cannot. You hate being  and often ask your friends to make decision for you, since you are super indecisive!.',
    scorpio: 'You are a Scorpio, which means you are most like Kuromi! You might come off as pretty tough at first, but once people get to know you, they will see that you have a heart of gold underneath. You have a wicked sense of humor and a taste for the darker things in life.',
    sagittarius: 'As a Sagittarius, you share a free spirit with Chococat. You tend to be straightforward to the point of being blunt. You qre laidback and easygoing, and the things that bother and stress out other people tend to not get to you. You roll with the punches, able to take on any situation life throws your way.',
    pisces: 'You are a Pisces, which means you are most like Hello Keroppi! Like this little frog, you are outgoing and friendly — you can make a pal out of almost anyone. You thrive on having adventures and exploring, which can sometimes get you into trouble. At the end of the day, you just want to have the most fun you can in life.'
   };