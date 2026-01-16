---
title: "SciLitLLM: How to Adapt LLMs for Scientific Literature Understanding"
authors: ["Sihang Li", "Jin Huang", "Jiaxi Zhuang", "Yaorui Shi", "Xiaochen Cai", "Mingjun Xu", "Xiang Wang", "Linfeng Zhang", "Guolin Ke", "Hengxing Cai"]
year: "2024"
conference: "arXiv"
license: ""
tags: ["LLM","Understanding","Scientific Literature"]
image: "Li_SciLitLLM_2024.webp"
paper: "https://arxiv.org/pdf/2408.15545"
code: ""
project: ""
bibtex: "@article{li2024scilitllm,
  title={Scilitllm: How to adapt llms for scientific literature understanding},
  author={Li, Sihang and Huang, Jin and Zhuang, Jiaxi and Shi, Yaorui and Cai, Xiaochen and Xu, Mingjun and Wang, Xiang and Zhang, Linfeng and Ke, Guolin and Cai, Hengxing},
  journal={arXiv preprint arXiv:2408.15545},
  year={2024}
}"
---

Scientific literature understanding is crucial for extracting targeted information and garnering insights, thereby significantly advancing scientific discovery. Despite the remarkable success of Large Language Models (LLMs), they face challenges in scientific literature understanding, primarily due to (1) a lack of scientific knowledge and (2) unfamiliarity with specialized scientific tasks.
To develop an LLM specialized in scientific literature understanding, we propose a hybrid strategy that integrates continual pre-training (CPT) and supervised fine-tuning (SFT), to simultaneously infuse scientific domain knowledge and enhance instruction-following capabilities for domain-specific tasks.cIn this process, we identify two key challenges: (1) constructing high-quality CPT corpora, and (2) generating diverse SFT instructions. We address these challenges through a meticulous pipeline, including PDF text extraction, parsing content error correction, quality filtering, and synthetic instruction creation. Applying this strategy, we present a suite of LLMs: SciLitLLM, specialized in scientific literature understanding. These models demonstrate promising performance on scientific literature understanding benchmarks.
Our contributions are threefold: (1) We present an effective framework that integrates CPT and SFT to adapt LLMs to scientific literature understanding, which can also be easily adapted to other domains. (2) We propose an LLM-based synthesis method to generate diverse and high-quality scientific instructions, resulting in a new instruction set -- SciLitIns -- for supervised fine-tuning in less-represented scientific domains. (3) SciLitLLM achieves promising performance improvements on scientific literature understanding benchmarks.
