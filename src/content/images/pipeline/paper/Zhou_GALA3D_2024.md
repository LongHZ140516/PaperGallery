---
title: "GALA3D: Towards Text-to-3D Complex Scene Generation via Layout-guided Generative Gaussian Splatting"
authors: ["Xiaoyu Zhou", "Xingjian Ran", "Yajiao Xiong", "Jinlin He", "Zhiwei Lin", "Yongtao Wang", "Deqing Sun", "Ming-Hsuan Yang"]
year: "2024"
conference: "arXiv"
license: ""
tags: ["3DGS", "Generation", "Layout"]
image: "Zhou_GALA3D_2024.webp"
paper: "https://arxiv.org/pdf/2402.07207.pdf"
code: "https://github.com/VDIGPKU/GALA3D"
project: "https://gala3d.github.io/"
bibtex: "@article{zhou2402gala3d,
  title={Gala3d: Towards text-to-3d complex scene generation via layout-guided generative gaussian splatting. arXiv 2024},
  author={Zhou, X and Ran, X and Xiong, Y and He, J and Lin, Z and Wang, Y and Sun, D and Yang, MH},
  journal={arXiv preprint arXiv:2402.07207}
}"
---

We present GALA3D, generative 3D GAussians with LAyout-guided control, for effective compositional text-to-3D generation. We first utilize large language models (LLMs) to generate the initial layout and introduce a layout-guided 3D Gaussian representation for 3D content generation with adaptive geometric constraints. We then propose an object-scene compositional optimization mechanism with conditioned diffusion to collaboratively generate realistic 3D scenes with consistent geometry, texture, scale, and accurate interactions among multiple objects while simultaneously adjusting the coarse layout priors extracted from the LLMs to align with the generated scene. Experiments show that GALA3D is a user-friendly, end-to-end framework for state-of-the-art scene-level 3D content generation and controllable editing while ensuring the high fidelity of object-level entities within the scene.
