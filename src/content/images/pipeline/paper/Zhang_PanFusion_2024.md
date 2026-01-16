---
title: "Taming Stable Diffusion for Text to 360° Panorama Image Generation"
authors: ["Cheng Zhang", "Qianyi Wu", "Camilo Cruz Gambardella", "Xiaoshui Huang", "Dinh Phung", "Wanli Ouyang","Jianfei Cai"]
year: "2024"
conference: "CVPR"
license: ""
tags: ["Diffusion","Panorama", "Generation"]
image: "Zhang_PanFusion_2024.webp"
paper: "https://arxiv.org/abs/2404.07949"
code: "https://github.com/chengzhag/PanFusion"
project: "https://chengzhag.github.io/publication/panfusion/"
bibtex: "@inproceedings{zhang2024taming,
  title={Taming stable diffusion for text to 360 panorama image generation},
  author={Zhang, Cheng and Wu, Qianyi and Gambardella, Camilo Cruz and Huang, Xiaoshui and Phung, Dinh and Ouyang, Wanli and Cai, Jianfei},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  pages={6347--6357},
  year={2024}
}"
---

Generative models, e.g., Stable Diffusion, have enabled the creation of photorealistic images from text prompts. Yet, the generation of 360-degree panorama images from text remains a challenge, particularly due to the dearth of paired text-panorama data and the domain gap between panorama and perspective images. In this paper, we introduce a novel dual-branch diffusion model named PanFusion to generate a 360-degree image from a text prompt. We leverage the stable diffusion model as one branch to provide prior knowledge in natural image generation and register it to another panorama branch for holistic image generation. We propose a unique cross-attention mechanism with projection awareness to minimize distortion during the collaborative denoising process. Our experiments validate that PanFusion surpasses existing methods and, thanks to its dual-branch structure, can integrate additional constraints like room layout for customized panorama outputs.
