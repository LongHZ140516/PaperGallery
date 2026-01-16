---
title: "Motus: A Unified Latent Action World Model"
authors: ["Hongzhe Bi", "Hengkai Tan", "Shenghao Xie", "Zeyuan Wang", "Shuhe Huang", "Haitian Liu", "Ruowen Zhao", "Yao Feng", "Chendong Xiang", "Yinze Rong", "Hongyan Zhao", "Hanyu Liu", "Zhizhong Su", "Lei Ma", "Hang Su", "Jun Zhu"]
year: "2025"
conference: "arXiv"
license: ""
tags: ["World Model", "Unified"]
image: "Bi_Motus_2025.jpg"
paper: "https://arxiv.org/pdf/2512.13030"
code: "https://github.com/thu-ml/Motus"
project: "https://motus-robotics.github.io/motus"
bibtex: "@article{bi2025motus,
  title={Motus: A Unified Latent Action World Model},
  author={Bi, Hongzhe and Tan, Hengkai and Xie, Shenghao and Wang, Zeyuan and Huang, Shuhe and Liu, Haitian and Zhao, Ruowen and Feng, Yao and Xiang, Chendong and Rong, Yinze and others},
  journal={arXiv preprint arXiv:2512.13030},
  year={2025}
}"
---

While a general embodied agent must function as a unified system, current methods are built on isolated models for understanding, world modeling, and control. This fragmentation prevents unifying multimodal generative capabilities and hinders learning from large-scale, heterogeneous data. In this paper, we propose Motus, a unified latent action world model that leverages existing general pretrained models and rich, sharable motion information. Motus introduces a Mixture-of-Transformer (MoT) architecture to integrate three experts (i.e., understanding, video generation, and action) and adopts a UniDiffuser-style scheduler to enable flexible switching between different modeling modes (i.e., world models, vision-language-action models, inverse dynamics models, video generation models, and video-action joint prediction models). Motus further leverages the optical flow to learn latent actions and adopts a recipe with three-phase training pipeline and six-layer data pyramid, thereby extracting pixel-level "delta action" and enabling large-scale action pretraining. Experiments show that Motus achieves superior performance against state-of-the-art methods in both simulation (a +15% improvement over X-VLA and a +45% improvement over Pi0.5) and real-world scenarios(improved by +11~48%), demonstrating unified modeling of all functionalities and priors significantly benefits downstream robotic tasks.
