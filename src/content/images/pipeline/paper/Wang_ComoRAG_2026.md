---
title: "ComoRAG: A Cognitive-Inspired Memory-Organized RAG for Stateful Long Narrative Reasoning"
authors: ["Juyuan Wang", "Rongchen Zhao", "Wei Wei", "Yufeng Wang", "Mo Yu", "Jie Zhou", "Jin Xu", "Liyan Xu"]
year: "2026"
conference: "AAAI"
license: ""
tags: ["RAG", "Memory", "Reasoning"]
image: "Wang_ComoRAG_2026.jpg"
paper: "https://arxiv.org/pdf/2508.10419"
code: "https://github.com/EternityJune25/ComoRAG"
project: ""
bibtex: "@article{wang2025comorag,
  title={Comorag: A cognitive-inspired memory-organized rag for stateful long narrative reasoning},
  author={Wang, Juyuan and Zhao, Rongchen and Wei, Wei and Wang, Yufeng and Yu, Mo and Zhou, Jie and Xu, Jin and Xu, Liyan},
  journal={arXiv preprint arXiv:2508.10419},
  year={2025}
}"
---

Narrative comprehension on long stories and novels has been a challenging domain attributed to their intricate plotlines and entangled, often evolving relations among characters and entities. Given the LLM's diminished reasoning over extended context and high computational cost, retrieval-based approaches remain a pivotal role in practice. However, traditional RAG methods can fall short due to their stateless, single-step retrieval process, which often overlooks the dynamic nature of capturing interconnected relations within long-range context. In this work, we propose ComoRAG, holding the principle that narrative reasoning is not a one-shot process, but a dynamic, evolving interplay between new evidence acquisition and past knowledge consolidation, analogous to human cognition when reasoning with memory-related signals in the brain. Specifically, when encountering a reasoning impasse, ComoRAG undergoes iterative reasoning cycles while interacting with a dynamic memory workspace. In each cycle, it generates probing queries to devise new exploratory paths, then integrates the retrieved evidence of new aspects into a global memory pool, thereby supporting the emergence of a coherent context for the query resolution. Across four challenging long-context narrative benchmarks (200K+ tokens), ComoRAG outperforms strong RAG baselines with consistent relative gains up to 11% compared to the strongest baseline. Further analysis reveals that ComoRAG is particularly advantageous for complex queries requiring global comprehension, offering a principled, cognitively motivated paradigm for retrieval-based long context comprehension towards stateful reasoning.
