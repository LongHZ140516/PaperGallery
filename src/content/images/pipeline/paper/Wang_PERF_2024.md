---
title: "PERF: Panoramic Neural Radiance Field from a Single Panorama"
authors: ["Guangcong Wang", "Peng Wang", "Zhaoxi Chen", "Wenping Wang", "Chen Change Loy", "Ziwei Liu"]
year: "2024"
conference: "TPAMI"
license: ""
tags: ["NeRF","Panorama"]
image: "Wang_PERF_2024.jpg"
paper: "https://arxiv.org/pdf/2310.16831"
code: ""
project: "https://github.com/perf-project/PeRF?tab=readme-ov-file"
bibtex: "@article{wang2024perf,
  title={Perf: Panoramic neural radiance field from a single panorama},
  author={Wang, Guangcong and Wang, Peng and Chen, Zhaoxi and Wang, Wenping and Loy, Chen Change and Liu, Ziwei},
  journal={IEEE Transactions on Pattern Analysis and Machine Intelligence},
  volume={46},
  number={10},
  pages={6905--6918},
  year={2024},
  publisher={IEEE}
}"
---

Neural Radiance Field (NeRF) has achieved substantial progress in novel view synthesis given multi-view images.
Recently, some works have attempted to train a NeRF from a single image with 3D priors. They mainly focus on a limited field of view
with a few occlusions, which greatly limits their scalability to real-world 360-degree panoramic scenarios with large-size occlusions. In
this paper, we present PERF, a 360-degree novel view synthesis framework that trains a panoramic neural radiance field from a single
panorama. Notably, PERF allows 3D roaming in a complex scene without expensive and tedious image collection. To achieve this goal,
we propose a novel collaborative RGBD inpainting method and a progressive inpainting-and-erasing method to lift up a 360-degree 2D
scene to a 3D scene. Specifically, we first predict a panoramic depth map as initialization given a single panorama and reconstruct
visible 3D regions with volume rendering. Then we introduce a collaborative RGBD inpainting approach into a NeRF for completing
RGB images and depth maps from random views, which is derived from an RGB Stable Diffusion model and a monocular depth
estimator. Finally, we introduce an inpainting-and-erasing strategy to avoid inconsistent geometry between a newly-sampled view and
reference views. The two components are integrated into the learning of NeRFs in a unified optimization framework and achieve
promising results. Extensive experiments on Replica and a new dataset PERF-in-the-wild demonstrate the superiority of our PERF over
state-of-the-art methods. Our PERF can be widely used for real-world applications, such as panorama-to-3D, text-to-3D, and 3D scene
stylization applications.
