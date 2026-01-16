---
title: "OmniManip: Towards General Robotic Manipulation via Object-Centric Interaction Primitives as Spatial Constraints"
authors: ["Mingjie Pan", "Jiyao Zhang", "Tianshu Wu", "Yinghao Zhao", "Wenlong Gao", "Hao Dong"]
year: "2025"
conference: "CVPR"
license: ""
tags: ["Robotics","VLA", "Interaction"]
image: "Pan_OmniManip_2025.jpg"
paper: "https://arxiv.org/pdf/2501.03841"
code: ""
project: ""
bibtex: "@inproceedings{pan2025omnimanip,
  title={Omnimanip: Towards general robotic manipulation via object-centric interaction primitives as spatial constraints},
  author={Pan, Mingjie and Zhang, Jiyao and Wu, Tianshu and Zhao, Yinghao and Gao, Wenlong and Dong, Hao},
  booktitle={Proceedings of the Computer Vision and Pattern Recognition Conference},
  pages={17359--17369},
  year={2025}
}"
---

The development of general robotic systems capable of manipulating in unstructured environments is a significant challenge. While Vision-Language Models(VLM) excel in high-level commonsense reasoning, they lack the fine-grained 3D spatial understanding required for precise manipulation tasks. Fine-tuning VLM on robotic datasets to create Vision-Language-Action Models(VLA) is a potential solution, but it is hindered by high data collection costs and generalization issues. To address these challenges, we propose a novel object-centric representation that bridges the gap between VLM's high-level reasoning and the low-level precision required for manipulation. Our key insight is that an object's canonical space, defined by its functional affordances, provides a structured and semantically meaningful way to describe interaction primitives, such as points and directions. These primitives act as a bridge, translating VLM's commonsense reasoning into actionable 3D spatial constraints. In this context, we introduce a dual closed-loop, open-vocabulary robotic manipulation system: one loop for high-level planning through primitive resampling, interaction rendering and VLM checking, and another for low-level execution via 6D pose tracking. This design ensures robust, real-time control without requiring VLM fine-tuning. Extensive experiments demonstrate strong zero-shot generalization across diverse robotic manipulation tasks, highlighting the potential of this approach for automating large-scale simulation data generation.
