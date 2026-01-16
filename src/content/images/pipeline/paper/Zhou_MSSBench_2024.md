---
title: "Multimodal Situational Safety"
authors: ["Kaiwen Zhou", "Chengzhi Liu", "Xuandong Zhao", "Anderson Compalas", "Dawn Song", "Xin Eric Wang"]
year: "2024"
conference: "arXiv"
license: "CC BY"
tags: ["LLM","Model Safety"]
image: "Zhou_MSSBench_2024.webp"
paper: "https://arxiv.org/pdf/2410.06172"
code: "https://github.com/eric-ai-lab/MSSBench"
project: "https://mssbench.github.io/"
bibtex: "@article{zhou2024multimodal,
  title={Multimodal situational safety},
  author={Zhou, Kaiwen and Liu, Chengzhi and Zhao, Xuandong and Compalas, Anderson and Song, Dawn and Wang, Xin Eric},
  journal={arXiv preprint arXiv:2410.06172},
  year={2024}
}"
---

Multimodal Large Language Models (MLLMs) are rapidly evolving, demonstrating impressive capabilities as multimodal assistants that interact with both humans and their environments. However, this increased sophistication introduces significant safety concerns. In this paper, we present the first evaluation and analysis of a novel safety challenge termed Multimodal Situational Safety, which explores how safety considerations vary based on the specific situation in which the user or agent is engaged. We argue that for an MLLM to respond safely, whether through language or action, it often needs to assess the safety implications of a language query within its corresponding visual context. To evaluate this capability, we develop the Multimodal Situational Safety benchmark (MSSBench) to assess the situational safety performance of current MLLMs. The dataset comprises 1,820 language query-image pairs, half of which the image context is safe, and the other half is unsafe. We also develop an evaluation framework that analyzes key safety aspects, including explicit safety reasoning, visual understanding, and, crucially, situational safety reasoning. Our findings reveal that current MLLMs struggle with this nuanced safety problem in the instruction-following setting and struggle to tackle these situational safety challenges all at once, highlighting a key area for future research. Furthermore, we develop multi-agent pipelines to coordinately solve safety challenges, which shows consistent improvement in safety over the original MLLM response.
