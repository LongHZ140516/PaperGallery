---
title: "BIG-FUSION: Brain-Inspired Global-Local Context Fusion Framework for Multimodal Emotion Recognition in Conversations for Emotion Recognition"
authors: ["Yusong Wang", "Xuanye Fang", "Huifeng Yin", "Dongyuan Li", "Guoqi Li", "Qi Xu", "Yi Xu", "Shuai Zhong", "Mingkun Xu"]
year: "2025"
conference: "AAAI"
license: ""
tags: ["Emotion Recognition", "Multi-modal"]
image: "Li_BigFusion_2025.webp"
paper: "https://doi.org/10.1609/aaai.v39i2.32149"
code: ""
project: ""
bibtex: "@inproceedings{wang2025big,
  title={BIG-FUSION: Brain-Inspired Global-Local Context Fusion Framework for Multimodal Emotion Recognition in Conversations},
  author={Wang, Yusong and Fang, Xuanye and Yin, Huifeng and Li, Dongyuan and Li, Guoqi and Xu, Qi and Xu, Yi and Zhong, Shuai and Xu, Mingkun},
  booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},
  volume={39},
  number={2},
  pages={1574--1582},
  year={2025}
}"
---

Considering the importance of capturing both global conversational topics and local speaker dependencies for multimodal emotion recognition in conversations, current approaches first utilize sequence models like Transformer to extract global context information, then apply Graph Neural Networks to model local speaker dependencies for local context information extraction, coupled with Graph Contrastive Learning (GCL) to enhance node representation learning. However, this sequential design introduces potential biases: the extracted global context information inevitably influences subsequent processing, compromising the independence and diversity of the original local features; current graph augmentation methods in GCL cannot consider both global and local context information in conversations to evaluate the node importance, hindering the learning of key information. Inspired by the human brain excels at handling complex tasks by efficiently integrating local and global information processing mechanisms, we propose an aligned global-local context fusion framework for sequence-based design to address these problems. This design includes a dual-attention Transformer and a dual-evaluation method for graph augmentation in GCL. The dual-attention Transformer combines global attention for overall context extraction with sliding-window attention for local context capture, both enhanced by spiking neuron dynamics. The dual-evaluation method in GCL comprises global importance evaluation to identify nodes crucial for overall conversation context, and local importance evaluation to detect nodes significant for local semantics, generating augmented graph views that preserve both global and local information. This approach ensures balanced information processing throughout the pipeline, enhancing biological plausibility and achieving superior emotion recognition.
