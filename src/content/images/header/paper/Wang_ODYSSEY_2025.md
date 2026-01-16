---
title: "ODYSSEY: Open-World Quadrupeds Exploration and Manipulation for Long-Horizon Tasks"
authors: ["Kaijun Wang", "Liqin Lu", "Mingyu Liu", "Jianuo Jiang", "Zeju Li", "Bolin Zhang", "Wancai Zheng", "Xinyi Yu", "Hao Chen", "Chunhua Shen"]
year: "2025"
conference: "arXiv"
license: ""
tags: ["Robotics"]
image: "Wang_ODYSSEY_2025.webp"
paper: "https://arxiv.org/pdf/2508.08240"
code: ""
project: "https://kaijwang.github.io/odyssey.github.io/"
bibtex: "@article{wang2025odyssey,
  title={Odyssey: Open-world quadrupeds exploration and manipulation for long-horizon tasks},
  author={Wang, Kaijun and Lu, Liqin and Liu, Mingyu and Jiang, Jianuo and Li, Zeju and Zhang, Bolin and Zheng, Wancai and Yu, Xinyi and Chen, Hao and Shen, Chunhua},
  journal={arXiv preprint arXiv:2508.08240},
  year={2025}
}"
---

Language-guided long-horizon mobile manipulation has long been a grand challenge in embodied semantic reasoning, generalizable manipulation, and adaptive locomotion. Three fundamental limitations hinder progress: First, although large language models have improved spatial reasoning and task planning through semantic priors, existing implementations remain confined to tabletop scenarios, failing to address the constrained perception and limited actuation ranges of mobile platforms. Second, current manipulation strategies exhibit insufficient generalization when confronted with the diverse object configurations encountered in open-world environments. Third, while crucial for practical deployment, the dual requirement of maintaining high platform maneuverability alongside precise end-effector control in unstructured settings remains understudied.
In this work, we present ODYSSEY, a unified mobile manipulation framework for agile quadruped robots equipped with manipulators, which seamlessly integrates high-level task planning with low-level whole-body control. To address the challenge of egocentric perception in language-conditioned tasks, we introduce a hierarchical planner powered by a vision-language model, enabling long-horizon instruction decomposition and precise action execution. At the control level, our novel whole-body policy achieves robust coordination across challenging terrains. We further present the first benchmark for long-horizon mobile manipulation, evaluating diverse indoor and outdoor scenarios. Through successful sim-to-real transfer, we demonstrate the system's generalization and robustness in real-world deployments, underscoring the practicality of legged manipulators in unstructured environments. Our work advances the feasibility of generalized robotic assistants capable of complex, dynamic tasks.
