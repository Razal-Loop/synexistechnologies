"use client";

import { useMemo } from "react";
import { ParticlesProvider, useParticlesProvider, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions, Engine } from "@tsparticles/engine";

function ParticlesInner() {
    const { loaded } = useParticlesProvider();

    const particlesLoaded = async (): Promise<void> => {
        // container is ready
    };

    const options: ISourceOptions = useMemo(
        () => ({
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    grab: {
                        distance: 200,
                        links: {
                            opacity: 0.5,
                        },
                    },
                },
            },
            particles: {
                color: {
                    value: "#2563eb",
                },
                links: {
                    color: "#2563eb",
                    distance: 200,
                    enable: true,
                    opacity: 0.8,
                    width: 2,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1.5,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 100,
                },
                opacity: {
                    value: { min: 0.6, max: 0.9 },
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 2, max: 5 },
                },
            },
            detectRetina: true,
            fullScreen: { enable: false },
        }),
        []
    );

    if (!loaded) return null;

    return (
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
            className="absolute inset-0 z-0 opacity-100"
        />
    );
}

export default function ParticlesComponent() {
    const init = async (engine: Engine): Promise<void> => {
        await loadSlim(engine);
    };

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <ParticlesProvider init={init}>
                <ParticlesInner />
            </ParticlesProvider>
        </div>
    );
}
