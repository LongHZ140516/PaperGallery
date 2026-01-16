---
title: "LoopSparseGS: Loop Based Sparse-View Friendly Gaussian Splatting"
authors: ["Zhenyu Bao", "Guibiao Liao","Kaichen Zhou","Kanglin Liu", "Qing Li","Guoping Qiu"]
year: "2025"
conference: "TPAMI"
license: ""
tags: ["3DGS"]
image: "Bao_LoopSparseGS_2025.jpg"
paper: "https://arxiv.org/pdf/2408.00254"
code: "https://github.com/pcl3dv/LoopSparseGS"
project: "https://zhenybao.github.io/LoopSparseGS/"
bibtex: "@article{bao2025loopsparsegs,
  title={Loopsparsegs: Loop based sparse-view friendly gaussian splatting},
  author={Bao, Zhenyu and Liao, Guibiao and Zhou, Kaichen and Liu, Kanglin and Li, Qing and Qiu, Guoping},
  journal={IEEE Transactions on Image Processing},
  year={2025},
  publisher={IEEE}
}"
---

Despite the photorealistic novel view synthesis (NVS) performance achieved by the original 3D Gaussian splatting (3DGS), its rendering quality significantly degrades with sparse input views. This performance drop is mainly caused by the limited number of initial points generated from the sparse input, insufficient supervision during the training process, and inadequate regularization of the oversized Gaussian ellipsoids. To handle these issues, we propose the LoopSparseGS, a loop-based 3DGS framework for the sparse novel view synthesis task. In specific, we propose a loop-based Progressive Gaussian Initialization (PGI) strategy that could iteratively densify the initialized point cloud using the rendered pseudo images during the training process. Then, the sparse and reliable depth from the Structure from Motion, and the window-based dense monocular depth are leveraged to provide precise geometric supervision via the proposed Depth-alignment Regularization (DAR). Additionally, we introduce a novel Sparse-friendly Sampling (SFS) strategy to handle oversized Gaussian ellipsoids leading to large pixel errors. Comprehensive experiments on four datasets demonstrate that LoopSparseGS outperforms existing state-of-the-art methods for sparse-input novel view synthesis, across indoor, outdoor, and object-level scenes with various image resolutions.
