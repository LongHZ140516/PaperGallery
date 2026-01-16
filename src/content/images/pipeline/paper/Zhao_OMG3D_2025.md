---
title: "OMG3D: 3D object manipulation in a single image usint generative models"
authors: ["Ruisi Zhao", "Zechuan Zhang", "Zongxin Yang", "Yi Yang"]
year: "2025"
conference: "arXiv"
license: ""
tags: ["Diffusion","Human Visual Perception"]
image: "Zhao_OMG3D_2025.webp"
paper: "https://arxiv.org/pdf/2501.12935v1"
code: ""
project: "https://whalesong-zrs.github.io/OMG3D-projectpage/"
bibtex: "@article{zhao20253d,
  title={3d object manipulation in a single image using generative models},
  author={Zhao, Ruisi and Zhang, Zechuan and Yang, Zongxin and Yang, Yi},
  journal={arXiv preprint arXiv:2501.12935},
  year={2025}
}"
---

Object manipulation in images aims to not only edit the object's presentation but also gift objects with motion. Previous methods encountered challenges in concurrently handling static editing and dynamic generation, while also struggling to achieve fidelity in object appearance and scene lighting. In this work, we introduce \textbf{OMG3D}, a novel framework that integrates the precise geometric control with the generative power of diffusion models, thus achieving significant enhancements in visual performance. Our framework first converts 2D objects into 3D, enabling user-directed modifications and lifelike motions at the geometric level. To address texture realism, we propose CustomRefiner, a texture refinement module that pre-train a customized diffusion model, aligning the details and style of coarse renderings of 3D rough model with the original image, further refine the texture. Additionally, we introduce IllumiCombiner, a lighting processing module that estimates and corrects background lighting to match human visual perception, resulting in more realistic shadow effects. Extensive experiments demonstrate the outstanding visual performance of our approach in both static and dynamic scenarios. Remarkably, all these steps can be done using one NVIDIA 3090.
