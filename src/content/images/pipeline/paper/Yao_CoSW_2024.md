---
title: "CoSW: Conditional Sample Weighting for Smoke Segmentation with Label Noise"
authors: ["Lujian Yao", "Haitao Zhao", "Zhongze Wang", "Kaijie Zhao", "Jingchao Peng"]
year: "2024"
conference: "NeurIPS"
license: "CC BY-NC-ND"
tags: ["Segmentation", "Smoke"]
image: "Yao_CoSW_2024.jpg"
paper: "https://nips.cc/virtual/2024/poster/95170"
code: ""
project: ""
bibtex: "@inproceedings{NEURIPS2024_c1366167,
 author = {Yao, Lujian and Zhao, Haitao and Wang, Zhongze and Zhao, Kaijie and Peng, Jingchao},
 booktitle = {Advances in Neural Information Processing Systems},
 doi = {10.52202/079017-3389},
 editor = {A. Globerson and L. Mackey and D. Belgrave and A. Fan and U. Paquet and J. Tomczak and C. Zhang},
 pages = {106743--106767},
 publisher = {Curran Associates, Inc.},
 title = {CoSW: Conditional Sample Weighting for Smoke Segmentation with Label Noise},
 url = {https://proceedings.neurips.cc/paper_files/paper/2024/file/c1366167e310460f2386c36152a897d6-Paper-Conference.pdf},
 volume = {37},
 year = {2024}
}
"
---

Smoke segmentation is of great importance in precisely identifying the smoke location, enabling timely fire rescue and gas leak detection. However, due to the visual diversity and blurry edges of the non-grid smoke, noisy labels are almost inevitable in large-scale pixel-level smoke datasets. Noisy labels significantly impact the robustness of the model and may lead to serious accidents. Nevertheless, currently, there are no specific methods for addressing noisy labels in smoke segmentation. Smoke differs from regular objects as its transparency varies, causing inconsistent features in the noisy labels. In this paper, we propose a conditional sample weighting (CoSW). CoSW utilizes a multi-prototype framework, where prototypes serve as prior information to apply different weighting criteria to the different feature clusters. A novel regularized within-prototype entropy (RWE) is introduced to achieve CoSW and stable prototype update. The experiments show that our approach achieves SOTA performance on both real-world and synthetic noisy smoke segmentation datasets.
