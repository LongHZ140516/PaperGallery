---
title: "RAG-RewardBench: Benchmarking Reward Models in Retrieval Augmented Generation for Preference Alignment"
authors: ["Zhuoran Jin", "Hongbang Yuan", "Tianyi Men", "Pengfei Cao", "Yubo Chen", "Kang Liu", "Jun Zhao"]
year: "2024"
conference: "ACL"
license: "CC BY"
tags: ["Dataset","Benchmark","LLM"]
image: "Jin_RAGRewardBench_2024.webp"
paper: "https://arxiv.org/pdf/2412.13746"
code: "https://github.com/jinzhuoran/RAG-RewardBench/"
project: ""
bibtex: "@inproceedings{jin2025rag,
  title={Rag-rewardbench: Benchmarking reward models in retrieval augmented generation for preference alignment},
  author={Jin, Zhuoran and Yuan, Hongbang and Men, Tianyi and Cao, Pengfei and Chen, Yubo and Xu, Jiexin and Li, Huaijun and Jiang, Xiaojian and Liu, Kang and Zhao, Jun},
  booktitle={Findings of the Association for Computational Linguistics: ACL 2025},
  pages={17061--17090},
  year={2025}
}"
---

Despite the significant progress made by existing retrieval augmented language models (RALMs) in providing trustworthy responses and grounding in reliable sources, they often overlook effective alignment with human preferences. In the alignment process, reward models (RMs) act as a crucial proxy for human values to guide optimization. However, it remains unclear how to evaluate and select a reliable RM for preference alignment in RALMs. To this end, we propose RAG-RewardBench, the first benchmark for evaluating RMs in RAG settings. First, we design four crucial and challenging RAG-specific scenarios to assess RMs, including multi-hop reasoning, fine-grained citation, appropriate abstain, and conflict robustness. Then, we incorporate 18 RAG subsets, six retrievers, and 24 RALMs to increase the diversity of data sources. Finally, we adopt an LLM-as-a-judge approach to improve preference annotation efficiency and effectiveness, exhibiting a strong correlation with human annotations. Based on the RAG-RewardBench, we conduct a comprehensive evaluation of 45 RMs and uncover their limitations in RAG scenarios. Additionally, we also reveal that existing trained RALMs show almost no improvement in preference alignment, highlighting the need for a shift towards preference-aligned training.We release our benchmark and code publicly at https://huggingface.co/datasets/jinzhuoran/RAG-RewardBench/ for future work.
