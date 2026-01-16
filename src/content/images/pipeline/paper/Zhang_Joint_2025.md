---
title: "Joint 3D Geometry Reconstruction and Motion Generation for 4D Synthesis from a Single Image"
authors: ["Yanran Zhang, Ziyi Wang, Wenzhao Zheng, Zheng Zhu, Jie Zhou, Jiwen Lu"]
year: "2025"
conference: "arXiv"
license: ""
tags: ["3D", "Reconstruction", "Motion", "Generation"]
image: "Zhang_Joint_2025.webp"
paper: "https://arxiv.org/abs/2512.05044"
code: "https://github.com/Zhangyr2022/MoRe4D"
project: "https://ivg-yanranzhang.github.io/MoRe4D/"
bibtex: "@article{zhang2025joint,
  title={Joint 3D Geometry Reconstruction and Motion Generation for 4D Synthesis from a Single Image},
  author={Zhang, Yanran and Wang, Ziyi and Zheng, Wenzhao and Zhu, Zheng and Zhou, Jie and Lu, Jiwen},
  journal={arXiv preprint arXiv:2512.05044},
  year={2025}
}"
---

Generating interactive and dynamic 4D scenes from a single static image remains a core challenge. Most existing generate-then-reconstruct and reconstruct-then-generate methods decouple geometry from motion, causing spatiotemporal inconsistencies and poor generalization. To address these, we extend the reconstruct-then-generate framework to jointly perform Motion generation and geometric Reconstruction for 4D Synthesis (MoRe4D). We first introduce TrajScene-60K, a large-scale dataset of 60,000 video samples with dense point trajectories, addressing the scarcity of high-quality 4D scene data. Based on this, we propose a diffusion-based 4D Scene Trajectory Generator (4D-STraG) to jointly generate geometrically consistent and motion-plausible 4D point trajectories. To leverage single-view priors, we design a depth-guided motion normalization strategy and a motion-aware module for effective geometry and dynamics integration. We then propose a 4D View Synthesis Module (4D-ViSM) to render videos with arbitrary camera trajectories from 4D point track representations. Experiments show that MoRe4D generates high-quality 4D scenes with multi-view consistency and rich dynamic details from a single image.
