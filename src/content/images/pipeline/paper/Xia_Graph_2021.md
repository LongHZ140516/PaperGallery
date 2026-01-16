---
title: "Graph Meta Network for Multi-Behavior Recommendation"
authors: ["Lianghao Xia", "Yong Xu", "Chao Huang", "Peng Dai", "Liefeng Bo"]
year: "2021"
conference: "SIGIR"
license: ""
tags: ["Graph", "Recommendation"]
image: "Xia_Graph_2021.webp"
paper: "https://doi.org/10.48550/arXiv.2110.03969"
code: "https://github.com/akaxlh/MB-GMN"
project: ""
bibtex: "@inproceedings{xia2021graph,
  title={Graph meta network for multi-behavior recommendation},
  author={Xia, Lianghao and Xu, Yong and Huang, Chao and Dai, Peng and Bo, Liefeng},
  booktitle={Proceedings of the 44th international ACM SIGIR conference on research and development in information retrieval},
  pages={757--766},
  year={2021}
}"
---

Modern recommender systems often embed users and items into low-dimensional latent representations, based on their observed interactions. In practical recommendation scenarios, users often exhibit various intents which drive them to interact with items with multiple behavior types (e.g., click, tag-as-favorite, purchase). However, the diversity of user behaviors is ignored in most of the existing approaches, which makes them difficult to capture heterogeneous relational structures across different types of interactive behaviors. Exploring multi-typed behavior patterns is of great importance to recommendation systems, yet is very challenging because of two aspects: i) The complex dependencies across different types of user-item interactions; ii) Diversity of such multi-behavior patterns may vary by users due to their personalized preference. To tackle the above challenges, we propose a Multi-Behavior recommendation framework with Graph Meta Network to incorporate the multi-behavior pattern modeling into a meta-learning paradigm. Our developed MB-GMN empowers the user-item interaction learning with the capability of uncovering type-dependent behavior representations, which automatically distills the behavior heterogeneity and interaction diversity for recommendations. Extensive experiments on three real-world datasets show the effectiveness of MB-GMN by significantly boosting the recommendation performance as compared to various state-of-the-art baselines. The source code is available athttps://github.com/akaxlh/MB-GMN.
