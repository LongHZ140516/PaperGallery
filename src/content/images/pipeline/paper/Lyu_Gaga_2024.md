---
title: "Gaga: Group Any Gaussians via 3D-aware Memory Bank"
authors: ["Weijie Lyu", "Xueting Li", "Abhijit Kundu", "Yi-Hsuan Tsai", "Ming-Hsuan Yang"]
year: "2024"
conference: "arXiv"
license: "CC BY-NC-SA"
tags: ["3DGS", "Segementation"]
image: "Lyu_Gaga_2024.webp"
paper: "https://arxiv.org/pdf/2404.07977"
code: "https://github.com/weijielyu/Gaga"
project: "https://www.gaga.gallery/"
bibtex: "@article{lyu2024gaga,
  title={Gaga: Group any gaussians via 3d-aware memory bank},
  author={Lyu, Weijie and Li, Xueting and Kundu, Abhijit and Tsai, Yi-Hsuan and Yang, Ming-Hsuan},
  year={2024}
}"
---

We introduce Gaga, a framework that reconstructs and segments open-world 3D scenes by leveraging inconsistent 2D masks predicted by zero-shot segmentation models. Contrasted to prior 3D scene segmentation approaches that heavily rely on video object tracking, Gaga utilizes spatial information and effectively associates object masks across diverse camera poses. By eliminating the assumption of continuous view changes in training images, Gaga demonstrates robustness to variations in camera poses, particularly beneficial for sparsely sampled images, ensuring precise mask label consistency. Furthermore, Gaga accommodates 2D segmentation masks from diverse sources and demonstrates robust performance with different open-world zero-shot segmentation models, significantly enhancing its versatility. Extensive qualitative and quantitative evaluations demonstrate that Gaga performs favorably against state-of-the-art methods, emphasizing its potential for real-world applications such as scene understanding and manipulation.
