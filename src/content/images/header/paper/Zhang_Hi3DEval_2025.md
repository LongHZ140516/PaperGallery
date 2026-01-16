---
title: "Hi3DEval: Advancing 3D Generation Evaluation with Hierarchical Validity"
authors: ["Yuhan Zhang", "Long Zhuo", "Ziyang Chu", "Tong Wu", "Zhibing Li", "Liang Pan", "Dahua Lin", "Ziwei Liu"]
year: "2025"
conference: "arXiv"
license: "CC BY"
tags: ["Evalution", "3D"]
image: "Zhang_Hi3DEval_2025.jpg"
paper: "https://arxiv.org/pdf/2508.05609"
code: ""
project: "https://zyh482.github.io/Hi3DEval/"
bibtex: "@article{zhang2025hi3deval,
  title={Hi3DEval: Advancing 3D Generation Evaluation with Hierarchical Validity},
  author={Zhang, Yuhan and Zhuo, Long and Chu, Ziyang and Wu, Tong and Li, Zhibing and Pan, Liang and Lin, Dahua and Liu, Ziwei},
  journal={arXiv preprint arXiv:2508.05609},
  year={2025}
}"
---

Large language model (LLM)-powered multi-agent systems (MAS) have demonstrated cognitive and execution capabilities that far exceed those of single LLM agents, yet their capacity for self-evolution remains hampered by underdeveloped memory architectures. Upon close inspection, we are alarmed to discover that prevailing MAS memory mechanisms (1) are overly simplistic, completely disregarding the nuanced inter-agent collaboration trajectories, and (2) lack cross-trial and agent-specific customization, in stark contrast to the expressive memory developed for single agents. To bridge this gap, we introduce G-Memory, a hierarchical, agentic memory system for MAS inspired by organizational memory theory, which manages the lengthy MAS interaction via a three-tier graph hierarchy: insight, query, and interaction graphs. Upon receiving a new user query, G-Memory performs bi-directional memory traversal to retrieve both  that enable the system to leverage cross-trial knowledge, and  that compactly encode prior collaboration experiences. Upon task execution, the entire hierarchy evolves by assimilating new collaborative trajectories, nurturing the progressive evolution of agent teams. Extensive experiments across five benchmarks, three LLM backbones, and three popular MAS frameworks demonstrate that G-Memory improves success rates in embodied action and accuracy in knowledge QA by up to  and , respectively, without any modifications to the original frameworks.
