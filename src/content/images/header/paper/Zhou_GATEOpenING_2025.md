---
title: "GATE OpenING: A Comprehensive Benchmark for Judging Open-ended Interleaved Image-Text Generation"
authors: ["Pengfei Zhou", "Xiaopeng Peng", "Jiajun Song", "Chuanhao Li", "Zhaopan Xu", "Yue Yang", "Ziyao Guo", "Hao Zhang", "Yuqi Lin", "Yefei He", "Lirui Zhao", "Shuo Liu", "Tianhua Li", "Yuxuan Xie", "Xiaojun Chang", "Yu Qiao", "Wenqi Shao", "Kaipeng Zhang"]
year: "2025"
conference: "CVPR"
license: ""
tags: ["Dataset", "Generation", "Image-Text"]
image: "Zhou_GATEOpenING_2025.jpg"
paper: "https://arxiv.org/pdf/2411.18499"
code: "https://github.com/LanceZPF/OpenING"
project: "https://opening-benchmark.github.io/"
bibtex: "@inproceedings{zhou2025opening,
  title={OpenING: A Comprehensive Benchmark for Judging Open-ended Interleaved Image-Text Generation},
  author={Zhou, Pengfei and Peng, Xiaopeng and Song, Jiajun and Li, Chuanhao and Xu, Zhaopan and Yang, Yue and Guo, Ziyao and Zhang, Hao and Lin, Yuqi and He, Yefei and others},
  booktitle={Proceedings of the Computer Vision and Pattern Recognition Conference},
  pages={56--66},
  year={2025}
}"
---

Multimodal Large Language Models (MLLMs) have made significant strides in visual understanding and generation tasks. However, generating interleaved image-text content remains a challenge, which requires integrated multimodal understanding and generation abilities. While the progress in unified models offers new solutions, existing benchmarks are insufficient for evaluating these methods due to data size and diversity limitations. To bridge this gap, we introduce GATE OpenING (OpenING), a comprehensive benchmark comprising 5,400 high-quality human-annotated instances across 56 real-world tasks. OpenING covers diverse daily scenarios such as travel guide, design, and brainstorming, offering a robust platform for challenging interleaved generation methods. In addition, we present IntJudge, a judge model for evaluating open-ended multimodal generation methods. Trained with a novel data pipeline, our IntJudge achieves an agreement rate of 82. 42% with human judgments, outperforming GPT-based evaluators by 11.34%. Extensive experiments on OpenING reveal that current interleaved generation methods still have substantial room for improvement. Key findings on interleaved image-text generation are further presented to guide the development of next-generation models.
