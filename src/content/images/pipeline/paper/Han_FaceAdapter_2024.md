---
title: "Face Adapter for Pre-Trained Diffusion Models with Fine-Grained ID and Attribute Control"
authors: ["Yue Han", "Junwei Zhu", "Keke He", "Xu Chen", "Yanhao Ge", "Wei Li", "Xiangtai Li", "Jiangning Zhang", "Chengjie Wang", "Yong Liu"]
year: "2024"
conference: "ECCV"
license: ""
tags: ["Diffusion", "Face", "Generation"]
image: "Han_FaceAdapter_2024.jpg"
paper: "https://arxiv.org/pdf/2405.12970"
code: "https://github.com/FaceAdapter/Face-Adapter?tab=readme-ov-file"
project: "https://faceadapter.github.io/face-adapter.github.io/"
bibtex: "@inproceedings{han2024face,
  title={Face-adapter for pre-trained diffusion models with fine-grained id and attribute control},
  author={Han, Yue and Zhu, Junwei and He, Keke and Chen, Xu and Ge, Yanhao and Li, Wei and Li, Xiangtai and Zhang, Jiangning and Wang, Chengjie and Liu, Yong},
  booktitle={European Conference on Computer Vision},
  pages={20--36},
  year={2024},
  organization={Springer}
}"
---

Current face reenactment and swapping methods mainly rely on GAN frameworks, but recent focus has shifted to pre-trained diffusion models for their superior generation capabilities. However, training these models is resource-intensive, and the results have not yet achieved satisfactory performance levels. To address this issue, we introduce Face-Adapter, an efficient and effective adapter designed for high-precision and high-fidelity face editing for pre-trained diffusion models. We observe that both face reenactment/swapping tasks essentially involve combinations of target structure, ID and attribute. We aim to sufficiently decouple the control of these factors to achieve both tasks in one model. Specifically, our method contains: 1) A Spatial Condition Generator that provides precise landmarks and background; 2) A Plug-and-play Identity Encoder that transfers face embeddings to the text space by a transformer decoder. 3) An Attribute Controller that integrates spatial conditions and detailed attributes. Face-Adapter achieves comparable or even superior performance in terms of motion control precision, ID retention capability, and generation quality compared to fully fine-tuned face reenactment/swapping models. Additionally, Face-Adapter seamlessly integrates with various StableDiffusion models.
