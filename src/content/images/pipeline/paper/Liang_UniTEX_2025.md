---
title: "UniTEX: Universal High Fidelity Generative Texturing for 3D Shapes"
authors: ["Yixun Liang", "Kunming Luo", "Xiao Chen", "Rui Chen", "Hongyu Yan", "Weiyu Li", "Jiarui Liu", "Ping Tan"]
year: "2025"
conference: "arXiv"
license: ""
tags: ["Diffusion","3D","Large Scale"]
image: "Liang_UniTEX_2025.webp"
paper: "https://arxiv.org/pdf/2505.23253"
code: "https://github.com/YixunLiang/UniTEX"
project: ""
bibtex: "@article{liang2025unitex,
  title={UniTEX: Universal High Fidelity Generative Texturing for 3D Shapes},
  author={Liang, Yixun and Luo, Kunming and Chen, Xiao and Chen, Rui and Yan, Hongyu and Li, Weiyu and Liu, Jiarui and Tan, Ping},
  journal={arXiv preprint arXiv:2505.23253},
  year={2025}
}"
---

We present UniTEX, a novel two-stage 3D texture generation framework to create high-quality, consistent textures for 3D assets. Existing approaches predominantly rely on UV-based inpainting to refine textures after reprojecting the generated multi-view images onto the 3D shapes, which introduces challenges related to topological ambiguity. To address this, we propose to bypass the limitations of UV mapping by operating directly in a unified 3D functional space. Specifically, we first propose that lifts texture generation into 3D space via Texture Functions (TFs)--a continuous, volumetric representation that maps any 3D point to a texture value based solely on surface proximity, independent of mesh topology. Then, we propose to predict these TFs directly from images and geometry inputs using a transformer-based Large Texturing Model (LTM). To further enhance texture quality and leverage powerful 2D priors, we develop an advanced LoRA-based strategy for efficiently adapting large-scale Diffusion Transformers (DiTs) for high-quality multi-view texture synthesis as our first stage. Extensive experiments demonstrate that UniTEX achieves superior visual quality and texture integrity compared to existing approaches, offering a generalizable and scalable solution for automated 3D texture generation.
