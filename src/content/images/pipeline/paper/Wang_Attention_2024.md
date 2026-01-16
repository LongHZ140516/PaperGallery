---
title: "Attention-Driven Training-Free Efficiency Enhancement of Diffusion Models"
authors: ["Hongjie Wang", "Difan Liu", "Yan Kang", "Yijun Li", "Zhe Lin", "Niraj K. Jha", "Yuchen Liu"]
year: "2024"
conference: "CVPR"
license: ""
tags: ["Diffusion", "Driven"]
image: "Wang_Attention_2024.jpg"
paper: "https://openaccess.thecvf.com/content/CVPR2024/papers/Wang_Attention-Driven_Training-Free_Efficiency_Enhancement_of_Diffusion_Models_CVPR_2024_paper.pdf"
code: ""
project: "https://atedm.github.io/"
bibtex: "@inproceedings{wang2024attention,
  title={Attention-driven training-free efficiency enhancement of diffusion models},
  author={Wang, Hongjie and Liu, Difan and Kang, Yan and Li, Yijun and Lin, Zhe and Jha, Niraj K and Liu, Yuchen},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  pages={16080--16089},
  year={2024}
}"
---

Diffusion models (DMs) have exhibited superior performance in generating high-quality and diverse images. However this exceptional performance comes at the cost of expensive generation process particularly due to the heavily used attention module in leading models. Existing works mainly adopt a retraining process to enhance DM efficiency. This is computationally expensive and not very scalable. To this end we introduce the Attention-driven Training-free Efficient Diffusion Model (AT-EDM) framework that leverages attention maps to perform run-time pruning of redundant tokens without the need for any retraining. Specifically for single-denoising-step pruning we develop a novel ranking algorithm Generalized Weighted Page Rank (G-WPR) to identify redundant tokens and a similarity-based recovery method to restore tokens for the convolution operation. In addition we propose a Denoising-Steps-Aware Pruning (DSAP) approach to adjust the pruning budget across different denoising timesteps for better generation quality. Extensive evaluations show that AT-EDM performs favorably against prior art in terms of efficiency (e.g. 38.8% FLOPs saving and up to 1.53x speed-up over Stable Diffusion XL) while maintaining nearly the same FID and CLIP scores as the full model.
