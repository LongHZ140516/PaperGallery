---
title: "SplatCo: Structure-View Collaborative Gaussian Splatting for Detail-Preserving Rendering of Large-Scale Unbounded Scenes"
authors: ["Haihong Xiao", "Jianan Zou", "Yuxin Zhou", "Ying He", "Wenxiong Kang"]
year: "2025"
conference: "arXiv"
license: ""
tags: ["3DGS","Cross View"]
image: "Xiao_SplatCo_2025.jpg"
paper: "https://arxiv.org/pdf/2505.17951"
code: "https://github.com/SCUT-BIP-Lab/SplatCo"
project: ""
bibtex: "@article{xiao2025splatco,
  title={SplatCo: Structure-View Collaborative Gaussian Splatting for Detail-Preserving Rendering of Large-Scale Unbounded Scenes},
  author={Xiao, Haihong and Zou, Jianan and Zhou, Yuxin and He, Ying and Kang, Wenxiong},
  journal={arXiv preprint arXiv:2505.17951},
  year={2025}
}"
---

We present SplatCo, a structure-view collaborative Gaussian splatting framework for high-fidelity rendering of complex outdoor environments. SplatCo builds upon two novel components: (1) a cross-structure collaboration module that combines global tri-plane representations, which capture coarse scene layouts, with local context grid features that represent fine surface details. This fusion is achieved through a novel hierarchical compensation strategy, ensuring both global consistency and local detail preservation; and (2) a cross-view assisted training strategy that enhances multi-view consistency by synchronizing gradient updates across viewpoints, applying visibility-aware densification, and pruning overfitted or inaccurate Gaussians based on structural consistency. Through joint optimization of structural representation and multi-view coherence, SplatCo effectively reconstructs fine-grained geometric structures and complex textures in large-scale scenes. Comprehensive evaluations on 13 diverse large-scale scenes, including Mill19, MatrixCity, Tanks & Temples, WHU, and custom aerial captures, demonstrate that SplatCo consistently achieves higher reconstruction quality than state-of-the-art methods, with PSNR improvements of 1-2 dB and SSIM gains of 0.1 to 0.2. These results establish a new benchmark for high-fidelity rendering of large-scale unbounded scenes.
