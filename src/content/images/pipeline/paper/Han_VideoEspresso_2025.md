---
title: "VideoEspresso: A Large-Scale Chain-of-Thought Dataset for Fine-Grained Video Reasoning via Core Frame Selection"
authors: ["Songhao Han", "Wei Huang", "Hairong Shi", "Le Zhuo", "Xiu Su", "Shifeng Zhang","Xu Zhou","Xiaojuan Qi", "Yue Liao", "Si Liu"]
year: "2025"
conference: "CVPR"
license: "CC BY"
tags: ["LLM","Video Reasoning", "CoT"]
image: "Han_VideoEspresso_2025.webp"
paper: "https://arxiv.org/pdf/2411.14794"
code: "https://github.com/hshjerry/VideoEspresso"
project: ""
bibtex: "@inproceedings{han2025videoespresso,
  title={Videoespresso: A large-scale chain-of-thought dataset for fine-grained video reasoning via core frame selection},
  author={Han, Songhao and Huang, Wei and Shi, Hairong and Zhuo, Le and Su, Xiu and Zhang, Shifeng and Zhou, Xu and Qi, Xiaojuan and Liao, Yue and Liu, Si},
  booktitle={Proceedings of the Computer Vision and Pattern Recognition Conference},
  pages={26181--26191},
  year={2025}
}"
---

The advancement of Large Vision Language Models (LVLMs) has significantly improved multimodal understanding, yet challenges remain in video reasoning tasks due to the scarcity of high-quality, large-scale datasets. Existing video question-answering (VideoQA) datasets often rely on costly manual annotations with insufficient granularity or automatic construction methods with redundant frame-by-frame analysis, limiting their scalability and effectiveness for complex reasoning. To address these challenges, we introduce VideoEspresso, a novel dataset that features VideoQA pairs preserving essential spatial details and temporal coherence, along with multimodal annotations of intermediate reasoning steps. Our construction pipeline employs a semantic-aware method to reduce redundancy, followed by generating QA pairs using GPT-4o. We further develop video Chain-of-Thought (CoT) annotations to enrich reasoning processes, guiding GPT-4o in extracting logical relationships from QA pairs and video content. To exploit the potential of high-quality VideoQA pairs, we propose a Hybrid LVLMs Collaboration framework, featuring a Frame Selector and a two-stage instruction fine-tuned reasoning LVLM. This framework adaptively selects core frames and performs CoT reasoning using multimodal evidence. Evaluated on our proposed benchmark with 14 tasks against 9 popular LVLMs, our method outperforms existing baselines on most tasks, demonstrating superior video reasoning capabilities.
