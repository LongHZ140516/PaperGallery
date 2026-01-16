---
title: "LAKe-Net: Topology-Aware Point Cloud Completion by Localizing Aligned Keypoints"
authors: ["Junshu Tang", "Zhijun Gong", "Ran Yi", "Yuan Xie", "Lizhuang Ma"]
year: "2022"
conference: "CVPR"
license: "CC BY"
tags: ["Point Cloud", "Completion", "Topology"]
image: "Tang_LAKeNet_2022.jpg"
paper: "https://openaccess.thecvf.com/content/CVPR2022/papers/Tang_LAKe-Net_Topology-Aware_Point_Cloud_Completion_by_Localizing_Aligned_Keypoints_CVPR_2022_paper.pdf"
code: "https://github.com/junshutang/LAKe-Net"
project: ""
bibtex: "@inproceedings{tang2022lake,
  title={Lake-net: Topology-aware point cloud completion by localizing aligned keypoints},
  author={Tang, Junshu and Gong, Zhijun and Yi, Ran and Xie, Yuan and Ma, Lizhuang},
  booktitle={Proceedings of the IEEE/CVF conference on computer vision and pattern recognition},
  pages={1726--1735},
  year={2022}
}"
---

Point cloud completion aims at completing geometric and topological shapes from a partial observation. However, some topology of the original shape is missing, existing methods directly predict the location of complete points, without predicting structured and topological information of the complete shape, which leads to inferior performance. To better tackle the missing topology part, we propose LAKe-Net, a novel topology-aware point cloud completion model by localizing aligned keypoints, with a novel Keypoints-Skeleton-Shape prediction manner. Specifically, our method completes missing topology using three steps: 1) Aligned Keypoint Localization. An asymmetric keypoint locator, including an unsupervised multi-scale keypoint detector and a complete keypoint generator, is proposed for localizing aligned keypoints from complete and partial point clouds. We theoretically prove that the detector can capture aligned keypoints for objects within a sub-category. 2) Surface-skeleton Generation. A new type of skeleton, named Surface-skeleton, is generated from keypoints based on geometric priors to fully represent the topological information captured from keypoints and better recover the local details. 3) Shape Refinement. We design a refinement subnet where multi-scale surface-skeletons are fed into each recursive skeleton-assisted refinement module to assist the completion process. Experimental results show that our method achieves the state-of-the-art performance on point cloud completion.
