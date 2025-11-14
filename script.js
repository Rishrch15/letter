const message = `Hi sayo.\nI just want you to know, na andito lang ako palagi para sayo.\n\nAlam kong hindi naging madali ang lahat, at sobrang hirap ng mga nangyari sa'yo maging sating dalawa.\n\nI'm praying na sana malampasan mo lahat ng yan, at maging matatag ka lang lagi.\n\nThere are more beautiful things in life na naghihintay para sa’yo at para sa ating dalawa. Sana magpatuloy ka lang, and I'm rooting for you.\n\n-Rish`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}