---
title: "SGS-3D: High-Fidelity 3D Instance Segmentation via Reliable Semantic Mask Splitting and Growing"
authors: ["Chaolei Wang", "Yang Luo", "Jing Du", "Siyu Chen", "Yiping Chen", "Ting Han"]
year: "2026"
conference: "AAAI"
license: "CC BY"
tags: ["Point Cloud", "Segmentation", "3D"]
image: "Wang_SGS3D_2026.webp"
paper: "https://arxiv.org/abs/2509.05144"
code: "https://github.com/wangchaolei7/SGS-3D"
project: ""
bibtex: "@article{wang2025sgs,
  title={SGS-3D: High-Fidelity 3D Instance Segmentation via Reliable Semantic Mask Splitting and Growing},
  author={Wang, Chaolei and Luo, Yang and Du, Jing and Chen, Siyu and Chen, Yiping and Han, Ting},
  journal={arXiv preprint arXiv:2509.05144},
  year={2025}
}"
---

Accurate 3D instance segmentation is crucial for high-quality scene understanding in the 3D vision domain. However, 3D instance segmentation based on 2D-to-3D lifting approaches struggle to produce precise instance-level segmentation, due to accumulated errors introduced during the lifting process from ambiguous semantic guidance and insufficient depth constraints. To tackle these challenges, we propose splitting and growing reliable semantic mask for high-fidelity 3D instance segmentation (SGS-3D), a novel "split-then-grow" framework that first purifies and splits ambiguous lifted masks using geometric primitives, and then grows them into complete instances within the scene. Unlike existing approaches that directly rely on raw lifted masks and sacrifice segmentation accuracy, SGS-3D serves as a training-free refinement method that jointly fuses semantic and geometric information, enabling effective cooperation between the two levels of representation. Specifically, for semantic guidance, we introduce a mask filtering strategy that leverages the co-occurrence of 3D geometry primitives to identify and remove ambiguous masks, thereby ensuring more reliable semantic consistency with the 3D object instances. For the geometric refinement, we construct fine-grained object instances by exploiting both spatial continuity and high-level features, particularly in the case of semantic ambiguity between distinct objects. Experimental results on ScanNet200, ScanNet++, and KITTI-360 demonstrate that SGS-3D substantially improves segmentation accuracy and robustness against inaccurate masks from pre-trained models, yielding high-fidelity object instances while maintaining strong generalization across diverse indoor and outdoor environments.
