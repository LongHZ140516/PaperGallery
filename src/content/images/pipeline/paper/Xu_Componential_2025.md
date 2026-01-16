---
title: "Componential Prompt-Knowledge Alignment for Domain Incremental Learning"
authors: ["Kunlun Xu", "Xu Zou", "Gang Hua", "Jiahuan Zhou"]
year: "2025"
conference: "ICML"
license: "CC BY"
tags: ["Alignment", "Domain Incremental Learning"]
image: "Xu_Componential_2025.webp"
paper: "https://arxiv.org/pdf/2505.04575v1"
code: "https://github.com/zhoujiahuan1991/ICML2025-KA-Prompt"
project: ""
bibtex: "@article{xu2025componential,
  title={Componential Prompt-Knowledge Alignment for Domain Incremental Learning},
  author={Xu, Kunlun and Zou, Xu and Hua, Gang and Zhou, Jiahuan},
  journal={arXiv preprint arXiv:2505.04575},
  year={2025}
}"
---

Domain Incremental Learning (DIL) aims to learn from non-stationary data streams across domains while retaining and utilizing past knowledge. Although prompt-based methods effectively store multi-domain knowledge in prompt parameters and obtain advanced performance through cross-domain prompt fusion, we reveal an intrinsic limitation: component-wise misalignment between domain-specific prompts leads to conflicting knowledge integration and degraded predictions. This arises from the random positioning of knowledge components within prompts, where irrelevant component fusion introduces interference. To address this, we propose Componential Prompt-Knowledge Alignment (KA-Prompt), a novel prompt-based DIL method that introduces component-aware prompt-knowledge alignment during training, significantly improving both the learning and inference capacity of the model. KA-Prompt operates in two phases: (1) Initial Componential Structure Configuring, where a set of old prompts containing knowledge relevant to the new domain are mined via greedy search, which is then exploited to initialize new prompts to achieve reusable knowledge transfer and establish intrinsic alignment between new and old prompts. (2) Online Alignment Preservation, which dynamically identifies the target old prompts and applies adaptive componential consistency constraints as new prompts evolve. Extensive experiments on DIL benchmarks demonstrate the effectiveness of our KA-Prompt
