---
title: "Surface-SOS: Self-Supervised Object Segmentation via Neural Surface Representation"
authors: ["Xiaoyun Zheng", "Liwei Liao", "Jianbo Jiao", "Feng Gao", "Ronggang Wang"]
year: "2025"
conference: "TIP"
license: ""
tags: ["Self-Supervised","Segmentation", "Surface"]
image: "Zheng_Surface_2025.jpg"
paper: "https://arxiv.org/pdf/2501.09947v1"
code: "https://github.com/zhengxyun/Surface-SOS"
project: ""
bibtex: "@article{zheng2024surface,
  title={Surface-sos: Self-supervised object segmentation via neural surface representation},
  author={Zheng, Xiaoyun and Liao, Liwei and Jiao, Jianbo and Gao, Feng and Wang, Ronggang},
  journal={IEEE Transactions on Image Processing},
  volume={33},
  pages={2018--2031},
  year={2024},
  publisher={IEEE}
}"
---

Self-supervised Object Segmentation (SOS) aims to segment objects without any annotations. Under conditions of multi-camera inputs, the structural, textural and geometrical consistency among each view can be leveraged to achieve fine-grained object segmentation. To make better use of the above information, we propose Surface representation based Self-supervised Object Segmentation (Surface-SOS), a new framework to segment objects for each view by 3D surface representation from multi-view images of a scene. To model high-quality geometry surfaces for complex scenes, we design a novel scene representation scheme, which decomposes the scene into two complementary neural representation modules respectively with a Signed Distance Function (SDF). Moreover, Surface-SOS is able to refine single-view segmentation with multi-view unlabeled images, by introducing coarse segmentation masks as additional input. To the best of our knowledge, Surface-SOS is the first self-supervised approach that leverages neural surface representation to break the dependence on large amounts of annotated data and strong constraints. These constraints typically involve observing target objects against a static background or relying on temporal supervision in videos. Extensive experiments on standard benchmarks including LLFF, CO3D, BlendedMVS, TUM and several real-world scenes show that Surface-SOS always yields finer object masks than its NeRF-based counterparts and surpasses supervised single-view baselines remarkably.
