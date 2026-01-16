---
title: "CityGS-X: A Scalable Architecture for Efficient and Geometrically Accurate Large-Scale Scene Reconstruction"
authors: ["Yuanyuan Gao", "Hao Li", "Jiaqi Chen", "Zhengyu Zou", "Zhihang Zhong", "Dingwen Zhang", "Xiao Sun", "Junwei Han"]
year: "2025"
conference: "arXiv"
license: "CC BY"
tags: ["3DGS", "Reconstruction", "Large Scale"]
image: "Gao_CityGSX_2025.jpg"
paper: "https://arxiv.org/pdf/2503.23044"
code: "https://github.com/gyy456/CityGS-X"
project: "https://lifuguan.github.io/CityGS-X/"
bibtex: "@article{gao2025citygs,
  title={Citygs-x: A scalable architecture for efficient and geometrically accurate large-scale scene reconstruction},
  author={Gao, Yuanyuan and Li, Hao and Chen, Jiaqi and Zou, Zhengyu and Zhong, Zhihang and Zhang, Dingwen and Sun, Xiao and Han, Junwei},
  journal={arXiv preprint arXiv:2503.23044},
  year={2025}
}"
---

Despite its significant achievements in large-scale scene reconstruction, 3D Gaussian Splatting still faces substantial challenges, including slow processing, high computational costs, and limited geometric accuracy. These core issues arise from its inherently unstructured design and the absence of efficient parallelization. To overcome these challenges simultaneously, we introduce CityGS-X, a scalable architecture built on a novel parallelized hybrid hierarchical 3D representation (PH^2-3D). As an early attempt, CityGS-X abandons the cumbersome merge-and-partition process and instead adopts a newly-designed batch-level multi-task rendering process. This architecture enables efficient multi-GPU rendering through dynamic Level-of-Detail voxel allocations, significantly improving scalability and performance. Through extensive experiments, CityGS-X consistently outperforms existing methods in terms of faster training times, larger rendering capacities, and more accurate geometric details in large-scale scenes. Notably, CityGS-X can train and render a scene with 5,000+ images in just 5 hours using only 4 * 4090 GPUs, a task that would make other alternative methods encounter Out-Of-Memory (OOM) issues and fail completely. This implies that CityGS-X is far beyond the capacity of other existing methods.
