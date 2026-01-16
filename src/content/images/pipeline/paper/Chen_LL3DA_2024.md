---
title: "LL3DA: Visual Interactive Instruction Tuning for Omni-3D Understanding, Reasoning, and Planning"
authors: ["Sijin Chen", "Xin Chen", "Chi Zhang", "Mingsheng Li", "Gang Yu", "Hao Fei", "Hongyuan Zhu", "Jiayuan Fan", "Tao Chen"]
year: "2024"
conference: "CVPR"
license: "CC BY"
tags: ["LLM", "3D", "Point Cloud", "Visual"]
image: "Chen_LL3DA_2024.webp"
paper: "https://arxiv.org/pdf/2311.18651"
code: "https://github.com/Open3DA/LL3DA"
project: "https://ll3da.github.io/"
bibtex: "@inproceedings{chen2024ll3da,
  title={Ll3da: Visual interactive instruction tuning for omni-3d understanding reasoning and planning},
  author={Chen, Sijin and Chen, Xin and Zhang, Chi and Li, Mingsheng and Yu, Gang and Fei, Hao and Zhu, Hongyuan and Fan, Jiayuan and Chen, Tao},
  booktitle={Proceedings of the IEEE/CVF conference on computer vision and pattern recognition},
  pages={26428--26438},
  year={2024}
}"
---

Recent advances in Large Multimodal Models (LMM) have made it possible for various applications in human-machine interactions. However, developing LMMs that can comprehend, reason, and plan in complex and diverse 3D environments remains a challenging topic, especially considering the demand for understanding permutation-invariant point cloud 3D representations of the 3D scene. Existing works seek help from multi-view images, and project 2D features to 3D space as 3D scene representations. This, however, leads to huge computational overhead and performance degradation. In this paper, we present LL3DA, a Large Language 3D Assistant that takes point cloud as direct input and respond to both textual-instructions and visual-prompts. This help LMMs better comprehend human interactions and further help to remove the ambiguities in cluttered 3D scenes. Experiments show that LL3DA achieves remarkable results, and surpasses various 3D vision-language models on both 3D Dense Captioning and 3D Question Answering.
