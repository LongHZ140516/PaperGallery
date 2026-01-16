---
title: "Rethinking Token Reduction for State Space Models"
authors: ["Zheng Zhan", "Yushu Wu", "Zhenglun Kong", "Changdi Yang", "Yifan Gong", "Xuan Shen", "Xue Lin", "Pu Zhao", "Yanzhi Wang"]
year: "2024"
conference: "EMNLP"
license: "CC BY"
tags: ["State Space Models","Mamba"]
image: "Zhan_Rethinking_2024.jpg"
paper: "https://arxiv.org/pdf/2410.14725"
code: ""
project: ""
bibtex: "@article{zhan2024rethinking,
  title={Rethinking token reduction for state space models},
  author={Zhan, Zheng and Wu, Yushu and Kong, Zhenglun and Yang, Changdi and Gong, Yifan and Shen, Xuan and Lin, Xue and Zhao, Pu and Wang, Yanzhi},
  journal={arXiv preprint arXiv:2410.14725},
  year={2024}
}"
---

Recent advancements in State Space Models (SSMs) have attracted significant interest, particularly in models optimized for parallel training and handling long-range dependencies. Architectures like Mamba have scaled to billions of parameters with selective SSM. To facilitate broader applications using Mamba, exploring its efficiency is crucial. While token reduction techniques offer a straightforward post-training strategy, we find that applying existing methods directly to SSMs leads to substantial performance drops. Through insightful analysis, we identify the reasons for this failure and the limitations of current techniques. In response, we propose a tailored, unified post-training token reduction method for SSMs. Our approach integrates token importance and similarity, thus taking advantage of both pruning and merging, to devise a fine-grained intra-layer token reduction strategy. Extensive experiments show that our method improves the average accuracy by 5.7% to 13.1% on six benchmarks with Mamba-2 compared to existing methods, while significantly reducing computational demands and memory requirements.
