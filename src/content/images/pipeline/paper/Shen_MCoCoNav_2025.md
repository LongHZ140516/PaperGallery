---
title: "Enhancing Multi-Robot Semantic Navigation Through Multimodal Chain-of-Thought Score Collaboration"
authors: ["Zhixuan Shen", "Haonan Luo", "Kexun Chen", "Fengmao Lv", "Tianrui Li"]
year: "2025"
conference: "AAAI"
tags: ["Agent","Robot", "Navigation"]
image: "Shen_MCoCoNav_2025.webp"
paper: "https://arxiv.org/pdf/2412.18292"
code: "https://github.com/FrankZxShen/MCoCoNav"
project: ""
bibtex: "@inproceedings{shen2025enhancing,
  title={Enhancing multi-robot semantic navigation through multimodal chain-of-thought score collaboration},
  author={Shen, Zhixuan and Luo, Haonan and Chen, Kexun and Lv, Fengmao and Li, Tianrui},
  booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},
  volume={39},
  number={14},
  pages={14664--14672},
  year={2025}
}"
---

Understanding how humans cooperatively utilize semantic knowledge to explore unfamiliar environments and decide on navigation directions is critical for house service multi-robot systems. Previous methods primarily focused on single-robot centralized planning strategies, which severely limited exploration efficiency. Recent research has considered decentralized planning strategies for multiple robots, assigning separate planning models to each robot, but these approaches often overlook communication costs. In this work, we propose Multimodal Chain-of-Thought Co-Navigation (MCoCoNav), a modular approach that utilizes multimodal Chain-of-Thought to plan collaborative semantic navigation for multiple robots. MCoCoNav combines visual perception with Vision Language Models (VLMs) to evaluate exploration value through probabilistic scoring, thus reducing time costs and achieving stable outputs. Additionally, a global semantic map is used as a communication bridge, minimizing communication overhead while integrating observational results. Guided by scores that reflect exploration trends, robots utilize this map to assess whether to explore new frontier points or revisit history nodes. Experiments on HM3D_v0.2 and MP3D demonstrate the effectiveness of our approach.
