---
title: "A New Brain Network Construction Paradigm for Brain Disorder Via Diffusion-Based Graph Contrastive Learning"
authors: ["Yongcheng Zong", "Qiankun Zuo", "Michael Kwok-Po Ng", "Baiying Lei", "Shuqiang Wang"]
year: "2024"
conference: "TPAMI"
license: ""
tags: ["Diffusion", "Brain Network", "Graph"]
image: "Zong_Brain_2024.webp"
paper: "https://arxiv.org/abs/2407.18329"
code: ""
project: ""
bibtex: "@article{zong2024new,
  title={A new brain network construction paradigm for brain disorder via diffusion-based graph contrastive learning},
  author={Zong, Yongcheng and Zuo, Qiankun and Ng, Michael Kwok-Po and Lei, Baiying and Wang, Shuqiang},
  journal={IEEE transactions on pattern analysis and machine intelligence},
  year={2024},
  publisher={IEEE}
}"
---

Brain network analysis plays an increasingly important role in studying brain function and the exploring of disease mechanisms. However, existing brain network construction tools have some limitations, including dependency on empirical users, weak consistency in repeated experiments and time-consuming processes. In this work, a diffusion-based brain network pipeline, DGCL is designed for end-to-end construction of brain networks. Initially, the brain region-aware module (BRAM) precisely determines the spatial locations of brain regions by the diffusion process, avoiding subjective parameter selection. Subsequently, DGCL employs graph contrastive learning to optimize brain connections by eliminating individual differences in redundant connections unrelated to diseases, thereby enhancing the consistency of brain networks within the same group. Finally, the node-graph contrastive loss and classification loss jointly constrain the learning process of the model to obtain the reconstructed brain network, which is then used to analyze important brain connections. Validation on two datasets, ADNI and ABIDE, demonstrates that DGCL surpasses traditional methods and other deep learning models in predicting disease development stages. Significantly, the proposed model improves the efficiency and generalization of brain network construction. In summary, the proposed DGCL can be served as a universal brain network construction scheme, which can effectively identify important brain connections through generative paradigms and has the potential to provide disease interpretability support for neuroscience research.
