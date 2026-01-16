---
title: "Discrete Prior-based Temporal-coherent Content Prediction for Blind Face Video Restoration"
authors: ["Lianxin Xie", "Bingbing Zheng", "Wen Xue", "Yunfei Zhang", "Le Jiang", "Ruotao Xu", "Si Wu", "Hau-San Wong"]
year: "2025"
conference: "AAAI"
license: ""
tags: ["Video", "Restoration", "Face"]
image: "Xie_Discrete_2025.webp"
paper: "https://arxiv.org/abs/2501.09960"
code: "https://github.com/lxxie298/DP-TempCoh"
project: ""
bibtex: "@inproceedings{xie2025discrete,
  title={Discrete Prior-Based Temporal-Coherent Content Prediction for Blind Face Video Restoration},
  author={Xie, Lianxin and Zheng, Bingbing and Xue, Wen and Zhang, Yunfei and Jiang, Le and Xu, Ruotao and Wu, Si and Wong, Hau-San},
  booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},
  volume={39},
  number={8},
  pages={8736--8744},
  year={2025}
}"
---

Blind face video restoration aims to restore high-fidelity details from videos subjected to complex and unknown degradations. This task poses a significant challenge of managing temporal heterogeneity while at the same time maintaining stable face attributes. In this paper, we introduce a Discrete Prior-based Temporal-Coherent content prediction transformer to address the challenge, and our model is referred to as DP-TempCoh. Specifically, we incorporate a spatial-temporal-aware content prediction module to synthesize high-quality content from discrete visual priors, conditioned on degraded video tokens. To further enhance the temporal coherence of the predicted content, a motion statistics modulation module is designed to adjust the content, based on discrete motion priors in terms of cross-frame mean and variance. As a result, the statistics of the predicted content can match with that of real videos over time. By performing extensive experiments, we verify the effectiveness of the design elements and demonstrate the superior performance of our DP-TempCoh in both synthetically and naturally degraded video restoration.
