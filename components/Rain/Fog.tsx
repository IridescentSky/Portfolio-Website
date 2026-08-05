function randRange(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function drawFog(ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) {
    for (let i = 0; i < 5; i++) {
        const randX = randRange(0, canvasWidth);
        const randY = randRange(0, canvasHeight);
        drawBlob(ctx, randX, randY)
    }
}

export function drawBlob(ctx: CanvasRenderingContext2D, x: number, y: number) {
    // Testing Code
    // const darkness = randRange(80, 230);
    // const alpha = randRange(0.05, 0.4);

    // const radius = randRange(20, 80);
    // ctx.fillStyle = `rgba(${darkness}, ${darkness}, ${darkness}, ${alpha})`;
    // ctx.beginPath();
    // ctx.arc(x, y, radius, 0, Math.PI * 2);
    // ctx.fill()

    const startRadius = randRange(20, 60);
    const endRadius = randRange(startRadius, 100)
    const gradient = ctx.createRadialGradient(x, y, startRadius, x, y, endRadius)

    const startDarkness = randRange(80, 230);
    const endDarkness = randRange(20, startDarkness);

    const startAlpha = randRange(0.1, 0.5);
    const endAlpha = 0;

    gradient.addColorStop(0, `rgba(${startDarkness}, ${startDarkness}, ${startDarkness}, ${startAlpha})`)
    gradient.addColorStop(1, `rgba(${endDarkness}, ${endDarkness}, ${endDarkness}, ${endAlpha})`)

    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.fillRect(x-endRadius, y-endRadius, 2*endRadius, 2*endRadius);
}