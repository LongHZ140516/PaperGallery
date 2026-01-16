---
title: "HyperDreamer: Hyper-Realistic 3D Content Generation and Editing from a Single Image"
authors: ["Tong Wu", "Zhibing Li", "Shuai Yang", "Pan Zhang", "Xinggang Pan", "Jiaqi Wang", "Dahua Lin", "Ziwei Liu"]
year: "2023"
conference: "SIGGRAPH Asia"
license: ""
tags: ["Diffusion", "Generation", "3D"]
image: "Wu_HyperDreamer_2023.webp"
paper: "https://arxiv.org/abs/2312.04543"
code: "https://github.com/wutong16/HyperDreamer"
project: "https://ys-imtech.github.io/HyperDreamer/"
bibtex: "@inproceedings{wu2023hyperdreamer,
  title={Hyperdreamer: Hyper-realistic 3d content generation and editing from a single image},
  author={Wu, Tong and Li, Zhibing and Yang, Shuai and Zhang, Pan and Pan, Xingang and Wang, Jiaqi and Lin, Dahua and Liu, Ziwei},
  booktitle={Siggraph asia 2023 conference papers},
  pages={1--10},
  year={2023}
}"
---

3D content creation from a single image is a long-standing yet highly desirable task. Recent advances introduce 2D diffusion priors, yielding reasonable results. However, existing methods are not hyper-realistic enough for post-generation usage, as users cannot view, render and edit the resulting 3D content from a full range. To address these challenges, we introduce HyperDreamer with several key designs and appealing properties: 1) Viewable: 360 degree mesh modeling with high-resolution textures enables the creation of visually compelling 3D models from a full range of observation points. 2) Renderable: Fine-grained semantic segmentation and data-driven priors are incorporated as guidance to learn reasonable albedo, roughness, and specular properties of the materials, enabling semantic-aware arbitrary material estimation. 3) Editable: For a generated model or their own data, users can interactively select any region via a few clicks and efficiently edit the texture with text-based guidance. Extensive experiments demonstrate the effectiveness of HyperDreamer in modeling region-aware materials with high-resolution textures and enabling user-friendly editing. We believe that HyperDreamer holds promise for advancing 3D content creation and finding applications in various domains.
