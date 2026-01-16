---
title: "Real-time Photorealistic Dynamic Scene Representation and Rendering with 4D Gaussian Splatting"
authors: ["Zeyu Yang", "Hongye Yang", "Zijie Pan", "Xiatian Zhu", "Li Zhang"]
year: "2024"
conference: "ICLR"
license: "CC BY"
tags: ["4DGS", "Dynamic", "Real-Time"]
image: "Yang_4DGS_2024.webp"
paper: "https://arxiv.org/pdf/2310.10642"
code: "https://github.com/fudan-zvg/4d-gaussian-splatting"
project: "https://fudan-zvg.github.io/4d-gaussian-splatting/"
bibtex: "@article{yang2023real,
  title={Real-time photorealistic dynamic scene representation and rendering with 4d gaussian splatting},
  author={Yang, Zeyu and Yang, Hongye and Pan, Zijie and Zhang, Li},
  journal={arXiv preprint arXiv:2310.10642},
  year={2023}
}"
---

Reconstructing dynamic 3D scenes from 2D images and generating diverse views over time is challenging due to scene complexity and temporal dynamics. Despite advancements in neural implicit models, limitations persist: (i) Inadequate Scene Structure: Existing methods struggle to reveal the spatial and temporal structure of dynamic scenes from directly learning the complex 6D plenoptic function. (ii) Scaling Deformation Modeling: Explicitly modeling scene element deformation becomes impractical for complex dynamics. To address these issues, we consider the spacetime as an entirety and propose to approximate the underlying spatio-temporal 4D volume of a dynamic scene by optimizing a collection of 4D primitives, with explicit geometry and appearance modeling. Learning to optimize the 4D primitives enables us to synthesize novel views at any desired time with our tailored rendering routine. Our model is conceptually simple, consisting of a 4D Gaussian parameterized by anisotropic ellipses that can rotate arbitrarily in space and time, as well as view-dependent and time-evolved appearance represented by the coefficient of 4D spherindrical harmonics. This approach offers simplicity, flexibility for variable-length video and end-to-end training, and efficient real-time rendering, making it suitable for capturing complex dynamic scene motions. Experiments across various benchmarks, including monocular and multi-view scenarios, demonstrate our 4DGS model's superior visual quality and efficiency.