---
title: "SemCity: Semantic Scene Generation with Triplane Diffusion"
authors: ["Jumin Lee", "Sebin Lee", "Changho Jo", "Woobin Im", "Juhyeong Seon", "Sung-Eui Yoon"]
year: "2024"
conference: "CVPR"
license: "CC BY-NC-ND"
tags: ["Diffusion","3D", "Triplane"]
image: "Lee_SemCity_2024.webp"
paper: "https://arxiv.org/abs/2403.07773"
code: "https://github.com/zoomin-lee/SemCity"
project: "https://sglab.kaist.ac.kr/SemCity/"
bibtex: "@inproceedings{lee2024semcity,
  title={Semcity: Semantic scene generation with triplane diffusion},
  author={Lee, Jumin and Lee, Sebin and Jo, Changho and Im, Woobin and Seon, Juhyeong and Yoon, Sung-Eui},
  booktitle={Proceedings of the IEEE/CVF conference on computer vision and pattern recognition},
  pages={28337--28347},
  year={2024}
}"
---

We present "SemCity," a 3D diffusion model for semantic scene generation in real-world outdoor environments. Most 3D diffusion models focus on generating a single object, synthetic indoor scenes, or synthetic outdoor scenes, while the generation of real-world outdoor scenes is rarely addressed. In this paper, we concentrate on generating a real-outdoor scene through learning a diffusion model on a real-world outdoor dataset. In contrast to synthetic data, real-outdoor datasets often contain more empty spaces due to sensor limitations, causing challenges in learning real-outdoor distributions. To address this issue, we exploit a triplane representation as a proxy form of scene distributions to be learned by our diffusion model. Furthermore, we propose a triplane manipulation that integrates seamlessly with our triplane diffusion model. The manipulation improves our diffusion model's applicability in a variety of downstream tasks related to outdoor scene generation such as scene inpainting, scene outpainting, and semantic scene completion refinements. In experimental results, we demonstrate that our triplane diffusion model shows meaningful generation results compared with existing work in a real-outdoor dataset, SemanticKITTI. We also show our triplane manipulation facilitates seamlessly adding, removing, or modifying objects within a scene. Further, it also enables the expansion of scenes toward a city-level scale. Finally, we evaluate our method on semantic scene completion refinements where our diffusion model enhances predictions of semantic scene completion networks by learning scene distribution.
