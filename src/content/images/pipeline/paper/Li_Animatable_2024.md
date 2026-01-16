---
title: "Animatable Gaussians: Learning Pose-dependent Gaussian Maps for High-fidelity Human Avatar Modeling"
authors: ["Zhe Li", "Yipengjing Sun", "Zerong Zheng", "Lizhen Wang", "Shengping Zhang", "Yebin Liu"]
year: "2024"
conference: "CVPR"
license: ""
tags: ["3DGS", "Avatar", "Animate"]
image: "Li_Animatable_2024.webp"
paper: "https://arxiv.org/pdf/2311.16096.pdf"
code: "https://github.com/lizhe00/AnimatableGaussians"
project: "https://animatable-gaussians.github.io/relight/"
bibtex: "@inproceedings{li2024animatable,
  title={Animatable gaussians: Learning pose-dependent gaussian maps for high-fidelity human avatar modeling},
  author={Li, Zhe and Zheng, Zerong and Wang, Lizhen and Liu, Yebin},
  booktitle={Proceedings of the IEEE/CVF conference on computer vision and pattern recognition},
  pages={19711--19722},
  year={2024}
}}"
---

Modeling animatable human avatars from RGB videos is a long-standing and challenging problem. Recent works usually adopt MLP-based neural radiance fields (NeRF) to represent 3D humans, but it remains difficult for pure MLPs to regress pose-dependent garment details. To this end, we introduce Animatable Gaussians, a new avatar representation that leverages powerful 2D CNNs and 3D Gaussian splatting to create high-fidelity avatars. To associate 3D Gaussians with the animatable avatar, we learn a parametric template from the input videos, and then parameterize the template on two front & back canonical Gaussian maps where each pixel represents a 3D Gaussian. The learned template is adaptive to the wearing garments for modeling looser clothes like dresses. Such template-guided 2D parameterization enables us to employ a powerful StyleGAN-based CNN to learn the pose-dependent Gaussian maps for modeling detailed dynamic appearances. Furthermore, we introduce a pose projection strategy for better generalization given novel poses. To tackle the realistic relighting of animatable avatars, we introduce physically-based rendering into the avatar representation for decomposing avatar materials and environment illumination. Overall, our method can create lifelike avatars with dynamic, realistic, generalized and relightable appearances. Experiments show that our method outperforms other state-of-the-art approaches.