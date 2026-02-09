---
title: "Mind-Brush: Integrating Agentic Cognitive Search and Reasoning into Image Generation"
authors: ["Jun He", "Junyan Ye", "Zilong Huang", "Dongzhi Jiang", "Chenjue Zhang", "Leqi Zhu", "Renrui Zhang", "Xiang Zhang", "Weijia Li"]
year: "2026"
conference: "arXiv"
license: "CC BY"
tags: ["Agent", "Image Generation"]
image: "He_MindBrush_2026.jpg"
paper: "https://arxiv.org/abs/2602.01756"
code: "https://github.com/PicoTrex/Mind-Brush"
project: ""
bibtex: "@article{he2026mind,
  title={Mind-Brush: Integrating Agentic Cognitive Search and Reasoning into Image Generation},
  author={He, Jun and Ye, Junyan and Huang, Zilong and Jiang, Dongzhi and Zhang, Chenjue and Zhu, Leqi and Zhang, Renrui and Zhang, Xiang and Li, Weijia},
  journal={arXiv preprint arXiv:2602.01756},
  year={2026}
}"
---

While text-to-image generation has achieved unprecedented fidelity, the vast majority of existing models function fundamentally as static text-to-pixel decoders. Consequently, they often fail to grasp implicit user intentions. Although emerging unified understanding-generation models have improved intent comprehension, they still struggle to accomplish tasks involving complex knowledge reasoning within a single model. Moreover, constrained by static internal priors, these models remain unable to adapt to the evolving dynamics of the real world. To bridge these gaps, we introduce Mind-Brush, a unified agentic framework that transforms generation into a dynamic, knowledge-driven workflow. Simulating a human-like 'think-research-create' paradigm, Mind-Brush actively retrieves multimodal evidence to ground out-of-distribution concepts and employs reasoning tools to resolve implicit visual constraints. To rigorously evaluate these capabilities, we propose Mind-Bench, a comprehensive benchmark comprising 500 distinct samples spanning real-time news, emerging concepts, and domains such as mathematical and Geo-Reasoning. Extensive experiments demonstrate that Mind-Brush significantly enhances the capabilities of unified models, realizing a zero-to-one capability leap for the Qwen-Image baseline on Mind-Bench, while achieving superior results on established benchmarks like WISE and RISE.
