const snowContainer = document.getElementById("snow-container");
const maxSnowflakes = 50; // максимальна кількість сніжинок на екрані

function createSnowflake() {
  // якщо сніжинок уже достатньо — не додаємо нову
  if (snowContainer.childElementCount >= maxSnowflakes) return;

  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.textContent = "❅";
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  snowflake.style.animationDuration = "8s"; // постійна швидкість падіння
  snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
  snowflake.style.opacity = Math.random();

  snowContainer.appendChild(snowflake);

  snowflake.addEventListener("animationend", () => {
    snowflake.remove();
  });
}

// створюємо сніжинки поступово
setInterval(createSnowflake, 100);
