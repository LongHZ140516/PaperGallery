---
title: "PonderV2: Pave the Way for 3D Foundation Model with A Universal Pre-training Paradigm"
authors: ["Haoyi Zhu", "Honghui Yang", "Xiaoyang Wu", "Di Huang", "Sha Zhang", "Xianglong He", "Hengshuang Zhao", "Chunhua Shen", "Yu Qiao", "Tong He", "Wanli Ouyang"]
year: "2023"
conference: "arXiv"
license: ""
tags: ["NeRF","Foundation Model", "3D"]
image: "Zhu_PonderV2_2023.jpg"
paper: "https://arxiv.org/pdf/2310.08586"
code: "https://github.com/OpenGVLab/PonderV2"
project: ""
bibtex: "@article{zhu2023ponderv2,
  title={Ponderv2: Pave the way for 3d foundation model with a universal pre-training paradigm},
  author={Zhu, Haoyi and Yang, Honghui and Wu, Xiaoyang and Huang, Di and Zhang, Sha and He, Xianglong and Zhao, Hengshuang and Shen, Chunhua and Qiao, Yu and He, Tong and others},
  journal={arXiv preprint arXiv:2310.08586},
  year={2023}
}"
---

In contrast to numerous NLP and 2D vision foundational models, learning a 3D foundational model poses considerably greater challenges. This is primarily due to the inherent data variability and diversity of downstream tasks. In this paper, we introduce a novel universal 3D pre-training framework designed to facilitate the acquisition of efficient 3D representation, thereby establishing a pathway to 3D foundational models. Considering that informative 3D features should encode rich geometry and appearance cues that can be utilized to render realistic images, we propose to learn 3D representations by differentiable neural rendering. We train a 3D backbone with a devised volumetric neural renderer by comparing the rendered with the real images. Notably, our approach seamlessly integrates the learned 3D encoder into various downstream tasks. These tasks encompass not only high-level challenges such as 3D detection and segmentation but also low-level objectives like 3D reconstruction and image synthesis, spanning both indoor and outdoor scenarios. Besides, we also illustrate the capability of pre-training a 2D backbone using the proposed methodology, surpassing conventional pre-training methods by a large margin. For the first time, PonderV2 achieves state-of-the-art performance on 11 indoor and outdoor benchmarks, implying its effectiveness.
