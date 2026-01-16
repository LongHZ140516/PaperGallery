---
title: "Dynamiccity: Large-scale 4d occupancy generation from dynamic scenes"
authors: ["Hengwei Bian", "Lingdong Kong", "Haozhe Xie", "Liang Pan", "Yu Qiao", "Ziwei Liu"]
year: "2025"
conference: "ICLR"
license: "CC BY-SA"
tags: ["Diffusion", "4D", "Large Scale", "Generation"]
image: "Bian_DynamicCity_2025.webp"
paper: "https://arxiv.org/pdf/2410.18084"
code: "https://github.com/3DTopia/DynamicCity"
project: "https://dynamic-city.github.io/"
bibtex: "@article{bian2024dynamiccity,
  title={Dynamiccity: Large-scale 4d occupancy generation from dynamic scenes},
  author={Bian, Hengwei and Kong, Lingdong and Xie, Haozhe and Pan, Liang and Qiao, Yu and Liu, Ziwei},
  journal={arXiv preprint arXiv:2410.18084},
  year={2024}
}"
---

LiDAR scene generation has been developing rapidly recently. However, existing methods primarily focus on generating static and single-frame scenes, overlooking the inherently dynamic nature of real-world driving environments. In this work, we introduce DynamicCity, a novel 4D LiDAR generation framework capable of generating large-scale, high-quality LiDAR scenes that capture the temporal evolution of dynamic environments. DynamicCity mainly consists of two key models: 1. A VAE model for learning HexPlane as the compact 4D representation. Instead of using naive averaging operations, DynamicCity employs a novel Projection Module to effectively compress 4D LiDAR features into six 2D feature maps for HexPlane construction, which significantly enhances HexPlane fitting quality (up to 12.56 mIoU gain). Furthermore, we utilize an Expansion & Squeeze Strategy to reconstruct 3D feature volumes in parallel, which improves both network training efficiency and reconstruction accuracy than naively querying each 3D point (up to 7.05 mIoU gain, 2.06x training speedup, and 70.84% memory reduction). 2. A DiT-based diffusion model for HexPlane generation. To make HexPlane feasible for DiT generation, a Padded Rollout Operation is proposed to reorganize all six feature planes of the HexPlane as a squared 2D feature map. In particular, various conditions could be introduced in the diffusion or sampling process, supporting versatile 4D generation applications, such as trajectory- and command-driven generation, inpainting, and layout-conditioned generation. Extensive experiments on the CarlaSC and Waymo datasets demonstrate that DynamicCity significantly outperforms existing state-of-the-art 4D LiDAR generation methods across multiple metrics. The code will be released to facilitate future research.
