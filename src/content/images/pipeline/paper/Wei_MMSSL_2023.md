---
title: "Multi-Modal Self-Supervised Learning for Recommendation"
authors: ["Wei Wei", "Chao Huang", "Lianghao Xia", "Chuxu Zhang"]
year: "2023"
conference: "WWW"
license: ""
tags: ["Self-Supervised","Multi-Modal"]
image: "Wei_MMSSL_2023.webp"
paper: "https://arxiv.org/pdf/2302.10632"
code: "https://github.com/HKUDS/MMSSL"
project: ""
bibtex: "@inproceedings{wei2023multi,
  title={Multi-modal self-supervised learning for recommendation},
  author={Wei, Wei and Huang, Chao and Xia, Lianghao and Zhang, Chuxu},
  booktitle={Proceedings of the ACM web conference 2023},
  pages={790--800},
  year={2023}
}"
---

The online emergence of multi-modal sharing platforms (eg, TikTok, Youtube) is powering personalized recommender systems to incorporate various modalities (eg, visual, textual and acoustic) into the latent user representations. While existing works on multi-modal recommendation exploit multimedia content features in enhancing item embeddings, their model representation capability is limited by heavy label reliance and weak robustness on sparse user behavior data. Inspired by the recent progress of self-supervised learning in alleviating label scarcity issue, we explore deriving self-supervision signals with effectively learning of modality-aware user preference and cross-modal dependencies. To this end, we propose a new Multi-Modal Self-Supervised Learning (MMSSL) method which tackles two key challenges. Specifically, to characterize the inter-dependency between the user-item collaborative view and item multi-modal semantic view, we design a modality-aware interactive structure learning paradigm via adversarial perturbations for data augmentation. In addition, to capture the effects that user's modality-aware interaction pattern would interweave with each other, a cross-modal contrastive learning approach is introduced to jointly preserve the inter-modal semantic commonality and user preference diversity. Experiments on real-world datasets verify the superiority of our method in offering great potential for multimedia recommendation over various state-of-the-art baselines.
