---
title: "Modality Decoupling is All You Need: A Simple Solution for Unsupervised Hyperspectral Image Fusion"
authors: ["Songcheng Du", "Yang Zou", "Zixu Wang", "Xingyuan Li", "Ying Li", "Qiang Shen"]
year: "2024"
conference: "arXiv"
license: ""
tags: ["Remote Sensing","Image Fusion"]
image: "DU_Modality_2024.jpg"
paper: "https://arxiv.org/pdf/2412.04802"
code: ""
project: ""
bibtex: "@article{du2024modality,
  title={Modality Decoupling is All You Need: A Simple Solution for Unsupervised Hyperspectral Image Fusion},
  author={Du, Songcheng and Zou, Yang and Wang, Zixu and Li, Xingyuan and Li, Ying and Shen, Qiang},
  journal={arXiv e-prints},
  pages={arXiv--2412},
  year={2024}
}"
---

Hyperspectral Image Fusion (HIF) aims to fuse lowresolution hyperspectral images (LR-HSIs) and highresolution multispectral images (HR-MSIs) to reconstruct high spatial and high spectral resolution images. Current methods typically apply direct fusion from the two modalities without valid supervision, failing to fully perceive the deep modality-complementary information and hence, resulting in a superficial understanding of inter-modality connections. To bridge this gap, we propose a simple and effective solution for unsupervised HIF with an assumption that modality decoupling is essential for HIF. We introduce the modality clustering loss that ensures clear guidance of the modality, decoupling towards modality-shared features while steering clear of modality-complementary ones. Also, we propose an end-to-end Modality-Decoupled SpatialSpectral Fusion (MossFuse) framework that decouples shared and complementary information across modalities and aggregates a concise representation of the LR-HSI and HR-MSI to reduce the modality redundancy. Systematic experiments over multiple datasets demonstrate that our simple and effective approach consistently outperforms the existing HIF methods while requiring considerably fewer parameters with reduced inference time.
