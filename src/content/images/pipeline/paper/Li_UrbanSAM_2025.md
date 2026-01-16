---
title: "UrbanSAM: Learning Invariance-Inspired Adapters for Segment Anything Models in Urban Construction"
authors: ["Chenyu Li", "Danfeng Hong", "Bing Zhang", "Yuxuan Li", "Gustau Camps-Valls", "Xiao Xiang Zhu", "Jocelyn Chanussot"]
year: "2025"
conference: "arXiv"
license: ""
tags: ["Remote Sensing","SAM","Urban"]
image: "Li_UrbanSAM_2025.jpg"
paper: "https://arxiv.org/pdf/2502.15199"
code: "https://github.com/danfenghong"
project: ""
bibtex: "@article{li2025urbansam,
  title={Urbansam: Learning invariance-inspired adapters for segment anything models in urban construction},
  author={Li, Chenyu and Hong, Danfeng and Zhang, Bing and Li, Yuxuan and Camps-Valls, Gustau and Zhu, Xiao Xiang and Chanussot, Jocelyn},
  journal={arXiv preprint arXiv:2502.15199},
  year={2025}
}"
---

Object extraction and segmentation from remote sensing (RS) images is a critical yet challenging task in urban environment monitoring. Urban morphology is inherently complex, with irregular objects of diverse shapes and varying scales. These challenges are amplified by heterogeneity and scale disparities across RS data sources, including sensors, platforms, and modalities, making accurate object segmentation particularly demanding. While the Segment Anything Model (SAM) has shown significant potential in segmenting complex scenes, its performance in handling form-varying objects remains limited due to manual-interactive prompting. To this end, we propose UrbanSAM, a customized version of SAM specifically designed to analyze complex urban environments while tackling scaling effects from remotely sensed observations. Inspired by multi-resolution analysis (MRA) theory, UrbanSAM incorporates a novel learnable prompter equipped with a Uscaling-Adapter that adheres to the invariance criterion, enabling the model to capture multiscale contextual information of objects and adapt to arbitrary scale variations with theoretical guarantees. Furthermore, features from the Uscaling-Adapter and the trunk encoder are aligned through a masked cross-attention operation, allowing the trunk encoder to inherit the adapter's multiscale aggregation capability. This synergy enhances the segmentation performance, resulting in more powerful and accurate outputs, supported by the learned adapter. Extensive experimental results demonstrate the flexibility and superior segmentation performance of the proposed UrbanSAM on a global-scale dataset, encompassing scale-varying urban objects such as buildings, roads, and water.
