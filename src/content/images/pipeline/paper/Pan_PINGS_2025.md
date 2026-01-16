---
title: "PINGS: Gaussian Splatting Meets Distance Fields within a Point-Based Implicit Neural Map"
authors: ["Yue Pan", "Xingguang Zhong", "Liren Jin", "Louis Wiesmann", "Marija Popović", "Jens Behley", "Cyrill Stachniss"]
year: "2025"
conference: ""
tags: ["3DGS","Implicit"]
image: "Pan_PINGS_2025.webp"
paper: "https://arxiv.org/pdf/2502.05752"
code: ""
project: ""
bibtex: |
  @article{pan2025pings,
  title={PINGS: Gaussian Splatting Meets Distance Fields within a Point-Based Implicit Neural Map},
  author={Pan, Yue and Zhong, Xingguang and Jin, Liren and Wiesmann, Louis and Popovi{\'c}, Marija and Behley, Jens and Stachniss, Cyrill},
  journal={arXiv preprint arXiv:2502.05752},
  year={2025}
  }
---

Robots require high-fidelity reconstructions of their environment for effective operation. Such scene representations should be both, geometrically accurate and photorealistic to support downstream tasks. While this can be achieved by building distance fields from range sensors and radiance fields from cameras, the scalable incremental mapping of both fields consistently and at the same time with high quality remains challenging. In this paper, we propose a novel map representation that unifies a continuous signed distance field and a Gaussian splatting radiance field within an elastic and compact point-based implicit neural map. By enforcing geometric consistency between these fields, we achieve mutual improvements by exploiting both modalities. We devise a LiDAR-visual SLAM system called PINGS using the proposed map representation and evaluate it on several challenging large-scale datasets. Experimental results demonstrate that PINGS can incrementally build globally consistent distance and radiance fields encoded with a compact set of neural points. Compared to the state-of-the-art methods, PINGS achieves superior photometric and geometric rendering at novel views by leveraging the constraints from the distance field. Furthermore, by utilizing dense photometric cues and multi-view consistency from the radiance field, PINGS produces more accurate distance fields, leading to improved odometry estimation and mesh reconstruction.
