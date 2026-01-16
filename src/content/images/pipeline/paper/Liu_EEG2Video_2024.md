---
title: "EEG2Video: Towards Decoding Dynamic Visual Perception from EEG Signals"
authors: ["Xuan-Hao Liu", "Yan-Kai Liu", "Yansen Wang", "Kan Ren", "Hanwen Shi", "Zilong Wang", "Dongsheng Li", "Bao-Liang Lu", "Wei-Long Zheng"]
year: "2024"
conference: "NeurIPS"
license: ""
tags: ["Diffusion", "Visual", "Dynamic"]
image: "Liu_EEG2Video_2024.webp"
paper: "https://nips.cc/virtual/2024/poster/95156"
code: "https://github.com/XuanhaoLiu/EEG2Video"
project: "https://bcmi.sjtu.edu.cn/home/eeg2video/"
bibtex: "@article{liu2024eeg2video,
  title={EEG2video: Towards decoding dynamic visual perception from EEG signals},
  author={Liu, Xuan-Hao and Liu, Yan-Kai and Wang, Yansen and Ren, Kan and Shi, Hanwen and Wang, Zilong and Li, Dongsheng and Lu, Bao-Liang and Zheng, Wei-Long},
  journal={Advances in Neural Information Processing Systems},
  volume={37},
  pages={72245--72273},
  year={2024}
}"
---

Our visual experience in daily life are dominated by dynamic change. Decoding such dynamic information from brain activity can enhance the understanding of the brain’s visual processing system. However, previous studies predominately focus on reconstructing static visual stimuli. In this paper, we explore to decode dynamic visual perception from electroencephalography (EEG), a neuroimaging technique able to record brain activity with high temporal resolution (1000 Hz) for capturing rapid changes in brains. Our contributions are threefold: Firstly, we develop a large dataset recording signals from 20 subjects while they were watching 1400 dynamic video clips of 40 concepts. This dataset fills the gap in the lack of EEG-video pairs. Secondly, we annotate each video clips to investigate the potential for decoding some specific meta information (e.g., color, dynamic, human or not) from EEG. Thirdly, we propose a novel baseline EEG2Video for video reconstruction from EEG signals that better aligns dynamic movements with high temporal resolution brain signals by Seq2Seq architecture. EEG2Video achieves a 2-way accuracy of 79.8% in semantic classification tasks and 0.256 in structural similarity index (SSIM). Overall, our works takes an important step towards decoding dynamic visual perception from EEG signals. Our dataset and code will be released soon.
