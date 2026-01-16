---
title: "TAPTRv3: Spatial and Temporal Context Foster Robust Tracking of Any Point in Long Video"
authors: ["Jinyuan Qu", "Hongyang Li", "Shilong Liu", "Tianhe Ren", "Zhaoyang Zeng", "Lei Zhang"]
year: "2024"
conference: "arXiv"
license: ""
tags: ["Tracking","Video"]
image: "Qu_TAPTRv3_2024.webp"
paper: "https://arxiv.org/pdf/2411.18671"
code: "https://github.com/IDEA-Research/TAPTR"
project: "https://taptr.github.io/"
bibtex: "@article{qu2024taptrv3,
  title={TAPTRv3: Spatial and Temporal Context Foster Robust Tracking of Any Point in Long Video},
  author={Qu, Jinyuan and Li, Hongyang and Liu, Shilong and Ren, Tianhe and Zeng, Zhaoyang and Zhang, Lei},
  journal={arXiv preprint arXiv:2411.18671},
  year={2024}
}"
---

In this paper, we present TAPTRv3, which is built upon TAPTRv2 to improve its point tracking robustness in long videos. TAPTRv2 is a simple DETR-like framework that can accurately track any point in real-world videos without requiring cost-volume. TAPTRv3 improves TAPTRv2 by addressing its shortage in querying high quality features from long videos, where the target tracking points normally undergo increasing variation over time. In TAPTRv3, we propose to utilize both spatial and temporal context to bring better feature querying along the spatial and temporal dimensions for more robust tracking in long videos. For better spatial feature querying, we present Context-aware Cross-Attention (CCA), which leverages surrounding spatial context to enhance the quality of attention scores when querying image features. For better temporal feature querying, we introduce Visibility-aware Long-Temporal Attention (VLTA) to conduct temporal attention to all past frames while considering their corresponding visibilities, which effectively addresses the feature drifting problem in TAPTRv2 brought by its RNN-like long-temporal modeling. TAPTRv3 surpasses TAPTRv2 by a large margin on most of the challenging datasets and obtains state-of-the-art performance. Even when compared with methods trained with large-scale extra internal data, TAPTRv3 is still competitive.
