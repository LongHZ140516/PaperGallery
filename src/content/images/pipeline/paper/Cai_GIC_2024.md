---
title: "GIC: Gaussian-Informed Continuum for Physical Property Identification and Simulation"
authors: ["Junhao Cai", "Yuji Yang", "Weihao Yuan", "Yisheng He", "Zilong Dong", "Liefeng Bo", "Hui Cheng", "Qifeng Chen"]
year: "2024"
conference: "NeurIPS"
license: ""
tags: ["3DGS", "Physical", "Simulation"]
image: "Cai_GIC_2024.webp"
paper: "https://arxiv.org/abs/2406.14927"
code: "https://github.com/Jukgei/gic"
project: "https://jukgei.github.io/project/gic/"
bibtex: "@article{cai2024gic,
  title={Gic: Gaussian-informed continuum for physical property identification and simulation},
  author={Cai, Junhao and Yang, Yuji and Yuan, Weihao and He, Yisheng and Dong, Zilong and Bo, Liefeng and Cheng, Hui and Chen, Qifeng},
  journal={Advances in Neural Information Processing Systems},
  volume={37},
  pages={75035--75063},
  year={2024}
}"
---

This paper studies the problem of estimating physical properties (system identification) through visual observations. To facilitate geometry-aware guidance in physical property estimation, we introduce a novel hybrid framework that leverages 3D Gaussian representation to not only capture explicit shapes but also enable the simulated continuum to render object masks as 2D shape surrogates during training. We propose a new dynamic 3D Gaussian framework based on motion factorization to recover the object as 3D Gaussian point sets across different time states. Furthermore, we develop a coarse-to-fine filling strategy to generate the density fields of the object from the Gaussian reconstruction, allowing for the extraction of object continuums along with their surfaces and the integration of Gaussian attributes into these continuum. In addition to the extracted object surfaces, the Gaussian-informed continuum also enables the rendering of object masks during simulations, serving as 2D-shape guidance for physical property estimation. Extensive experimental evaluations demonstrate that our pipeline achieves state-of-the-art performance across multiple benchmarks and metrics. Additionally, we illustrate the effectiveness of the proposed method through real-world demonstrations, showcasing its practical utility.
