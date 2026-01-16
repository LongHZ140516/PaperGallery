---
title: "CoSER: Coordinating LLM-Based Persona Simulation of Established Roles"
authors: ["Xintao Wang", "Heng Wang", "Yifei Zhang", "Xinfeng Yuan", "Rui Xu", "Jen-tse Huang", "Siyu Yuan", "Haoran Guo", "Jiangjie Chen", "Wei Wang", "Yanghua Xiao", "Shuchang Zhou"]
year: "2025"
conference: "arXiv"
license: "CC BY-NC-ND"
tags: ["LLM", "Persona Simulation", "Dataset"]
image: "Wang_CoSER_2025.webp"
paper: "https://arxiv.org/pdf/2502.09082"
code: "https://github.com/Neph0s/COSER"
project: ""
bibtex: "@article{wang2025coser,
  title={Coser: Coordinating llm-based persona simulation of established roles},
  author={Wang, Xintao and Wang, Heng and Zhang, Yifei and Yuan, Xinfeng and Xu, Rui and Huang, Jen-tse and Yuan, Siyu and Guo, Haoran and Chen, Jiangjie and Zhou, Shuchang and others},
  journal={arXiv preprint arXiv:2502.09082},
  year={2025}
}"
---

Role-playing language agents (RPLAs) have emerged as promising applications of large language models (LLMs). However, simulating established characters presents a challenging task for RPLAs, due to the lack of authentic character datasets and nuanced evaluation methods using such data. In this paper, we present CoSER, a collection of a high-quality dataset, open models, and an evaluation protocol towards effective RPLAs of established characters. The CoSER dataset covers 17,966 characters from 771 renowned books. It provides authentic dialogues with real-world intricacies, as well as diverse data types such as conversation setups, character experiences and internal thoughts. Drawing from acting methodology, we introduce given-circumstance acting for training and evaluating role-playing LLMs, where LLMs sequentially portray multiple characters in book scenes. Using our dataset, we develop CoSER 8B and CoSER 70B, i.e., advanced open role-playing LLMs built on LLaMA-3.1 models. Extensive experiments demonstrate the value of the CoSER dataset for RPLA training, evaluation and retrieval. Moreover, CoSER 70B exhibits state-of-the-art performance surpassing or matching GPT-4o on our evaluation and three existing benchmarks, i.e., achieving 75.80% and 93.47% accuracy on the InCharacter and LifeChoice benchmarks respectively.
