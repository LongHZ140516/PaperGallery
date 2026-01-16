---
title: "MJ-Bench: Is Your Multimodal Reward Model Really a Good Judge?"
authors: ["Zhaorun Chen", "Yichao Du", "Zichen Wen", "Yiyang Zhou", "Chenhang Cui", "Zhenzhen Weng", "Haoqin Tu", "Chaoqi Wang", "Zhengwei Tong", "Qinglan Huang", "Canyu Chen", "Qinghao Ye", "Zhihong Zhu", "Yuqing Zhang", "Jiawei Zhou", "Zhuokai Zhao", "Rafael Rafailov", "Chelsea Finn", "Huaxiu Yao"]
year: "2024"
conference: "ICML"
license: ""
tags: ["LLM","Reward Model"]
image: "Chen_MJBench_2024.webp"
paper: "https://arxiv.org/pdf/2407.04842"
code: "https://github.com/MJ-Bench/MJ-Bench"
project: "https://mj-bench.github.io/"
bibtex: "@inproceedings{chen2024mj,
  title={MJ-Bench: Is Your Multimodal Reward Model Really a Good Judge?},
  author={Chen, Zhaorun and Du, Yichao and Wen, Zichen and Zhou, Yiyang and Cui, Chenhang and Weng, Zhenzhen and Tu, Haoqin and Wang, Chaoqi and Tong, Zhengwei and HUANG, Leria and others},
  booktitle={ICML 2024 Workshop on Foundation Models in the Wild}
}"
---

While text-to-image models like DALLE-3 and Stable Diffusion are rapidly proliferating, they often encounter challenges such as hallucination, bias, and the production of unsafe, low-quality output. To effectively address these issues, it is crucial to align these models with desired behaviors based on feedback from a multimodal judge. Despite their significance, current multimodal judges frequently undergo inadequate evaluation of their capabilities and limitations, potentially leading to misalignment and unsafe fine-tuning outcomes. To address this issue, we introduce MJ-Bench, a novel benchmark which incorporates a comprehensive preference dataset to evaluate multimodal judges in providing feedback for image generation models across four key perspectives: alignment, safety, image quality, and bias. Specifically, we evaluate a large variety of multimodal judges including smaller-sized CLIP-based scoring models, open-source VLMs (e.g. LLaVA family), and close-source VLMs (e.g. GPT-4o, Claude 3) on each decomposed subcategory of our preference dataset. Experiments reveal that close-source VLMs generally provide better feedback, with GPT-4o outperforming other judges in average. Compared with open-source VLMs, smaller-sized scoring models can provide better feedback regarding text-image alignment and image quality, while VLMs provide more accurate feedback regarding safety and generation bias due to their stronger reasoning capabilities. Further studies in feedback scale reveal that VLM judges can generally provide more accurate and stable feedback in natural language (Likert-scale) than numerical scales. Notably, human evaluations on end-to-end fine-tuned models using separate feedback from these multimodal judges provide similar conclusions, further confirming the effectiveness of MJ-Bench.
