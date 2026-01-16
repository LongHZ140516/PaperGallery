---
title: "VITRON: A Unified Pixel-level Vision LLM for Understanding, Generating, Segmenting, Editing"
authors: ["Hao Fei", "Shengqiong Wu", "Hanwang Zhang", "Tat-Seng Chua", "Shuicheng Yan"]
year: "2024"
conference: "NeurIPS"
license: "CC BY"
tags: ["LLM","Pixel-level","Understanding"]
image: "Fei_VITRON_2024.jpg"
paper: "https://haofei.vip/downloads/papers/Skywork_Vitron_2024.pdf"
code: "https://github.com/SkyworkAI/Vitron?tab=readme-ov-file"
project: "https://vitron-llm.github.io/"
bibtex: "@article{fei2024vitron,
  title={Vitron: A unified pixel-level vision llm for understanding, generating, segmenting, editing},
  author={Fei, Hao and Wu, Shengqiong and Zhang, Hanwang and Chua, Tat-Seng and Yan, Shuicheng},
  journal={Advances in neural information processing systems},
  volume={37},
  pages={57207--57239},
  year={2024}
}"
---

Recent developments of vision large language models (LLMs) have seen remarkable progress, yet still encounter challenges towards multimodal generalists, such
as coarse-grained instance-level understanding, lack of unified support for both images and videos, and insufficient coverage across various vision tasks. In this paper, we present VITRON, a universal pixel-level vision LLM designed for comprehensive understanding, generating, segmenting, and editing of both static images and
dynamic videos. Building on top of an LLM backbone, VITRON incorporates
encoders for images, videos, and pixel-level regional visuals within its frontend
modules, while employing state-of-the-art visual specialists as its backend, via
which VITRON supports a spectrum of vision end tasks, spanning visual comprehension to visual generation, from low level to high level. To ensure an effective and
precise message passing from LLM to backend modules for function invocation,
we propose a novel hybrid method by simultaneously integrating discrete textual
instructions and continuous signal embeddings. Further, we design various pixellevel spatiotemporal vision-language alignment learning for VITRON to reach the
best fine-grained visual capability. Finally, a cross-task synergy module is advised
to learn to maximize the task-invariant fine-grained visual features, enhancing the
synergy between different visual tasks. Demonstrated over 12 visual tasks and
evaluated across 22 datasets, VITRON showcases its extensive capabilities in the
four main vision task clusters. Overall, this work illuminates the great potential of
developing a more unified multimodal generalist.
