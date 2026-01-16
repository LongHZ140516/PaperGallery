---
title: "BLINK-Twice: You see, but do you observe? A Reasoning Benchmark on Visual Perception"
authors: ["Junyan Ye", "Dongzhi Jiang", "Jun He", "Baichuan Zhou", "Zilong Huang", "Zhiyuan Yan", "Hongsheng Li", "Conghui He", "Weijia Li"]
year: "2025"
conference: "NeurIPS"
license: "CC BY"
tags: ["VLM", "Benchmark", "Visual"]
image: "Ye_BLINKTwice_2025.jpg"
paper: "https://arxiv.org/abs/2510.09361"
code: ""
project: ""
bibtex: "@article{ye2025blink,
  title={BLINK-Twice: You see, but do you observe? A Reasoning Benchmark on Visual Perception},
  author={Ye, Junyan and Jiang, Dongzhi and He, Jun and Zhou, Baichuan and Huang, Zilong and Yan, Zhiyuan and Li, Hongsheng and He, Conghui and Li, Weijia},
  journal={arXiv preprint arXiv:2510.09361},
  year={2025}
}"
---

Recently, Multimodal Large Language Models (MLLMs) have made rapid progress, particularly in enhancing their reasoning capabilities. However, existing reasoning benchmarks still primarily assess language-based reasoning, often treating visual input as replaceable context. To address this gap, we introduce BLINK-Twice, a vision-centric reasoning benchmark grounded in challenging perceptual tasks. Instead of relying on external knowledge, our tasks require models to reason from visual content alone, shifting the focus from language-based to image-grounded reasoning. Compared to prior perception benchmarks, it moves beyond shallow perception ("see") and requires fine-grained observation and analytical reasoning ("observe"). BLINK-Twice integrates three core components: seven types of visual challenges for testing visual reasoning, natural adversarial image pairs that enforce reliance on visual content, and annotated reasoning chains for fine-grained evaluation of the reasoning process rather than final answers alone. We evaluate 20 leading MLLMs, including 12 foundation models and 8 reasoning-enhanced models. BLINK-Twice poses a significant challenge to current models. While existing reasoning strategies in the language space-such as chain-of-thought or self-criticism can improve performance, they often result in unstable and redundant reasoning. We observe that repeated image observation improves performance across models, and active visual interaction, as demonstrated by models like o3, highlights the need for a new paradigm for vision reasoning.
