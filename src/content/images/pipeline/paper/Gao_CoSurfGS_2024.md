---
title: "CoSurfGS: Collaborative 3D Surface Gaussian Splatting with Distributed Learning for Large Scene Reconstruction"
authors: ["Yuanyuan Gao", "Yalun Dai", "Hao Li", "Weicai Ye", "Junyi Chen", "Danpeng Chen", "Dingwen Zhang", "Tong He", "Guofeng Zhang", "Junwei Han"]
year: "2024"
conference: "arXiv"
license: "CC BY-NC-SA"
tags: ["3DGS", "Large Scale", "Reconstruction"]
image: "Gao_CoSurfGS_2024.webp"
paper: "https://arxiv.org/pdf/2412.17612"
code: "https://github.com/zju3dv/CoSurfGS"
project: "https://gyy456.github.io/CoSurfGS/"
bibtex: "@article{gao2024cosurfgs,
  title={Cosurfgs: Collaborative 3d surface gaussian splatting with distributed learning for large scene reconstruction},
  author={Gao, Yuanyuan and Dai, Yalun and Li, Hao and Ye, Weicai and Chen, Junyi and Chen, Danpeng and Zhang, Dingwen and He, Tong and Zhang, Guofeng and Han, Junwei},
  journal={arXiv preprint arXiv:2412.17612},
  year={2024}
}"
---

3D Gaussian Splatting (3DGS) has demonstrated impressive performance in scene reconstruction. However, most existing GS-based surface reconstruction methods focus on 3D objects or limited scenes. Directly applying these methods to large-scale scene reconstruction will pose challenges such as high memory costs, excessive time consumption, and lack of geometric detail, which makes it difficult to implement in practical applications. To address these issues, we propose a multi-agent collaborative fast 3DGS surface reconstruction framework based on distributed learning for large-scale surface reconstruction. Specifically, we develop local model compression (LMC) and model aggregation schemes (MAS) to achieve high-quality surface representation of large scenes while reducing GPU memory consumption. Extensive experiments on Urban3d, MegaNeRF, and BlendedMVS demonstrate that our proposed method can achieve fast and scalable high-fidelity surface reconstruction and photorealistic rendering.
