---
title: "DenseSplat: Densifying Gaussian Splatting SLAM with Neural Radiance Prior"
authors: ["Mingrui Li", "Shuhong Liu", "Tianchen Deng", "Hongyu Wang"]
year: "2025"
conference: "arXiv"
license: "CC BY"
tags: ["3DGS", "SLAM", "NeRF"]
image: "Li_DenseSplat_2025.webp"
paper: "https://arxiv.org/pdf/2502.09111"
code: ""
project: ""
bibtex: "@article{li2025densesplat,
  title={Densesplat: Densifying gaussian splatting slam with neural radiance prior},
  author={Li, Mingrui and Liu, Shuhong and Deng, Tianchen and Wang, Hongyu},
  journal={arXiv preprint arXiv:2502.09111},
  year={2025}
}"
---

Gaussian SLAM systems excel in real-time rendering and fine-grained reconstruction compared to NeRF-based systems. However, their reliance on extensive keyframes is impractical for deployment in real-world robotic systems, which typically operate under sparse-view conditions that can result in substantial holes in the map. To address these challenges, we introduce DenseSplat, the first SLAM system that effectively combines the advantages of NeRF and 3DGS. DenseSplat utilizes sparse keyframes and NeRF priors for initializing primitives that densely populate maps and seamlessly fill gaps. It also implements geometry-aware primitive sampling and pruning strategies to manage granularity and enhance rendering efficiency. Moreover, DenseSplat integrates loop closure and bundle adjustment, significantly enhancing frame-to-frame tracking accuracy. Extensive experiments on multiple large-scale datasets demonstrate that DenseSplat achieves superior performance in tracking and mapping compared to current state-of-the-art methods.
