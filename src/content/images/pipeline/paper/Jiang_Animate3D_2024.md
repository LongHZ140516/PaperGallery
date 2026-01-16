---
title: "Animate3D: Animating Any 3D Model with Multi-view Video Diffusion"
authors: ["Yanqin Jiang", "Chaohui Yu", "Chenjie Cao", "Fan Wang", "Weiming Hu", "Jin Gao"]
year: "2024"
conference: "NeurIPS"
license: "CC BY"
tags: ["Diffusion","Animate","3D", "Video"]
image: "Jiang_Animate3D_2024.webp"
paper: "https://arxiv.org/pdf/2407.11398"
code: "https://github.com/yanqinJiang/Animate3D"
project: "https://animate3d.github.io/"
bibtex: "@article{jiang2024animate3d,
  title={Animate3d: Animating any 3d model with multi-view video diffusion},
  author={Jiang, Yanqin and Yu, Chaohui and Cao, Chenjie and Wang, Fan and Hu, Weiming and Gao, Jin},
  journal={Advances in Neural Information Processing Systems},
  volume={37},
  pages={125879--125906},
  year={2024}
}"
---

Recent advances in 4D generation mainly focus on generating 4D content by distilling pre-trained text or single-view image-conditioned models. It is inconvenient for them to take advantage of various off-the-shelf 3D assets with multi-view attributes, and their results suffer from spatiotemporal inconsistency owing to the inherent ambiguity in the supervision signals. In this work, we present Animate3D, a novel framework for animating any static 3D model. The core idea is two-fold: 1) We propose a novel multi-view video diffusion model (MV-VDM) conditioned on multi-view renderings of the static 3D object, which is trained on our presented large-scale multi-view video dataset (MV-Video). 2) Based on MV-VDM, we introduce a framework combining reconstruction and 4D Score Distillation Sampling (4D-SDS) to leverage the multi-view video diffusion priors for animating 3D objects. Specifically, for MV-VDM, we design a new spatiotemporal attention module to enhance spatial and temporal consistency by integrating 3D and video diffusion models. Additionally, we leverage the static 3D model's multi-view renderings as conditions to preserve its identity. For animating 3D models, an effective two-stage pipeline is proposed: we first reconstruct motions directly from generated multi-view videos, followed by the introduced 4D-SDS to refine both appearance and motion. Benefiting from accurate motion learning, we could achieve straightforward mesh animation. Qualitative and quantitative experiments demonstrate that Animate3D significantly outperforms previous approaches.
