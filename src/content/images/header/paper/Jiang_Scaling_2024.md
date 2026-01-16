---
title: "Scaling Up Dynamic Human-Scene Interaction Modeling"
authors: ["Nan Jiang", "Zhiyuan Zhang", "Hongjie Li", "Xiaoxuan Ma", "Zan Wang", "Yixin Chen", "Tengyu Liu", "Yixin Zhu", "Siyuan Huang"]
year: "2024"
conference: "CVPR"
license: ""
tags: ["Diffusion", "Dynamic", "Human"]
image: "Jiang_Scaling_2024.jpg"
paper: "https://arxiv.org/pdf/2403.08629"
code: "https://github.com/jnnan/trumans_utils"
project: "https://jnnan.github.io/trumans/"
bibtex: "@inproceedings{jiang2024scaling,
  title={Scaling up dynamic human-scene interaction modeling},
  author={Jiang, Nan and Zhang, Zhiyuan and Li, Hongjie and Ma, Xiaoxuan and Wang, Zan and Chen, Yixin and Liu, Tengyu and Zhu, Yixin and Huang, Siyuan},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  pages={1737--1747},
  year={2024}
}"
---

Confronting the challenges of data scarcity and advanced motion synthesis in human-scene interaction modeling, we introduce the TRUMANS dataset alongside a novel HSI motion synthesis method. TRUMANS stands as the most comprehensive motion-captured HSI dataset currently available, encompassing over 15 hours of human interactions across 100 indoor scenes. It intricately captures whole-body human motions and part-level object dynamics, focusing on the realism of contact. This dataset is further scaled up by transforming physical environments into exact virtual models and applying extensive augmentations to appearance and motion for both humans and objects while maintaining interaction fidelity. Utilizing TRUMANS, we devise a diffusion-based autoregressive model that efficiently generates HSI sequences of any length, taking into account both scene context and intended actions. In experiments, our approach shows remarkable zero-shot generalizability on a range of 3D scene datasets (e.g., PROX, Replica, ScanNet, ScanNet++), producing motions that closely mimic original motion-captured sequences, as confirmed by quantitative experiments and human studies.
