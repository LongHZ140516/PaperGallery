---
title: "LiMoE: Mixture of LiDAR Representation Learners from Automotive Scenes"
authors: ["Xiang Xu", "Lingdong Kong", "Hui Shuai", "Liang Pan", "Ziwei Liu", "Qingshan Liu"]
year: "2025"
conference: "CVPR"
license: "CC BY-SA"
tags: ["PointCloud","Automotive Scenes"]
image: "Xu_LiMoE_2025.jpg"
paper: "https://arxiv.org/abs/2501.04004"
code: "https://github.com/Xiangxu-0103/LiMoE"
project: "https://ldkong.com/LiMoE"
bibtex: "@misc{xu2025limoemixturelidarrepresentation,
      title={LiMoE: Mixture of LiDAR Representation Learners from Automotive Scenes}, 
      author={Xiang Xu and Lingdong Kong and Hui Shuai and Liang Pan and Ziwei Liu and Qingshan Liu},
      year={2025},
      eprint={2501.04004},
      archivePrefix={arXiv},
      primaryClass={cs.CV},
      url={https://arxiv.org/abs/2501.04004}, 
}"
---

LiDAR data pretraining offers a promising approach to leveraging large-scale, readily available datasets for enhanced data utilization. However, existing methods predominantly focus on sparse voxel representation, overlooking the complementary attributes provided by other LiDAR representations. In this work, we propose LiMoE, a framework that integrates the Mixture of Experts (MoE) paradigm into LiDAR data representation learning to synergistically combine multiple representations, such as range images, sparse voxels, and raw points. Our approach consists of three stages: i) Image-to-LiDAR Pretraining, which transfers prior knowledge from images to point clouds across different representations; ii) Contrastive Mixture Learning (CML), which uses MoE to adaptively activate relevant attributes from each representation and distills these mixed features into a unified 3D network; iii) Semantic Mixture Supervision (SMS), which combines semantic logits from multiple representations to boost downstream segmentation performance. Extensive experiments across eleven large-scale LiDAR datasets demonstrate our effectiveness and superiority. The code has been made publicly accessible.
