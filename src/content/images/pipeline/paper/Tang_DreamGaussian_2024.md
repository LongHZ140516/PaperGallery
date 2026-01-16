---
title: "DreamGaussian: Generative Gaussian Splatting for Efficient 3D Content Creation"
authors: ["Jiaxiang Tang", "Jiawei Ren", "Hang Zhou", "Ziwei Liu", "Gang Zeng"]
year: "2024"
conference: "ICLR"
license: ""
tags: ["3DGS", "3D"]
image: "Tang_DreamGaussian_2024.jpg"
paper: "https://arxiv.org/pdf/2309.16653.pdf"
code: "https://github.com/dreamgaussian/dreamgaussian"
project: "https://dreamgaussian.github.io/"
bibtex: "@article{tang2023dreamgaussian,
  title={Dreamgaussian: Generative gaussian splatting for efficient 3d content creation},
  author={Tang, Jiaxiang and Ren, Jiawei and Zhou, Hang and Liu, Ziwei and Zeng, Gang},
  journal={arXiv preprint arXiv:2309.16653},
  year={2023}
}"
---

Recent advances in 3D content creation mostly leverage optimization-based 3D generation via score distillation sampling (SDS). Though promising results have been exhibited, these methods often suffer from slow per-sample optimization, limiting their practical usage. In this paper, we propose DreamGaussian, a novel 3D content generation framework that achieves both efficiency and quality simultaneously. Our key insight is to design a generative 3D Gaussian Splatting model with companioned mesh extraction and texture refinement in UV space. In contrast to the occupancy pruning used in Neural Radiance Fields, we demonstrate that the progressive densification of 3D Gaussians converges significantly faster for 3D generative tasks. To further enhance the texture quality and facilitate downstream applications, we introduce an efficient algorithm to convert 3D Gaussians into textured meshes and apply a fine-tuning stage to refine the details. Extensive experiments demonstrate the superior efficiency and competitive generation quality of our proposed approach. Notably, DreamGaussian produces high-quality textured meshes in just 2 minutes from a single-view image, achieving approximately 10 times acceleration compared to existing methods.
