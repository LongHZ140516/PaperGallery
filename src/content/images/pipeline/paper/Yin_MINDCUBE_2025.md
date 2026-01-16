---
title: "Spatial Mental Modeling from Limited Views"
authors: ["Baiqiao Yin", "Qineng Wang", "Pingyue Zhang", "Jianshu Zhang", "Kangrui Wang", "Zihan Wang", "Jieyu Zhang", "Keshigeyan Chandrasegaran", "Han Liu", "Ranjay Krishna", "Saining Xie", "Manling Li", "Jiajun Wu", "Li Fei-Fei"]
year: "2025"
conference: "ICCV"
license: ""
tags: ["LLM","Spatial Mental Modeling"]
image: "Yin_MINDCUBE_2025.jpg"
paper: "https://arxiv.org/pdf/2506.21458"
code: "https://github.com/mll-lab-nu/MindCube"
project: "https://mind-cube.github.io/"
bibtex: "@inproceedings{yin2025spatial,
  title={Spatial mental modeling from limited views},
  author={Yin, Baiqiao and Wang, Qineng and Zhang, Pingyue and Zhang, Jianshu and Wang, Kangrui and Wang, Zihan and Zhang, Jieyu and Chandrasegaran, Keshigeyan and Liu, Han and Krishna, Ranjay and others},
  booktitle={Structural Priors for Vision Workshop at ICCV'25},
  year={2025}
}"
---

Can Vision Language Models (VLMs) imagine the full scene from just a few views, like humans do? Humans form spatial mental models, internal representations of unseen space, to reason about layout, perspective, and motion. Our new MindCube benchmark with 21,154 questions across 3,268 images exposes this critical gap, where existing VLMs exhibit near-random performance. Using MindCube, we systematically evaluate how well VLMs build robust spatial mental models through representing positions (cognitive mapping), orientations (perspective-taking), and dynamics (mental simulation for "what-if" movements). We then explore three approaches to help VLMs approximate spatial mental models, including unseen intermediate views, natural language reasoning chains, and cognitive maps. The significant improvement comes from a synergistic approach, "map-then-reason", that jointly trains the model to first generate a cognitive map and then reason upon it. By training models to reason over these internal maps, we boosted accuracy from 37.8% to 60.8% (+23.0%). Adding reinforcement learning pushed performance even further to 70.7% (+32.9%). Our key insight is that such scaffolding of spatial mental models, actively constructing and utilizing internal structured spatial representations with flexible reasoning processes, significantly improves understanding of unobservable space.
