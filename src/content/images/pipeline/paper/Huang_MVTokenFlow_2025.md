---
title: "MVTokenFlow: High-quality 4D Content Generation using Multiview Token Flow"
authors: ["Hanzhuo Huang", "Yuan Liu", "Ge Zheng", "Jiepeng Wang", "Zhiyang Dou", "Sibei Yang"]
year: "2025"
conference: "ICLR"
license: "CC BY"
tags: ["Diffusion", "Generation", "4D"]
image: "Huang_MVTokenFlow_2025.jpg"
paper: "https://arxiv.org/pdf/2502.11697"
code: "https://github.com/SooLab/MVTokenFlow"
project: "https://soolab.github.io/MVTokenFlow/"
bibtex: "@article{huang2025mvtokenflow,
  title={Mvtokenflow: High-quality 4d content generation using multiview token flow},
  author={Huang, Hanzhuo and Liu, Yuan and Zheng, Ge and Wang, Jiepeng and Dou, Zhiyang and Yang, Sibei},
  journal={arXiv preprint arXiv:2502.11697},
  year={2025}
}"
---

In this paper, we present MVTokenFlow for high-quality 4D content creation from monocular videos. Recent advancements in generative models such as video diffusion models and multiview diffusion models enable us to create videos or 3D models. However, extending these generative models for dynamic 4D content creation is still a challenging task that requires the generated content to be consistent spatially and temporally. To address this challenge, MVTokenFlow utilizes the multiview diffusion model to generate multiview images on different timesteps, which attains spatial consistency across different viewpoints and allows us to reconstruct a reasonable coarse 4D field. Then, MVTokenFlow further regenerates all the multiview images using the rendered 2D flows as guidance. The 2D flows effectively associate pixels from different timesteps and improve the temporal consistency by reusing tokens in the regeneration process. Finally, the regenerated images are spatiotemporally consistent and utilized to refine the coarse 4D field to get a high-quality 4D field. Experiments demonstrate the effectiveness of our design and show significantly improved quality than baseline methods.
