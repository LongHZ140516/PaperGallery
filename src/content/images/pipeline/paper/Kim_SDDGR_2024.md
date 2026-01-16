---
title: "SDDGR: Stable Diffusion-based Deep Generative Replay for Class Incremental Object Detection"
authors: ["Junsu Kim", "Hoseong Cho", "Jihyeon Kim", "Yihalem Yimolal Tiruneh", "Seungryul Baek"]
year: "2024"
conference: "CVPR"
license: ""
tags: ["Diffusion","Object Detection"]
image: "Kim_SDDGR_2024.webp"
paper: "https://arxiv.org/abs/2402.17323"
code: ""
project: ""
bibtex: "@inproceedings{kim2024sddgr,
  title={Sddgr: Stable diffusion-based deep generative replay for class incremental object detection},
  author={Kim, Junsu and Cho, Hoseong and Kim, Jihyeon and Tiruneh, Yihalem Yimolal and Baek, Seungryul},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  pages={28772--28781},
  year={2024}
}"
---

In the field of class incremental learning (CIL), generative replay has become increasingly prominent as a method to mitigate the catastrophic forgetting, alongside the continuous improvements in generative models. However, its application in class incremental object detection (CIOD) has been significantly limited, primarily due to the complexities of scenes involving multiple labels. In this paper, we propose a novel approach called stable diffusion deep generative replay (SDDGR) for CIOD. Our method utilizes a diffusion-based generative model with pre-trained text-to-diffusion networks to generate realistic and diverse synthetic images. SDDGR incorporates an iterative refinement strategy to produce high-quality images encompassing old classes. Additionally, we adopt an L2 knowledge distillation technique to improve the retention of prior knowledge in synthetic images. Furthermore, our approach includes pseudo-labeling for old objects within new task images, preventing misclassification as background elements. Extensive experiments on the COCO 2017 dataset demonstrate that SDDGR significantly outperforms existing algorithms, achieving a new state-of-the-art in various CIOD scenarios. The source code will be made available to the public.
