---
title: "AutoSSVH: Exploring Automated Frame Sampling for Efficient Self-Supervised Video Hashing"
authors: ["Niu Lian", "Jun Li", "Jinpeng Wang", "Ruisheng Luo", "Yaowei Wang", "Shu-Tao Xia", "Bin Chen"]
year: "2025"
conference: "CVPR"
license: "CC BY"
tags: ["Video", "Self-Supervised", "Hashing"]
image: "Lian_AutoSSVH_2025.jpg"
paper: "https://arxiv.org/pdf/2504.03587v1"
code: "https://github.com/EliSpectre/CVPR25-AutoSSVH"
project: ""
bibtex: "@inproceedings{lian2025autossvh,
  title={AutoSSVH: Exploring Automated Frame Sampling for Efficient Self-Supervised Video Hashing},
  author={Lian, Niu and Li, Jun and Wang, Jinpeng and Luo, Ruisheng and Wang, Yaowei and Xia, Shu-Tao and Chen, Bin},
  booktitle={Proceedings of the Computer Vision and Pattern Recognition Conference},
  pages={18881--18890},
  year={2025}
}"
---

Self-Supervised Video Hashing (SSVH) compresses videos into hash codes for efficient indexing and retrieval using unlabeled training videos. Existing approaches rely on random frame sampling to learn video features and treat all frames equally. This results in suboptimal hash codes, as it ignores frame-specific information density and reconstruction difficulty. To address this limitation, we propose a new framework, termed AutoSSVH, that employs adversarial frame sampling with hash-based contrastive learning. Our adversarial sampling strategy automatically identifies and selects challenging frames with richer information for reconstruction, enhancing encoding capability. Additionally, we introduce a hash component voting strategy and a point-to-set (P2Set) hash-based contrastive objective, which help capture complex inter-video semantic relationships in the Hamming space and improve the discriminability of learned hash codes. Extensive experiments demonstrate that AutoSSVH achieves superior retrieval efficacy and efficiency compared to state-of-the-art approaches.
