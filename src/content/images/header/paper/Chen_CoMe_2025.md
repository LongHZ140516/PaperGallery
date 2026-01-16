---
title: "Co-Me: Confidence-Guided Token Merging for Visual Geometric Transformers"
authors: ["Yutian Chen", "Yuheng Qiu", "Ruogu Li", "Ali Agha", "Shayegan Omidshafiei", "Jay Patrikar", "Sebastian Scherer"]
year: "2025"
conference: "arXiv"
license: "CC BY-NC-SA"
tags: ["Visual", "Confidence Guided"]
image: "Chen_CoMe_2025.jpg"
paper: "https://arxiv.org/abs/2511.14751"
code: "https://github.com/co-me-tokens/CoMe"
project: "https://co-me-tokens.github.io/"
bibtex: "@misc{chen2025comeconfidenceguidedtokenmerging,
      title={Co-Me: Confidence-Guided Token Merging for Visual Geometric Transformers}, 
      author={Yutian Chen and Yuheng Qiu and Ruogu Li and Ali Agha and Shayegan Omidshafiei and Jay Patrikar and Sebastian Scherer},
      year={2025},
      eprint={2511.14751},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2511.14751}, 
}"
---

We propose Confidence-Guided Token Merging (Co-Me), an acceleration mechanism for visual geometric transformers without retraining or finetuning the base model. Co-Me distilled a light-weight confidence predictor to rank tokens by uncertainty and selectively merge low-confidence ones, effectively reducing computation while maintaining spatial coverage. Compared to similarity-based merging or pruning, the confidence signal in Co-Me reliably indicates regions emphasized by the transformer, enabling substantial acceleration without degrading performance. Co-Me applies seamlessly to various multi-view and streaming visual geometric transformers, achieving speedups that scale with sequence length. When applied to VGGT and MapAnything, Co-Me achieves up to 11.3\times and 7.2\times speedup, making visual geometric transformers practical for real-time 3D perception and reconstruction.
