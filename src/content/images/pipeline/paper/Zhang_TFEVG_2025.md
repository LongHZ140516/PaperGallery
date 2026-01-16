---
title: "Training-Free Efficient Video Generation via Dynamic Token Carving"
authors: ["Yuechen Zhang", "Jinbo Xing", "Bin Xia", "Shaoteng Liu", "Bohao Peng", "Xin Tao", "Pengfei Wan", "Eric Lo", "Jiaya Jia"]
year: "2025"
conference: "arXiv"
license: "CC BY-SA"
tags: ["Diffusion","Training-Free", "Video", "Generation"]
image: "Zhang_TFEVG_2025.webp"
paper: "https://arxiv.org/pdf/2505.16864"
code: "https://github.com/DreamTechAI/Direct3D-S2?tab=readme-ov-file"
project: "https://julianjuaner.github.io/projects/jenga/"
bibtex: "@article{zhang2025training,
  title={Training-Free Efficient Video Generation via Dynamic Token Carving},
  author={Zhang, Yuechen and Xing, Jinbo and Xia, Bin and Liu, Shaoteng and Peng, Bohao and Tao, Xin and Wan, Pengfei and Lo, Eric and Jia, Jiaya},
  journal={arXiv preprint arXiv:2505.16864},
  year={2025}
}"
---

Despite the remarkable generation quality of video Diffusion Transformer (DiT) models, their practical deployment is severely hindered by extensive computational requirements. This inefficiency stems from two key challenges: the quadratic complexity of self-attention with respect to token length and the multi-step nature of diffusion models. To address these limitations, we present Jenga, a novel inference pipeline that combines dynamic attention carving with progressive resolution generation. Our approach leverages two key insights: (1) early denoising steps do not require high-resolution latents, and (2) later steps do not require dense attention. Jenga introduces a block-wise attention mechanism that dynamically selects relevant token interactions using 3D space-filling curves, alongside a progressive resolution strategy that gradually increases latent resolution during generation. Experimental results demonstrate that Jenga achieves substantial speedups across multiple state-of-the-art video diffusion models while maintaining comparable generation quality (8.83 speedup with 0.01\% performance drop on VBench). As a plug-and-play solution, Jenga enables practical, high-quality video generation on modern hardware by reducing inference time from minutes to seconds -- without requiring model retraining.
