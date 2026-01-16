---
title: "AUCSeg: AUC-oriented Pixel-level Long-tail Semantic Segmentation"
authors: ["Boyu Han", "Qianqian Xu", "Zhiyong Yang", "Shilong Bao", "Peisong Wen", "Yangbangyan Jiang", "Qingming Huang"]
year: "2024"
conference: "NeurIPS"
license: "CC BY"
tags: ["Semantic Segmentation", "Pixel-level", "AUC"]
image: "Bo_AUCSeg_2024.webp"
paper: "https://proceedings.neurips.cc/paper_files/paper/2024/file/e574db41163e700545ff4114f96b3d7a-Paper-Conference.pdf"
code: "https://github.com/boyuh/AUCSeg"
project: "https://boyuh.github.io/project/AUCSeg/"
bibtex: "@article{han2024aucseg,
  title={Aucseg: Auc-oriented pixel-level long-tail semantic segmentation},
  author={Han, Boyu and Xu, Qianqian and Yang, Zhiyong and Bao, Shilong and Wen, Peisong and Jiang, Yangbangyan and Huang, Qingming},
  journal={Advances in Neural Information Processing Systems},
  volume={37},
  pages={126863--126907},
  year={2024}
}"
---

The Area Under the ROC Curve (AUC) is a well-known metric for evaluating instance-level long-tail learning problems. In the past two decades, many AUC optimization methods have been proposed to improve model performance under long-tail distributions. In this paper, we explore AUC optimization methods in the context of pixel-level long-tail semantic segmentation, a much more complicated scenario. This task introduces two major challenges for AUC optimization techniques. On one hand, AUC optimization in a pixel-level task involves complex coupling across loss terms, with structured inner-image and pairwise inter-image dependencies, complicating theoretical analysis. On the other hand, we find that mini-batch estimation of AUC loss in this case requires a larger batch size, resulting in an unaffordable space complexity. To address these issues, we develop a pixel-level AUC loss function and conduct a dependency-graph-based theoretical analysis of the algorithm's generalization ability. Additionally, we design a Tail-Classes Memory Bank (T-Memory Bank) to manage the significant memory demand. Finally, comprehensive experiments across various benchmarks confirm the effectiveness of our proposed AUCSeg method. The code is available at https://github.com/boyuh/AUCSeg.
