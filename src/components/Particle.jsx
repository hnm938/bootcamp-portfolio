import React, { memo } from "react";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const Particle = memo(() => {
  const particlesInit = async (main) => { await loadFull(main); };

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}

        options={{
          "fullScreen": {
            "enable": false,
            "zIndex": -1
          },
          "particles": {
            "number": {
              "value": 100,
              "density": {
                "enable": true,
                "value_area": 2000
              }
            },
            "color": {
              "value": "#ededed"
            },
            "shape": {
              "type": "circle",
            },
            "opacity": {
              "value": 0.6,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 11,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 4,
                "size_min": 7,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 200,
              "color": "#ffffff",
              "opacity": 0.1,
              "width": 2,
            },
            "move": {
              "enable": true,
              "speed": 0.25,
              "direction": "none",
              "random": true,
              "straight": true,
              "out_mode": "out",
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": ["repulse"]
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "repulse": {
                  "distance": 60,
                  "duration": 0.5,
                  "speed": 0.2,
                },
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "push": {
                  "particles_nb": 2
                },
                "remove": {
                  "particles_nb": 2
                }
              }
          },
          "retina_detect": true,
          "fps_limit": 30,
          "background": {
            "color": "inherit",
            "image": "",
            "position": "50% 50%",
            "repeat": "repeat",
            "size": "cover"
          }
      }}
      />
    </div>
  )
})
