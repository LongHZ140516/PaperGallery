---
title: "TextToon: Real-Time Text Toonify Head Avatar from Single Video"
authors: ["Luchuan Song", "Lele Chen", "Celong Liu", "Pinxin Liu", "Chenliang Xu"]
year: "2024"
conference: "SIGGRAPH"
license: ""
tags: ["3DGS","Video"]
image: "Song_TextToon_2024.jpg"
paper: "https://arxiv.org/pdf/2410.07160"
code: ""
project: "https://songluchuan.github.io/TextToon/"
bibtex: "@inproceedings{song2024texttoon,
  title={Texttoon: Real-time text toonify head avatar from single video},
  author={Song, Luchuan and Chen, Lele and Liu, Celong and Liu, Pinxin and Xu, Chenliang},
  booktitle={SIGGRAPH Asia 2024 Conference Papers},
  pages={1--11},
  year={2024}
}"
---

We propose TextToon, a method to generate a drivable toonified avatar. Given a short monocular video sequence and a written instruction about the avatar style, our model can generate a high-fidelity toonified avatar that can be driven in real-time by another video with arbitrary identities. Existing related works heavily rely on multi-view modeling to recover geometry via texture embeddings, presented in a static manner, leading to control limitations. The multi-view video input also makes it difficult to deploy these models in real-world applications. To address these issues, we adopt a conditional embedding Tri-plane to learn realistic and stylized facial representations in a Gaussian deformation field. Additionally, we expand the stylization capabilities of 3D Gaussian Splatting by introducing an adaptive pixel-translation neural network and leveraging patch-aware contrastive learning to achieve high-quality images. To push our work into consumer applications, we develop a real-time system that can operate at 48 FPS on a GPU machine and 15-18 FPS on a mobile machine. Extensive experiments demonstrate the efficacy of our approach in generating textual avatars over existing methods in terms of quality and real-time animation.
