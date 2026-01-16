---
title: "4DNeX: Feed-Forward 4D Generative Modeling Made Easy"
authors: ["Zhaoxi Chen", "Tianqi Liu", "Long Zhuo", "Jiawei Ren", "Zeng Tao", "He Zhu", "Fangzhou Hong", "Liang Pan", "Ziwei Liu"]
year: "2025"
conference: "arXiv"
license: ""
tags: ["Diffusion", "4D", "Video", "Point Cloud"]
image: "Chen_4DNEX_2025.webp"
paper: "https://arxiv.org/pdf/2508.13154"
code: "https://github.com/3DTopia/4DNeX"
project: "https://4dnex.github.io/"
bibtex: "@article{chen20254dnex,
  title={4dnex: Feed-forward 4d generative modeling made easy},
  author={Chen, Zhaoxi and Liu, Tianqi and Zhuo, Long and Ren, Jiawei and Tao, Zeng and Zhu, He and Hong, Fangzhou and Pan, Liang and Liu, Ziwei},
  journal={arXiv preprint arXiv:2508.13154},
  year={2025}
}"
---

We present 4DNeX, the first feed-forward framework for generating 4D (i.e., dynamic 3D) scene representations from a single image. In contrast to existing methods that rely on computationally intensive optimization or require multi-frame video inputs, 4DNeX enables efficient, end-to-end image-to-4D generation by fine-tuning a pretrained video diffusion model. Specifically, 1) to alleviate the scarcity of 4D data, we construct 4DNeX-10M, a large-scale dataset with high-quality 4D annotations generated using advanced reconstruction approaches. 2) we introduce a unified 6D video representation that jointly models RGB and XYZ sequences, facilitating structured learning of both appearance and geometry. 3) we propose a set of simple yet effective adaptation strategies to repurpose pretrained video diffusion models for 4D modeling. 4DNeX produces high-quality dynamic point clouds that enable novel-view video synthesis. Extensive experiments demonstrate that 4DNeX outperforms existing 4D generation methods in efficiency and generalizability, offering a scalable solution for image-to-4D modeling and laying the foundation for generative 4D world models that simulate dynamic scene evolution.
