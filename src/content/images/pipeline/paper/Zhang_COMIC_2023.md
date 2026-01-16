---
title: "Learning in Imperfect Environment: Multi-Label Classification with Long-Tailed Distribution and Partial Labels"
authors: ["Wenqiao Zhang", "Changshuo Liu", "Lingze Zeng", "Beng Chin Ooi", "Siliang Tang", "Yueting Zhuang"]
year: "2023"
conference: "ICCV"
license: ""
tags: ["Classification", "Dataset"]
image: "Zhang_COMIC_2023.webp"
paper: "https://openaccess.thecvf.com/content/ICCV2023/papers/Zhang_Learning_in_Imperfect_Environment_Multi-Label_Classification_with_Long-Tailed_Distribution_and_ICCV_2023_paper.pdf"
code: "https://github.com/wannature/COMIC"
project: ""
bibtex: "@inproceedings{zhang2023learning,
  title={Learning in imperfect environment: Multi-label classification with long-tailed distribution and partial labels},
  author={Zhang, Wenqiao and Liu, Changshuo and Zeng, Lingze and Ooi, Bengchin and Tang, Siliang and Zhuang, Yueting},
  booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision},
  pages={1423--1432},
  year={2023}
}"
---

Conventional multi-label classification (MLC) methods assume that all samples are fully labeled and identically distributed. Unfortunately, this assumption is unrealistic in large-scale MLC data that has long-tailed (LT) distribution and partial labels (PL). To address the problem, we introduce a novel task, Partial labeling and Long-Tailed Multi-Label Classification (PLT-MLC), to jointly consider the above two imperfect learning environments. Not surprisingly, we find that most LT-MLC and PL-MLC approaches fail to solve the PLT-MLC, resulting in significant performance degradation on the two proposed PLT-MLC benchmarks. Therefore, we propose an end-to-end learning framework: \textbf{CO}rrection  \textbf{M}odificat\textbf{I}on  balan\textbf{C}e, abbreviated as \textbf{\method{}}. Our bootstrapping philosophy is to simultaneously correct the missing labels (Correction) with convinced prediction confidence over a class-aware threshold and to learn from these recall labels during training. We next propose a novel multi-focal modifier loss that simultaneously addresses head-tail imbalance and positive-negative imbalance to adaptively modify the attention to different samples (Modification) under the LT class distribution. In addition, we develop a balanced training strategy by distilling the model's learning effect from head and tail samples, and thus design a balanced classifier (Balance) conditioned on the head and tail learning effect to maintain stable performance for all samples. Our experimental study shows that the proposed \method{} significantly outperforms general MLC, LT-MLC and PL-MLC methods in terms of effectiveness and robustness on our newly created PLT-MLC datasets.
