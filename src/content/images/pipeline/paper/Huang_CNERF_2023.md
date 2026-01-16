---
title: "C-NERF: Representing Scene Changes as Directional Consistency Difference-based NeRF"
authors: ["Rui Huang", "Binbin Jiang", "Qingyi Zhao", "William Wang", "Yuxiang Zhang", "Qing Guo"]
year: "2023"
conference: "arXiv"
license: ""
tags: ["NeRF", "Detection"]
image: "Huang_CNERF_2023.webp"
paper: "https://arxiv.org/pdf/2312.02751"
code: "https://github.com/C-NeRF/C-NeRF"
project: ""
bibtex: "@article{huang2023c,
  title={C-nerf: Representing scene changes as directional consistency difference-based nerf},
  author={Huang, Rui and Jiang, Binbin and Zhao, Qingyi and Wang, William and Zhang, Yuxiang and Guo, Qing},
  journal={arXiv preprint arXiv:2312.02751},
  year={2023}
}"
---

In this work, we aim to detect the changes caused by object variations in a scene represented by the neural radiance fields (NeRFs). Given an arbitrary view and two sets of scene images captured at different timestamps, we can predict the scene changes in that view, which has significant potential applications in scene monitoring and measuring. We conducted preliminary studies and found that such an exciting task cannot be easily achieved by utilizing existing NeRFs and 2D change detection methods with many false or missing detections. The main reason is that the 2D change detection is based on the pixel appearance difference between spatial-aligned image pairs and neglects the stereo information in the NeRF. To address the limitations, we propose the C-NERF to represent scene changes as directional consistency difference-based NeRF, which mainly contains three modules. We first perform the spatial alignment of two NeRFs captured before and after changes. Then, we identify the change points based on the direction-consistent constraint; that is, real change points have similar change representations across view directions, but fake change points do not. Finally, we design the change map rendering process based on the built NeRFs and can generate the change map of an arbitrarily specified view direction. To validate the effectiveness, we build a new dataset containing ten scenes covering diverse scenarios with different changing objects. Our approach surpasses state-of-the-art 2D change detection and NeRF-based methods by a significant margin.
