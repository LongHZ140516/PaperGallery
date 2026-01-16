---
title: "EditThinker: Unlocking Iterative Reasoning for Any Image Editor"
authors: ["Hongyu Li", "Manyuan Zhang", "Dian Zheng", "Ziyu Guo", "Yimeng Jia", "Kaituo Feng", "Hao Yu", "Yexin Liu", "Yan Feng", "Peng Pei", "Xunliang Cai", "Linjiang Huang", "Hongsheng Li", "Si Liu"]
year: "2025"
conference: "arXiv"
license: ""
tags: ["Image", "Edit", "Reasoning"]
image: "Li_EditThinker_2025.webp"
paper: "https://arxiv.org/abs/2512.05965"
code: "https://github.com/appletea233/EditThinker"
project: "https://appletea233.github.io/think-while-edit/"
bibtex: "@article{li2025editthinker,
  title={Editthinker: Unlocking iterative reasoning for any image editor},
  author={Li, Hongyu and Zhang, Manyuan and Zheng, Dian and Guo, Ziyu and Jia, Yimeng and Feng, Kaituo and Yu, Hao and Liu, Yexin and Feng, Yan and Pei, Peng and others},
  journal={arXiv preprint arXiv:2512.05965},
  year={2025}
}"
---

Instruction-based image editing has emerged as a prominent research area, which, benefiting from image generation foundation models, have achieved high aesthetic quality, making instruction-following capability the primary challenge. Existing approaches improve instruction adherence via supervised or reinforcement learning, yet single-turn success rates remain limited due to inherent stochasticity and a lack of deliberation. In this work, we propose a deliberative editing framework to 'think' while they edit, which simulates the human cognitive loop by iteratively executing a Think-while-Edit cycle: Critiquing results and Refining instructions , followed by Repeating the generation until satisfactory. Specifically, we train a single MLLM, EditThinker, to act as the reasoning engine of this framework, which jointly produce the critique score, reasoning process, and refined instructions. We employ reinforcement learning to align the EditThinker's thinking with its editing, thereby generating more targeted instruction improvements. Extensive experiments on four benchmarks demonstrate that our approach significantly improves the instruction-following capability of any image editing model by a large margin. We will release our data construction framework, datasets, and models to benefit the community.
