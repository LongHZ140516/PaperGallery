---
title: "Cobra: Efficient Line Art COlorization with BRoAder References"
authors: ["Junhao Zhuang", "Lingen Li", "Xuan Ju", "Zhaoyang Zhang", "Chun Yuan", "Ying Shan"]
year: "2025"
conference: "SIGGRAPH"
license: "CC BY"
tags: ["Diffusion", "Colorization", "Line Art"]
image: "Zhuang_Cobra_2025.webp"
paper: "https://arxiv.org/pdf/2504.12240"
code: "https://github.com/Zhuang2002/Cobra"
project: "https://zhuang2002.github.io/Cobra/"
bibtex: "@article{zhuang2025cobra,
  title={Cobra: Efficient Line Art COlorization with BRoAder References},
  author={Zhuang, Junhao and Li, Lingen and Ju, Xuan and Zhang, Zhaoyang and Yuan, Chun and Shan, Ying},
  journal={arXiv preprint arXiv:2504.12240},
  year={2025}
}"
---

The comic production industry requires reference-based line art colorization with high accuracy, efficiency, contextual consistency, and flexible control. A comic page often involves diverse characters, objects, and backgrounds, which complicates the coloring process. Despite advancements in diffusion models for image generation, their application in line art colorization remains limited, facing challenges related to handling extensive reference images, time-consuming inference, and flexible control. We investigate the necessity of extensive contextual image guidance on the quality of line art colorization. To address these challenges, we introduce Cobra, an efficient and versatile method that supports color hints and utilizes over 200 reference images while maintaining low latency. Central to Cobra is a Causal Sparse DiT architecture, which leverages specially designed positional encodings, causal sparse attention, and Key-Value Cache to effectively manage long-context references and ensure color identity consistency. Results demonstrate that Cobra achieves accurate line art colorization through extensive contextual reference, significantly enhancing inference speed and interactivity, thereby meeting critical industrial demands.
