---
title: "SIFU: Side-view Conditioned Implicit Function for Real-world Usable Clothed Human Reconstruction"
authors: ["Zechuan Zhang", "Zongxin Yang", "Yi Yang"]
year: "2024"
conference: "CVPR"
license: ""
tags: ["NeRF","Side View Conditioned","Real world"]
image: "Zhang_SIFU_2024.jpg"
paper: "https://arxiv.org/pdf/2312.06704"
code: "https://github.com/River-Zhang/SIFU"
project: "https://river-zhang.github.io/SIFU-projectpage/"
bibtex: "@inproceedings{zhang2024sifu,
  title={Sifu: Side-view conditioned implicit function for real-world usable clothed human reconstruction},
  author={Zhang, Zechuan and Yang, Zongxin and Yang, Yi},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  pages={9936--9947},
  year={2024}
}"
---

Creating high-quality 3D models of clothed humans from single images for real-world applications is crucial. Despite recent advancements, accurately reconstructing humans in complex poses or with loose clothing from in-the-wild images, along with predicting textures for unseen areas, remains a significant challenge. A key limitation of previous methods is their insufficient prior guidance in transitioning from 2D to 3D and in texture prediction. In response, we introduce SIFU (Side-view Conditioned Implicit Function for Real-world Usable Clothed Human Reconstruction), a novel approach combining a Side-view Decoupling Transformer with a 3D Consistent Texture Refinement pipeline.SIFU employs a cross-attention mechanism within the transformer, using SMPL-X normals as queries to effectively decouple side-view features in the process of mapping 2D features to 3D. This method not only improves the precision of the 3D models but also their robustness, especially when SMPL-X estimates are not perfect. Our texture refinement process leverages text-to-image diffusion-based prior to generate realistic and consistent textures for invisible views. Through extensive experiments, SIFU surpasses SOTA methods in both geometry and texture reconstruction, showcasing enhanced robustness in complex scenarios and achieving an unprecedented Chamfer and P2S measurement. Our approach extends to practical applications such as 3D printing and scene building, demonstrating its broad utility in real-world scenarios.
