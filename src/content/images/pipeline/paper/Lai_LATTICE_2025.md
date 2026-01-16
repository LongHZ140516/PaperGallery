---
title: "LATTICE: Democratize High-Fidelity 3D Generation at Scale"
authors: ["Zeqiang Lai", "Yunfei Zhao", "Zibo Zhao", "Haolin Liu", "Qingxiang Lin", "Jingwei Huang", "Chunchao Guo", "Xiangyu Yue"]
year: "2025"
conference: "arXiv"
license: "CC BY"
tags: ["3D", "Generation", "High-Fidelity"]
image: "Lai_LATTICE_2025.webp"
paper: "https://arxiv.org/abs/2512.03052"
code: "https://github.com/Zeqiang-Lai/LATTICE"
project: "https://lattice3d.github.io/"
bibtex: "@article{lai2025lattice,
  title={LATTICE: Democratize High-Fidelity 3D Generation at Scale},
  author={Lai, Zeqiang and Zhao, Yunfei and Zhao, Zibo and Liu, Haolin and Lin, Qingxiang and Huang, Jingwei and Guo, Chunchao and Yue, Xiangyu},
  journal={arXiv preprint arXiv:2512.03052},
  year={2025}
}"
---

We present LATTICE, a new framework for high-fidelity 3D asset generation that bridges the quality and scalability gap between 3D and 2D generative models. While 2D image synthesis benefits from fixed spatial grids and well-established transformer architectures, 3D generation remains fundamentally more challenging due to the need to predict both spatial structure and detailed geometric surfaces from scratch. These challenges are exacerbated by the computational complexity of existing 3D representations and the lack of structured and scalable 3D asset encoding schemes. To address this, we propose VoxSet, a semi-structured representation that compresses 3D assets into a compact set of latent vectors anchored to a coarse voxel grid, enabling efficient and position-aware generation. VoxSet retains the simplicity and compression advantages of prior VecSet methods while introducing explicit structure into the latent space, allowing positional embeddings to guide generation and enabling strong token-level test-time scaling. Built upon this representation, LATTICE adopts a two-stage pipeline: first generating a sparse voxelized geometry anchor, then producing detailed geometry using a rectified flow transformer. Our method is simple at its core, but supports arbitrary resolution decoding, low-cost training, and flexible inference schemes, achieving state-of-the-art performance on various aspects, and offering a significant step toward scalable, high-quality 3D asset creation.
