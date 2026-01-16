---
title: "Robots Pre-train Robots: Manipulation-Centric Robotic Representation from Large-Scale Robot Dataset"
authors: ["Guangqi Jiang", "Yifei Sun", "Tao Huang", "Huanyu Li", "Yongyuan Liang", "Huazhe Xu"]
year: "2024"
conference: "arXiv"
license: ""
tags: ["Robotics","Dataset"]
image: "Jiang_Robots_2024.jpg"
paper: "https://arxiv.org/pdf/2410.22325"
code: "https://github.com/luccachiang/robots-pretrain-robots"
project: "https://robots-pretrain-robots.github.io/"
bibtex: "@article{jiang2024robots,
  title={Robots pre-train robots: Manipulation-centric robotic representation from large-scale robot datasets},
  author={Jiang, Guangqi and Sun, Yifei and Huang, Tao and Li, Huanyu and Liang, Yongyuan and Xu, Huazhe},
  journal={arXiv preprint arXiv:2410.22325},
  year={2024}
}"
---

The pre-training of visual representations has enhanced the efficiency of robot learning. Due to the lack of large-scale in-domain robotic datasets, prior works utilize in-the-wild human videos to pre-train robotic visual representation. Despite their promising results, representations from human videos are inevitably subject to distribution shifts and lack the dynamics information crucial for task completion. We first evaluate various pre-trained representations in terms of their correlation to the downstream robotic manipulation tasks (i.e., manipulation centricity). Interestingly, we find that the "manipulation centricity" is a strong indicator of success rates when applied to downstream tasks. Drawing from these findings, we propose Manipulation Centric Representation (MCR), a foundation representation learning framework capturing both visual features and the dynamics information such as actions and proprioceptions of manipulation tasks to improve manipulation centricity. Specifically, we pre-train a visual encoder on the DROID robotic dataset and leverage motion-relevant data such as robot proprioceptive states and actions. We introduce a novel contrastive loss that aligns visual observations with the robot's proprioceptive state-action dynamics, combined with a behavior cloning (BC)-like actor loss to predict actions during pre-training, along with a time contrastive loss. Empirical results across 4 simulation domains with 20 tasks verify that MCR outperforms the strongest baseline method by 14.8%. Moreover, MCR boosts the performance of data-efficient learning with a UR5e arm on 3 real-world tasks by 76.9%.
