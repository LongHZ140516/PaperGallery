---
title: "Being-H0.5: Scaling Human-Centric Robot Learning for Cross-Embodiment Generalization"
authors: ["Hao Luo", "Ye Wang", "Wanpeng Zhang", "Sipeng Zheng", "Ziheng Xi", "Chaoyi Xu", "Haiweng Xu", "Haoqi Yuan", "Chi Zhang", "Yiqing Wang", "Yicheng Feng", "Zongqing Lu"]
year: "2026"
conference: "arXiv"
license: ""
tags: ["Robotics"]
image: "Luo_Being_2026.jpg"
paper: "https://arxiv.org/abs/2601.12993"
code: "https://github.com/BeingBeyond/Being-H"
project: "https://research.beingbeyond.com/being-h05"
bibtex: "@article{luo2026being,
  title={Being-H0. 5: Scaling Human-Centric Robot Learning for Cross-Embodiment Generalization},
  author={Luo, Hao and Wang, Ye and Zhang, Wanpeng and Zheng, Sipeng and Xi, Ziheng and Xu, Chaoyi and Xu, Haiweng and Yuan, Haoqi and Zhang, Chi and Wang, Yiqing and others},
  journal={arXiv preprint arXiv:2601.12993},
  year={2026}
}"
---

We introduce Being-H0.5, a foundational Vision-Language-Action (VLA) model designed for robust cross-embodiment generalization across diverse robotic platforms. While existing VLAs often struggle with morphological heterogeneity and data scarcity, we propose a human-centric learning paradigm that treats human interaction traces as a universal "mother tongue" for physical interaction. To support this, we present UniHand-2.0, the largest embodied pre-training recipe to date, comprising over 35,000 hours of multimodal data across 30 distinct robotic embodiments. Our approach introduces a Unified Action Space that maps heterogeneous robot controls into semantically aligned slots, enabling low-resource robots to bootstrap skills from human data and high-resource platforms. Built upon this human-centric foundation, we design a unified sequential modeling and multi-task pre-training paradigm to bridge human demonstrations and robotic execution. Architecturally, Being-H0.5 utilizes a Mixture-of-Transformers design featuring a novel Mixture-of-Flow (MoF) framework to decouple shared motor primitives from specialized embodiment-specific experts. Finally, to make cross-embodiment policies stable in the real world, we introduce Manifold-Preserving Gating for robustness under sensory shift and Universal Async Chunking to universalize chunked control across embodiments with different latency and control profiles. We empirically demonstrate that Being-H0.5 achieves state-of-the-art results on simulated benchmarks, such as LIBERO (98.9%) and RoboCasa (53.9%), while also exhibiting strong cross-embodiment capabilities on five robotic platforms.