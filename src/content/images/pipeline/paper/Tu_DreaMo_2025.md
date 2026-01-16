---
title: "DreaMo: Articulated 3D Reconstruction From A Single Casual Video"
authors: ["Tao Tu", "Ming-Feng Li", "Chieh Hubert Lin", "Yen-Chi Cheng", "Min Sun", "Ming-Hsuan Yang"]
year: "2025"
conference: "WACV"
license: ""
tags: ["NeRF", "3D", "Reconstruction"]
image: "Tu_DreaMo_2025.jpg"
paper: "https://arxiv.org/pdf/2312.02617"
code: ""
project: "https://ttaoretw.github.io/DreaMo/"
bibtex: "@inproceedings{tu2025dreamo,
  title={Dreamo: Articulated 3d reconstruction from a single casual video},
  author={Tu, Tao and Li, Ming-Feng and Lin, Chieh Hubert and Cheng, Yen-Chi and Sun, Min and Yang, Ming-Hsuan},
  booktitle={2025 IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)},
  pages={2269--2279},
  year={2025},
  organization={IEEE}
}"
---

Articulated 3D reconstruction has valuable applications in various domains, yet it remains costly and demands intensive work from domain experts. Recent advancements in template-free learning methods show promising results with monocular videos. Nevertheless, these approaches necessitate a comprehensive coverage of all viewpoints of the subject in the input video, thus limiting their applicability to casually captured videos from online sources. In this work, we study articulated 3D shape reconstruction from a single and casually captured internet video, where the subject's view coverage is incomplete. We propose DreaMo that jointly performs shape reconstruction while solving the challenging low-coverage regions with view-conditioned diffusion prior and several tailored regularizations. In addition, we introduce a skeleton generation strategy to create human-interpretable skeletons from the learned neural bones and skinning weights. We conduct our study on a self-collected internet video collection characterized by incomplete view coverage. DreaMo shows promising quality in novel-view rendering, detailed articulated shape reconstruction, and skeleton generation. Extensive qualitative and quantitative studies validate the efficacy of each proposed component, and show existing methods are unable to solve correct geometry due to the incomplete view coverage.
