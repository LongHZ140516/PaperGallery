---
title: "Flow Intelligence: Robust Feature Matching via Temporal Signature Correlation"
authors: ["Jie Wang", "Chen Ye Gan", "Caoqi Wei", "Jiangtao Wen", "Yuxing Han"]
year: "2025"
conference: "arXiv"
license: "CC BY"
tags: ["Matching", "Video"]
image: "Wang_Flow_2025.webp"
paper: "https://arxiv.org/pdf/2504.11949"
code: ""
project: ""
bibtex: "@article{wang2025flow,
  title={Flow Intelligence: Robust Feature Matching via Temporal Signature Correlation},
  author={Wang, Jie and Gan, Chen Ye and Wei, Caoqi and Wen, Jiangtao and Han, Yuxing},
  journal={arXiv preprint arXiv:2504.11949},
  year={2025}
}"
---

Feature matching across video streams remains a cornerstone challenge in computer vision. Increasingly, robust multimodal matching has garnered interest in robotics, surveillance, remote sensing, and medical imaging. While traditional rely on detecting and matching spatial features, they break down when faced with noisy, misaligned, or cross-modal data. Recent deep learning methods have improved robustness through learned representations, but remain constrained by their dependence on extensive training data and computational demands. We present Flow Intelligence, a paradigm-shifting approach that moves beyond spatial features by focusing on temporal motion patterns exclusively. Instead of detecting traditional keypoints, our method extracts motion signatures from pixel blocks across consecutive frames and extract temporal motion signatures between videos. These motion-based descriptors achieve natural invariance to translation, rotation, and scale variations while remaining robust across different imaging modalities. This novel approach also requires no pretraining data, eliminates the need for spatial feature detection, enables cross-modal matching using only temporal motion, and it outperforms existing methods in challenging scenarios where traditional approaches fail. By leveraging motion rather than appearance, Flow Intelligence enables robust, real-time video feature matching in diverse environments.
