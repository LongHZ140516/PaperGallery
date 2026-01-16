---
title: "Prototype-Aware Heterogeneous Task for Point Cloud Completion"
authors: ["Junshu Tang", "Jiachen Xu", "Jingyu Gong", "Haichuan Song", "Yuan Xie", Lizhuang Ma]
year: "2022"
conference: "arXiv"
license: "CC BY"
tags: ["Point Cloud", "Completion"]
image: "Tang_Prototype_2022.webp"
paper: "https://arxiv.org/pdf/2209.01733"
code: ""
project: ""
bibtex: "@article{tang2022prototype,
  title={Prototype-aware heterogeneous task for point cloud completion},
  author={Tang, Junshu and Xu, Jiachen and Gong, Jingyu and Song, Haichuan and Xie, Yuan and Ma, Lizhuang},
  journal={arXiv preprint arXiv:2209.01733},
  year={2022}
}"
---

Point cloud completion, which aims at recovering original shape information from partial point clouds, has attracted attention on 3D vision community. Existing methods usually succeed in completion for standard shape, while failing to generate local details of point clouds for some non-standard shapes. To achieve desirable local details, guidance from global shape information is of critical importance. In this work, we design an effective way to distinguish standard/non-standard shapes with the help of intra-class shape prototypical representation, which can be calculated by the proposed supervised shape clustering pretext task, resulting in a heterogeneous component w.r.t completion network. The representative prototype, defined as feature centroid of shape categories, can provide global shape guidance, which is referred to as soft-perceptual prior, to inject into downstream completion network by the desired selective perceptual feature fusion module in a multi-scale manner. Moreover, for effective training, we consider difficulty-based sampling strategy to encourage the network to pay more attention to some partial point clouds with fewer geometric information. Experimental results show that our method outperforms other state-of-the-art methods and has strong ability on completing complex geometric shapes.
