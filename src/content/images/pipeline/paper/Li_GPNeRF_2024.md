---
title: "GP-NeRF: Generalized Perception NeRF for Context-Aware 3D Scene Understanding"
authors: ["Hao Li", "Dingwen Zhang", "Yalun Dai", "Nian Liu", "Lechao Cheng", "Jingfeng Li", "Jingdong Wang", "Junwei Han"]
year: "2024"
conference: "CVPR"
license: ""
tags: ["NeRF", "3D"]
image: "Li_GPNeRF_2024.webp"
paper: "https://arxiv.org/pdf/2311.11863"
code: "https://github.com/lifuguan/GP-NeRF"
project: "https://lifuguan.github.io/gpnerf-pages/"
bibtex: "@inproceedings{li2024gp,
  title={Gp-nerf: Generalized perception nerf for context-aware 3d scene understanding},
  author={Li, Hao and Zhang, Dingwen and Dai, Yalun and Liu, Nian and Cheng, Lechao and Li, Jingfeng and Wang, Jingdong and Han, Junwei},
  booktitle={Proceedings of the IEEE/CVF conference on computer vision and pattern recognition},
  pages={21708--21718},
  year={2024}
}"
---

Applying NeRF to downstream perception tasks for scene understanding and representation is becoming increasingly popular. Most existing methods treat semantic prediction as an additional rendering task, \textit{i.e.}, the "label rendering" task, to build semantic NeRFs. However, by rendering semantic/instance labels per pixel without considering the contextual information of the rendered image, these methods usually suffer from unclear boundary segmentation and abnormal segmentation of pixels within an object. To solve this problem, we propose Generalized Perception NeRF (GP-NeRF), a novel pipeline that makes the widely used segmentation model and NeRF work compatibly under a unified framework, for facilitating context-aware 3D scene perception. To accomplish this goal, we introduce transformers to aggregate radiance as well as semantic embedding fields jointly for novel views and facilitate the joint volumetric rendering of both fields. In addition, we propose two self-distillation mechanisms, i.e., the Semantic Distill Loss and the Depth-Guided Semantic Distill Loss, to enhance the discrimination and quality of the semantic field and the maintenance of geometric consistency. In evaluation, we conduct experimental comparisons under two perception tasks (\textit{i.e.} semantic and instance segmentation) using both synthetic and real-world datasets. Notably, our method outperforms SOTA approaches by 6.94%, 11.76%, and 8.47% on generalized semantic segmentation, finetuning semantic segmentation, and instance segmentation, respectively.
