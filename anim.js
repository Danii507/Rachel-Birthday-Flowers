// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var playContainer = document.querySelector("#play-container");
var playBtn = document.querySelector("#play-btn");

var lyricsData = [
  { text: "Mmm-mmm-hm-hm, mmm-hm-hm-mmm", time: 1.42 },
  { text: "Ah-ah-ah, ah-ah-ah", time: 6.30 },
  { text: "Ah-ah-ah, ah-ah", time: 9.94 },
  { text: "All I can say (Do-do-do-do, do-do)", time: 13.78 },
  { text: "Is that you belong with me (Do-do-do-do, do-do)", time: 19.90 },
  { text: "And a dreamer should dream (Do-do-do-do, do-do)", time: 27.01 },
  { text: "How else would dreams turn reality? (La-la-la-la)", time: 34.05 },
  { text: "And my peace of mind (Do-do-do-do, do-do)", time: 42.10 },
  { text: "No, it will not be destroyed (Do-do-do-do, do-do)", time: 48.19 },
  { text: "By lost souls on the decline (Do-do-do-do, do-do)", time: 55.46 },
  { text: "Who only strive to divide (La-la-la-la)", time: 62.46 },
  { text: "No, I'm not sorry for the way that I am", time: 71.71 },
  { text: "I'm not sorry for the way that I love or the heart that I have", time: 79.03 },
  { text: "No, I'm not sorry for the dreams that I dream", time: 85.91 },
  { text: "Or the life that I live 'cause it all belongs to me", time: 93.31 },
  { text: "Woo-ooh-ooh-ooh, ooh-ooh-ooh-ooh-ooh", time: 100.70 },
  { text: "Woo-ooh-ooh-ooh, ooh-ooh-ooh-ooh-ooh", time: 108.19 },
  { text: "And that's all that I can say", time: 111.11 },
  { text: "Woo-ooh-ooh-ooh, ooh-ooh-ooh-ooh-ooh", time: 114.98 },
  { text: "Woo-ooh-ooh, ooh-ooh-ooh-ooh-ooh-ooh", time: 121.31 },
  { text: "No, I'm not sorry for the way that I am", time: 128.71 },
  { text: "I'm not sorry for the way that I love or the heart that I have", time: 135.75 },
  { text: "No, I'm not sorry for the dreams that I dream", time: 142.79 },
  { text: "Or the life that I live, and that's all that I can say", time: 150.00 },
  { text: "La-da-da-da-da, da-da-da", time: 157.47 },
  { text: "La-da-da-da-da, da-da-da", time: 162.14 },
  { text: "La-da-da-da-da, da-da-da", time: 165.66 },
  { text: "La-da-da-da-da, da-da-da", time: 169.34 },
  { text: "Oh-oh-oh, oh-oh-oh, mmm", time: 172.58 }
];

// Forzar la reproducción y detectar si Android la bloquea
audio.play().catch(function(error) {
  console.log("Autoplay bloqueado por el navegador móvil. Mostrando botón de activación.");
  if (playContainer) {
    playContainer.style.display = "block"; // Muestra el botón solo si hubo bloqueo
  }
});

// Si hace clic en el botón (en el móvil), arranca la música y oculta el botón
if (playBtn) {
  playBtn.addEventListener("click", function() {
    audio.play().then(() => {
      if (playContainer) {
        playContainer.style.display = "none";
      }
    });
  });
}

function updateLyrics() {
  var currentTime = audio.currentTime;
  var currentLine = lyricsData.find(
    (line, index) => {
      var nextLine = lyricsData[index + 1];
      return currentTime >= line.time && (!nextLine || currentTime < nextLine.time);
    }
  );

  if (currentLine) {
    lyrics.innerHTML = currentLine.text;
    lyrics.style.opacity = 1;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

audio.addEventListener("timeupdate", updateLyrics);

function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.animation = "fadeOut 3s ease-in-out forwards";
    setTimeout(function () {
      titulo.style.display = "none";
    }, 3000);
  }
}

setTimeout(ocultarTitulo, 216000);