---
title: "EverMemOS: A Self-Organizing Memory Operating System for Structured Long-Horizon Reasoning"
authors: ["Chuanrui Hu", "Xingze Gao", "Zuyi Zhou", "Dannong Xu", "Yi Bai", "Xintong Li", "Hui Zhang", "Tong Li", "Chong Zhang", "Lidong Bing", "Yafeng Deng"]
year: "2026"
conference: "arXiv"
license: "CC BY"
tags: ["Memory", "Operating System"]
image: "Hu_EverMemOS_2026.webp"
paper: "https://www.arxiv.org/abs/2601.02163"
code: "https://github.com/EverMind-AI/EverMemOS"
project: ""
bibtex: "@article{hu2026evermemos,
  title={EverMemOS: A Self-Organizing Memory Operating System for Structured Long-Horizon Reasoning},
  author={Hu, Chuanrui and Gao, Xingze and Zhou, Zuyi and Xu, Dannong and Bai, Yi and Li, Xintong and Zhang, Hui and Li, Tong and Zhang, Chong and Bing, Lidong and others},
  journal={arXiv preprint arXiv:2601.02163},
  year={2026}
}"
---

Large Language Models (LLMs) are increasingly deployed as long-term interactive agents, yet their limited context windows make it difficult to sustain coherent behavior over extended interactions. Existing memory systems often store isolated records and retrieve fragments, limiting their ability to consolidate evolving user states and resolve conflicts. We introduce EverMemOS, a self-organizing memory operating system that implements an engram-inspired lifecycle for computational memory. Episodic Trace Formation converts dialogue streams into MemCells that capture episodic traces, atomic facts, and time-bounded Foresight signals. Semantic Consolidation organizes MemCells into thematic MemScenes, distilling stable semantic structures and updating user profiles. Reconstructive Recollection performs MemScene-guided agentic retrieval to compose the necessary and sufficient context for downstream reasoning. Experiments on LoCoMo and LongMemEval show that EverMemOS achieves state-of-the-art performance on memory-augmented reasoning tasks. We further report a profile study on PersonaMem v2 and qualitative case studies illustrating chat-oriented capabilities such as user profiling and Foresight.
