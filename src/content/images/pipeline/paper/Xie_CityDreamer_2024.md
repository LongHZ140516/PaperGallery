---
title: "CityDreamer: Compositional Generative Model of Unbounded 3D Cities"
authors: ["Haozhe Xie", "Zhaoxi Chen", "Fangzhou Hong", "Ziwei Liu"]
year: "2024"
conference: "CVPR"
license: ""
tags: ["Diffusion", "3D", "NeRF"]
image: "Xie_CityDreamer_2024.jpg"
paper: "https://arxiv.org/abs/2309.00610"
code: "https://github.com/hzxie/CityDreamer"
project: "https://www.infinitescript.com/project/city-dreamer"
bibtex: "@inproceedings{xie2024citydreamer,
  title={Citydreamer: Compositional generative model of unbounded 3d cities},
  author={Xie, Haozhe and Chen, Zhaoxi and Hong, Fangzhou and Liu, Ziwei},
  booktitle={Proceedings of the IEEE/CVF conference on computer vision and pattern recognition},
  pages={9666--9675},
  year={2024}
}"
---

3D city generation is a desirable yet challenging task, since humans are more sensitive to structural distortions in urban environments. Additionally, generating 3D cities is more complex than 3D natural scenes since buildings, as objects of the same class, exhibit a wider range of appearances compared to the relatively consistent appearance of objects like trees in natural scenes. To address these challenges, we propose \textbf{CityDreamer}, a compositional generative model designed specifically for unbounded 3D cities. Our key insight is that 3D city generation should be a composition of different types of neural fields: 1) various building instances, and 2) background stuff, such as roads and green lands. Specifically, we adopt the bird's eye view scene representation and employ a volumetric render for both instance-oriented and stuff-oriented neural fields. The generative hash grid and periodic positional embedding are tailored as scene parameterization to suit the distinct characteristics of building instances and background stuff. Furthermore, we contribute a suite of CityGen Datasets, including OSM and GoogleEarth, which comprises a vast amount of real-world city imagery to enhance the realism of the generated 3D cities both in their layouts and appearances. CityDreamer achieves state-of-the-art performance not only in generating realistic 3D cities but also in localized editing within the generated cities.
