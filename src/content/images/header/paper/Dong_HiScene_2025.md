---
title: "HiScene: Creating Hierarchical 3D Scenes with Isometric View Generation"
authors: ["Wenqi Dong", "Bangbang Yang", "Zesong Yang", "Yuan Li", "Tao Hu", "Hujun Bao", "Yuewen Ma", "Zhaopeng Cui"]
year: "2025"
conference: "MM"
license: "CC BY"
tags: ["Diffusion", "3D", "Generation"]
image: "Dong_HiScene_2025.webp"
paper: "https://arxiv.org/pdf/2504.13072"
code: ""
project: "https://zju3dv.github.io/hiscene/"
bibtex: "@inproceedings{dong2025hiscene,
  title={HiScene: creating hierarchical 3D scenes with isometric view generation},
  author={Dong, Wenqi and Yang, Bangbang and Yang, Zesong and Li, Yuan and Hu, Tao and Bao, Hujun and Ma, Yuewen and Cui, Zhaopeng},
  booktitle={Proceedings of the 33rd ACM International Conference on Multimedia},
  pages={9783--9792},
  year={2025}
}"
---

Scene-level 3D generation represents a critical frontier in multimedia and computer graphics, yet existing approaches either suffer from limited object categories or lack editing flexibility for interactive applications. In this paper, we present HiScene, a novel hierarchical framework that bridges the gap between 2D image generation and 3D object generation and delivers high-fidelity scenes with compositional identities and aesthetic scene content. Our key insight is treating scenes as hierarchical "objects" under isometric views, where a room functions as a complex object that can be further decomposed into manipulatable items. This hierarchical approach enables us to generate 3D content that aligns with 2D representations while maintaining compositional structure. To ensure completeness and spatial alignment of each decomposed instance, we develop a video-diffusion-based amodal completion technique that effectively handles occlusions and shadows between objects, and introduce shape prior injection to ensure spatial coherence within the scene. Experimental results demonstrate that our method produces more natural object arrangements and complete object instances suitable for interactive applications, while maintaining physical plausibility and alignment with user inputs.
