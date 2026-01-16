---
title: "MoSca: Dynamic Gaussian Fusion from Casual Videos via 4D Motion Scaffolds"
authors: ["Jiahui Lei", "Yijia Weng", "Adam Harley", "Leonidas Guibas", "Kostas Daniilidis"]
year: "2024"
conference: "CVPR"
license: ""
tags: ["3DGS","4D", "Video"]
image: "Lei_MoSca_2024.webp"
paper: "https://arxiv.org/pdf/2405.17421"
code: "https://github.com/JiahuiLei/MoSca"
project: "https://www.cis.upenn.edu/~leijh/projects/mosca/"
bibtex: "@inproceedings{lei2025mosca,
  title={Mosca: Dynamic gaussian fusion from casual videos via 4d motion scaffolds},
  author={Lei, Jiahui and Weng, Yijia and Harley, Adam W and Guibas, Leonidas and Daniilidis, Kostas},
  booktitle={Proceedings of the Computer Vision and Pattern Recognition Conference},
  pages={6165--6177},
  year={2025}
}"
---

We introduce 4D Motion Scaffolds (MoSca), a neural information processing system designed to reconstruct and synthesize novel views of dynamic scenes from monocular videos captured casually in the wild. To address such a challenging and ill-posed inverse problem, we leverage prior knowledge from foundational vision models, lift the video data to a novel Motion Scaffold (MoSca) representation, which compactly and smoothly encodes the underlying motions / deformations. The scene geometry and appearance are then disentangled from the deformation field, and are encoded by globally fusing the Gaussians anchored onto the MoSca and optimized via Gaussian Splatting. Additionally, camera poses can be seamlessly initialized and refined during the dynamic rendering process, without the need for other pose estimation tools. Experiments demonstrate state-of-the-art performance on dynamic rendering benchmarks.
