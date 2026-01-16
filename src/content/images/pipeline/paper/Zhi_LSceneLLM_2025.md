---
title: "LSceneLLM: Enhancing Large 3D Scene Understanding Using Adaptive Visual Preferences"
authors: ["Hongyan Zhi", "Peihao Chen", "Junyan Li", "Shuailei Ma", "Xinyu Sun", "Tianhang Xiang", "Yinjie Lei", "Mingkui Tan", "Chuang Gan"]
year: "2025"
conference: "CVPR"
license: ""
tags: ["LLM","3D Scene"]
image: "Zhi_LSceneLLM_2025.jpg"
paper: "https://arxiv.org/abs/2412.01292v2"
code: ""
project: ""
bibtex: "@inproceedings{zhi2025lscenellm,
  title={Lscenellm: Enhancing large 3d scene understanding using adaptive visual preferences},
  author={Zhi, Hongyan and Chen, Peihao and Li, Junyan and Ma, Shuailei and Sun, Xinyu and Xiang, Tianhang and Lei, Yinjie and Tan, Mingkui and Gan, Chuang},
  booktitle={Proceedings of the Computer Vision and Pattern Recognition Conference},
  pages={3761--3771},
  year={2025}
}"
---

Research on 3D Vision-Language Models (3D-VLMs) is gaining increasing attention, which is crucial for developing embodied AI within 3D scenes, such as visual navigation and embodied question answering. Due to the high density of visual features, especially in large 3D scenes, accurately locating task-relevant visual information is challenging. Existing works attempt to segment all objects and consider their features as scene representations. However, these task-agnostic object features include much redundant information and missing details for the task-relevant area. To tackle these problems, we propose LSceneLLM, an adaptive framework that automatically identifies task-relevant areas by leveraging LLM's visual preference for different tasks, followed by a plug-and-play scene magnifier module to capture fine-grained details in focused areas. Specifically, a dense token selector examines the attention map of LLM to identify visual preferences for the instruction input. It then magnifies fine-grained details of the focusing area. An adaptive self-attention module is leveraged to fuse the coarse-grained and selected fine-grained visual information. To comprehensively evaluate the large scene understanding ability of 3D-VLMs, we further introduce a cross-room understanding benchmark, XR-Scene, which contains a series of large scene understanding tasks including XR-QA, XR-EmbodiedPlanning, and XR-SceneCaption. Experiments show that our method surpasses existing methods on both large scene understanding and existing scene understanding benchmarks. Plunging our scene magnifier module into the existing 3D-VLMs also brings significant improvement.
