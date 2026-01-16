---
title: "MatchAnything: Universal Cross-Modality Image Matching with Large-Scale Pre-Training"
authors: ["Xingyi He", "Hao Yu", "Sida Peng", "Dongli Tan", "Zehong Shen", "Hujun Bao", "Xiaowei Zhou"]
year: "2025"
conference: "arXiv"
license: "CC BY"
tags: ["Image Matching","Pre-Training"]
image: "He_MatchAnything_2025.webp"
paper: "https://arxiv.org/pdf/2501.07556"
code: "https://github.com/zju3dv/MatchAnything"
project: "https://zju3dv.github.io/MatchAnything/"
bibtex: "@article{he2025matchanything,
  title={Matchanything: Universal cross-modality image matching with large-scale pre-training},
  author={He, Xingyi and Yu, Hao and Peng, Sida and Tan, Dongli and Shen, Zehong and Bao, Hujun and Zhou, Xiaowei},
  journal={arXiv preprint arXiv:2501.07556},
  year={2025}
}"
---

Image matching, which aims to identify corresponding pixel locations between images, is crucial in a wide range of scientific disciplines, aiding in image registration, fusion, and analysis. In recent years, deep learning-based image matching algorithms have dramatically outperformed humans in rapidly and accurately finding large amounts of correspondences. However, when dealing with images captured under different imaging modalities that result in significant appearance changes, the performance of these algorithms often deteriorates due to the scarcity of annotated cross-modal training data. This limitation hinders applications in various fields that rely on multiple image modalities to obtain complementary information. To address this challenge, we propose a large-scale pre-training framework that utilizes synthetic cross-modal training signals, incorporating diverse data from various sources, to train models to recognize and match fundamental structures across images. This capability is transferable to real-world, unseen cross-modality image matching tasks. Our key finding is that the matching model trained with our framework achieves remarkable generalizability across more than eight unseen cross-modality registration tasks using the same network weight, substantially outperforming existing methods, whether designed for generalization or tailored for specific tasks. This advancement significantly enhances the applicability of image matching technologies across various scientific disciplines and paves the way for new applications in multi-modality human and artificial intelligence analysis and beyond.
