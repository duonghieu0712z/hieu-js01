const root = document.getElementById("root");

const canvas = document.createElement("canvas");
canvas.width = 1200;
canvas.height = 800;
root.appendChild(canvas);

const ctx = canvas.getContext("2d");
ctx.translate(canvas.width / 2, canvas.height / 2 - 100);

const radius = 250;

function drawClock(ctx, radius) {
  clearFace(ctx);
  drawFace(ctx, radius);
  drawTimeHand(ctx, radius);
  drawCenter(ctx);
  drawTimeText(ctx, radius);
}

function drawFace(ctx, radius) {
  ctx.shadowColor = "#a776aa";
  ctx.shadowBlur = 15;

  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "#252237";
  ctx.fill();

  ctx.shadowColor = "transparent";
}

function clearFace(ctx) {
  ctx.save();

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = "#252237";
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  ctx.restore();
}

function drawCenter(ctx) {
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(0, 0, 6, 0, 2 * Math.PI);
  ctx.fillStyle = "#f0f0f0";
  ctx.fill();
}

function drawTimeHand(ctx, radius) {
  const now = new Date();

  const second = now.getSeconds();
  const secondAngle = (second * Math.PI) / 30;
  drawHand(ctx, secondAngle, radius * 0.9, 3, "#a776aa");

  const minute = now.getMinutes();
  const minuteAngle = (minute * Math.PI) / 30 + secondAngle / 60;
  drawHand(ctx, minuteAngle, radius * 0.8, 4, "#f5f5f5");

  const hour = now.getHours() % 12;
  const hourAngle = (hour * Math.PI) / 6 + minuteAngle / 12;
  drawHand(ctx, hourAngle, radius * 0.5, 5, "#d5d5d5");
}

function drawHand(ctx, angle, length, width, color) {
  ctx.lineWidth = width;
  ctx.lineCap = "round";

  ctx.rotate(angle);

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -length);
  ctx.strokeStyle = color;
  ctx.stroke();

  ctx.rotate(-angle);
}

function drawTimeText(ctx, radius) {
  const now = new Date();

  const txtTime = now.toLocaleTimeString("en-us", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  drawText(ctx, txtTime, 0, radius + 100, "72px Arial", "white");

  const txtDate = now.toLocaleDateString("en-us", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
  drawText(ctx, txtDate, 0, radius + 150, "24px Arial", "white");
}

function drawText(ctx, text, x, y, font, color) {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textAlign = "center";
  ctx.fillText(text, x, y);
}

setInterval(() => drawClock(ctx, radius), 0);
