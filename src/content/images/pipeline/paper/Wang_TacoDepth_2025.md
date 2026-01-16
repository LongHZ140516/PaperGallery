---
title: "TacoDepth: Towards Efficient Radar-Camera Depth Estimation with One-stage Fusion"
authors: ["Yiran Wang", "Jiaqi Li", "Chaoyi Hong", "Ruibo Li", "Liusheng Sun", "Xiao Song", "Zhe Wang", "Zhiguo Cao", "Guosheng Lin"]
year: "2025"
conference: "CVPR"
license: ""
tags: ["Diffusion","Depth Estimation"]
image: "Wang_TacoDepth_2025.jpg"
paper: "https://arxiv.org/pdf/2504.11773v1"
code: "https://github.com/RaymondWang987/TacoDepth"
project: ""
bibtex: "@inproceedings{wang2025tacodepth,
  title={TacoDepth: Towards Efficient Radar-Camera Depth Estimation with One-stage Fusion},
  author={Wang, Yiran and Li, Jiaqi and Hong, Chaoyi and Li, Ruibo and Sun, Liusheng and Song, Xiao and Wang, Zhe and Cao, Zhiguo and Lin, Guosheng},
  booktitle={Proceedings of the Computer Vision and Pattern Recognition Conference},
  pages={10523--10533},
  year={2025}
}"
---

Radar-Camera depth estimation aims to predict dense and accurate metric depth by fusing input images and Radar data. Model efficiency is crucial for this task in pursuit of real-time processing on autonomous vehicles and robotic platforms. However, due to the sparsity of Radar returns, the prevailing methods adopt multi-stage frameworks with intermediate quasi-dense depth, which are time-consuming and not robust. To address these challenges, we propose TacoDepth, an efficient and accurate Radar-Camera depth estimation model with one-stage fusion. Specifically, the graph-based Radar structure extractor and the pyramid-based Radar fusion module are designed to capture and integrate the graph structures of Radar point clouds, delivering superior model efficiency and robustness without relying on the intermediate depth results. Moreover, TacoDepth can be flexible for different inference modes, providing a better balance of speed and accuracy. Extensive experiments are conducted to demonstrate the efficacy of our method. Compared with the previous state-of-the-art approach, TacoDepth improves depth accuracy and processing speed by 12.8% and 91.8%. Our work provides a new perspective on efficient Radar-Camera depth estimation.
