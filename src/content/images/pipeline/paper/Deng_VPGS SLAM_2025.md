---
title: "VPGS-SLAM: Voxel-based Progressive 3D Gaussian SLAM in Large-Scale Scenes"
authors: ["Tianchen Deng", "Wenhua Wu", "Junjie He", "Yue Pan", "Xirui Jiang", "Shenghai Yuan", "Danwei Wang", "Hesheng Wang", "Weidong Chen"]
year: "2025"
conference: "arXiv"
license: "CC BY-NC-SA"
tags: ["3DGS","SLAM","Large-Scale"]
image: "Deng_VPGS SLAM_2025.webp"
paper: "https://arxiv.org/pdf/2505.18992"
code: "https://github.com/dtc111111/vpgs-slam"
project: ""
bibtex: "@article{deng2025vpgs,
  title={Vpgs-slam: Voxel-based progressive 3d gaussian slam in large-scale scenes},
  author={Deng, Tianchen and Wu, Wenhua and He, Junjie and Pan, Yue and Jiang, Xirui and Yuan, Shenghai and Wang, Danwei and Wang, Hesheng and Chen, Weidong},
  journal={arXiv preprint arXiv:2505.18992},
  year={2025}
}"
---

3D Gaussian Splatting has recently shown promising results in dense visual SLAM. However, existing 3DGS-based SLAM methods are all constrained to small-room scenarios and struggle with memory explosion in large-scale scenes and long sequences. To this end, we propose VPGS-SLAM, the first 3DGS-based large-scale RGBD SLAM framework for both indoor and outdoor scenarios. We design a novel voxel-based progressive 3D Gaussian mapping method with multiple submaps for compact and accurate scene representation in large-scale and long-sequence scenes. This allows us to scale up to arbitrary scenes and improves robustness (even under pose drifts). In addition, we propose a 2D-3D fusion camera tracking method to achieve robust and accurate camera tracking in both indoor and outdoor large-scale scenes. Furthermore, we design a 2D-3D Gaussian loop closure method to eliminate pose drift. We further propose a submap fusion method with online distillation to achieve global consistency in large-scale scenes when detecting a loop. Experiments on various indoor and outdoor datasets demonstrate the superiority and generalizability of the proposed framework.
