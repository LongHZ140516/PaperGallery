---
title: "MajutsuCity: Language-driven Aesthetic-adaptive City Generation with Controllable 3D Assets and Layouts"
authors: ["Zilong Huang", "Jun He", "Xiaobin Huang", "Ziyi Xiong", "Yang Luo", "Junyan Ye", "Weijia Li", "Yiping Chen", "Ting Han"]
year: "2025"
conference: "arXiv"
license: "CC BY"
tags: ["3D", "Generation", "Language-driven", "City Scene"]
image: "Huang_MajutsuCity_2025.jpg"
paper: "https://arxiv.org/abs/2511.20415"
code: "https://github.com/LongHZ140516/MajutsuCity"
project: "https://longhz140516.github.io/MajutsuCity/"
bibtex: "@article{huang2025majutsucity,
  title={MajutsuCity: Language-driven Aesthetic-adaptive City Generation with Controllable 3D Assets and Layouts},
  author={Huang, Zilong and He, Jun and Huang, Xiaobin and Xiong, Ziyi and Luo, Yang and Ye, Junyan and Li, Weijia and Chen, Yiping and Han, Ting},
  journal={arXiv preprint arXiv:2511.20415},
  year={2025}
}"
---

Generating realistic 3D cities is fundamental to world models, virtual reality, and game development, where an ideal urban scene must satisfy both stylistic diversity, fine-grained, and controllability. However, existing methods struggle to balance the creative flexibility offered by text-based generation with the object-level editability enabled by explicit structural representations. We introduce MajutsuCity, a natural language-driven and aesthetically adaptive framework for synthesizing structurally consistent and stylistically diverse 3D urban scenes. MajutsuCity represents a city as a composition of controllable layouts, assets, and materials, and operates through a four-stage pipeline. To extend controllability beyond initial generation, we further integrate MajutsuAgent, an interactive language-grounded editing agent} that supports five object-level operations. To support photorealistic and customizable scene synthesis, we also construct MajutsuDataset, a high-quality multimodal dataset} containing 2D semantic layouts and height maps, diverse 3D building assets, and curated PBR materials and skyboxes, each accompanied by detailed annotations. Meanwhile, we develop a practical set of evaluation metrics, covering key dimensions such as structural consistency, scene complexity, material fidelity, and lighting atmosphere. Extensive experiments demonstrate MajutsuCity reduces layout FID by 83.7% compared with CityDreamer and by 20.1% over CityCraft. Our method ranks first across all AQS and RDR scores, outperforming existing methods by a clear margin. These results confirm MajutsuCity as a new state-of-the-art in geometric fidelity, stylistic adaptability, and semantic controllability for 3D city generation. We expect our framework can inspire new avenues of research in 3D city generation.
