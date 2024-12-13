const soundMap = {
  w: "sounds/crash.mp3",
  a: "sounds/kick-bass.mp3",
  s: "sounds/snare.mp3",
  d: "sounds/tom-1.mp3",
  j: "sounds/tom-2.mp3",
  k: "sounds/tom-3.mp3",
  l: "sounds/tom-4.mp3"
};

// 鍵盤
document.addEventListener("keydown", function(event) {
  playSound(event.key.toLowerCase());
  addPressedEffect(event.key.toLowerCase());
});

// 按鈕點擊
document.querySelectorAll(".drum").forEach(button => {
  button.addEventListener("click", function() {
    const key = this.classList[1]; // 按鈕對應類別
    playSound(key);
    addPressedEffect(key);
  });
});

// 音效
function playSound(key) {
  if (soundMap[key]) {
    const audio = new Audio(soundMap[key]);
    audio.play();
  }
}

// 點擊效果
function addPressedEffect(key) {
  const button = document.querySelector(`.${key}`);
  if (button) {
    button.classList.add("pressed");
    setTimeout(() => {
      button.classList.remove("pressed");
    }, 100); // 延遲100毫秒後移除效果
  }
}
