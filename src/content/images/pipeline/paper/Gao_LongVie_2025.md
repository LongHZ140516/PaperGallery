---
title: "LongVie: Multimodal-Guided Controllable Ultra-Long Video Generation"
authors: ["Jianxiong Gao", "Zhaoxi Chen", "Xian Liu", "Jianfeng Feng", "Chenyang Si", "Yanwei Fu", "Yu Qiao", "Ziwei Liu"]
year: "2025"
conference: "arXiv"
license: ""
tags: ["Diffusion","Video", "Generation"]
image: "Gao_LongVie_2025.webp"
paper: "https://arxiv.org/pdf/2508.03694"
code: "https://github.com/Vchitect/LongVie"
project: "https://vchitect.github.io/LongVie-project/"
bibtex: "@article{gao2025longvie,
  title={Longvie: Multimodal-guided controllable ultra-long video generation},
  author={Gao, Jianxiong and Chen, Zhaoxi and Liu, Xian and Feng, Jianfeng and Si, Chenyang and Fu, Yanwei and Qiao, Yu and Liu, Ziwei},
  journal={arXiv preprint arXiv:2508.03694},
  year={2025}
}"
---

Controllable ultra-long video generation is a fundamental yet challenging task. Although existing methods are effective for short clips, they struggle to scale due to issues such as temporal inconsistency and visual degradation. In this paper, we initially investigate and identify three key factors: separate noise initialization, independent control signal normalization, and the limitations of single-modality guidance. To address these issues, we propose LongVie, an end-to-end autoregressive framework for controllable long video generation. LongVie introduces two core designs to ensure temporal consistency: 1) a unified noise initialization strategy that maintains consistent generation across clips, and 2) global control signal normalization that enforces alignment in the control space throughout the entire video. To mitigate visual degradation, LongVie employs 3) a multi-modal control framework that integrates both dense (e.g., depth maps) and sparse (e.g., keypoints) control signals, complemented by 4) a degradation-aware training strategy that adaptively balances modality contributions over time to preserve visual quality. We also introduce LongVGenBench, a comprehensive benchmark consisting of 100 high-resolution videos spanning diverse real-world and synthetic environments, each lasting over one minute. Extensive experiments show that LongVie achieves state-of-the-art performance in long-range controllability, consistency, and quality.
