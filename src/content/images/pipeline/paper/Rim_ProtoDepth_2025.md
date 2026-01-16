---
title: "ProtoDepth: Unsupervised Continual Depth Completion with Prototypes"
authors: ["Patrick Rim", "Hyoungseob Park", "S. Gangopadhyay", "Ziyao Zeng", "Younjoon Chung", "Alex Wong"]
year: "2025"
conference: "CVPR"
license: "CC BY"
tags: ["Unsupervised learning","benchmark"]
image: "Rim_ProtoDepth_2025.webp"
paper: "https://arxiv.org/abs/2503.12745"
code: ""
project: ""
bibtex: "@inproceedings{rim2025protodepth,
  title={Protodepth: Unsupervised continual depth completion with prototypes},
  author={Rim, Patrick and Park, Hyoungseob and Gangopadhyay, Suchisrit and Zeng, Ziyao and Chung, Younjoon and Wong, Alex},
  booktitle={Proceedings of the Computer Vision and Pattern Recognition Conference},
  pages={6304--6316},
  year={2025}
}"
---

We present ProtoDepth, a novel prototype-based approach for continual learning of unsupervised depth completion, the multimodal 3D reconstruction task of predicting dense depth maps from RGB images and sparse point clouds. The unsupervised learning paradigm is well-suited for continual learning, as ground truth is not needed. However, when training on new non-stationary distributions, depth completion models will catastrophically forget previously learned information. We address forgetting by learning prototype sets that adapt the latent features of a frozen pretrained model to new domains. Since the original weights are not modified, ProtoDepth does not forget when test-time domain identity is known. To extend ProtoDepth to the challenging setting where the test-time domain identity is withheld, we propose to learn domain descriptors that enable the model to select the appropriate prototype set for inference. We evaluate ProtoDepth on benchmark dataset sequences, where we reduce forgetting compared to baselines by 52.2% for indoor and 53.2% for outdoor to achieve the state of the art.
