---
title: "OneGen: Efficient One-Pass Unified Generation and Retrieval for LLMs"
authors: ["Jintian Zhang", "Cheng Peng", "Mengshu Sun", "Xiang Chen", "Lei Liang", "Zhiqiang Zhang", "Jun Zhou", "Huajun Chen", "Ningyu Zhang"]
year: "2024"
conference: "arXiv"
license: ""
tags: ["LLM","Unified", "Generation"]
image: "Zhang_OneGen_2024.webp"
paper: "https://arxiv.org/pdf/2409.05152"
code: "https://github.com/zjunlp/OneGen"
project: ""
bibtex: "@article{zhang2024onegen,
  title={Onegen: Efficient one-pass unified generation and retrieval for llms},
  author={Zhang, Jintian and Peng, Cheng and Sun, Mengshu and Chen, Xiang and Liang, Lei and Zhang, Zhiqiang and Zhou, Jun and Chen, Huajun and Zhang, Ningyu},
  journal={arXiv preprint arXiv:2409.05152},
  year={2024}
}"
---

Despite the recent advancements in Large Language Models (LLMs), which have significantly enhanced the generative capabilities for various NLP tasks, LLMs still face limitations in directly handling retrieval tasks. However, many practical applications demand the seamless integration of both retrieval and generation. This paper introduces a novel and efficient One-pass Generation and retrieval framework (OneGen), designed to improve LLMs' performance on tasks that require both generation and retrieval. The proposed framework bridges the traditionally separate training approaches for generation and retrieval by incorporating retrieval tokens generated autoregressively. This enables a single LLM to handle both tasks simultaneously in a unified forward pass. We conduct experiments on two distinct types of composite tasks, RAG and Entity Linking, to validate the pluggability, effectiveness, and efficiency of OneGen in training and inference. Furthermore, our results show that integrating generation and retrieval within the same context preserves the generative capabilities of LLMs while improving retrieval performance. To the best of our knowledge, OneGen is the first to enable LLMs to conduct vector retrieval during the generation.
