---
title: "Hunyuan3D-Omni: A Unified Framework for Controllable Generation of 3D Assets"
authors: ["Bowen Zhang", "Chunchao Guo", "Haolin Liu", "Hongyu Yan", "Huiwen Shi", "Jingwei Huang", "Junlin Yu", "Kunhong Li", "Linus", "Penghao Wang", "Qingxiang Lin", "Sicong Liu", "Xianghui Yang", "Yixuan Tang", "Yunfei Zhao", "Zeqiang Lai", "Zhihao Liang", "Zibo Zhao"]
year: "2025"
conference: "arXiv"
license: "CC BY-NC-ND"
tags: ["3D", "Generation", "Controllable"]
image: "Zhang_Hunyuan3DOmni_2025.webp"
paper: "https://arxiv.org/abs/2509.21245"
code: "https://github.com/Tencent-Hunyuan/Hunyuan3D-Omni"
project: "https://3d.hunyuan.tencent.com/"
bibtex: "@article{hunyuan3d2025hunyuan3d,
  title={Hunyuan3d-omni: A unified framework for controllable generation of 3d assets},
  author={Hunyuan3D, Team and Zhang, Bowen and Guo, Chunchao and Liu, Haolin and Yan, Hongyu and Shi, Huiwen and Huang, Jingwei and Yu, Junlin and Li, Kunhong and Wang, Penghao and others},
  journal={arXiv preprint arXiv:2509.21245},
  year={2025}
}"
---

Recent advances in 3D-native generative models have accelerated asset creation for games, film, and design. However, most methods still rely primarily on image or text conditioning and lack fine-grained, cross-modal controls, which limits controllability and practical adoption. To address this gap, we present Hunyuan3D-Omni, a unified framework for fine-grained, controllable 3D asset generation built on Hunyuan3D 2.1. In addition to images, Hunyuan3D-Omni accepts point clouds, voxels, bounding boxes, and skeletal pose priors as conditioning signals, enabling precise control over geometry, topology, and pose. Instead of separate heads for each modality, our model unifies all signals in a single cross-modal architecture. We train with a progressive, difficulty-aware sampling strategy that selects one control modality per example and biases sampling toward harder signals (e.g., skeletal pose) while downweighting easier ones (e.g., point clouds), encouraging robust multi-modal fusion and graceful handling of missing inputs. Experiments show that these additional controls improve generation accuracy, enable geometry-aware transformations, and increase robustness for production workflows.
