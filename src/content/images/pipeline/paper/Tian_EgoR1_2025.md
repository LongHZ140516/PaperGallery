---
title: "Ego-R1: Chain-of-Tool-Thought for Ultra-Long Egocentric Video Reasoning"
authors: ["Shulin Tian", "Ruiqi Wang", "Hongming Guo", "Penghao Wu", "Yuhao Dong", "Xiuying Wang", "Jingkang Yang", "Hao Zhang", "Hongyuan Zhu", "Ziwei Liu"]
year: "2025"
conference: "arXiv"
license: "CC BY"
tags: ["LLM", "SFT", "CoT", "Video"]
image: "Tian_EgoR1_2025.webp"
paper: "https://arxiv.org/pdf/2506.13654"
code: "https://github.com/egolife-ai/Ego-R1"
project: "https://egolife-ai.github.io/Ego-R1/"
bibtex: "@article{tian2025ego,
  title={Ego-R1: Chain-of-Tool-Thought for Ultra-Long Egocentric Video Reasoning},
  author={Tian, Shulin and Wang, Ruiqi and Guo, Hongming and Wu, Penghao and Dong, Yuhao and Wang, Xiuying and Yang, Jingkang and Zhang, Hao and Zhu, Hongyuan and Liu, Ziwei},
  journal={arXiv preprint arXiv:2506.13654},
  year={2025}
}"
---

We introduce Ego-R1, a novel framework for reasoning over ultra-long (i.e., in days and weeks) egocentric videos, which leverages a structured Chain-of-Tool-Thought (CoTT) process, orchestrated by an Ego-R1 Agent trained via reinforcement learning (RL). Inspired by human problem-solving strategies, CoTT decomposes complex reasoning into modular steps, with the RL agent invoking specific tools, one per step, to iteratively and collaboratively answer sub-questions tackling such tasks as temporal retrieval and multi-modal understanding. We design a two-stage training paradigm involving supervised finetuning (SFT) of a pretrained language model using CoTT data and RL to enable our agent to dynamically propose step-by-step tools for long-range reasoning. To facilitate training, we construct a dataset called Ego-R1 Data, which consists of Ego-CoTT-25K for SFT and Ego-QA-4.4K for RL. Furthermore, our Ego-R1 agent is evaluated on a newly curated week-long video QA benchmark, Ego-R1 Bench, which contains human-verified QA pairs from hybrid sources. Extensive results demonstrate that the dynamic, tool-augmented chain-of-thought reasoning by our Ego-R1 Agent can effectively tackle the unique challenges of understanding ultra-long egocentric videos, significantly extending the time coverage from few hours to a week.
