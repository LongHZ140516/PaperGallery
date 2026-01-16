---
title: "ColNeRF: Collaboration for Generalizable Sparse Input Neural Radiance Field"
authors: ["Zhangkai Ni", "Peiqi Yang", "Wenhan Yang", "Hanli Wang", "Lin Ma", "Sam Kwong"]
year: "2024"
conference: "AAAI"
license: ""
tags: ["NeRF", "Sparse Views"]
image: "Ni_ColNeRF_2024.webp"
paper: "https://arxiv.org/pdf/2312.09095"
code: "https://github.com/eezkni/ColNeRF"
project: ""
bibtex: "@inproceedings{ni2024colnerf,
  title={ColNeRF: collaboration for generalizable sparse input neural radiance field},
  author={Ni, Zhangkai and Yang, Peiqi and Yang, Wenhan and Wang, Hanli and Ma, Lin and Kwong, Sam},
  booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},
  volume={38},
  number={5},
  pages={4325--4333},
  year={2024}
}"
---

Neural Radiance Fields (NeRF) have demonstrated impressive potential in synthesizing novel views from dense input, however, their effectiveness is challenged when dealing with sparse input. Existing approaches that incorporate additional depth or semantic supervision can alleviate this issue to an extent. However, the process of supervision collection is not only costly but also potentially inaccurate, leading to poor performance and generalization ability in diverse scenarios. In our work, we introduce a novel model: the Collaborative Neural Radiance Fields (ColNeRF) designed to work with sparse input. The collaboration in ColNeRF includes both the cooperation between sparse input images and the cooperation between the output of the neural radiation field. Through this, we construct a novel collaborative module that aligns information from various views and meanwhile imposes self-supervised constraints to ensure multi-view consistency in both geometry and appearance. A Collaborative Cross-View Volume Integration module (CCVI) is proposed to capture complex occlusions and implicitly infer the spatial location of objects. Moreover, we introduce self-supervision of target rays projected in multiple directions to ensure geometric and color consistency in adjacent regions. Benefiting from the collaboration at the input and output ends, ColNeRF is capable of capturing richer and more generalized scene representation, thereby facilitating higher-quality results of the novel view synthesis. Extensive experiments demonstrate that ColNeRF outperforms state-of-the-art sparse input generalizable NeRF methods. Furthermore, our approach exhibits superiority in fine-tuning towards adapting to new scenes, achieving competitive performance compared to per-scene optimized NeRF-based methods while significantly reducing computational costs.
