---
title: "Hyper-3DG: Text-to-3D Gaussian Generation via Hypergraph"
authors: ["Donglin Di", "Jiahui Yang", "Chaofan Luo", "Zhou Xue", "Wei Chen", "Xun Yang", "Yue Gao"]
year: "2025"
conference: "IJCV"
license: ""
tags: ["3DGS", "Generation", "Text-to-3D"]
image: "Di_Hyper3DG_2025.webp"
paper: "https://arxiv.org/pdf/2403.09236.pdf"
code: "https://github.com/yjhboy/Hyper3DG"
project: ""
bibtex: "@article{di2025hyper,
  title={Hyper-3dg: Text-to-3d gaussian generation via hypergraph},
  author={Di, Donglin and Yang, Jiahui and Luo, Chaofan and Xue, Zhou and Chen, Wei and Yang, Xun and Gao, Yue},
  journal={International Journal of Computer Vision},
  volume={133},
  number={5},
  pages={2886--2909},
  year={2025},
  publisher={Springer}
}"
---

Text-to-3D generation represents an exciting field that has seen rapid advancements, facilitating the transformation of textual descriptions into detailed 3D models. However, current progress often neglects the intricate high-order correlation of geometry and texture within 3D objects, leading to challenges such as over-smoothness, over-saturation and the Janus problem. In this work, we propose a method named ``3D Gaussian Generation via Hypergraph (Hyper-3DG)'', designed to capture the sophisticated high-order correlations present within 3D objects. Our framework is anchored by a well-established mainflow and an essential module, named ``Geometry and Texture Hypergraph Refiner (HGRefiner)''. This module not only refines the representation of 3D Gaussians but also accelerates the update process of these 3D Gaussians by conducting the Patch-3DGS Hypergraph Learning on both explicit attributes and latent visual features. Our framework allows for the production of finely generated 3D objects within a cohesive optimization, effectively circumventing degradation. Extensive experimentation has shown that our proposed method significantly enhances the quality of 3D generation while incurring no additional computational overhead for the underlying framework.
