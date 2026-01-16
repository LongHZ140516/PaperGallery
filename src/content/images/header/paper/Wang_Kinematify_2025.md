---
title: "Kinematify: Open-Vocabulary Synthesis of High-DoF Articulated Objects"
authors: ["Jiawei Wang", "Dingyou Wang", "Jiaming Hu", "Qixuan Zhang", "Jingyi Yu", "Lan Xu"]
year: "2025"
conference: "arXiv"
license: "CC BY-NC-SA"
tags: ["DoF", "Robotics"]
image: "Wang_Kinematify_2025.webp"
paper: "https://arxiv.org/abs/2511.01294"
code: ""
project: "https://sites.google.com/deemos.com/kinematify"
bibtex: "@article{wang2025kinematify,
  title={Kinematify: Open-Vocabulary Synthesis of High-DoF Articulated Objects},
  author={Wang, Jiawei and Wang, Dingyou and Hu, Jiaming and Zhang, Qixuan and Yu, Jingyi and Xu, Lan},
  journal={arXiv preprint arXiv:2511.01294},
  year={2025}
}"
---

A deep understanding of kinematic structures and movable components is essential for enabling robots to manipulate objects and model their own articulated forms. Such understanding is captured through articulated objects, which are essential for tasks such as physical simulation, motion planning, and policy learning. However, creating these models, particularly for objects with high degrees of freedom (DoF), remains a significant challenge. Existing methods typically rely on motion sequences or strong assumptions from hand-curated datasets, which hinders scalability. In this paper, we introduce Kinematify, an automated framework that synthesizes articulated objects directly from arbitrary RGB images or textual descriptions. Our method addresses two core challenges: (i) inferring kinematic topologies for high-DoF objects and (ii) estimating joint parameters from static geometry. To achieve this, we combine MCTS search for structural inference with geometry-driven optimization for joint reasoning, producing physically consistent and functionally valid descriptions. We evaluate Kinematify on diverse inputs from both synthetic and real-world environments, demonstrating improvements in registration and kinematic topology accuracy over prior work.
