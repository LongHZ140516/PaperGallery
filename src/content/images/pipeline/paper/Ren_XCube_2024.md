---
title: "XCube: Large-Scale 3D Generative Modeling using Sparse Voxel Hierarchies"
authors: ["Xuanchi Ren", "Jiahui Huang", "Xiaohui Zeng", "Ken Museth", "Sanja Fidler", "Francis Williams"]
year: "2024"
conference: "CVPR"
license: "CC BY"
tags: ["Diffusion"]
image: "Ren_XCube_2024.webp"
paper: "https://arxiv.org/pdf/2312.03806"
code: "https://github.com/nv-tlabs/XCube"
project: "https://research.nvidia.com/labs/toronto-ai/xcube/"
bibtex: "@inproceedings{ren2024xcube,
  title={Xcube: Large-scale 3d generative modeling using sparse voxel hierarchies},
  author={Ren, Xuanchi and Huang, Jiahui and Zeng, Xiaohui and Museth, Ken and Fidler, Sanja and Williams, Francis},
  booktitle={Proceedings of the IEEE/CVF conference on computer vision and pattern recognition},
  pages={4209--4219},
  year={2024}
}"
---

We present XCube (abbreviated as X^3), a novel generative model for high-resolution sparse 3D voxel grids with arbitrary attributes. Our model can generate millions of voxels with a finest effective resolution of up to 1024^3 in a feed-forward fashion without time-consuming test-time optimization. To achieve this, we employ a hierarchical voxel latent diffusion model which generates progressively higher resolution grids in a coarse-to-fine manner using a custom framework built on the highly efficient VDB data structure. Apart from generating high-resolution objects, we demonstrate the effectiveness of XCube on large outdoor scenes at scales of 100m×100m with a voxel size as small as 10cm. We observe clear qualitative and quantitative improvements over past approaches. In addition to unconditional generation, we show that our model can be used to solve a variety of tasks such as user-guided editing, scene completion from a single scan, and text-to-3D.
