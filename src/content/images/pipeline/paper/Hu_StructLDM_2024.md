---
title: "StructLDM: Structured Latent Diffusion for 3D Human Generation"
authors: ["Tao Hu", "Fangzhou Hong", "Ziwei Liu"]
year: "2024"
conference: "ECCV"
license: "CC BY-NC-SA"
tags: ["Diffusion","3D", "Human"]
image: "Hu_StructLDM_2024.jpg"
paper: "https://arxiv.org/abs/2404.01241"
code: "https://github.com/TaoHuUMD/StructLDM"
project: "https://taohuumd.github.io/projects/StructLDM/"
bibtex: "@inproceedings{hu2024structldm,
  title={Structldm: Structured latent diffusion for 3d human generation},
  author={Hu, Tao and Hong, Fangzhou and Liu, Ziwei},
  booktitle={European Conference on Computer Vision},
  pages={363--381},
  year={2024},
  organization={Springer}
}"
---

Recent 3D human generative models have achieved remarkable progress by learning 3D-aware GANs from 2D images. However, existing 3D human generative methods model humans in a compact 1D latent space, ignoring the articulated structure and semantics of human body topology. In this paper, we explore more expressive and higher-dimensional latent space for 3D human modeling and propose StructLDM, a diffusion-based unconditional 3D human generative model that is learned from 2D images. StructLDM solves the challenges imposed due to the high-dimensional growth of latent space with three key designs: 1) A semantic structured latent space defined on the dense surface manifold of a statistical human body template. 2) A structured 3D-aware auto-decoder that factorizes the global latent space into several semantic body parts parameterized by a set of conditional structured local NeRFs anchored to the body template, which embeds the properties learned from the 2D training data and can be decoded to render view-consistent humans under different poses and clothing styles. 3) A structured latent diffusion model for generative human appearance sampling. Extensive experiments validate StructLDM's state-of-the-art generation performance and illustrate the expressiveness of the structured latent space over the well-adopted 1D latent space. Notably, StructLDM enables different levels of controllable 3D human generation and editing, including pose/view/shape control, and high-level tasks including compositional generations, part-aware clothing editing, 3D virtual try-on, etc.
