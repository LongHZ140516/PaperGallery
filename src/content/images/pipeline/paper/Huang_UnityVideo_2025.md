---
title: "UnityVideo: Unified Multi-Modal Multi-Task Learning for Enhancing World-Aware Video Generation"
authors: ["Jiehui Huang", "Yuechen Zhang", "Xu He", "Yuan Gao", "Zhi Cen", "Bin Xia", "Yan Zhou", "Xin Tao", "Pengfei Wan", "Jiaya Jia"]
year: "2025"
conference: "arXiv"
license: "CC BY"
tags: ["Video", "Generation", "Unified"]
image: "Huang_UnityVideo_2025.webp"
paper: "https://arxiv.org/abs/2512.07831"
code: "https://github.com/dvlab-research/UnityVideo"
project: "https://jackailab.github.io/Projects/UnityVideo/"
bibtex: "@article{huang2025unityvideo,
  title={UnityVideo: Unified Multi-Modal Multi-Task Learning for Enhancing World-Aware Video Generation},
  author={Huang, Jiehui and Zhang, Yuechen and He, Xu and Gao, Yuan and Cen, Zhi and Xia, Bin and Zhou, Yan and Tao, Xin and Wan, Pengfei and Jia, Jiaya},
  journal={arXiv preprint arXiv:2512.07831},
  year={2025}
}"
---

Recent video generation models demonstrate impressive synthesis capabilities but remain limited by single-modality conditioning, constraining their holistic world understanding. This stems from insufficient cross-modal interaction and limited modal diversity for comprehensive world knowledge representation. To address these limitations, we introduce UnityVideo, a unified framework for world-aware video generation that jointly learns across multiple modalities (segmentation masks, human skeletons, DensePose, optical flow, and depth maps) and training paradigms. Our approach features two core components: (1) dynamic noising to unify heterogeneous training paradigms, and (2) a modality switcher with an in-context learner that enables unified processing via modular parameters and contextual learning. We contribute a large-scale unified dataset with 1.3M samples. Through joint optimization, UnityVideo accelerates convergence and significantly enhances zero-shot generalization to unseen data. We demonstrate that UnityVideo achieves superior video quality, consistency, and improved alignment with physical world constraints. 
