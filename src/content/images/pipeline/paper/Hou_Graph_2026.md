---
title: "Graph Out-of-Distribution Detection via Test-Time Calibration with Dual Dynamic Dictionaries"
authors: ["Yue Hou", "Ruomei Liu", "Yingke Su", "Junran Wu", "Ke Xu"]
year: "2026"
conference: "AAAI"
license: "CC BY"
tags: ["Detection", "OOD"]
image: "Hou_Graph_2026.webp"
paper: "https://arxiv.org/abs/2511.13541"
code: ""
project: ""
bibtex: "@article{hou2025graph,
  title={Graph Out-of-Distribution Detection via Test-Time Calibration with Dual Dynamic Dictionaries},
  author={Hou, Yue and Liu, Ruomei and Su, Yingke and Wu, Junran and Xu, Ke},
  journal={arXiv preprint arXiv:2511.13541},
  year={2025}
}"
---

A key challenge in graph out-of-distribution (OOD) detection lies in the absence of ground-truth OOD samples during training. Existing methods are typically optimized to capture features within the in-distribution (ID) data and calculate OOD scores, which often limits pre-trained models from representing distributional boundaries, leading to unreliable OOD detection. Moreover, the latent structure of graph data is often governed by multiple underlying factors, which remains less explored. To address these challenges, we propose a novel test-time graph OOD detection method, termed BaCa, that calibrates OOD scores using dual dynamically updated dictionaries without requiring fine-tuning the pre-trained model. Specifically, BaCa estimates graphons and applies a mix-up strategy solely with test samples to generate diverse boundary-aware discriminative topologies, eliminating the need for exposing auxiliary datasets as outliers. We construct dual dynamic dictionaries via priority queues and attention mechanisms to adaptively capture latent ID and OOD representations, which are then utilized for boundary-aware OOD score calibration. To the best of our knowledge, extensive experiments on real-world datasets show that BaCa significantly outperforms existing state-of-the-art methods in OOD detection.
