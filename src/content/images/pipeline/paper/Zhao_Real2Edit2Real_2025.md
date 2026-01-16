---
title: "Real2Edit2Real: Generating Robotic Demonstrations via a 3D Control Interface"
authors: ["Yujie Zhao", "Hongwei Fan", "Di Chen", "Shengcong Chen", "Liliang Chen", "Xiaoqi Li", "Guanghui Ren", "Hao Dong"]
year: "2025"
conference: "arXiv"
license: ""
tags: ["Robotic", "3D", "Point Cloud"]
image: "Zhao_Real2Edit2Real_2025.jpg"
paper: "https://arxiv.org/abs/2512.19402"
code: ""
project: "https://real2edit2real.github.io/"
bibtex: "@article{zhao2025real2edit2real,
  title={Real2Edit2Real: Generating Robotic Demonstrations via a 3D Control Interface},
  author={Zhao, Yujie and Fan, Hongwei and Chen, Di and Chen, Shengcong and Chen, Liliang and Li, Xiaoqi and Ren, Guanghui and Dong, Hao},
  journal={arXiv preprint arXiv:2512.19402},
  year={2025}
}"
---

Recent progress in robot learning has been driven by large-scale datasets and powerful visuomotor policy architectures, yet policy robustness remains limited by the substantial cost of collecting diverse demonstrations, particularly for spatial generalization in manipulation tasks. To reduce repetitive data collection, we present Real2Edit2Real, a framework that generates new demonstrations by bridging 3D editability with 2D visual data through a 3D control interface. Our approach first reconstructs scene geometry from multi-view RGB observations with a metric-scale 3D reconstruction model. Based on the reconstructed geometry, we perform depth-reliable 3D editing on point clouds to generate new manipulation trajectories while geometrically correcting the robot poses to recover physically consistent depth, which serves as a reliable condition for synthesizing new demonstrations. Finally, we propose a multi-conditional video generation model guided by depth as the primary control signal, together with action, edge, and ray maps, to synthesize spatially augmented multi-view manipulation videos. Experiments on four real-world manipulation tasks demonstrate that policies trained on data generated from only 1-5 source demonstrations can match or outperform those trained on 50 real-world demonstrations, improving data efficiency by up to 10-50x. Moreover, experimental results on height and texture editing demonstrate the framework's flexibility and extensibility, indicating its potential to serve as a unified data generation framework.
