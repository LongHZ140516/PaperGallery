---
title: "GPS-Gaussian+: Generalizable Pixel-wise 3D Gaussian Splatting for Real-Time Human-Scene Rendering from Sparse Views"
authors: ["Boyao Zhou", "Shunyuan Zheng", "Hanzhang Tu", "Ruizhi Shao", "Boning Liu", "Shengping Zhang", "Liqiang Nie", "Yebin Liu"]
year: "2025"
conference: "TPAMI"
license: ""
tags: ["3DGS", "Human", "Sparse Views"]
image: "Zhou_GPSGaussian_2025.webp"
paper: "https://arxiv.org/pdf/2411.11363"
code: "https://github.com/YaourtB/GPS_plus"
project: "https://yaourtb.github.io/GPS-Gaussian+"
bibtex: "@article{zhou2025gps,
  title={Gps-gaussian+: Generalizable pixel-wise 3d gaussian splatting for real-time human-scene rendering from sparse views},
  author={Zhou, Boyao and Zheng, Shunyuan and Tu, Hanzhang and Shao, Ruizhi and Liu, Boning and Zhang, Shengping and Nie, Liqiang and Liu, Yebin},
  journal={IEEE Transactions on Pattern Analysis and Machine Intelligence},
  year={2025},
  publisher={IEEE}
}"
---

Differentiable rendering techniques have recently shown promising results for free-viewpoint video synthesis of characters. However, such methods, either Gaussian Splatting or neural implicit rendering, typically necessitate per-subject optimization which does not meet the requirement of real-time rendering in an interactive application. We propose a generalizable Gaussian Splatting approach for high-resolution image rendering under a sparse-view camera setting. To this end, we introduce Gaussian parameter maps defined on the source views and directly regress Gaussian properties for instant novel view synthesis without any fine-tuning or optimization. We train our Gaussian parameter regression module on human-only data or human-scene data, jointly with a depth estimation module to lift 2D parameter maps to 3D space. The proposed framework is fully differentiable with both depth and rendering supervision or with only rendering supervision. We further introduce a regularization term and an epipolar attention mechanism to preserve geometry consistency between two source views, especially when neglecting depth supervision. Experiments on several datasets demonstrate that our method outperforms state-of-the-art methods while achieving an exceeding rendering speed.
