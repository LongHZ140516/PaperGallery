---
title: "Self-Critique Guided Iterative Reasoning for Multi-hop Question Answering"
authors: ["Zheng Chu", "Huiming Fan", "Jingchang Chen", "Qianyu Wang", "Mingda Yang", "Jiafeng Liang", "Zhongjie Wang", "Hao Li", "Guo Tang", "Ming Liu", "Bing Qin"]
year: "2025"
conference: "arXiv"
license: ""
tags: ["Reasoning"]
image: "Chu_SelfCritique_2025.jpg"
paper: "https://arxiv.org/abs/2505.19112"
code: "https://github.com/zchuz/SiGIR-MHQA"
project: ""
bibtex: "@article{chu2025self,
  title={Self-Critique Guided Iterative Reasoning for Multi-hop Question Answering},
  author={Chu, Zheng and Fan, Huiming and Chen, Jingchang and Wang, Qianyu and Yang, Mingda and Liang, Jiafeng and Wang, Zhongjie and Li, Hao and Tang, Guo and Liu, Ming and others},
  journal={arXiv preprint arXiv:2505.19112},
  year={2025}
}"
---

Although large language models (LLMs) have demonstrated remarkable reasoning capabilities, they still face challenges in knowledge-intensive multi-hop reasoning. Recent work explores iterative retrieval to address complex problems. However, the lack of intermediate guidance often results in inaccurate retrieval and flawed intermediate reasoning, leading to incorrect reasoning. To address these, we propose Self-Critique Guided Iterative Reasoning (SiGIR), which uses self-critique feedback to guide the iterative reasoning process. Specifically, through end-to-end training, we enable the model to iteratively address complex problems via question decomposition. Additionally, the model is able to self-evaluate its intermediate reasoning steps. During iterative reasoning, the model engages in branching exploration and employs self-evaluation to guide the selection of promising reasoning trajectories. Extensive experiments on three multi-hop reasoning datasets demonstrate the effectiveness of our proposed method, surpassing the previous SOTA by . Furthermore, our thorough analysis offers insights for future research.
