---
title: "CharacterGen: Efficient 3D Character Generation from Single Images with Multi-View Pose Canonicalization"
authors: ["HaoYang Peng", "JiaPeng Zhang", "MengHao Guo", "YanPei Cao", "ShiMin Hu"]
year: "2024"
conference: "TOG"
license: "CC BY-NC-ND"
tags: ["Diffusion","3D", "Generation"]
image: "Peng_CharacterGen_2024.webp"
paper: "https://arxiv.org/pdf/2402.17214"
code: "https://github.com/zjp-shadow/CharacterGen?tab=readme-ov-file"
project: "https://charactergen.github.io/"
bibtex: "@article{peng2024charactergen,
  title={Charactergen: Efficient 3d character generation from single images with multi-view pose canonicalization},
  author={Peng, Hao-Yang and Zhang, Jia-Peng and Guo, Meng-Hao and Cao, Yan-Pei and Hu, Shi-Min},
  journal={ACM Transactions on Graphics (TOG)},
  volume={43},
  number={4},
  pages={1--13},
  year={2024},
  publisher={ACM New York, NY, USA}
}"
---

In the field of digital content creation, generating high-quality 3D characters from single images is challenging, especially given the complexities of various body poses and the issues of self-occlusion and pose ambiguity. In this paper, we present CharacterGen, a framework developed to efficiently generate 3D characters. CharacterGen introduces a streamlined generation pipeline along with an image-conditioned multi-view diffusion model. This model effectively calibrates input poses to a canonical form while retaining key attributes of the input image, thereby addressing the challenges posed by diverse poses. A transformer-based, generalizable sparse-view reconstruction model is the other core component of our approach, facilitating the creation of detailed 3D models from multi-view images. We also adopt a texture-back-projection strategy to produce high-quality texture maps. Additionally, we have curated a dataset of anime characters, rendered in multiple poses and views, to train and evaluate our model. Our approach has been thoroughly evaluated through quantitative and qualitative experiments, showing its proficiency in generating 3D characters with high-quality shapes and textures, ready for downstream applications such as rigging and animation.
