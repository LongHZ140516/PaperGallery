---
title: "Spatial-MLLM: Boosting MLLM Capabilities in Visual-based Spatial Intelligence"
authors: ["Diankun Wu", "Fangfu Liu", "Yi-Hsin Hung", "Yueqi Duan"]
year: "2025"
conference: "arXiv"
license: ""
tags: ["LLM","Visual", "Spatial Intelligence"]
image: "Wu_Spatial MLLM_2025.webp"
paper: "https://arxiv.org/abs/2505.23747"
code: "https://github.com/diankun-wu/Spatial-MLLM"
project: "https://diankun-wu.github.io/Spatial-MLLM/"
bibtex: "@article{wu2025spatial,
  title={Spatial-mllm: Boosting mllm capabilities in visual-based spatial intelligence},
  author={Wu, Diankun and Liu, Fangfu and Hung, Yi-Hsin and Duan, Yueqi},
  journal={arXiv preprint arXiv:2505.23747},
  year={2025}
}"
---

Recent advancements in Multimodal Large Language Models (MLLMs) have significantly enhanced performance on 2D visual tasks. However, improving their spatial intelligence remains a challenge. Existing 3D MLLMs always rely on additional 3D or 2.5D data to incorporate spatial awareness, restricting their utility in scenarios with only 2D inputs, such as images or videos. In this paper, we present Spatial-MLLM, a novel framework for visual-based spatial reasoning from purely 2D observations. Unlike conventional video MLLMs which rely on CLIP-based visual encoders optimized for semantic understanding, our key insight is to unleash the strong structure prior from the feed-forward visual geometry foundation model. Specifically, we propose a dual-encoder architecture: a pretrained 2D visual encoder to extract semantic features, and a spatial encoder-initialized from the backbone of the visual geometry model-to extract 3D structure features. A connector then integrates both features into unified visual tokens for enhanced spatial understanding. Furthermore, we propose a space-aware frame sampling strategy at inference time, which selects the spatially informative frames of a video sequence, ensuring that even under limited token length, the model focuses on frames critical for spatial reasoning. Beyond architecture improvements, we construct the Spatial-MLLM-120k dataset and train the model on it using supervised fine-tuning and GRPO. Extensive experiments on various real-world datasets demonstrate that our spatial-MLLM achieves state-of-the-art performance in a wide range of visual-based spatial understanding and reasoning tasks.
