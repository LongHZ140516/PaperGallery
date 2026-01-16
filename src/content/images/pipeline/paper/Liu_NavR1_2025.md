---
title: "Nav-R1: Reasoning and Navigation in Embodied Scenes"
authors: ["Qingxiang Liu", "Ting Huang", "Zeyu Zhang", "Hao Tang"]
year: "2025"
conference: "arXiv"
license: "CC BY-NC-SA"
tags: ["Navigation", "Reasoning", "3D"]
image: "Liu_NavR1_2025.jpg"
paper: "https://arxiv.org/abs/2509.10884"
code: "https://github.com/AIGeeksGroup/Nav-R1"
project: "https://aigeeksgroup.github.io/Nav-R1/"
bibtex: "@article{liu2025nav,
  title={Nav-r1: Reasoning and navigation in embodied scenes},
  author={Liu, Qingxiang and Huang, Ting and Zhang, Zeyu and Tang, Hao},
  journal={arXiv preprint arXiv:2509.10884},
  year={2025}
}"
---

Embodied navigation requires agents to integrate perception, reasoning, and action for robust interaction in complex 3D environments. Existing approaches often suffer from incoherent and unstable reasoning traces that hinder generalization across diverse environments, and difficulty balancing long-horizon semantic reasoning with low-latency control for real-time navigation. To address these challenges, we propose Nav-R1, an embodied foundation model that unifies reasoning in embodied environments. We first construct Nav-CoT-110K, a large-scale dataset of step-by-step Chains-of-Thought (CoT) for embodied tasks, which enables cold-start initialization with structured reasoning. Building on this foundation, we design a GRPO-based reinforcement learning framework with three complementary rewards: format, understanding, and navigation, to improve structural adherence, semantic grounding, and path fidelity. Furthermore, we introduce a Fast-in-Slow reasoning paradigm, decoupling deliberate semantic reasoning from low-latency reactive control for efficient yet coherent navigation. Extensive evaluations on embodied AI benchmarks demonstrate that Nav-R1 consistently outperforms strong baselines, with over 8% average improvement in reasoning and navigation performance. Real-world deployment on a mobile robot further validates its robustness under limited onboard resources.
