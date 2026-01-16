---
title: "HiFi4G: High-Fidelity Human Performance Rendering via Compact Gaussian Splatting"
authors: ["Yuheng Jiang", "Zhehao Shen", "Penghao Wang", "Zhuo Su", "Yu Hong", "Yingliang Zhang", "Jingyi Yu", "Lan Xu"]
year: "2024"
conference: "CVPR"
license: ""
tags: ["3DGS", "Human", "Compression"]
image: "Jiang_HiFi4G_2024.webp"
paper: "https://arxiv.org/pdf/2312.03461"
code: ""
project: "https://nowheretrix.github.io/HiFi4G/"
bibtex: "@inproceedings{jiang2024hifi4g,
  title={Hifi4g: High-fidelity human performance rendering via compact gaussian splatting},
  author={Jiang, Yuheng and Shen, Zhehao and Wang, Penghao and Su, Zhuo and Hong, Yu and Zhang, Yingliang and Yu, Jingyi and Xu, Lan},
  booktitle={Proceedings of the IEEE/CVF conference on computer vision and pattern recognition},
  pages={19734--19745},
  year={2024}
}"
---

We have recently seen tremendous progress in photo-real human modeling and rendering. Yet, efficiently rendering realistic human performance and integrating it into the rasterization pipeline remains challenging. In this paper, we present HiFi4G, an explicit and compact Gaussian-based approach for high-fidelity human performance rendering from dense footage. Our core intuition is to marry the 3D Gaussian representation with non-rigid tracking, achieving a compact and compression-friendly representation. We first propose a dual-graph mechanism to obtain motion priors, with a coarse deformation graph for effective initialization and a fine-grained Gaussian graph to enforce subsequent constraints. Then, we utilize a 4D Gaussian optimization scheme with adaptive spatial-temporal regularizers to effectively balance the non-rigid prior and Gaussian updating. We also present a companion compression scheme with residual compensation for immersive experiences on various platforms. It achieves a substantial compression rate of approximately 25 times, with less than 2MB of storage per frame. Extensive experiments demonstrate the effectiveness of our approach, which significantly outperforms existing approaches in terms of optimization speed, rendering quality, and storage overhead.
