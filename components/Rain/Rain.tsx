"use client"
import { useState, useEffect, useRef } from 'react';

import { drawFog } from './Fog';

export default function Rain() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    function draw(ctx: CanvasRenderingContext2D) {
        ctx.canvas.width  = window.innerWidth;
        ctx.canvas.height = window.innerHeight;

        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.fillRect(10, 10, 150, 100);
    }

    function handleResize(ctx: CanvasRenderingContext2D) {
        ctx.canvas.width  = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
    }

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return;
        
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeHandler = () => {
            handleResize(ctx);
        }
        window.addEventListener("resize", resizeHandler);
        

        drawFog(ctx, canvas.width, canvas.height);
    }, []);


    return (
        <canvas ref={canvasRef} className="fixed top-0 left-0 right-0 w-screen h-screen -z-1">
        </canvas>
    )
}