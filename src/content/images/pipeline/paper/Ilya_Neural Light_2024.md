---
title: "Neural Light Spheres for Implicit Image Stitching and View Synthesis"
authors: ["Ilya Chugunov", "Amogh Joshi", "Kiran Murthy", "Francois Bleibel", "Felix Heide"]
year: "2024"
license: "CC BY"
conference: "SIGGRAPH"
tags: ["NeRF","real-time"]
image: "Ilya_Neural Light_2024.jpg"
paper: "https://dl.acm.org/doi/10.1145/3680528.3687660"
code: "https://github.com/princeton-computational-imaging/NeuLS"
project: ""
bibtex: "@inproceedings{chugunov2024neural,
  title={Neural light spheres for implicit image stitching and view synthesis},
  author={Chugunov, Ilya and Joshi, Amogh and Murthy, Kiran and Bleibel, Francois and Heide, Felix},
  booktitle={SIGGRAPH Asia 2024 Conference Papers},
  pages={1--11},
  year={2024}
}"
---

Challenging to capture, and challenging to display on a cellphone screen, the panorama paradoxically remains both a staple and underused feature of modern mobile camera applications. In this work we address both of these challenges with a spherical neural light field model for implicit panoramic image stitching and re-rendering; able to accommodate for depth parallax, view-dependent lighting, and local scene motion and color changes during capture. Fit during test-time to an arbitrary path panoramic video capture – vertical, horizontal, random-walk – these neural light spheres jointly estimate the camera path and a high-resolution scene reconstruction to produce novel wide field-of-view projections of the environment. Our single-layer model avoids expensive volumetric sampling, and decomposes the scene into compact view-dependent ray offset and color components, with a total model size of 80 MB per scene, and real-time (50 FPS) rendering at 1080p resolution. We demonstrate improved reconstruction quality over traditional image stitching and radiance field methods, with significantly higher tolerance to scene motion and non-ideal capture settings.
