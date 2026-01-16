---
title: "From Pixels to Words -- Towards Native Vision-Language Primitives at Scale"
authors: ["Haiwen Diao", "Mingxuan Li", "Silei Wu", "Linjun Dai", "Xiaohua Wang", "Hanming Deng", "Lewei Lu", "Dahua Lin", "Ziwei Liu"]
year: "2025"
conference: "arXiv"
license: ""
tags: ["VLM", "Image–Text"]
image: "Diao_pixels_2025.jpg"
paper: "https://arxiv.org/pdf/2510.14979"
code: "https://github.com/EvolvingLMMs-Lab/NEO"
project: ""
bibtex: "@article{Diao2025NEO,
  title        = {From Pixels to Words--Towards Native Vision-Language Primitives at Scale},
  author       = {Diao, Haiwen and Li, Mingxuan and Wu, Silei and Dai, Linjun and Wang, Xiaohua and Deng, Hanming and Lu, Lewei and Lin, Dahua and Liu, Ziwei},
  journal      = {arXiv preprint arXiv:2510.14979},
  year         = {2025}
}"
---

The edifice of native Vision-Language Models (VLMs) has emerged as a rising contender to typical modular VLMs, shaped by evolving model architectures and training paradigms. Yet, two lingering clouds cast shadows over its widespread exploration and promotion: (-) What fundamental constraints set native VLMs apart from modular ones, and to what extent can these barriers be overcome? (-) How to make research in native VLMs more accessible and democratized, thereby accelerating progress in the field. In this paper, we clarify these challenges and outline guiding principles for constructing native VLMs. Specifically, one native VLM primitive should: (i) effectively align pixel and word representations within a shared semantic space; (ii) seamlessly integrate the strengths of formerly separate vision and language modules; (iii) inherently embody various cross-modal properties that support unified vision-language encoding, aligning, and reasoning. Hence, we launch NEO, a novel family of native VLMs built from first principles, capable of rivaling top-tier modular counterparts across diverse real-world scenarios. With only 390M image-text examples, NEO efficiently develops visual perception from scratch while mitigating vision-language conflicts inside a dense and monolithic model crafted from our elaborate primitives. We position NEO as a cornerstone for scalable and powerful native VLMs, paired with a rich set of reusable components that foster a cost-effective and extensible ecosystem. 
