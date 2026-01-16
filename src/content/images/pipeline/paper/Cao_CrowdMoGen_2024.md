---
title: "CrowdMoGen: Zero-Shot Text-Driven Collective Motion Generation"
authors: ["Yukang Cao", "Xinying Guo", "Mingyuan Zhang", "Haozhe Xie", "Chenyang Gu", "Ziwei Liu"]
year: "2024"
conference: "arXiv"
license: ""
tags: ["Diffusion", "Motion Generation", "Text-Driven"]
image: "Cao_CrowdMoGen_2024.jpg"
paper: "https://arxiv.org/abs/2407.06188"
code: ""
project: "https://yukangcao.github.io/CrowdMoGen/"
bibtex: "@article{cao2024crowdmogen,
  title={Crowdmogen: Zero-shot text-driven collective motion generation},
  author={Cao, Yukang and Guo, Xinying and Zhang, Mingyuan and Xie, Haozhe and Gu, Chenyang and Liu, Ziwei},
  journal={arXiv preprint arXiv:2407.06188},
  year={2024}
}"
---

Crowd Motion Generation is essential in entertainment industries such as animation and games as well as in strategic fields like urban simulation and planning. This new task requires an intricate integration of control and generation to realistically synthesize crowd dynamics under specific spatial and semantic constraints, whose challenges are yet to be fully explored. On the one hand, existing human motion generation models typically focus on individual behaviors, neglecting the complexities of collective behaviors. On the other hand, recent methods for multi-person motion generation depend heavily on pre-defined scenarios and are limited to a fixed, small number of inter-person interactions, thus hampering their practicality. To overcome these challenges, we introduce CrowdMoGen, a zero-shot text-driven framework that harnesses the power of Large Language Model (LLM) to incorporate the collective intelligence into the motion generation framework as guidance, thereby enabling generalizable planning and generation of crowd motions without paired training data. Our framework consists of two key components: 1) Crowd Scene Planner that learns to coordinate motions and dynamics according to specific scene contexts or introduced perturbations, and 2) Collective Motion Generator that efficiently synthesizes the required collective motions based on the holistic plans. Extensive quantitative and qualitative experiments have validated the effectiveness of our framework, which not only fills a critical gap by providing scalable and generalizable solutions for Crowd Motion Generation task but also achieves high levels of realism and flexibility.
