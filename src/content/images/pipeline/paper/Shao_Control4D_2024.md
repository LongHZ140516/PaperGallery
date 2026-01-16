---
title: "Control4D: Efficient 4D Portrait Editing with Text"
authors: ["Ruizhi Shao", "Jingxiang Sun", "Cheng Peng", "Zerong Zheng", "Boyao Zhou", "Hongwen Zhang", "Yebin Liu"]
year: "2024"
conference: "CVPR"
license: ""
tags: ["4DGS", "Portrait", "Edit"]
image: "Shao_Control4D_2024.jpg"
paper: "https://arxiv.org/pdf/2305.20082"
code: ""
project: "https://control4darxiv.github.io/"
bibtex: "@inproceedings{shao2024control4d,
  title={Control4d: Efficient 4d portrait editing with text},
  author={Shao, Ruizhi and Sun, Jingxiang and Peng, Cheng and Zheng, Zerong and Zhou, Boyao and Zhang, Hongwen and Liu, Yebin},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  pages={4556--4567},
  year={2024}
}"
---

We introduce Control4D, an innovative framework for editing dynamic 4D portraits using text instructions. Our method addresses the prevalent challenges in 4D editing, notably the inefficiencies of existing 4D representations and the inconsistent editing effect caused by diffusion-based editors. We first propose GaussianPlanes, a novel 4D representation that makes Gaussian Splatting more structured by applying plane-based decomposition in 3D space and time. This enhances both efficiency and robustness in 4D editing. Furthermore, we propose to leverage a 4D generator to learn a more continuous generation space from inconsistent edited images produced by the diffusion-based editor, which effectively improves the consistency and quality of 4D editing. Comprehensive evaluation demonstrates the superiority of Control4D, including significantly reduced training time, high-quality rendering, and spatial-temporal consistency in 4D portrait editing.
