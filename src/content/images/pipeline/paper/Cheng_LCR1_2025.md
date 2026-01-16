---
title: "Optimizing Length Compression in Large Reasoning Models"
authors: ["Zhengxiang Cheng", "Dongping Chen", "Mingyang Fu", "Tianyi Zhou"]
year: "2025"
conference: "arXiv"
license: "CC BY"
tags: ["LLM","Large Reasoning Models"]
image: "Cheng_LCR1_2025.webp"
paper: "https://arxiv.org/pdf/2506.14755"
code: "https://github.com/zxiangx/LC-R1"
project: ""
bibtex: "@article{cheng2025optimizing,
  title={Optimizing Length Compression in Large Reasoning Models},
  author={Cheng, Zhengxiang and Chen, Dongping and Fu, Mingyang and Zhou, Tianyi},
  journal={arXiv preprint arXiv:2506.14755},
  year={2025}
}"
---

Large Reasoning Models (LRMs) have achieved remarkable success, yet they often suffer from producing unnecessary and verbose reasoning chains. We identify a core aspect of this issue as "invalid thinking" -- models tend to repeatedly double-check their work after having derived the correct answer. To address this specific inefficiency, we move beyond the general principles of Efficacy and Efficiency to propose two new, fine-grained principles: Brevity, which advocates for eliminating redundancy, and Sufficiency, which ensures critical reasoning steps are preserved. Guided by these principles, we introduce LC-R1, a post-training method based on Group Relative Policy Optimization (GRPO). LC-R1 employs a novel combination of a Length Reward for overall conciseness and a Compress Reward that is specifically designed to remove the invalid portion of the thinking process. Extensive experiments on multiple reasoning benchmarks demonstrate that LC-R1 achieves a significant reduction in sequence length (~50%) with only a marginal (~2%) drop in accuracy, achieving a favorable trade-off point on the Pareto frontier that prioritizes high compression. Our analysis further validates the robustness of LC-R1 and provides valuable insights for developing more powerful yet computationally efficient LRMs.
