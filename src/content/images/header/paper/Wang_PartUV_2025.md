---
title: "PartUV: Part-Based UV Unwrapping of 3D Meshes"
authors: ["Zhaoning Wang", "Xinyue Wei", "Ruoxi Shi", "Xiaoshuai Zhang", "Hao Su", "Minghua Liu"]
year: "2025"
conference: "SIGGRAPH Asia"
license: "CC BY"
tags: ["UV", "3D", "Part"]
image: "Wang_PartUV_2025.jpg"
paper: "https://arxiv.org/abs/2511.16659"
code: "https://github.com/EricWang12/PartUV"
project: "https://www.zhaoningwang.com/PartUV/"
bibtex: "@inproceedings{wang2025partuv,
  title={PartUV: Part-Based UV Unwrapping of 3D Meshes},
  author={Wang, Zhaoning and Wei, Xinyue and Shi, Ruoxi and Zhang, Xiaoshuai and Su, Hao and Liu, Minghua},
  booktitle={Proceedings of the SIGGRAPH Asia 2025 Conference Papers},
  pages={1--12},
  year={2025}
}"
---

UV unwrapping flattens 3D surfaces to 2D with minimal distortion, often requiring the complex surface to be decomposed into multiple charts. Although extensively studied, existing UV unwrapping methods frequently struggle with AI-generated meshes, which are typically noisy, bumpy, and poorly conditioned. These methods often produce highly fragmented charts and suboptimal boundaries, introducing artifacts and hindering downstream tasks. We introduce PartUV, a part-based UV unwrapping pipeline that generates significantly fewer, part-aligned charts while maintaining low distortion. Built on top of a recent learning-based part decomposition method PartField, PartUV combines high-level semantic part decomposition with novel geometric heuristics in a top-down recursive framework. It ensures each chart's distortion remains below a user-specified threshold while minimizing the total number of charts. The pipeline integrates and extends parameterization and packing algorithms, incorporates dedicated handling of non-manifold and degenerate meshes, and is extensively parallelized for efficiency. Evaluated across four diverse datasets, including man-made, CAD, AI-generated, and Common Shapes, PartUV outperforms existing tools and recent neural methods in chart count and seam length, achieves comparable distortion, exhibits high success rates on challenging meshes, and enables new applications like part-specific multi-tiles packing.
