---
title: "4Real: Towards Photorealistic 4D Scene Generation via Video Diffusion Models"
authors: ["Heng Yu", "Chaoyang Wang", "Peiye Zhuang", "Willi Menapace", "Aliaksandr Siarohin", "Junli Cao", "Laszlo A Jeni", "Sergey Tulyakov", "Hsin-Ying Lee"]
year: "2024"
conference: "NeurIPS"
license: "CC BY"
tags: ["4DGS", "Diffusion", "Video"]
image: "Yu_4Real_2024.jpg"
paper: "https://arxiv.org/pdf/2406.07472"
code: ""
project: "https://snap-research.github.io/4Real/"
bibtex: | 
  @article{yu20244real,
  title={4real: Towards photorealistic 4d scene generation via video diffusion models},
  author={Yu, Heng and Wang, Chaoyang and Zhuang, Peiye and Menapace, Willi and Siarohin, Aliaksandr and Cao, Junli and Jeni, Laszlo A and Tulyakov, Sergey and Lee, Hsin-Ying},
  journal={Advances in Neural Information Processing Systems},
  volume={37},
  pages={45256--45280},
  year={2024}
  }
---

Existing dynamic scene generation methods mostly rely on distilling knowledge from pre-trained 3D generative models, which are typically fine-tuned on synthetic object datasets. As a result, the generated scenes are often object-centric and lack photorealism. To address these limitations, we introduce a novel pipeline designed for photorealistic text-to-4D scene generation, discarding the dependency on multi-view generative models and instead fully utilizing video generative models trained on diverse real-world datasets. Our method begins by generating a reference video using the video generation model. We then learn the canonical 3D representation of the video using a freeze-time video, delicately generated from the reference video. To handle inconsistencies in the freeze-time video, we jointly learn a per-frame deformation to model these imperfections. We then learn the temporal deformation based on the canonical representation to capture dynamic interactions in the reference video. The pipeline facilitates the generation of dynamic scenes with enhanced photorealism and structural integrity, viewable from multiple perspectives, thereby setting a new standard in 4D scene generation.