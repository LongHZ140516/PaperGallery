---
title: "UltraShape 1.0: High-Fidelity 3D Shape Generation via Scalable Geometric Refinement"
authors: ["Tanghui Jia", "Dongyu Yan", "Dehao Hao", "Yang Li", "Kaiyi Zhang", "Xianyi He", "Lanjiong Li", "Yuhan Wang", "Jinnan Chen", "Lutao Jiang", "Qishen Yin", "Long Quan", "Ying-Cong Chen", "Li Yuan"]
year: "2025"
conference: "arXiv"
license: "CC BY"
tags: ["3D", "Generation", "Refinement"]
image: "Zou_UltraShape_2025.webp"
paper: "https://arxiv.org/abs/2512.21185"
code: "https://github.com/PKU-YuanGroup/UltraShape-1.0"
project: "https://pku-yuangroup.github.io/UltraShape-1.0/"
bibtex: "@article{jia2025ultrashape,
  title={UltraShape 1.0: High-Fidelity 3D Shape Generation via Scalable Geometric Refinement},
  author={Jia, Tanghui and Yan, Dongyu and Hao, Dehao and Li, Yang and Zhang, Kaiyi and He, Xianyi and Li, Lanjiong and Chen, Jinnan and Jiang, Lutao and Yin, Qishen and others},
  journal={arXiv preprint arXiv:2512.21185},
  year={2025}
}"
---

In this report, we introduce UltraShape 1.0, a scalable 3D diffusion framework for high-fidelity 3D geometry generation. The proposed approach adopts a two-stage generation pipeline: a coarse global structure is first synthesized and then refined to produce detailed, high-quality geometry. To support reliable 3D generation, we develop a comprehensive data processing pipeline that includes a novel watertight processing method and high-quality data filtering. This pipeline improves the geometric quality of publicly available 3D datasets by removing low-quality samples, filling holes, and thickening thin structures, while preserving fine-grained geometric details. To enable fine-grained geometry refinement, we decouple spatial localization from geometric detail synthesis in the diffusion process. We achieve this by performing voxel-based refinement at fixed spatial locations, where voxel queries derived from coarse geometry provide explicit positional anchors encoded via RoPE, allowing the diffusion model to focus on synthesizing local geometric details within a reduced, structured solution space. Our model is trained exclusively on publicly available 3D datasets, achieving strong geometric quality despite limited training resources. Extensive evaluations demonstrate that UltraShape 1.0 performs competitively with existing open-source methods in both data processing quality and geometry generation. All code and trained models will be released to support future research.
