---
title: "MergeVQ: A Unified Framework for Visual Generation and Representation with Disentangled Token Merging and Quantization"
authors: ["Siyuan Li", "Luyuan Zhang", "Zedong Wang", "Juanxi Tian", "Cheng Tan", "Zicheng Liu", "Chang Yu", "Qingsong Xie", "Haonan Lu", "Haoqian Wang", "Zhen Lei"]
year: "2025"
conference: "CVPR"
license: ""
tags: ["Generation","Unified"]
image: "Li_MergeVQ_2025.webp"
paper: "https://arxiv.org/abs/2504.00999"
code: ""
project: "https://apexgen-x.github.io/MergeVQ/"
bibtex: "@inproceedings{li2025mergevq,
  title={Mergevq: A unified framework for visual generation and representation with disentangled token merging and quantization},
  author={Li, Siyuan and Zhang, Luyuan and Wang, Zedong and Tian, Juanxi and Tan, Cheng and Liu, Zicheng and Yu, Chang and Xie, Qingsong and Lu, Haonan and Wang, Haoqian and others},
  booktitle={Proceedings of the Computer Vision and Pattern Recognition Conference},
  pages={19713--19723},
  year={2025}
}"
---

Masked Image Modeling (MIM) with Vector Quantization (VQ) has achieved great success in both self-supervised pre-training and image generation. However, most existing methods struggle to address the trade-off in shared latent space for generation quality vs. representation learning and efficiency. To push the limits of this paradigm, we propose MergeVQ, which incorporates token merging techniques into VQ-based generative models to bridge the gap between image generation and visual representation learning in a unified architecture. During pre-training, MergeVQ decouples top-k semantics from latent space with the token merge module after self-attention blocks in the encoder for subsequent Look-up Free Quantization (LFQ) and global alignment and recovers their fine-grained details through cross-attention in the decoder for reconstruction. As for the second-stage generation, we introduce MergeAR, which performs KV Cache compression for efficient raster-order prediction. Extensive experiments on ImageNet verify that MergeVQ as an AR generative model achieves competitive performance in both visual representation learning and image generation tasks while maintaining favorable token efficiency and inference speed.
