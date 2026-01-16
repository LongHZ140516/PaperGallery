---
title: "RealmDreamer: Text-Driven 3D Scene Generation with Inpainting and Depth Diffusion"
authors: ["Jaidev Shriram", "Alex Trevithick", "Lingjie Liu", "Ravi Ramamoorthi"]
year: "2024"
conference: "arXiv"
license: "CC BY"
tags: ["3DGS","Text-Driven","Diffusion"]
image: "Shriram_RealmDreamer_2024.jpg"
paper: "https://arxiv.org/pdf/2404.07199"
code: ""
project: "https://realmdreamer.github.io/"
bibtex: "@article{shriram2024realmdreamer,
  title={Realmdreamer: Text-driven 3d scene generation with inpainting and depth diffusion},
  author={Shriram, Jaidev and Trevithick, Alex and Liu, Lingjie and Ramamoorthi, Ravi},
  journal={arXiv preprint arXiv:2404.07199},
  year={2024}
}"
---

We introduce RealmDreamer, a technique for generation of general forward-facing 3D scenes from text descriptions. Our technique optimizes a 3D Gaussian Splatting representation to match complex text prompts. We initialize these splats by utilizing the state-of-the-art text-to-image generators, lifting their samples into 3D, and computing the occlusion volume. We then optimize this representation across multiple views as a 3D inpainting task with image-conditional diffusion models. To learn correct geometric structure, we incorporate a depth diffusion model by conditioning on the samples from the inpainting model, giving rich geometric structure. Finally, we finetune the model using sharpened samples from image generators. Notably, our technique does not require video or multi-view data and can synthesize a variety of high-quality 3D scenes in different styles, consisting of multiple objects. Its generality additionally allows 3D synthesis from a single image.
