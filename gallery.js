const notes = {
  mk: [
    "তোমার হাসিটা আমার সবচেয়ে প্রিয় দৃশ্য। 💙",
    "তোমার পাশে থাকলেই ordinary মুহূর্তগুলো special হয়ে যায়। ❤️",
    "এই ছবিটা দেখলেই মনে হয়—আমাদের গল্পটা সত্যিই সুন্দর। 🌸",
    "তোমাকে নিয়ে আমার favourite memory-এর কোনো শেষ নেই। 💕",
    "তুমি থাকলে ছোট্ট একটা মুহূর্তও পুরো একটা পৃথিবী হয়ে যায়। 🦋",
    "এই ছবির মতোই তোমার presence আমার দিনটাকে সুন্দর করে। 🌷",
    "আমার favourite place? তোমার পাশে। সবসময়। 💙",
    "একটা ছবি, হাজারটা অনুভূতি—আর সবকিছুর মাঝখানে তুমি। ❤️"
  ],

  honeymoon: [
    "কোনো destination না, আমার favourite journey হলো তোমার সাথে। 🌙",
    "তোমার হাতটা ধরে দূরে কোথাও হারিয়ে যেতে ইচ্ছে করে। 💕",
    "আমাদের দুজনের জন্য পৃথিবীর যেকোনো জায়গাই beautiful। 🌸",
    "তুমি পাশে থাকলে পথটাও destination-এর মতো লাগে। 🦋",
    "একদিন আবার এমন একটা সকাল শুধু তোমাকে নিয়ে চাই। ☀️",
    "তোমার সাথে কাটানো সময়গুলো আমার favourite escape। ❤️",
    "ভ্রমণ শেষ হয়ে যায়, কিন্তু তোমার সাথে তৈরি হওয়া memory থেকে যায়। 🌷",
    "যত দূরেই যাই, আমার favourite place থাকবে তোমার কাছেই। 💙"
  ],

  memories: [
    "সময় চলে যায়, কিন্তু তোমাকে নিয়ে আমার মায়াটা থেকে যায়। 🌿",
    "এই ছোট্ট মুহূর্তগুলোই একদিন সবচেয়ে বেশি miss করব। ❤️",
    "কিছু memory delete করা যায় না—কারণ সেগুলো হৃদয়ে থাকে। 💙",
    "তোমার সাথে কাটানো ordinary দিনগুলোই আমার কাছে extraordinary। 🌸",
    "যখনই এই ছবিটা দেখব, তোমার সেই মুহূর্তটা মনে পড়বে। 💕",
    "আমাদের গল্পের সবচেয়ে সুন্দর chapterগুলো এমনই ছোট ছোট। 🦋",
    "সময় বদলালেও এই অনুভূতিটা যেন একই থাকে। 🌷",
    "তোমার সাথে আরও এমন হাজারটা memory চাই। ❤️",
    "তোমার হাতটা, আমার বাহুতে—ভালোবাসা পূর্ণ। ❤️"
  ],

  wedding: [
    "তোমার দিকে তাকিয়ে মনে হয়েছিল—এই মানুষটার হাতটা ধরে রাখতে চাই। ❤️",
    "একটা সুন্দর chapter থেকে আমাদের forever story শুরু হয়েছিল। 💙",
    "তোমার পাশে থাকার promise-টা আমার সবচেয়ে প্রিয় promise। 🌸",
    "তোমাকে নিয়ে future ভাবলেই মনটা শান্ত হয়ে যায়। 💕",
    "সেদিনের হাসিটা আজও আমার মনে ঠিক আগের মতোই আছে। 🌷",
    "আমাদের story-এর সবচেয়ে beautiful part—আমরা একসাথে। 🦋",
    "তোমার সাথে forever শব্দটাও ছোট মনে হয়। ❤️",
    "আজও তোমাকে দেখে মনে হয়—ভালোবাসার decisionটা ঠিকই ছিল। 💙"
  ]
};

document.addEventListener("DOMContentLoaded", () => {

  const key = document.body.dataset.key || "mk";
  const cards = document.querySelectorAll(".card");
  const surprise = document.querySelector(".surprise");
  const message = document.querySelector(".message");
  const closeButton = document.querySelector(".x");

  cards.forEach((card, i) => {

    card.addEventListener("click", () => {

      if (!surprise || !message) return;

      const currentNotes = notes[key] || notes.mk;

      message.textContent =
        currentNotes[i] || "তুমি আমার সবচেয়ে সুন্দর surprise. 💙❤️";

      surprise.classList.add("open");

      for (let j = 0; j < 30; j++) {

        const p = document.createElement("span");

        p.className = "petal";
        p.textContent =
          ["🌸", "🌷", "♡", "✦", "🦋"][
            Math.floor(Math.random() * 5)
          ];

        p.style.left = 45 + Math.random() * 10 + "vw";
        p.style.setProperty(
          "--x",
          (Math.random() * 70 - 35) + "vw"
        );

        p.style.animationDelay =
          Math.random() * 0.5 + "s";

        document.body.appendChild(p);

        setTimeout(() => {
          p.remove();
        }, 3500);
      }
    });

  });

  if (closeButton && surprise) {
    closeButton.addEventListener("click", () => {
      surprise.classList.remove("open");
    });
  }

});