document.querySelector(".move").addEventListener("mouseenter", function () {
  let container = document.querySelector(".container");
  let btn = this;

  let containerRect = container.getBoundingClientRect();
  let btnRect = btn.getBoundingClientRect();

  let maxX = containerRect.width - btnRect.width;
  let maxY = containerRect.height - btnRect.height;

  let randomX, randomY;
  do {
      randomX = Math.random() * maxX;
      randomY = Math.random() * maxY;
  } while (
      Math.abs(randomX - btn.offsetLeft) < 50 || Math.abs(randomY - btn.offsetTop) < 50    
  );

  btn.style.position = "absolute";
  btn.style.left = randomX + "px";
  btn.style.top = randomY + "px";
});
