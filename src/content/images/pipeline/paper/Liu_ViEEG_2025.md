---
title: "ViEEG: Hierarchical Neural Coding with Cross-Modal Progressive Enhancement for EEG-Based Visual Decoding"
authors: ["Minxu Liu", "Donghai Guan", "Chuhang Zheng", "Chunwei Tian", "Jie Wen", "Qi Zhu"]
year: "2025"
conference: "MM"
license: ""
tags: ["Visual Representations","Coding"]
image: "Liu_ViEEG_2025.webp"
paper: "https://arxiv.org/pdf/2505.12408"
code: ""
project: ""
bibtex: "@article{liu2025vieeg,
  title={ViEEG: Hierarchical Neural Coding with Cross-Modal Progressive Enhancement for EEG-Based Visual Decoding},
  author={Liu, Minxu and Guan, Donghai and Zheng, Chuhang and Tian, Chunwei and Wen, Jie and Zhu, Qi},
  journal={arXiv preprint arXiv:2505.12408},
  year={2025}
}"
---

Understanding and decoding brain activity into visual representations is a fundamental challenge at the intersection of neuroscience and artificial intelligence. While EEG-based visual decoding has shown promise due to its non-invasive, low-cost nature and millisecond-level temporal resolution, existing methods are limited by their reliance on flat neural representations that overlook the brain's inherent visual hierarchy. In this paper, we introduce ViEEG, a biologically inspired hierarchical EEG decoding framework that aligns with the Hubel-Wiesel theory of visual processing. ViEEG decomposes each visual stimulus into three biologically aligned components-contour, foreground object, and contextual scene-serving as anchors for a three-stream EEG encoder. These EEG features are progressively integrated via cross-attention routing, simulating cortical information flow from V1 to IT to the association cortex. We further adopt hierarchical contrastive learning to align EEG representations with CLIP embeddings, enabling zero-shot object recognition. Extensive experiments on the THINGS-EEG dataset demonstrate that ViEEG achieves state-of-the-art performance, with 40.9% Top-1 accuracy in subject-dependent and 22.9% Top-1 accuracy in cross-subject settings, surpassing existing methods by over 45%. Our framework not only advances the performance frontier but also sets a new paradigm for biologically grounded brain decoding in AI.
