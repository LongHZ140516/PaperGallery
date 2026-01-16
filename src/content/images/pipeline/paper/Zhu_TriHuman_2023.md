---
title: "TriHuman : A Real-time and Controllable Tri-plane Representation for Detailed Human Geometry and Appearance Synthesis"
authors: ["Heming Zhu", "Fangneng Zhan", "Christian Theobalt", "Marc Habermann"]
year: "2024"
conference: "TOG"
license: "CC BY"
tags: ["NeRF","Real-time", "Synthesis"]
image: "Zhu_TriHuman_2023.webp"
paper: "https://arxiv.org/pdf/2312.05161"
code: ""
project: "https://vcai.mpi-inf.mpg.de/projects/trihuman/"
bibtex: "@article{zhu2024trihuman,
  title={Trihuman: a real-time and controllable tri-plane representation for detailed human geometry and appearance synthesis},
  author={Zhu, Heming and Zhan, Fangneng and Theobalt, Christian and Habermann, Marc},
  journal={ACM Transactions on Graphics},
  volume={44},
  number={1},
  pages={1--17},
  year={2024},
  publisher={ACM New York, NY}
}"
---

Creating controllable, photorealistic, and geometrically detailed digital doubles of real humans solely from video data is a key challenge in Computer Graphics and Vision, especially when real-time performance is required. Recent methods attach a neural radiance field (NeRF) to an articulated structure, e.g., a body model or a skeleton, to map points into a pose canonical space while conditioning the NeRF on the skeletal pose. These approaches typically parameterize the neural field with a multi-layer perceptron (MLP) leading to a slow runtime. To address this drawback, we propose TriHuman a novel human-tailored, deformable, and efficient tri-plane representation, which achieves real-time performance, state-of-the-art pose-controllable geometry synthesis as well as photorealistic rendering quality. At the core, we non-rigidly warp global ray samples into our undeformed tri-plane texture space, which effectively addresses the problem of global points being mapped to the same tri-plane locations. We then show how such a tri-plane feature representation can be conditioned on the skeletal motion to account for dynamic appearance and geometry changes. Our results demonstrate a clear step towards higher quality in terms of geometry and appearance modeling of humans as well as runtime performance.
