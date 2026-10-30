// Color Palette from https://paperheartdesign.com/blog/color-palette-in-a-fog

const baseColors: [number, number, number][] = [
    // [0, 27, 46], Too dark
    // [29, 63, 88],
    // [83, 118, 146],
    [179, 205, 228],
    [238, 243, 249],
    // [181, 238, 223],
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

// ===================================MAIN DRAWING FUNCTIONS=============================================
export function drawFog(ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number): void {
    drawBaseFill(ctx, canvasWidth, canvasHeight);

    // Randomly placing blobs
    for (let i = 0; i < 90; i++) {
        const randX = randRange(0, canvasWidth);
        const randY = randRange(0, canvasHeight);
        drawBlob(ctx, randX, randY)
    }
}
export function drawBaseFill(ctx: CanvasRenderingContext2D, canvasWidth: number, canvasHeight: number) {
    // Defining base level of coverage
    ctx.fillStyle = "rgba(238, 243, 249, 0.02)";
    ctx.beginPath();
    ctx.fillRect(0, 0, canvasWidth, canvasHeight)
}

export function drawBlob(ctx: CanvasRenderingContext2D, x: number, y: number) {
    // Defining Circle Gradient
    const startRadius = randRange(100, 300);
    const endRadius = randRange(startRadius + 100, 500)
    const gradient = ctx.createRadialGradient(x, y, startRadius, x, y, endRadius)

    // Choosing base color and modifying lightness/darkness
    const baseColorIndex = Math.floor(Math.random() * baseColors.length);
    const startDarknessMultiplier = randRange(0.7, 1);
    const endDarknessMultiplier = randRange(startDarknessMultiplier, 1.3);

    const startColor = tintColor(baseColors[baseColorIndex], startDarknessMultiplier);
    const endColor = tintColor(baseColors[baseColorIndex], endDarknessMultiplier);

    // Transparency
    const startAlpha = randRange(0.01, 0.4);
    const endAlpha = 0;

    gradient.addColorStop(0, `rgba(${startColor[0]}, ${startColor[1]}, ${startColor[2]}, ${startAlpha})`)
    gradient.addColorStop(1, `rgba(${endColor[0]}, ${endColor[1]}, ${endColor[2]}, ${endAlpha})`)

    ctx.fillStyle = gradient
    ctx.beginPath()
    ctx.fillRect(x-endRadius, y-endRadius, 2*endRadius, 2*endRadius);
}