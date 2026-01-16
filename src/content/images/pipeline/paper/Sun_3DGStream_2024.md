---
title: "3DGStream: On-the-Fly Training of 3D Gaussians for Efficient Streaming of Photo-Realistic Free-Viewpoint Videos"
authors: ["Jiakai Sun", "Han Jiao", "Guangyuan Li", "Zhanjie Zhang", "Lei Zhao", "Wei Xing"]
year: "2024"
conference: "CVPR"
license: ""
tags: ["3DGS", "Video"]
image: "Sun_3DGStream_2024.webp"
paper: "https://openaccess.thecvf.com/content/CVPR2024/papers/Sun_3DGStream_On-the-Fly_Training_of_3D_Gaussians_for_Efficient_Streaming_of_CVPR_2024_paper.pdf"
code: "https://github.com/SJoJoK/3DGStream"
project: "http://sjojok.top/3dgstream/"
bibtex: "@inproceedings{sun20243dgstream,
  title={3dgstream: On-the-fly training of 3d gaussians for efficient streaming of photo-realistic free-viewpoint videos},
  author={Sun, Jiakai and Jiao, Han and Li, Guangyuan and Zhang, Zhanjie and Zhao, Lei and Xing, Wei},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  pages={20675--20685},
  year={2024}
}"
---

Constructing photo-realistic Free-Viewpoint Videos (FVVs) of dynamic scenes from multi-view videos remains a challenging endeavor. Despite the remarkable advancements achieved by current neural rendering techniques, these methods generally require complete video sequences for offline training and are not capable of real-time rendering. To address these constraints, we introduce 3DGStream, a method designed for efficient FVV streaming of real-world dynamic scenes. Our method achieves fast on-the-fly per-frame reconstruction within 12 seconds and real-time rendering at 200 FPS. Specifically, we utilize 3D Gaussians (3DGs) to represent the scene. Instead of the naïve approach of directly optimizing 3DGs per-frame, we employ a compact Neural Transformation Cache (NTC) to model the translations and rotations of 3DGs, markedly reducing the training time and storage required for each FVV frame. Furthermore, we propose an adaptive 3DG addition strategy to handle emerging objects in dynamic scenes. Experiments demonstrate that 3DGStream achieves competitive performance in terms of rendering speed, image quality, training time, and model storage when compared with state-of-the-art methods.