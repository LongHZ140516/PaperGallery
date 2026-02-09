---
title: "3D-Aware Implicit Motion Control for View-Adaptive Human Video Generation"
authors: ["Zhixue Fang", "Xu He", "Songlin Tang", "Haoxian Zhang", "Qingfeng Li", "Xiaoqiang Liu", "Pengfei Wan", "Kun Gai"]
year: "2026"
conference: "arXiv"
license: ""
tags: ["3D", "Video", "Generation"]
image: "Fang_3DAware_2026.jpg"
paper: "https://arxiv.org/abs/2602.03796"
code: ""
project: ""
bibtex: "@article{fang20263d,
  title={3D-Aware Implicit Motion Control for View-Adaptive Human Video Generation},
  author={Fang, Zhixue and He, Xu and Tang, Songlin and Zhang, Haoxian and Li, Qingfeng and Liu, Xiaoqiang and Wan, Pengfei and Gai, Kun},
  journal={arXiv preprint arXiv:2602.03796},
  year={2026}
}"
---

Existing methods for human motion control in video generation typically rely on either 2D poses or explicit 3D parametric models (e.g., SMPL) as control signals. However, 2D poses rigidly bind motion to the driving viewpoint, precluding novel-view synthesis. Explicit 3D models, though structurally informative, suffer from inherent inaccuracies (e.g., depth ambiguity and inaccurate dynamics) which, when used as a strong constraint, override the powerful intrinsic 3D awareness of large-scale video generators. In this work, we revisit motion control from a 3D-aware perspective, advocating for an implicit, view-agnostic motion representation that naturally aligns with the generator's spatial priors rather than depending on externally reconstructed constraints. We introduce 3DiMo, which jointly trains a motion encoder with a pretrained video generator to distill driving frames into compact, view-agnostic motion tokens, injected semantically via cross-attention. To foster 3D awareness, we train with view-rich supervision (i.e., single-view, multi-view, and moving-camera videos), forcing motion consistency across diverse viewpoints. Additionally, we use auxiliary geometric supervision that leverages SMPL only for early initialization and is annealed to zero, enabling the model to transition from external 3D guidance to learning genuine 3D spatial motion understanding from the data and the generator's priors. Experiments confirm that 3DiMo faithfully reproduces driving motions with flexible, text-driven camera control, significantly surpassing existing methods in both motion fidelity and visual quality.
