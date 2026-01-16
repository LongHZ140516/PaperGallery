---
title: "Direct3D‑S2: Gigascale 3D Generation Made Easy with Spatial Sparse Attention"
authors: ["Shuang Wu", "Youtian Lin", "Feihu Zhang", "Yifei Zeng", "Yikang Yang", "Yajie Bao", "Jiachen Qian", "Siyu Zhu", "Philip Torr", "Xun Cao", "Yao Yao"]
year: "2025"
conference: "NeurIPS"
license: "CC BY"
tags: ["Diffusion", "3D", "Generation"]
image: "Wu_Direct3DS2_2025.webp"
paper: "https://arxiv.org/pdf/2505.17412"
code: "https://github.com/DreamTechAI/Direct3D-S2?tab=readme-ov-file"
project: "https://nju-3dv.github.io/projects/Direct3D-S2/"
bibtex: "@article{wu2025direct3d,
  title={Direct3d-s2: Gigascale 3d generation made easy with spatial sparse attention},
  author={Wu, Shuang and Lin, Youtian and Zhang, Feihu and Zeng, Yifei and Yang, Yikang and Bao, Yajie and Qian, Jiachen and Zhu, Siyu and Cao, Xun and Torr, Philip and others},
  journal={arXiv preprint arXiv:2505.17412},
  year={2025}
}"
---

Generating high resolution 3D shapes using volumetric representations such as Signed Distance Functions presents substantial computational and memory challenges. We introduce Direct3D S2, a scalable 3D generation framework based on sparse volumes that achieves superior output quality with dramatically reduced training costs. Our key innovation is the Spatial Sparse Attention mechanism, which greatly enhances the efficiency of Diffusion Transformer computations on sparse volumetric data. SSA allows the model to effectively process large token sets within sparse volumes, significantly reducing computational overhead and achieving a 3.9x speedup in the forward pass and a 9.6x speedup in the backward pass. Our framework also includes a variational autoencoder that maintains a consistent sparse volumetric format across input, latent, and output stages. Compared to previous methods with heterogeneous representations in 3D VAE, this unified design significantly improves training efficiency and stability. Our model is trained on public available datasets, and experiments demonstrate that Direct3D S2 not only surpasses state-of-the-art methods in generation quality and efficiency, but also enables training at 1024 resolution using only 8 GPUs, a task typically requiring at least 32 GPUs for volumetric representations at 256 resolution, thus making gigascale 3D generation both practical and accessible.
