---
title: "Structure Gaussian SLAM with Manhattan World Hypothesis"
authors: ["Shuhong Liu", "Tianchen Deng", "Heng Zhou", "Liuzhuozheng Li", "Hongyu Wang", "Danwei Wang", "Mingrui Li"]
year: "2024"
conference: "arxiv"
license: "CC BY"
tags: ["3DGS","SLAM"]
image: "Liu_SLAM_2024.jpg"
paper: "https://arxiv.org/pdf/2405.20031"
code: ""
project: ""
bibtex: "@article{liu2024structure,
  title={Structure gaussian slam with Manhattan world hypothesis},
  author={Liu, Shuhong and Zhou, Heng and Li, Liuzhuozheng and Liu, Yun and Deng, Tianchen and Zhou, Yiming and Li, Mingrui},
  journal={arXiv e-prints},
  pages={arXiv--2405},
  year={2024}
}"
---

Gaussian SLAM systems have made significant advancements in improving the efficiency and fidelity of real-time reconstructions. However, these systems often encounter incomplete reconstructions in complex indoor environments, characterized by substantial holes due to unobserved geometry caused by obstacles or limited view angles. To address this challenge, we present Manhattan Gaussian SLAM (MG-SLAM), an RGB-D system that leverages the Manhattan World hypothesis to enhance geometric accuracy and completeness. By seamlessly integrating fused line segments derived from structured scenes, MG-SLAM ensures robust tracking in textureless indoor areas. Moreover, The extracted lines and planar surface assumption allow strategic interpolation of new Gaussians in regions of missing geometry, enabling efficient scene completion. Extensive experiments conducted on both synthetic and real-world scenes demonstrate that these advancements enable our method to achieve state-of-the-art performance, marking a substantial improvement in the capabilities of Gaussian SLAM systems.
