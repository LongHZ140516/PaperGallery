---
title: "Controllable 3D Outdoor Scene Generation via Scene Graphs"
authors: ["Yuheng Liu", "Xinke Li", "Yuning Zhang", "Lu Qi", "Xin Li", "Wenping Wang", "Chongshou Li", "Xueting Li", "Ming-Hsuan Yang"]
year: "2025"
conference: "ICCV"
license: ""
tags: ["Point Cloud", "3D", "Graph", "Generation"]
image: "Liu_Controllable_2025.webp"
paper: "https://arxiv.org/pdf/2503.07152"
code: "https://github.com/yuhengliu02/control-3d-scene"
project: "https://yuheng.ink/project-page/control-3d-scene/"
bibtex: "@article{liu2025controllable,
  title={Controllable 3D outdoor scene generation via scene graphs},
  author={Liu, Yuheng and Li, Xinke and Zhang, Yuning and Qi, Lu and Li, Xin and Wang, Wenping and Li, Chongshou and Li, Xueting and Yang, Ming-Hsuan},
  journal={arXiv preprint arXiv:2503.07152},
  year={2025}
}"
---

Three-dimensional scene generation is crucial in computer vision, with applications spanning autonomous driving, gaming and the metaverse. Current methods either lack user control or rely on imprecise, non-intuitive conditions. In this work, we propose a method that uses, scene graphs, an accessible, user friendly control format to generate outdoor 3D scenes. We develop an interactive system that transforms a sparse scene graph into a dense BEV (Bird's Eye View) Embedding Map, which guides a conditional diffusion model to generate 3D scenes that match the scene graph description. During inference, users can easily create or modify scene graphs to generate large-scale outdoor scenes. We create a large-scale dataset with paired scene graphs and 3D semantic scenes to train the BEV embedding and diffusion models. Experimental results show that our approach consistently produces high-quality 3D urban scenes closely aligned with the input scene graphs. To the best of our knowledge, this is the first approach to generate 3D outdoor scenes conditioned on scene graphs.
