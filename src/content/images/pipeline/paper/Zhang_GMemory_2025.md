---
title: "G-Memory: Tracing Hierarchical Memory for Multi-Agent Systems"
authors: ["Guibin Zhang", "Muxin Fu", "Guancheng Wan", "Miao Yu", "Kun Wang", "Shuicheng Yan"]
year: "2025"
conference: "arXiv"
license: "CC BY"
tags: ["Agent", "Memory"]
image: "Zhang_GMemory_2025.jpg"
paper: "https://arxiv.org/pdf/2506.07398"
code: "https://github.com/bingreeky/GMemory"
project: ""
bibtex: "@article{zhang2025g,
  title={G-Memory: Tracing Hierarchical Memory for Multi-Agent Systems},
  author={Zhang, Guibin and Fu, Muxin and Wan, Guancheng and Yu, Miao and Wang, Kun and Yan, Shuicheng},
  journal={arXiv preprint arXiv:2506.07398},
  year={2025}
}"
---

Large language model (LLM)-powered multi-agent systems (MAS) have demonstrated cognitive and execution capabilities that far exceed those of single LLM agents, yet their capacity for self-evolution remains hampered by underdeveloped memory architectures. Upon close inspection, we are alarmed to discover that prevailing MAS memory mechanisms (1) are overly simplistic, completely disregarding the nuanced inter-agent collaboration trajectories, and (2) lack cross-trial and agent-specific customization, in stark contrast to the expressive memory developed for single agents. To bridge this gap, we introduce G-Memory, a hierarchical, agentic memory system for MAS inspired by organizational memory theory, which manages the lengthy MAS interaction via a three-tier graph hierarchy: insight, query, and interaction graphs. Upon receiving a new user query, G-Memory performs bi-directional memory traversal to retrieve both  that enable the system to leverage cross-trial knowledge, and  that compactly encode prior collaboration experiences. Upon task execution, the entire hierarchy evolves by assimilating new collaborative trajectories, nurturing the progressive evolution of agent teams. Extensive experiments across five benchmarks, three LLM backbones, and three popular MAS frameworks demonstrate that G-Memory improves success rates in embodied action and accuracy in knowledge QA by up to  and , respectively, without any modifications to the original frameworks.
