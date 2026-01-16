---
title: "DIScene: Object Decoupling and Interaction Modeling for Complex Scene Generation"
authors: ["Xiao-Lei Li", "Haodong Li", "Hao-Xiang Chen", "Tai-Jiang Mu", "Shi-Min Hu"]
year: "2024"
conference: "SIGGRAPH Asia"
license: ""
tags: ["3DGS", "3D", "Generation"]
image: "Li_DIScene_2024.jpg"
paper: "https://dl.acm.org/doi/10.1145/3680528.3687589"
code: ""
project: ""
bibtex: "@inproceedings{li2024discene,
  title={Discene: Object decoupling and interaction modeling for complex scene generation},
  author={Li, Xiao-Lei and Li, Haodong and Chen, Hao-Xiang and Mu, Tai-Jiang and Hu, Shi-Min},
  booktitle={SIGGRAPH Asia 2024 Conference Papers},
  pages={1--12},
  year={2024}
}"
---

This paper reconsiders how to distill knowledge from pretrained 2D diffusion models to guide 3D asset generation, in particular to generate complex 3D scenes: it should accept varied inputs, i.e., texts or images, to allow for flexible expression of requirement; objects in the scene should be style-consistent and decoupled with clearly modeled interactions, benefiting downstream tasks. We propose DIScene, a novel method for this task. It represents the entire 3D scene with a learnable structured scene graph: each node explicitly models an object with its appearance, textual description, transformation, geometry as a mesh attached with surface-aligned Gaussians; the graph’s edges model object interactions. With this new representation, objects are optimized in the canonical space and interactions between objects are optimized by object-aware rendering to avoid wrong back-propagation. Extensive experiments demonstrate the significant utility and superiority of our approach and that DIScene can greatly facilitate 3D content creation tasks.
  