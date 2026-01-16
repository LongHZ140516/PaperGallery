---
title: "FastScene: Text-Driven Fast 3D Indoor Scene Generation via Panoramic Gaussian Splatting"
authors: ["Yikun Ma", "Dandan Zhan", "Zhi Jin"]
year: "2024"
conference: "IJCAI"
license: ""
tags: ["3DGS", "Panoramic", "Generation"]
image: "Ma_FastScene_2024.webp"
paper: "https://arxiv.org/pdf/2405.05768"
code: "https://github.com/Mr-Ma-yikun/FastScene"
project: ""
bibtex: "@article{ma2024fastscene,
  title={Fastscene: Text-driven fast 3d indoor scene generation via panoramic gaussian splatting},
  author={Ma, Yikun and Zhan, Dandan and Jin, Zhi},
  journal={arXiv preprint arXiv:2405.05768},
  year={2024}
}"
---

Text-driven 3D indoor scene generation holds broad applications, ranging from gaming and smart homes to AR/VR applications. Fast and high-fidelity scene generation is paramount for ensuring user-friendly experiences. However, existing methods are characterized by lengthy generation processes or necessitate the intricate manual specification of motion parameters, which introduces inconvenience for users. Furthermore, these methods often rely on narrow-field viewpoint iterative generations, compromising global consistency and overall scene quality. To address these issues, we propose FastScene, a framework for fast and higher-quality 3D scene generation, while maintaining the scene consistency. Specifically, given a text prompt, we generate a panorama and estimate its depth, since the panorama encompasses information about the entire scene and exhibits explicit geometric constraints. To obtain high-quality novel views, we introduce the Coarse View Synthesis (CVS) and Progressive Novel View Inpainting (PNVI) strategies, ensuring both scene consistency and view quality. Subsequently, we utilize Multi-View Projection (MVP) to form perspective views, and apply 3D Gaussian Splatting (3DGS) for scene reconstruction. Comprehensive experiments demonstrate FastScene surpasses other methods in both generation speed and quality with better scene consistency. Notably, guided only by a text prompt, FastScene can generate a 3D scene within a mere 15 minutes, which is at least one hour faster than state-of-the-art methods, making it a paradigm for user-friendly scene generation.
