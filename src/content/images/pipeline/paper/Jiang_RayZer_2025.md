---
title: "RayZer: A Self-supervised Large View Synthesis Model"
authors: ["Hanwen Jiang", "Hao Tan", "Peng Wang", "Haian Jin", "Yue Zhao", "Sai Bi", "Kai Zhang", "Fujun Luan", "Kalyan Sunkavalli", "Qixing Huang", "Georgios Pavlakos"]
year: "2025"
conference: "arXiv"
license: "CC BY"
tags: ["3D Supervision","Self-supervised"]
image: "Jiang_RayZer_2025.webp"
paper: "https://arxiv.org/pdf/2505.00702"
code: "https://github.com/hwjiang1510/RayZer"
project: "https://hwjiang1510.github.io/RayZer/"
bibtex: "@article{jiang2025rayzer,
  title={RayZer: A Self-supervised Large View Synthesis Model},
  author={Jiang, Hanwen and Tan, Hao and Wang, Peng and Jin, Haian and Zhao, Yue and Bi, Sai and Zhang, Kai and Luan, Fujun and Sunkavalli, Kalyan and Huang, Qixing and others},
  journal={arXiv preprint arXiv:2505.00702},
  year={2025}
}"
---

We present RayZer, a self-supervised multi-view 3D Vision model trained without any 3D supervision, i.e., camera poses and scene geometry, while exhibiting emerging 3D awareness. Concretely, RayZer takes unposed and uncalibrated images as input, recovers camera parameters, reconstructs a scene representation, and synthesizes novel views. During training, RayZer relies solely on its self-predicted camera poses to render target views, eliminating the need for any ground-truth camera annotations and allowing RayZer to be trained with 2D image supervision. The emerging 3D awareness of RayZer is attributed to two key factors. First, we design a self-supervised framework, which achieves 3D-aware auto-encoding of input images by disentangling camera and scene representations. Second, we design a transformer-based model in which the only 3D prior is the ray structure, connecting camera, pixel, and scene simultaneously. RayZer demonstrates comparable or even superior novel view synthesis performance than ``oracle'' methods that rely on pose annotations in both training and testing.
