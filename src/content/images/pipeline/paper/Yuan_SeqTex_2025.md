---
title: "SeqTex: Generate Mesh Textures in Video Sequence"
authors: ["Ze Yuan", "Xin Yu", "Yangtian Sun", "Yuan-Chen Guo", "Yan-Pei Cao", "Ding Liang", "Xiaojuan Qi"]
year: "2025"
conference: "SIGGRAPH"
license: "CC BY"
tags: ["Diffusion","Mesh Textures","Video Sequence"]
image: "Yuan_SeqTex_2025.webp"
paper: "https://arxiv.org/pdf/2507.04285"
code: ""
project: "https://yuanze1024.github.io/SeqTex/"
bibtex: "@inproceedings{yuan2025seqtex,
  title={SeqTex: Generate Mesh Textures in Video Sequence},
  author={Yuan, Ze and Yu, Xin and Sun, Yangtian and Guo, Yuan-Chen and Cao, Yan-Pei and Liang, Ding and Qi, Xiaojuan},
  booktitle={Proceedings of the SIGGRAPH Asia 2025 Conference Papers},
  pages={1--12},
  year={2025}
}"
---

Training native 3D texture generative models remains a fundamental yet challenging problem, largely due to the limited availability of large-scale, high-quality 3D texture datasets. This scarcity hinders generalization to real-world scenarios. To address this, most existing methods finetune foundation image generative models to exploit their learned visual priors. However, these approaches typically generate only multi-view images and rely on post-processing to produce UV texture maps -- an essential representation in modern graphics pipelines. Such two-stage pipelines often suffer from error accumulation and spatial inconsistencies across the 3D surface. In this paper, we introduce SeqTex, a novel end-to-end framework that leverages the visual knowledge encoded in pretrained video foundation models to directly generate complete UV texture maps. Unlike previous methods that model the distribution of UV textures in isolation, SeqTex reformulates the task as a sequence generation problem, enabling the model to learn the joint distribution of multi-view renderings and UV textures. This design effectively transfers the consistent image-space priors from video foundation models into the UV domain. To further enhance performance, we propose several architectural innovations: a decoupled multi-view and UV branch design, geometry-informed attention to guide cross-domain feature alignment, and adaptive token resolution to preserve fine texture details while maintaining computational efficiency. Together, these components allow SeqTex to fully utilize pretrained video priors and synthesize high-fidelity UV texture maps without the need for post-processing. Extensive experiments show that SeqTex achieves state-of-the-art performance on both image-conditioned and text-conditioned 3D texture generation tasks, with superior 3D consistency, texture-geometry alignment, and real-world generalization.
