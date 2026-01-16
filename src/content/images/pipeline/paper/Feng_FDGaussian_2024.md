---
title: "FDGaussian: Fast Gaussian Splatting from Single Image via Geometric-aware Diffusion Model"
authors: ["Qijun Feng", "Zhen Xing", "Zuxuan Wu", "Yu-Gang Jiang"]
year: "2024"
conference: "arXiv"
license: ""
tags: ["3DGS", "Single Image", "Diffusion"]
image: "Feng_FDGaussian_2024.webp"
paper: "https://arxiv.org/pdf/2403.10242.pdf"
code: ""
project: "https://qjfeng.net/GeoGS3D"
bibtex: "@article{feng2024fdgaussian,
  title={Fdgaussian: Fast gaussian splatting from single image via geometric-aware diffusion model},
  author={Feng, Qijun and Xing, Zhen and Wu, Zuxuan and Jiang, Yu-Gang},
  journal={arXiv preprint arXiv:2403.10242},
  volume={3},
  year={2024}
}"
---

Reconstructing detailed 3D objects from single-view images
remains a challenging task due to the limited information available. In
this paper, we introduce FDGaussian, a novel two-stage framework for
single-image 3D reconstruction. Recent methods typically utilize pretrained 2D diffusion models to generate plausible novel views from the
input image, yet they encounter issues with either multi-view inconsistency or lack of geometric fidelity. To overcome these challenges, we propose an orthogonal plane decomposition mechanism to extract 3D geometric features from the 2D input, enabling the generation of consistent
multi-view images. Moreover, we further accelerate the state-of-the-art
Gaussian Splatting incorporating epipolar attention to fuse images from
different viewpoints. We demonstrate that FDGaussian generates images
with high consistency across different views and reconstructs high-quality
3D objects, both qualitatively and quantitatively.
