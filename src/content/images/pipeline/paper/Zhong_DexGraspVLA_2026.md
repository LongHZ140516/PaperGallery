---
title: "DexGraspVLA: A Vision-Language-Action Framework Towards General Dexterous Grasping"
authors: ["Yifan Zhong", "Xuchuan Huang", "Ruochong Li", "Ceyao Zhang", "Yitao Liang", "Yaodong Yang", "Yuanpei Chen"]
year: "2026"
conference: "AAAI"
license: ""
tags: ["Robotics", "VLM", "Real-World"]
image: "Zhong_DexGraspVLA_2026.webp"
paper: "https://arxiv.org/pdf/2502.20900"
code: "https://github.com/Psi-Robot/DexGraspVLA"
project: "https://dexgraspvla.github.io/"
bibtex: "@article{zhong2025dexgraspvla,
  title={Dexgraspvla: A vision-language-action framework towards general dexterous grasping},
  author={Zhong, Yifan and Huang, Xuchuan and Li, Ruochong and Zhang, Ceyao and Chen, Zhang and Guan, Tianrui and Zeng, Fanlian and Lui, Ka Num and Ye, Yuyao and Liang, Yitao and others},
  journal={arXiv preprint arXiv:2502.20900},
  year={2025}
}"
---

Dexterous grasping remains a fundamental yet challenging problem in robotics. A general-purpose robot must be capable of grasping diverse objects in arbitrary scenarios. However, existing research typically relies on specific assumptions, such as single-object settings or limited environments, leading to constrained generalization. Our solution is DexGraspVLA, a hierarchical framework that utilizes a pre-trained Vision-Language model as the high-level task planner and learns a diffusion-based policy as the low-level Action controller. The key insight lies in iteratively transforming diverse language and visual inputs into domain-invariant representations, where imitation learning can be effectively applied due to the alleviation of domain shift. Thus, it enables robust generalization across a wide range of real-world scenarios. Notably, our method achieves a 90+% success rate under thousands of unseen object, lighting, and background combinations in a ``zero-shot'' environment. Empirical analysis further confirms the consistency of internal model behavior across environmental variations, thereby validating our design and explaining its generalization performance. We hope our work can be a step forward in achieving general dexterous grasping.
