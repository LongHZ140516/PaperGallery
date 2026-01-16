---
title: "EgoLife: Towards Egocentric Life Assistant"
authors: ["Jingkang Yang", "Shuai Liu", "Hongming Guo", "Yuhao Dong", "Xiamengwei Zhang", "Sicheng Zhang", "Pengyun Wang", "Zitang Zhou", "Binzhu Xie", "Ziyue Wang", "Bei Ouyang", "Zhengyu Lin", "Marco Cominelli", "Zhongang Cai", "Yuanhan Zhang", "Peiyuan Zhang", "Fangzhou Hong", "Joerg Widmer", "Francesco Gringoli", "Lei Yang", "Bo Li", "Ziwei Liu"]
year: "2025"
conference: "CVPR"
license: ""
tags: ["Multi-modal", "LLM", "Dataset"]
image: "Yang_EgoLife_2025.webp"
paper: "https://arxiv.org/pdf/2503.03803"
code: "https://github.com/EvolvingLMMs-Lab/EgoLife"
project: "https://egolife-ai.github.io/"
bibtex: "@inproceedings{yang2025egolife,
  title={Egolife: Towards egocentric life assistant},
  author={Yang, Jingkang and Liu, Shuai and Guo, Hongming and Dong, Yuhao and Zhang, Xiamengwei and Zhang, Sicheng and Wang, Pengyun and Zhou, Zitang and Xie, Binzhu and Wang, Ziyue and others},
  booktitle={Proceedings of the Computer Vision and Pattern Recognition Conference},
  pages={28885--28900},
  year={2025}
}"
---

We introduce EgoLife, a project to develop an egocentric life assistant that accompanies and enhances personal efficiency through AI-powered wearable glasses. To lay the foundation for this assistant, we conducted a comprehensive data collection study where six participants lived together for one week, continuously recording their daily activities - including discussions, shopping, cooking, socializing, and entertainment - using AI glasses for multimodal egocentric video capture, along with synchronized third-person-view video references. This effort resulted in the EgoLife Dataset, a comprehensive 300-hour egocentric, interpersonal, multiview, and multimodal daily life dataset with intensive annotation. Leveraging this dataset, we introduce EgoLifeQA, a suite of long-context, life-oriented question-answering tasks designed to provide meaningful assistance in daily life by addressing practical questions such as recalling past relevant events, monitoring health habits, and offering personalized recommendations. To address the key technical challenges of (1) developing robust visual-audio models for egocentric data, (2) enabling identity recognition, and (3) facilitating long-context question answering over extensive temporal information, we introduce EgoButler, an integrated system comprising EgoGPT and EgoRAG. EgoGPT is an omni-modal model trained on egocentric datasets, achieving state-of-the-art performance on egocentric video understanding. EgoRAG is a retrieval-based component that supports answering ultra-long-context questions. Our experimental studies verify their working mechanisms and reveal critical factors and bottlenecks, guiding future improvements. By releasing our datasets, models, and benchmarks, we aim to stimulate further research in egocentric AI assistants.
