---
title: "Voxify3D: Pixel Art Meets Volumetric Rendering"
authors: ["Yi-Chuan Huang", "Jiewen Chan", "Hao-Jen Chien", "Yu-Lun Liu"]
year: "2025"
conference: "arXiv"
license: "CC BY"
tags: ["3D", "Pixel Art", "Generation"]
image: "Huang_Voxify3D_2025.webp"
paper: "https://arxiv.org/abs/2512.07834"
code: ""
project: "https://yichuanh.github.io/Voxify-3D/"
bibtex: "@article{huang2025voxify3d,
  title={Voxify3D: Pixel Art Meets Volumetric Rendering},
  author={Huang, Yi-Chuan and Chan, Jiewen and Chien, Hao-Jen and Liu, Yu-Lun},
  journal={arXiv preprint arXiv:2512.07834},
  year={2025}
}"
---

Voxel art is a distinctive stylization widely used in games and digital media, yet automated generation from 3D meshes remains challenging due to conflicting requirements of geometric abstraction, semantic preservation, and discrete color coherence. Existing methods either over-simplify geometry or fail to achieve the pixel-precise, palette-constrained aesthetics of voxel art. We introduce Voxify3D, a differentiable two-stage framework bridging 3D mesh optimization with 2D pixel art supervision. Our core innovation lies in the synergistic integration of three components: (1) orthographic pixel art supervision that eliminates perspective distortion for precise voxel-pixel alignment; (2) patch-based CLIP alignment that preserves semantics across discretization levels; (3) palette-constrained Gumbel-Softmax quantization enabling differentiable optimization over discrete color spaces with controllable palette strategies. This integration addresses fundamental challenges: semantic preservation under extreme discretization, pixel-art aesthetics through volumetric rendering, and end-to-end discrete optimization. Experiments show superior performance (37.12 CLIP-IQA, 77.90\% user preference) across diverse characters and controllable abstraction (2-8 colors, 20x-50x resolutions).
