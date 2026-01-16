---
title: "Structured 3D Latents for Scalable and Versatile 3D Generation"
authors: ["Jianfeng Xiang", "Zelong Lv", "Sicheng Xu", "Yu Deng", "Ruicheng Wang", "Bowen Zhang", "Dong Chen", "Xin Tong", "Jiaolong Yang"]
year: "2024"
conference: "CVPR"
license: ""
tags: ["3DGS","3D", "Generation"]
image: "Xiang_Trellis_2024.jpg"
paper: "https://arxiv.org/pdf/2412.01506"
code: "https://github.com/Microsoft/TRELLIS"
project: "https://trellis3d.github.io"
bibtex: "@inproceedings{xiang2025structured,
  title={Structured 3d latents for scalable and versatile 3d generation},
  author={Xiang, Jianfeng and Lv, Zelong and Xu, Sicheng and Deng, Yu and Wang, Ruicheng and Zhang, Bowen and Chen, Dong and Tong, Xin and Yang, Jiaolong},
  booktitle={Proceedings of the Computer Vision and Pattern Recognition Conference},
  pages={21469--21480},
  year={2025}
}"
---

We introduce a novel 3D generation method for versatile and high-quality 3D asset creation. The cornerstone is a unified Structured LATent (SLAT) representation which allows decoding to different output formats, such as Radiance Fields, 3D Gaussians, and meshes. This is achieved by integrating a sparsely-populated 3D grid with dense multiview visual features extracted from a powerful vision foundation model, comprehensively capturing both structural (geometry) and textural (appearance) information while maintaining flexibility during decoding. We employ rectified flow transformers tailored for SLAT as our 3D generation models and train models with up to 2 billion parameters on a large 3D asset dataset of 500K diverse objects. Our model generates high-quality results with text or image conditions, significantly surpassing existing methods, including recent ones at similar scales. We showcase flexible output format selection and local 3D editing capabilities which were not offered by previous models.
