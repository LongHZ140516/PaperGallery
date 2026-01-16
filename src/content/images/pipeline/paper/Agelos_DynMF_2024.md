---
title: "DynMF: Neural Motion Factorization for Real-time Dynamic View Synthesis with 3D Gaussian Splatting"
authors: ["Agelos Kratimenos", "Jiahui Lei", "Kostas Daniilidis"]
year: "2024"
conference: "ECCV"
license: ""
tags: ["3DGS", "Real-time", "Motion"]
image: "Agelos_DynMF_2024.jpg"
paper: "https://arxiv.org/pdf/2312.00112.pdf"
code: "https://github.com/agelosk/dynmf"
project: "https://agelosk.github.io/dynmf/"
bibtex: "@inproceedings{kratimenos2024dynmf,
  title={Dynmf: Neural motion factorization for real-time dynamic view synthesis with 3d gaussian splatting},
  author={Kratimenos, Agelos and Lei, Jiahui and Daniilidis, Kostas},
  booktitle={European Conference on Computer Vision},
  pages={252--269},
  year={2024},
  organization={Springer}
}"
---

Accurately and efficiently modeling dynamic scenes and motions is considered so challenging a task due to temporal dynamics and motion complexity. To address these challenges, we propose DynMF, a compact and efficient representation that decomposes a dynamic scene into a few neural trajectories. We argue that the per-point motions of a dynamic scene can be decomposed into a small set of explicit or learned trajectories. Our carefully designed neural framework consisting of a tiny set of learned basis queried only in time allows for rendering speed similar to 3D Gaussian Splatting, surpassing 120 FPS, while at the same time, requiring only double the storage compared to static scenes. Our neural representation adequately constrains the inherently underconstrained motion field of a dynamic scene leading to effective and fast optimization. This is done by biding each point to motion coefficients that enforce the per-point sharing of basis trajectories. By carefully applying a sparsity loss to the motion coefficients, we are able to disentangle the motions that comprise the scene, independently control them, and generate novel motion combinations that have never been seen before. We can reach state-of-the-art render quality within just 5 minutes of training and in less than half an hour, we can synthesize novel views of dynamic scenes with superior photorealistic quality. Our representation is interpretable, efficient, and expressive enough to offer real-time view synthesis of complex dynamic scene motions, in monocular and multi-view scenarios.
