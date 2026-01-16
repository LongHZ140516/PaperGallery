---
title: "MagicMan: Generative Novel View Synthesis of Humans with 3D-Aware Diffusion and Iterative Refinement"
authors: ["Xu He","Zhiyong Wu","Xiaoyu Li","Di Kang","Chaopeng Zhang","Jiangnan Ye","Liyang Chen","Xiangjun Gao","Han Zhang","Haolin Zhuang"]
year: "2025"
conference: "AAAI"
license: ""
tags: ["Diffusion","3D"]
image: "He_MagicMAN_2025.jpg"
paper: "https://arxiv.org/abs/2408.14211"
code: "https://github.com/thuhcsi/MagicMan?tab=readme-ov-file"
project: "https://thuhcsi.github.io/MagicMan/"
bibtex: "@inproceedings{he2025magicman,
  title={Magicman: Generative novel view synthesis of humans with 3d-aware diffusion and iterative refinement},
  author={He, Xu and Zhiyong, Zhiyong and Li, Xiaoyu and Kang, Di and Zhang, Chaopeng and Ye, Jiangnan and Chen, Liyang and Gao, Xiangjun and Zhang, Han and Zhuang, Haolin},
  booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},
  volume={39},
  number={3},
  pages={3437--3445},
  year={2025}
}"
---

Existing works in single-image human reconstruction suffer from weak generalizability due to insufficient training data or 3D inconsistencies for a lack of comprehensive multi-view knowledge. In this paper, we introduce MagicMan, a human-specific multi-view diffusion model designed to generate high-quality novel view images from a single reference image. As its core, we leverage a pre-trained 2D diffusion model as the generative prior for generalizability, with the parametric SMPL-X model as the 3D body prior to promote 3D awareness. To tackle the critical challenge of maintaining consistency while achieving dense multi-view generation for improved 3D human reconstruction, we first introduce hybrid multi-view attention to facilitate both efficient and thorough information interchange across different views. Additionally, we present a geometry-aware dual branch to perform concurrent generation in both RGB and normal domains, further enhancing consistency via geometry cues. Last but not least, to address ill-shaped issues arising from inaccurate SMPL-X estimation that conflicts with the reference image, we propose a novel iterative refinement strategy, which progressively optimizes SMPL-X accuracy while enhancing the quality and consistency of the generated multi-views. Extensive experimental results demonstrate that our method significantly outperforms existing approaches in both novel view synthesis and subsequent 3D human reconstruction tasks.
