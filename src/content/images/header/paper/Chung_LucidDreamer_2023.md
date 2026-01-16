---
title: "LucidDreamer: Domain-free Generation of 3D Gaussian Splatting Scenes"
authors: ["Jaeyoung Chung", "Suyoung Lee", "Hyeongjin Nam", "Jaerin Lee", "Kyoung Mu Lee"]
year: "2023"
conference: "arXiv"
tags: ["3DGS","Domain-free"]
license: "CC BY-NC-ND"
image: "Chung_LucidDreamer_2023.webp"
paper: "https://arxiv.org/pdf/2311.13384"
code: "https://github.com/luciddreamer-cvlab/LucidDreamer"
project: "https://luciddreamer-cvlab.github.io/"
bibtex: "@article{chung2023luciddreamer,
  title={Luciddreamer: Domain-free generation of 3d gaussian splatting scenes},
  author={Chung, Jaeyoung and Lee, Suyoung and Nam, Hyeongjin and Lee, Jaerin and Lee, Kyoung Mu},
  journal={arXiv preprint arXiv:2311.13384},
  year={2023}
}"
---

With the widespread usage of VR devices and contents, demands for 3D scene generation techniques become more popular. Existing 3D scene generation models, however, limit the target scene to specific domain, primarily due to their training strategies using 3D scan dataset that is far from the real-world. To address such limitation, we propose LucidDreamer, a domain-free scene generation pipeline by fully leveraging the power of existing large-scale diffusion-based generative model. Our LucidDreamer has two alternate steps: Dreaming and Alignment. First, to generate multi-view consistent images from inputs, we set the point cloud as a geometrical guideline for each image generation. Specifically, we project a portion of point cloud to the desired view and provide the projection as a guidance for inpainting using the generative model. The inpainted images are lifted to 3D space with estimated depth maps, composing a new points. Second, to aggregate the new points into the 3D scene, we propose an aligning algorithm which harmoniously integrates the portions of newly generated 3D scenes. The finally obtained 3D scene serves as initial points for optimizing Gaussian splats. LucidDreamer produces Gaussian splats that are highly-detailed compared to the previous 3D scene generation methods, with no constraint on domain of the target scene.
