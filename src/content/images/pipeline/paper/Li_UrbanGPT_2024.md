---
title: "UrbanGPT: Spatio-Temporal Large Language Models"
authors: ["Zhonghang Li", "Lianghao Xia", "Jiabin Tang", "Yong Xu", "Lei Shi", "Long Xia", "Dawei Yin", "Chao Huang"]
year: "2024"
conference: "KDD"
license: ""
tags: ["LLM","Urban"]
image: "Li_UrbanGPT_2024.webp"
paper: "https://arxiv.org/pdf/2403.00813"
code: "https://github.com/HKUDS/UrbanGPT?tab=readme-ov-file"
project: "https://urban-gpt.github.io/"
bibtex: "@inproceedings{li2024urbangpt,
  title={Urbangpt: Spatio-temporal large language models},
  author={Li, Zhonghang and Xia, Lianghao and Tang, Jiabin and Xu, Yong and Shi, Lei and Xia, Long and Yin, Dawei and Huang, Chao},
  booktitle={Proceedings of the 30th ACM SIGKDD Conference on Knowledge Discovery and Data Mining},
  pages={5351--5362},
  year={2024}
}"
---

Spatio-temporal prediction aims to forecast and gain insights into the ever-changing dynamics of urban environments across both time and space. Its purpose is to anticipate future patterns, trends, and events in diverse facets of urban life, including transportation, population movement, and crime rates. Although numerous efforts have been dedicated to developing neural network techniques for accurate predictions on spatio-temporal data, it is important to note that many of these methods heavily depend on having sufficient labeled data to generate precise spatio-temporal representations. Unfortunately, the issue of data scarcity is pervasive in practical urban sensing scenarios. Consequently, it becomes necessary to build a spatio-temporal model with strong generalization capabilities across diverse spatio-temporal learning scenarios. Taking inspiration from the remarkable achievements of large language models (LLMs), our objective is to create a spatio-temporal LLM that can exhibit exceptional generalization capabilities across a wide range of downstream urban tasks. To achieve this objective, we present the UrbanGPT, which seamlessly integrates a spatio-temporal dependency encoder with the instruction-tuning paradigm. This integration enables LLMs to comprehend the complex inter-dependencies across time and space, facilitating more comprehensive and accurate predictions under data scarcity. To validate the effectiveness of our approach, we conduct extensive experiments on various public datasets, covering different spatio-temporal prediction tasks. The results consistently demonstrate that our UrbanGPT, with its carefully designed architecture, consistently outperforms state-of-the-art baselines. These findings highlight the potential of building large language models for spatio-temporal learning, particularly in zero-shot scenarios where labeled data is scarce.
