---
title: "Efficient Self-Supervised Video Hashing with Selective State Spaces"
authors: ["Jinpeng Wang", "Niu Lian", "Jun Li", "Yuting Wang", "Yan Feng", "Bin Chen", "Yongbing Zhang", "Shu-Tao Xia"]
year: "2024"
conference: "AAAI"
license: "CC BY"
tags: ["Self-Supervised","Mamba"]
image: "Wang_S5VH_2024.webp"
paper: "https://arxiv.org/pdf/2412.14518v1"
code: "https://github.com/gimpong/AAAI25-S5VH"
project: ""
bibtex: "@inproceedings{wang2025efficient,
  title={Efficient self-supervised video hashing with selective state spaces},
  author={Wang, Jinpeng and Lian, Niu and Li, Jun and Wang, Yuting and Feng, Yan and Chen, Bin and Zhang, Yongbing and Xia, Shu-Tao},
  booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},
  volume={39},
  number={7},
  pages={7753--7761},
  year={2025}
}"
---

Self-supervised video hashing (SSVH) is a practical task in video indexing and retrieval. Although Transformers are predominant in SSVH for their impressive temporal modeling capabilities, they often suffer from computational and memory inefficiencies. Drawing inspiration from Mamba, an advanced state-space model, we explore its potential in SSVH to achieve a better balance between efficacy and efficiency. We introduce S5VH, a Mamba-based video hashing model with an improved self-supervised learning paradigm. Specifically, we design bidirectional Mamba layers for both the encoder and decoder, which are effective and efficient in capturing temporal relationships thanks to the data-dependent selective scanning mechanism with linear complexity. In our learning strategy, we transform global semantics in the feature space into semantically consistent and discriminative hash centers, followed by a center alignment loss as a global learning signal. Our self-local-global (SLG) paradigm significantly improves learning efficiency, leading to faster and better convergence. Extensive experiments demonstrate S5VH's improvements over state-of-the-art methods, superior transferability, and scalable advantages in inference efficiency.
