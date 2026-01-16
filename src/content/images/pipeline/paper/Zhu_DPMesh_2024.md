---
title: "DPMesh: Exploiting Diffusion Prior for Occluded Human Mesh Recovery"
authors: ["Yixuan Zhu", "Ao Li", "Yansong Tang", "Wenliang Zhao", "Jie Zhou", "Jiwen Lu"]
year: "2024"
conference: "CVPR"
license: ""
tags: ["Diffusion", "Human", "Mesh Recovery"]
image: "Zhu_DPMesh_2024.webp"
paper: "https://openaccess.thecvf.com/content/CVPR2024/html/Zhu_DPMesh_Exploiting_Diffusion_Prior_for_Occluded_Human_Mesh_Recovery_CVPR_2024_paper.html"
code: "https://github.com/EternalEvan/DPMesh"
project: "https://eternalevan.github.io/dpmesh-proj"
bibtex: "@inproceedings{zhu2024dpmesh,
  title={Dpmesh: Exploiting diffusion prior for occluded human mesh recovery},
  author={Zhu, Yixuan and Li, Ao and Tang, Yansong and Zhao, Wenliang and Zhou, Jie and Lu, Jiwen},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  pages={1101--1110},
  year={2024}
}"
---

The recovery of occluded human meshes poses challenges for current methods due to the difficulty in extracting effective image features under severe occlusion. In this paper we introduce DPMesh an innovative framework for occluded human mesh recovery that capitalizes on the profound knowledge about object structure and spatial relationships embedded in a pre-trained text-to-image diffusion model. Unlike previous methods reliant on conventional backbones for vanilla feature extraction DPMesh seamlessly integrates the pre-trained denoising U-Net with potent priors as its image backbone and performs a single-step inference to provide occlusion-aware information. To enhance the perception capability for occluded poses DPMesh incorporates judicious guidance via condition injection which produces effective controls from 2D observations for the denoising U-Net. Furthermore we explore a dedicated noisy key-point reasoning approach to mitigate disturbances arising from occlusion and crowded scenarios. This strategy fully unleashes the perceptual capability of the diffusion prior thereby enhancing accuracy. Extensive quantitative and qualitative experiments affirm the efficacy of our framework as we outperform state-of-the-art methods on both occlusion-specific and standard datasets underscoring its ability to achieve precise and robust 3D human mesh recovery particularly in challenging scenarios involving occlusion and crowded scenes.
