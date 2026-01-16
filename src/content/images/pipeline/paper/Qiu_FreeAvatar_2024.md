---
title: "FreeAvatar: Robust 3D Facial Animation Transfer by Learning an Expression Foundation Model"
authors: ["Feng Qiu", "Wei Zhang", "Chen Liu", "Rudong An", "Lincheng Li", "Yu Ding", "Changjie Fan", "Zhipeng Hu", "Xin Yu"]
year: "2024"
conference: "SIGGRAPH Asia"
license: "CC BY"
tags: ["3D", "Facial Animation"]
image: "Qiu_FreeAvatar_2024.jpg"
paper: "https://dl.acm.org/doi/full/10.1145/3680528.3687669"
code: "https://github.com/FuxiVirtualHuman/free_avatar"
project: ""
bibtex: "@inproceedings{qiu2024freeavatar,
  title={FreeAvatar: Robust 3D Facial Animation Transfer by Learning an Expression Foundation Model},
  author={Qiu, Feng and Zhang, Wei and Liu, Chen and An, Rudong and Li, Lincheng and Ding, Yu and Fan, Changjie and Hu, Zhipeng and Yu, Xin},
  booktitle={SIGGRAPH Asia 2024 Conference Papers},
  pages={1--11},
  year={2024}
}"
---

Video-driven 3D facial animation transfer aims to drive avatars to reproduce the expressions of actors. Existing methods have achieved remarkable results by constraining both geometric and perceptual consistency. However, geometric constraints (like those designed on facial landmarks) are insufficient to capture subtle emotions, while expression features trained on classification tasks lack fine granularity for complex emotions. To address this, we propose \textbf{FreeAvatar}, a robust facial animation transfer method that relies solely on our learned expression representation. Specifically, FreeAvatar consists of two main components: the expression foundation model and the facial animation transfer model. In the first component, we initially construct a facial feature space through a face reconstruction task and then optimize the expression feature space by exploring the similarities among different expressions. Benefiting from training on the amounts of unlabeled facial images and re-collected expression comparison dataset, our model adapts freely and effectively to any in-the-wild input facial images. In the facial animation transfer component, we propose a novel Expression-driven Multi-avatar Animator, which first maps expressive semantics to the facial control parameters of 3D avatars and then imposes perceptual constraints between the input and output images to maintain expression consistency. To make the entire process differentiable, we employ a trained neural renderer to translate rig parameters into corresponding images. Furthermore, unlike previous methods that require separate decoders for each avatar, we propose a dynamic identity injection module that allows for the joint training of multiple avatars within a single network.
