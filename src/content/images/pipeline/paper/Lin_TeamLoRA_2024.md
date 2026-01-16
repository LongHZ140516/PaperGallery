---
title: "TeamLoRA: Boosting Low-Rank Adaptation with Expert Collaboration and Competition"
authors: ["Tianwei Lin", "Jiang Liu", "Wenqiao Zhang", "Zhaocheng Li", "Yang Dai", "Haoyuan Li", "Zhelun Yu", "Wanggui He", "Juncheng Li", "Hao Jiang", "Siliang Tang", "Yueting Zhuang"]
year: "2024"
conference: "ACL"
license: ""
tags: ["LLM","LoRA"]
image: "Lin_TeamLoRA_2024.jpg"
paper: "https://arxiv.org/pdf/2408.09856"
code: "https://github.com/Lin-Tianwei/TeamLoRA"
project: ""
bibtex: "@inproceedings{lin2025teamlora,
  title={Teamlora: Boosting low-rank adaptation with expert collaboration and competition},
  author={Lin, Tianwei and Liu, Jiang and Zhang, Wenqiao and Dai, Yang and Li, Haoyuan and Yu, Zhelun and He, Wanggui and Li, Juncheng and Guo, Jiannan and Jiang, Hao and others},
  booktitle={Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)},
  pages={13622--13637},
  year={2025}
}"
---

While Parameter-Efficient Fine-Tuning (PEFT) methods like LoRA have effectively addressed GPU memory constraints during fine-tuning, their performance often falls short, especially in multidimensional task scenarios. To address this issue, one straightforward solution is to introduce task-specific LoRA modules as domain experts, leveraging the modeling of multiple experts' capabilities and thus enhancing the general capability of multi-task learning. Despite promising, these additional components often add complexity to the training and inference process, contravening the efficient characterization of PEFT designed for. Considering this, we introduce an innovative PEFT method, TeamLoRA, consisting of a collaboration and competition module for experts, and thus achieving the right balance of effectiveness and efficiency: (i) For collaboration, a novel knowledge-sharing and -organizing mechanism is devised to appropriately reduce the scale of matrix operations, thereby boosting the training and inference speed. (ii) For competition, we propose leveraging a game-theoretic interaction mechanism for experts, encouraging experts to transfer their domain-specific knowledge while facing diverse downstream tasks, and thus enhancing the performance. By doing so, TeamLoRA elegantly connects the experts as a "Team" with internal collaboration and competition, enabling a faster and more accurate PEFT paradigm for multi-task learning. To validate the superiority of TeamLoRA, we curate a comprehensive multi-task evaluation(CME) benchmark to thoroughly assess the capability of multi-task learning. Experiments conducted on our CME and other benchmarks indicate the effectiveness and efficiency of TeamLoRA.
