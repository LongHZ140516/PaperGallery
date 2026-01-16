---
title: "Native and Compact Structured Latents for 3D Generation"
authors: ["Jianfeng Xiang", "Xiaoxue Chen", "Sicheng Xu", "Ruicheng Wang", "Zelong Lv", "Yu Deng", "Hongyuan Zhu", "Yue Dong", "Hao Zhao", "Nicholas Jing Yuan", "Jiaolong Yang"]
year: "2025"
conference: "arXiv"
license: ""
tags: ["3D", "Generation", "Structred Latents"]
image: "Xiang_Native_2025.webp"
paper: "https://arxiv.org/abs/2512.14692"
code: "https://github.com/microsoft/TRELLIS.2"
project: "https://microsoft.github.io/TRELLIS.2/"
bibtex: "@article{xiang2025native,
  title={Native and Compact Structured Latents for 3D Generation},
  author={Xiang, Jianfeng and Chen, Xiaoxue and Xu, Sicheng and Wang, Ruicheng and Lv, Zelong and Deng, Yu and Zhu, Hongyuan and Dong, Yue and Zhao, Hao and Yuan, Nicholas Jing and others},
  journal={arXiv preprint arXiv:2512.14692},
  year={2025}
}"
---

Recent advancements in 3D generative modeling have significantly improved the generation realism, yet the field is still hampered by existing representations, which struggle to capture assets with complex topologies and detailed appearance. This paper present an approach for learning a structured latent representation from native 3D data to address this challenge. At its core is a new sparse voxel structure called O-Voxel, an omni-voxel representation that encodes both geometry and appearance. O-Voxel can robustly model arbitrary topology, including open, non-manifold, and fully-enclosed surfaces, while capturing comprehensive surface attributes beyond texture color, such as physically-based rendering parameters. Based on O-Voxel, we design a Sparse Compression VAE which provides a high spatial compression rate and a compact latent space. We train large-scale flow-matching models comprising 4B parameters for 3D generation using diverse public 3D asset datasets. Despite their scale, inference remains highly efficient. Meanwhile, the geometry and material quality of our generated assets far exceed those of existing models. We believe our approach offers a significant advancement in 3D generative modeling.
