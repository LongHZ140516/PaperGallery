---
title: "MMHead: Towards Fine-grained Multi-modal 3D Facial Animation"
authors: ["Sijing Wu", "Yunhao Li", "Yichao Yan", "Huiyu Duan", "Ziwei Liu", "Guangtao Zhai"]
year: "2024"
conference: "MM"
license: ""
tags: ["3D", "Facial", "Animation", "Multi-modal"]
image: "Wu_MMHead_2024.webp"
paper: "https://arxiv.org/pdf/2410.07757"
code: "https://github.com/wsj-sjtu/MMHead"
project: "https://wsj-sjtu.github.io/MMHead/"
bibtex: "@inproceedings{wu2024mmhead,
  title={Mmhead: Towards fine-grained multi-modal 3d facial animation},
  author={Wu, Sijing and Li, Yunhao and Yan, Yichao and Duan, Huiyu and Liu, Ziwei and Zhai, Guangtao},
  booktitle={Proceedings of the 32nd ACM International Conference on Multimedia},
  pages={7966--7975},
  year={2024}
}"
---

3D facial animation has attracted considerable attention due to its extensive applications in the multimedia field. Audio-driven 3D facial animation has been widely explored with promising results. However, multi-modal 3D facial animation, especially text-guided 3D facial animation is rarely explored due to the lack of multi-modal 3D facial animation dataset. To fill this gap, we first construct a large-scale multi-modal 3D facial animation dataset, MMHead, which consists of 49 hours of 3D facial motion sequences, speech audios, and rich hierarchical text annotations. Each text annotation contains abstract action and emotion descriptions, fine-grained facial and head movements (i.e., expression and head pose) descriptions, and three possible scenarios that may cause such emotion. Concretely, we integrate five public 2D portrait video datasets, and propose an automatic pipeline to 1) reconstruct 3D facial motion sequences from monocular videos; and 2) obtain hierarchical text annotations with the help of AU detection and ChatGPT. Based on the MMHead dataset, we establish benchmarks for two new tasks: text-induced 3D talking head animation and text-to-3D facial motion generation. Moreover, a simple but efficient VQ-VAE-based method named MM2Face is proposed to unify the multi-modal information and generate diverse and plausible 3D facial motions, which achieves competitive results on both benchmarks. Extensive experiments and comprehensive analysis demonstrate the significant potential of our dataset and benchmarks in promoting the development of multi-modal 3D facial animation.
