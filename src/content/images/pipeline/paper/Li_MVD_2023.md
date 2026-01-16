---
title: "Multi-view diffusion process for spectral clustering and image retrieval"
authors: ["Qilin Li","Senjian An","Ling Li", "Wanquan Liu", "Yanda Shao"]
year: "2023"
conference: "TIP"
lincese: " "
tags: ["Diffusion","Spectral Cluster"]
image: "Li_MVD_2023.webp"
paper: "https://ieeexplore.ieee.org/abstract/document/10214517"
code: ""
project: ""
bibtex: "@article{li2023multi,
  title={Multi-view diffusion process for spectral clustering and image retrieval},
  author={Li, Qilin and An, Senjian and Li, Ling and Liu, Wanquan and Shao, Yanda},
  journal={IEEE Transactions on Image Processing},
  volume={32},
  pages={4610--4620},
  year={2023},
  publisher={IEEE}
}"
---

This paper presents a novel approach to multi-view graph learning that combines weight learning and graph learning in an alternating optimization framework. Multi-view graph learning refers to the problem of constructing a unified affinity graph using heterogeneous sources of data representation, which is a popular technique in many learning systems where no prior knowledge of data distribution is available. Our approach is based on a fusion-and-diffusion strategy, in which multiple affinity graphs are fused together via a weight learning scheme based on the unsupervised graph smoothness and utilised as a consensus prior to the diffusion. We propose a novel multi-view diffusion process that learns a manifold-aware affinity graph by propagating affinities on tensor product graphs, leveraging high-order contextual information to enhance pairwise affinities. In contrast to existing multi-view graph learning approaches, our approach is not limited by the quality of initial graphs or the assumption of a latent common subspace among multiple views. Instead, our approach is able to identify the consistency among views and fuse multiple graphs adaptively. We formulate both weight learning and diffusion-based affinity learning in a unified framework and propose an alternating optimization solver that is guaranteed to converge. The proposed approach is applied to image retrieval and clustering tasks on 16 real-world datasets. Extensive experimental results demonstrate that our approach outperforms state-of-the-art methods for both retrieval and clustering on 13 out of 16 datasets.
