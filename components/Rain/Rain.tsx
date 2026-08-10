"use client"
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { drawFog } from './Fog';

export default function Rain() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    function draw(ctx: CanvasRenderingContext2D) {
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;

        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.fillRect(10, 10, 150, 100);
    }

    // TODO: Fix resize handler
    function handleResize(ctx: CanvasRenderingContext2D) {
        const devicePixelRatio = window.devicePixelRatio || 1;

        ctx.canvas.width = window.innerWidth * devicePixelRatio;
        ctx.canvas.height = window.innerHeight * devicePixelRatio;
    }

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        handleResize(ctx);

        const resizeHandler = () => {
            handleResize(ctx);
        }
        window.addEventListener("resize", resizeHandler);


        drawFog(ctx, canvas.width, canvas.height);
    }, []);


    return (
        <>
            <div className="relative background-blue-300 w-full h-300 -z-2">
                <Image
                    src="/squirrel.jpg"
                    fill={true}
                    alt="squirrel"
                    className="object-cover"
                />
            </div>
            <canvas ref={canvasRef} className="fixed top-0 left-0 right-0 w-screen h-screen -z-1">
            </canvas>
        </>
    )
}