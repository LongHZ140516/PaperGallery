---
title: "MVPaint: Synchronized Multi-View Diffusion for Painting Anything 3D"
authors: ["Wei Cheng", "Juncheng Mu", "Xianfang Zeng", "Xin Chen", "Anqi Pang", "Chi Zhang", "Zhibin Wang", "Bin Fu", "Gang Yu", "Ziwei Liu", "Liang Pan"]
year: "2024"
conference: "CVPR"
license: "CC BY"
tags: ["Diffusion","Multi-View","3D"]
image: "Cheng_MVPaint_2024.webp"
paper: "https://arxiv.org/pdf/2411.02336"
code: "https://github.com/3DTopia/MVPaint"
project: "https://mvpaint.github.io/"
bibtex: "@inproceedings{cheng2025mvpaint,
  title={Mvpaint: Synchronized multi-view diffusion for painting anything 3d},
  author={Cheng, Wei and Mu, Juncheng and Zeng, Xianfang and Chen, Xin and Pang, Anqi and Zhang, Chi and Wang, Zhibin and Fu, Bin and Yu, Gang and Liu, Ziwei and others},
  booktitle={Proceedings of the Computer Vision and Pattern Recognition Conference},
  pages={585--594},
  year={2025}
}"
---

Texturing is a crucial step in the 3D asset production workflow, which enhances the visual appeal and diversity of 3D assets. Despite recent advancements in Text-to-Texture (T2T) generation, existing methods often yield subpar results, primarily due to local discontinuities, inconsistencies across multiple views, and their heavy dependence on UV unwrapping outcomes. To tackle these challenges, we propose a novel generation-refinement 3D texturing framework called MVPaint, which can generate high-resolution, seamless textures while emphasizing multi-view consistency. MVPaint mainly consists of three key modules. 1) Synchronized Multi-view Generation (SMG). Given a 3D mesh model, MVPaint first simultaneously generates multi-view images by employing an SMG model, which leads to coarse texturing results with unpainted parts due to missing observations. 2) Spatial-aware 3D Inpainting (S3I). To ensure complete 3D texturing, we introduce the S3I method, specifically designed to effectively texture previously unobserved areas. 3) UV Refinement (UVR). Furthermore, MVPaint employs a UVR module to improve the texture quality in the UV space, which first performs a UV-space Super-Resolution, followed by a Spatial-aware Seam-Smoothing algorithm for revising spatial texturing discontinuities caused by UV unwrapping. Moreover, we establish two T2T evaluation benchmarks: the Objaverse T2T benchmark and the GSO T2T benchmark, based on selected high-quality 3D meshes from the Objaverse dataset and the entire GSO dataset, respectively. Extensive experimental results demonstrate that MVPaint surpasses existing state-of-the-art methods. Notably, MVPaint could generate high-fidelity textures with minimal Janus issues and highly enhanced cross-view consistency.
