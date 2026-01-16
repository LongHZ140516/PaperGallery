---
title: "CordViP: Correspondence-based Visuomotor Policy for Dexterous Manipulation in Real-World"
authors: ["Yankai Fu", "Qiuxuan Feng", "Ning Chen", "Zichen Zhou", "Mengzhen Liu", "Mingdong Wu", "Tianxing Chen", "Shanyu Rong", "Jiaming Liu", "Hao Dong", "Shanghang Zhang"]
year: "2025"
conference: "RSS"
license: "CC BY"
tags: ["Robotics", "Manipulation", "Point Cloud"]
image: "Fu_CordViP_2025.webp"
paper: "https://www.arxiv.org/pdf/2502.08449"
code: "https://github.com/xuanxuanzzzii/cordvip"
project: "https://aureleopku.github.io/CordViP/"
bibtex: "@article{fu2025cordvip,
  title={Cordvip: Correspondence-based visuomotor policy for dexterous manipulation in real-world},
  author={Fu, Yankai and Feng, Qiuxuan and Chen, Ning and Zhou, Zichen and Liu, Mengzhen and Wu, Mingdong and Chen, Tianxing and Rong, Shanyu and Liu, Jiaming and Dong, Hao and others},
  journal={arXiv preprint arXiv:2502.08449},
  year={2025}
}"
---

Achieving human-level dexterity in robots is a key objective in the field of robotic manipulation. Recent advancements in 3D-based imitation learning have shown promising results, providing an effective pathway to achieve this goal. However, obtaining high-quality 3D representations presents two key problems: (1) the quality of point clouds captured by a single-view camera is significantly affected by factors such as camera resolution, positioning, and occlusions caused by the dexterous hand; (2) the global point clouds lack crucial contact information and spatial correspondences, which are necessary for fine-grained dexterous manipulation tasks. To eliminate these limitations, we propose CordViP, a novel framework that constructs and learns correspondences by leveraging the robust 6D pose estimation of objects and robot proprioception. Specifically, we first introduce the interaction-aware point clouds, which establish correspondences between the object and the hand. These point clouds are then used for our pre-training policy, where we also incorporate object-centric contact maps and hand-arm coordination information, effectively capturing both spatial and temporal dynamics. Our method demonstrates exceptional dexterous manipulation capabilities with an average success rate of 90\% in four real-world tasks, surpassing other baselines by a large margin. Experimental results also highlight the superior generalization and robustness of CordViP to different objects, viewpoints, and scenarios.
