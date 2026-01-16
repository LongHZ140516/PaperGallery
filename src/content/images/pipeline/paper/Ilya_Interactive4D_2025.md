---
title: "Interactive4D: Interactive 4D LiDAR Segmentation"
authors: ["Ilya Fradlin", "Idil Esen Zulfikar", "Kadir Yilmaz", "Theodora Kontogianni", "Bastian Leibe"]
year: "2025"
conference: "ICRA"
license: ""
tags: ["Point Cloud", "LiDAR", "Segmentation"]
image: "Ilya_Interactive4D_2025.webp"
paper: "https://arxiv.org/pdf/2410.08206"
code: "https://github.com/Ilya-Fradlin/Interactive4D"
project: "https://ilya-fradlin.github.io/Interactive4D/"
bibtex: "@inproceedings{fradlin2025interactive4d,
  title={Interactive4d: Interactive 4d lidar segmentation},
  author={Fradlin, Ilya and Zulfikar, Idil Esen and Yilmaz, Kadir and Kontogianni, Theodora and Leibe, Bastian},
  booktitle={2025 IEEE International Conference on Robotics and Automation (ICRA)},
  pages={8329--8336},
  year={2025},
  organization={IEEE}
}"
---

Interactive segmentation has an important role in facilitating the annotation process of future LiDAR datasets. Existing approaches sequentially segment individual objects at each LiDAR scan, repeating the process throughout the entire sequence, which is redundant and ineffective. In this work, we propose interactive 4D segmentation, a new paradigm that allows segmenting multiple objects on multiple LiDAR scans simultaneously, and Interactive4D, the first interactive 4D segmentation model that segments multiple objects on superimposed consecutive LiDAR scans in a single iteration by utilizing the sequential nature of LiDAR data. While performing interactive segmentation, our model leverages the entire space-time volume, leading to more efficient segmentation. Operating on the 4D volume, it directly provides consistent instance IDs over time and also simplifies tracking annotations. Moreover, we show that click simulations are crucial for successful model training on LiDAR point clouds. To this end, we design a click simulation strategy that is better suited for the characteristics of LiDAR data. To demonstrate its accuracy and effectiveness, we evaluate Interactive4D on multiple LiDAR datasets, where Interactive4D achieves a new state-of-the-art by a large margin.
