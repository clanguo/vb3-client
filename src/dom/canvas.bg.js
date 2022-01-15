(function (config) {
  const can = document.createElement("canvas");
  const ctx = can.getContext("2d");

  const devicePixelRatio = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;
  // 是否是移动端
  const mobile = /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(
    navigator.userAgent
  );
  const PI_2 = 2 * Math.PI;

  let u = 9;
  let points = [];
  let n;

  can.width = width * devicePixelRatio;
  can.height = height * devicePixelRatio;
  ctx.scale(devicePixelRatio, devicePixelRatio);
  ctx.globalAlpha = config.alpha;

  can.style.cssText = `opacity: ${config.alpha}; position: fixed; top: 0; left: 0; z-index: ${config.zIndex}; width: 100vw; height: 100vh; pointer-events: none;`;
  document.querySelector("body").appendChild(can);

  !mobile && document.addEventListener("click", onClick);
  onClick();

  function draw(point1, point2) {
    ctx.beginPath();
    ctx.moveTo(point1.x, point2.y);
    ctx.lineTo(point2.x, point1.y);

    let newX = point2.x + (2 * Math.random() - 0.25) * config.size,
      newY = getRandom(point2.y);

    ctx.lineTo(newX, newY);
    ctx.closePath();

    u -= PI_2 / -50;
    ctx.fillStyle = `#${(
      ((127 * Math.cos(u) + 128) << 16) |
      ((127 * Math.cos(u + PI_2 / 3) + 128) << 8) |
      (127 * Math.cos(u + (PI_2 / 3) * 2) + 128)
    ).toString(16)}`;
    ctx.fill();

    points[0] = points[1];
    points[1] = {
      x: newX,
      y: newY,
    };
  }

  function onClick() {
    console.log("click");
    ctx.clearRect(0, 0, width, height);
    points = [
      {
        x: 0,
        y: 0.7 * height + config.size,
      },
      {
        x: 0,
        y: 0.7 * height - config.size,
      },
    ];

    while (points[1].x < width + config.size) {
      draw(points[0], points[1]);
    }
  }

  function getRandom(e) {
    return (n = e + (2 * Math.random() - 1.1) * config.size) > height || n < 0
      ? getRandom(e)
      : n;
  }
})({
  zIndex: -1,
  alpha: 0.6,
  size: 90,
  click: true,
});
