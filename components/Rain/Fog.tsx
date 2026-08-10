// Color Palette from https://paperheartdesign.com/blog/color-palette-in-a-fog

const baseColors: [number, number, number][] = [
    // [0, 27, 46], Too dark
    // [29, 63, 88],
    // [83, 118, 146],
    [179, 205, 228],
    [238, 243, 249],
    [181, 238, 223],
    [175, 180, 173]
]

function tintColor(color: [number, number, number], tintMultiplier: number): [number, number, number] {
    const output = [0, 0, 0];
    for (let i = 0; i < 3; i++) {
        output[i] = Math.min(256, Math.max(0, Math.floor(color[i] * tintMultiplier))) // Bounding in valid range
    }

    return output as [number, number, number];
}

function randRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function drawFog(ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number): void {
    for (let i = 0; i < 60; i++) {
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

    const startRadius = randRange(100, 300);
    const endRadius = randRange(startRadius + 100, 500)
    const gradient = ctx.createRadialGradient(x, y, startRadius, x, y, endRadius)

    const baseColorIndex = Math.floor(Math.random() * baseColors.length);
    const startDarknessMultiplier = randRange(0.7, 1);
    const endDarknessMultiplier = randRange(startDarknessMultiplier, 1.3);

    const startColor = tintColor(baseColors[baseColorIndex], startDarknessMultiplier);
    const endColor = tintColor(baseColors[baseColorIndex], endDarknessMultiplier);

    const startAlpha = randRange(0.01, 0.4);
    const endAlpha = 0;

    gradient.addColorStop(0, `rgba(${startColor[0]}, ${startColor[1]}, ${startColor[2]}, ${startAlpha})`)
    gradient.addColorStop(1, `rgba(${endColor[0]}, ${endColor[1]}, ${endColor[2]}, ${endAlpha})`)

    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.fillRect(x-endRadius, y-endRadius, 2*endRadius, 2*endRadius);
}