---
title: "Self-Reinforcing Prototype Evolution with Dual-Knowledge Cooperation for Semi-Supervised Lifelong Person Re-Identification"
authors: ["Kunlun Xu", "Fan Zhuo", "Jiangmeng Li", "Xu Zou", "Jiahuan Zhou"]
year: "2025"
conference: "ICCV"
license: "CC BY"
tags: ["Self-Reinforcing","Semi-Supervised"]
image: "Xu_SPRED_2025.webp"
paper: "https://arxiv.org/pdf/2507.01884"
code: "https://github.com/zhoujiahuan1991/ICCV2025-SPRED"
project: ""
bibtex: "@article{xu2025self,
  title={Self-Reinforcing Prototype Evolution with Dual-Knowledge Cooperation for Semi-Supervised Lifelong Person Re-Identification},
  author={Xu, Kunlun and Zhuo, Fan and Li, Jiangmeng and Zou, Xu and Zhou, Jiahuan},
  journal={arXiv preprint arXiv:2507.01884},
  year={2025}
}"
---

Current lifelong person re-identification (LReID) methods predominantly rely on fully labeled data streams. However, in real-world scenarios where annotation resources are limited, a vast amount of unlabeled data coexists with scarce labeled samples, leading to the Semi-Supervised LReID (Semi-LReID) problem where LReID methods suffer severe performance degradation. Existing LReID methods, even when combined with semi-supervised strategies, suffer from limited long-term adaptation performance due to struggling with the noisy knowledge occurring during unlabeled data utilization. In this paper, we pioneer the investigation of Semi-LReID, introducing a novel Self-Reinforcing Prototype Evolution with Dual-Knowledge Cooperation framework (SPRED). Our key innovation lies in establishing a self-reinforcing cycle between dynamic prototype-guided pseudo-label generation and new-old knowledge collaborative purification to enhance the utilization of unlabeled data. Specifically, learnable identity prototypes are introduced to dynamically capture the identity distributions and generate high-quality pseudo-labels. Then, the dual-knowledge cooperation scheme integrates current model specialization and historical model generalization, refining noisy pseudo-labels. Through this cyclic design, reliable pseudo-labels are progressively mined to improve current-stage learning and ensure positive knowledge propagation over long-term learning. Experiments on the established Semi-LReID benchmarks show that our SPRED achieves state-of-the-art performance.
