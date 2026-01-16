---
title: "LeviTor: 3D Trajectory Oriented Image-to-Video Synthesis"
authors: ["Hanlin Wang", "Hao Ouyang", "Qiuyu Wang", "Wen Wang", "Ka Leong Cheng", "Qifeng Chen", "Yujun Shen", "Limin Wang"]
year: "2025"
conference: "CVPR"
license: ""
tags: ["Diffusion","3D Trajectory Control"]
image: "Wang_LeviTor_2025.webp"
paper: "https://openaccess.thecvf.com/content/CVPR2025/papers/Wang_LeviTor_3D_Trajectory_Oriented_Image-to-Video_Synthesis_CVPR_2025_paper.pdf"
code: "https://github.com/qiuyu96/LeviTor"
project: "https://ppetrichor.github.io/levitor.github.io/"
bibtex: "@inproceedings{wang2025levitor,
  title={Levitor: 3d trajectory oriented image-to-video synthesis},
  author={Wang, Hanlin and Ouyang, Hao and Wang, Qiuyu and Wang, Wen and Cheng, Ka Leong and Chen, Qifeng and Shen, Yujun and Wang, Limin},
  booktitle={Proceedings of the Computer Vision and Pattern Recognition Conference},
  pages={12490--12500},
  year={2025}
}"
---

The intuitive nature of drag-based interaction has led to its growing adoption for controlling object trajectories in image-to-video synthesis. Still, existing methods that perform dragging in the 2D space usually face ambiguity when handling out-of-plane movements. In this work, we augment the interaction with a new dimension, i.e., the depth dimension, such that users are allowed to assign a relative depth for each point on the trajectory. That way, our new interaction paradigm not only inherits the convenience from 2D dragging, but facilitates trajectory control in the 3D space, broadening the scope of creativity. We propose a pioneering method for 3D trajectory control in image-to-video synthesis by abstracting object masks into a few cluster points. These points, accompanied by the depth information and the instance information, are finally fed into a video diffusion model as the control signal. Extensive experiments validate the effectiveness of our approach, dubbed LeviTor, in precisely manipulating the object movements when producing photo-realistic videos from static images.
