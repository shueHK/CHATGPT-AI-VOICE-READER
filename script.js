let utterance;
let voices = [];

function loadVoices() {
  voices = speechSynthesis.getVoices();
}
speechSynthesis.onvoiceschanged = loadVoices;

function play() {
  stop();
  const text = document.getElementById("text").value;
  if (!text.trim()) return;

  utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voices.find(v => v.lang.includes("zh")) || voices[0];
  utterance.rate = document.getElementById("rate").value;

  speechSynthesis.speak(utterance);
}

function pause() {
  speechSynthesis.pause();
}

function stop() {
  speechSynthesis.cancel();
}
