---
title: "AgentThink: A Unified Framework for Tool-Augmented Chain-of-Thought Reasoning in Vision-Language Models for Autonomous Driving"
authors: ["Kangan Qian", "Sicong Jiang", "Yang Zhong", "Ziang Luo", "Zilin Huang", "Tianze Zhu", "Kun Jiang", "Mengmeng Yang", "Zheng Fu", "Jinyu Miao", "Yining Shi", "He Zhe Lim", "Li Liu", "Tianbao Zhou", "Hongyi Wang", "Huang Yu", "Yifei Hu", "Guang Li", "Guang Chen", "Hao Ye", "Lijun Sun", "Diange Yang"]
year: "2025"
conference: "EMNLP"
license: ""
tags: ["Agent", "CoT", "VLM", "GRPO", "Autonomous Driving"]
image: "Qian_AgentThink_2025.jpg"
paper: "https://arxiv.org/abs/2505.15298"
code: "https://github.com/curryqka/AgentThink"
project: "https://curryqka.github.io/AgentThink.github.io/"
bibtex: "@article{qian2025agentthink,
  title={Agentthink: A unified framework for tool-augmented chain-of-thought reasoning in vision-language models for autonomous driving},
  author={Qian, Kangan and Jiang, Sicong and Zhong, Yang and Luo, Ziang and Huang, Zilin and Zhu, Tianze and Jiang, Kun and Yang, Mengmeng and Fu, Zheng and Miao, Jinyu and others},
  journal={arXiv preprint arXiv:2505.15298},
  year={2025}
}"
---

Vision-Language Models (VLMs) show promise for autonomous driving, yet their struggle with hallucinations, inefficient reasoning, and limited real-world validation hinders accurate perception and robust step-by-step reasoning. To overcome this, we introduce \textbf{AgentThink}, a pioneering unified framework that, for the first time, integrates Chain-of-Thought (CoT) reasoning with dynamic, agent-style tool invocation for autonomous driving tasks. AgentThink's core innovations include: \textbf{(i) Structured Data Generation}, by establishing an autonomous driving tool library to automatically construct structured, self-verified reasoning data explicitly incorporating tool usage for diverse driving scenarios; \textbf{(ii) A Two-stage Training Pipeline}, employing Supervised Fine-Tuning (SFT) with Group Relative Policy Optimization (GRPO) to equip VLMs with the capability for autonomous tool invocation; and \textbf{(iii) Agent-style Tool-Usage Evaluation}, introducing a novel multi-tool assessment protocol to rigorously evaluate the model's tool invocation and utilization. Experiments on the DriveLMM-o1 benchmark demonstrate AgentThink significantly boosts overall reasoning scores by \textbf{53.91\%} and enhances answer accuracy by \textbf{33.54\%}, while markedly improving reasoning quality and consistency. Furthermore, ablation studies and robust zero-shot/few-shot generalization experiments across various benchmarks underscore its powerful capabilities. These findings highlight a promising trajectory for developing trustworthy and tool-aware autonomous driving models.
