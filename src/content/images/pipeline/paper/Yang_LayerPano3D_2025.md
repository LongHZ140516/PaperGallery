---
title: "LayerPano3D: Layered 3D Panorama for Hyper-Immersive Scene Generation"
authors: ["Shuai Yang", "Jing Tan", "Mengchen Zhang", "Tong Wu", "Gordon Wetzstein", "Ziwei Liu", "Dahua Lin"]
year: "2025"
conference: "SIGGRAPH"
license: ""
tags: ["3DGS","Generation", "3D"]
image: "Yang_LayerPano3D_2025.jpg"
paper: "https://dl.acm.org/doi/full/10.1145/3721238.3730643"
code: "https://github.com/3DTopia/LayerPano3D"
project: "https://ys-imtech.github.io/projects/LayerPano3D/"
bibtex: "@inproceedings{yang2025layerpano3d,
  title={Layerpano3d: Layered 3d panorama for hyper-immersive scene generation},
  author={Yang, Shuai and Tan, Jing and Zhang, Mengchen and Wu, Tong and Wetzstein, Gordon and Liu, Ziwei and Lin, Dahua},
  booktitle={Proceedings of the special interest group on computer graphics and interactive techniques conference conference papers},
  pages={1--10},
  year={2025}
}"
---

3D immersive scene generation is a challenging yet critical task in computer vision and graphics. A desired virtual 3D scene should (1) exhibit omnidirectional view consistency, and (2) allow for free exploration in complex scene hierarchies. Existing methods either rely on successive scene expansion via inpainting or employ panorama representation to represent large FOV scene environments. However, the generated scene suffers from semantic drift during expansion and is unable to handle occlusion among scene hierarchies. To tackle these challenges, we introduce LayerPano3D, a novel framework for full-view, explorable panoramic 3D scene generation from a single text prompt. Our key insight is to decompose a reference 2D panorama into multiple layers at different depth levels, where each layer reveals the unseen space from the reference views via diffusion prior. LayerPano3D comprises multiple dedicated designs: (1) we introduce a novel text-guided anchor view synthesis pipeline for high-quality, consistent panorama generation. (2) We pioneer the Layered 3D Panorama as underlying representation to manage complex scene hierarchies and lift it into 3D Gaussians to splat detailed 360-degree omnidirectional scenes with unconstrained viewing paths. Extensive experiments demonstrate that our framework generates state-of-the-art 3D panoramic scene in both full view consistency and immersive exploratory experience. We believe that LayerPano3D holds promise for advancing 3D panoramic scene creation with numerous applications.
