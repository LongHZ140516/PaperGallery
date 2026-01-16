---
title: "IDArb: Intrinsic Decomposition for Arbitrary Number of Input Views and Illuminations"
authors: ["Zhibing Li", "Tong Wu", "Jing Tan", "Mengchen Zhang", "Jiaqi Wang", "Dahua Lin"]
year: "2025"
conference: "ICLR"
license: "CC BY"
tags: ["Diffusion", "Illumination", "Decomposition"]
image: "Li_IDARB_2025.jpg"
paper: "https://arxiv.org/pdf/2412.12083"
code: "https://github.com/Lizb6626/IDArb"
project: "https://lizb6626.github.io/IDArb/"
bibtex: "@article{li2024idarb,
  title={Idarb: Intrinsic decomposition for arbitrary number of input views and illuminations},
  author={Li, Zhibing and Wu, Tong and Tan, Jing and Zhang, Mengchen and Wang, Jiaqi and Lin, Dahua},
  journal={arXiv preprint arXiv:2412.12083},
  year={2024}
}"
---

Capturing geometric and material information from images remains a fundamental challenge in computer vision and graphics. Traditional optimization-based methods often require hours of computational time to reconstruct geometry, material properties, and environmental lighting from dense multi-view inputs, while still struggling with inherent ambiguities between lighting and material. On the other hand, learning-based approaches leverage rich material priors from existing 3D object datasets but face challenges with maintaining multi-view consistency. In this paper, we introduce IDArb, a diffusion-based model designed to perform intrinsic decomposition on an arbitrary number of images under varying illuminations. Our method achieves accurate and multi-view consistent estimation on surface normals and material properties. This is made possible through a novel cross-view, cross-domain attention module and an illumination-augmented, view-adaptive training strategy. Additionally, we introduce ARB-Objaverse, a new dataset that provides large-scale multi-view intrinsic data and renderings under diverse lighting conditions, supporting robust training. Extensive experiments demonstrate that IDArb outperforms state-of-the-art methods both qualitatively and quantitatively. Moreover, our approach facilitates a range of downstream tasks, including single-image relighting, photometric stereo, and 3D reconstruction, highlighting its broad applications in realistic 3D content creation.
