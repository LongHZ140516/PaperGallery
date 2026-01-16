---
title: "3D-RE-GEN: 3D Reconstruction of Indoor Scenes with a Generative Framework"
authors: ["Tobias Sautter", "Jan-Niklas Dihlmann", "Hendrik P.A. Lensch"]
year: "2025"
conference: "arXiv"
license: "CC BY"
tags: ["3D", "Reconstruction", "Indoor Scene"]
image: "Tobias_3DREGEN_2025.webp"
paper: "https://arxiv.org/abs/2512.17459"
code: "https://github.com/cgtuebingen/3D-RE-GEN"
project: "https://3dregen.jdihlmann.com/"
bibtex: "@article{sautter20253d,
  title={3D-RE-GEN: 3D Reconstruction of Indoor Scenes with a Generative Framework},
  author={Sautter, Tobias and Dihlmann, Jan-Niklas and Lensch, Hendrik},
  journal={arXiv preprint arXiv:2512.17459},
  year={2025}
}"
---

Recent advances in 3D scene generation produce visually appealing output, but current representations hinder artists' workflows that require modifiable 3D textured mesh scenes for visual effects and game development. Despite significant advances, current textured mesh scene reconstruction methods are far from artist ready, suffering from incorrect object decomposition, inaccurate spatial relationships, and missing backgrounds. We present 3D-RE-GEN, a compositional framework that reconstructs a single image into textured 3D objects and a background. We show that combining state of the art models from specific domains achieves state of the art scene reconstruction performance, addressing artists' requirements. Our reconstruction pipeline integrates models for asset detection, reconstruction, and placement, pushing certain models beyond their originally intended domains. Obtaining occluded objects is treated as an image editing task with generative models to infer and reconstruct with scene level reasoning under consistent lighting and geometry. Unlike current methods, 3D-RE-GEN generates a comprehensive background that spatially constrains objects during optimization and provides a foundation for realistic lighting and simulation tasks in visual effects and games. To obtain physically realistic layouts, we employ a novel 4-DoF differentiable optimization that aligns reconstructed objects with the estimated ground plane. 3D-RE-GEN~achieves state of the art performance in single image 3D scene reconstruction, producing coherent, modifiable scenes through compositional generation guided by precise camera recovery and spatial optimization.
