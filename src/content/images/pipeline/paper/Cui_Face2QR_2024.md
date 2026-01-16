---
title: "Face2QR: A Unified Framework for Aesthetic, Face-Preserving, and Scannable QR Code Generation"
authors: ["Xuehao Cui", "Guangyang Wu", "Zhenghao Gan", "Guangtao Zhai", "Xiaohong Liu"]
year: "2024"
conference: "NeurIPS"
license: "CC BY-NC-SA"
tags: ["Diffusion", "QR Code", "Generation"]
image: "Cui_Face2QR_2024.jpg"
paper: "https://arxiv.org/abs/2411.19246"
code: "https://github.com/cavosamir/Face2QR"
project: ""
bibtex: "@article{cui2024face2qr,
  title={Face2qr: A unified framework for aesthetic, face-preserving, and scannable qr code generation},
  author={Cui, Xuehao and Wu, Guangyang and Gan, Zhenghao and Zhai, Guangtao and Liu, Xiaohong},
  journal={Advances in Neural Information Processing Systems},
  volume={37},
  pages={29142--29165},
  year={2024}
}"
---

Current face reenactment and swapping methods mainly rely on GAN frameworks, but recent focus has shifted to pre-trained diffusion models for their superior generation capabilities. However, training these models is resource-intensive, and the results have not yet achieved satisfactory performance levels. To address this issue, we introduce Face-Adapter, an efficient and effective adapter designed for high-precision and high-fidelity face editing for pre-trained diffusion models. We observe that both face reenactment/swapping tasks essentially involve combinations of target structure, ID and attribute. We aim to sufficiently decouple the control of these factors to achieve both tasks in one model. Specifically, our method contains: 1) A Spatial Condition Generator that provides precise landmarks and background; 2) A Plug-and-play Identity Encoder that transfers face embeddings to the text space by a transformer decoder. 3) An Attribute Controller that integrates spatial conditions and detailed attributes. Face-Adapter achieves comparable or even superior performance in terms of motion control precision, ID retention capability, and generation quality compared to fully fine-tuned face reenactment/swapping models. Additionally, Face-Adapter seamlessly integrates with various StableDiffusion models.
