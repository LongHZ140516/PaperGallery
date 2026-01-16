---
title: "NeuralGS: Bridging Neural Fields and 3D Gaussian Splatting for Compact 3D Representations"
authors: ["Zhenyu Tang", "Chaoran Feng", "Xinhua Cheng", "Wangbo Yu", "Junwu Zhang", "Yuan Liu", "Xiaoxiao Long", "Wenping Wang", "Li Yuan"]
year: "2025"
licenseL: ""
conference: "arXiv"
tags: ["3DGS","Multi-Layer Perceptron"]
image: "Tang_NeuralGS_2025.jpg"
paper: "https://arxiv.org/pdf/2503.23162"
code: "https://github.com/PKU-YuanGroup/NeuralGS"
project: "https://pku-yuangroup.github.io/NeuralGS/"
bibtex: "@article{tang2025neuralgs,
  title={NeuralGS: Bridging Neural Fields and 3D Gaussian Splatting for Compact 3D Representations},
  author={Tang, Zhenyu and Feng, Chaoran and Cheng, Xinhua and Yu, Wangbo and Zhang, Junwu and Liu, Yuan and Long, Xiaoxiao and Wang, Wenping and Yuan, Li},
  journal={arXiv preprint arXiv:2503.23162},
  year={2025}
}"
---

3D Gaussian Splatting (3DGS) demonstrates superior quality and rendering speed, but with millions of 3D Gaussians and significant storage and transmission costs. Recent 3DGS compression methods mainly concentrate on compressing Scaffold-GS, achieving impressive performance but with an additional voxel structure and a complex encoding and quantization strategy. In this paper, we aim to develop a simple yet effective method called NeuralGS that explores in another way to compress the original 3DGS into a compact representation without the voxel structure and complex quantization strategies. Our observation is that neural fields like NeRF can represent complex 3D scenes with Multi-Layer Perceptron (MLP) neural networks using only a few megabytes. Thus, NeuralGS effectively adopts the neural field representation to encode the attributes of 3D Gaussians with MLPs, only requiring a small storage size even for a large-scale scene. To achieve this, we adopt a clustering strategy and fit the Gaussians with different tiny MLPs for each cluster, based on importance scores of Gaussians as fitting weights. We experiment on multiple datasets, achieving a 45-times average model size reduction without harming the visual quality. The compression performance of our method on original 3DGS is comparable to the dedicated Scaffold-GS-based compression methods, which demonstrate the huge potential of directly compressing original 3DGS with neural fields.
