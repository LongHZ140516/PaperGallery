---
title: "Sim-to-Real Reinforcement Learning for Vision-Based Dexterous Manipulation on Humanoids"
authors: ["Toru Lin", "Kartik Sachdev", "Linxi Fan", "Jitendra Malik", "Yuke Zhu"]
year: "2025"
conference: "arXiv"
license: ""
tags: ["Robotics","Vision", "Manipulation"]
image: "Lin_SimtoReal_2025.jpg"
paper: "https://arxiv.org/pdf/2502.20396"
code: ""
project: "https://toruowo.github.io/recipe/"
bibtex: "@article{lin2025sim,
  title={Sim-to-real reinforcement learning for vision-based dexterous manipulation on humanoids},
  author={Lin, Toru and Sachdev, Kartik and Fan, Linxi and Malik, Jitendra and Zhu, Yuke},
  journal={arXiv preprint arXiv:2502.20396},
  year={2025}
}"
---

Reinforcement learning has delivered promising results in achieving human- or even superhuman-level capabilities across diverse problem domains, but success in dexterous robot manipulation remains limited. This work investigates the key challenges in applying reinforcement learning to solve a collection of contact-rich manipulation tasks on a humanoid embodiment. We introduce novel techniques to overcome the identified challenges with empirical validation. Our main contributions include an automated real-to-sim tuning module that brings the simulated environment closer to the real world, a generalized reward design scheme that simplifies reward engineering for long-horizon contact-rich manipulation tasks, a divide-and-conquer distillation process that improves the sample efficiency of hard-exploration problems while maintaining sim-to-real performance, and a mixture of sparse and dense object representations to bridge the sim-to-real perception gap. We show promising results on three humanoid dexterous manipulation tasks, with ablation studies on each technique. Our work presents a successful approach to learning humanoid dexterous manipulation using sim-to-real reinforcement learning, achieving robust generalization and high performance without the need for human demonstration.
