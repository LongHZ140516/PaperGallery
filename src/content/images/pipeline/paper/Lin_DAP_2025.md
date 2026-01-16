---
title: "Depth Any Panoramas: A Foundation Model for Panoramic Depth Estimation"
authors: ["Xin Lin", "Meixi Song", "Dizhe Zhang", "Wenxuan Lu", "Haodong Li", "Bo Du", "Ming-Hsuan Yang", "Truong Nguyen", "Lu Qi"]
year: "2025"
conference: "arXiv"
license: ""
tags: ["Depth Estimation", "Panorama", "Dataset"]
image: "Lin_DAP_2025.jpg"
paper: "https://arxiv.org/abs/2512.16913"
code: "https://github.com/Insta360-Research-Team/DAP"
project: "https://insta360-research-team.github.io/DAP_website/"
bibtex: "@article{lin2025depth,
  title={Depth Any Panoramas: A Foundation Model for Panoramic Depth Estimation},
  author={Lin, Xin and Song, Meixi and Zhang, Dizhe and Lu, Wenxuan and Li, Haodong and Du, Bo and Yang, Ming-Hsuan and Nguyen, Truong and Qi, Lu},
  journal={arXiv preprint arXiv:2512.16913},
  year={2025}
}"
---

In this work, we present a panoramic metric depth foundation model that generalizes across diverse scene distances. We explore a data-in-the-loop paradigm from the view of both data construction and framework design. We collect a large-scale dataset by combining public datasets, high-quality synthetic data from our UE5 simulator and text-to-image models, and real panoramic images from the web. To reduce domain gaps between indoor/outdoor and synthetic/real data, we introduce a three-stage pseudo-label curation pipeline to generate reliable ground truth for unlabeled images. For the model, we adopt DINOv3-Large as the backbone for its strong pre-trained generalization, and introduce a plug-and-play range mask head, sharpness-centric optimization, and geometry-centric optimization to improve robustness to varying distances and enforce geometric consistency across views. Experiments on multiple benchmarks (e.g., Stanford2D3D, Matterport3D, and Deep360) demonstrate strong performance and zero-shot generalization, with particularly robust and stable metric predictions in diverse real-world scenes.
