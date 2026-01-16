---
title: "3DHacker: Spectrum-based Decision Boundary Generation for Hard-label 3D Point Cloud Attack"
authors: ["Yunbo Tao", "Daizong Liu", "Pan Zhou", "Yulai Xie", "Wei Du", "Wei Hu"]
year: "2023"
conference: "ICCV"
license: ""
tags: ["Point Cloud", "3D Attack", "Generation"]
image: "Tao_3DHacker_2023.jpg"
paper: "https://openaccess.thecvf.com/content/ICCV2023/papers/Tao_3DHacker_Spectrum-based_Decision_Boundary_Generation_for_Hard-label_3D_Point_Cloud_ICCV_2023_paper.pdf"
code: ""
project: ""
bibtex: "@inproceedings{tao20233dhacker,
  title={3dhacker: Spectrum-based decision boundary generation for hard-label 3d point cloud attack},
  author={Tao, Yunbo and Liu, Daizong and Zhou, Pan and Xie, Yulai and Du, Wei and Hu, Wei},
  booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision},
  pages={14340--14350},
  year={2023}
}"
---

With the maturity of depth sensors, the vulnerability of 3D point cloud models has received increasing attention in various applications such as autonomous driving and robot navigation. Previous 3D adversarial attackers either follow the white-box setting to iteratively update the coordinate perturbations based on gradients, or utilize the output model logits to estimate noisy gradients in the black-box setting. However, these attack methods are hard to be deployed in real-world scenarios since realistic 3D applications will not share any model details to users. Therefore, we explore a more challenging yet practical 3D attack setting, \textit{i.e.}, attacking point clouds with black-box hard labels, in which the attacker can only have access to the prediction label of the input. To tackle this setting, we propose a novel 3D attack method, termed \textbf{3D} \textbf{H}ard-label att\textbf{acker} (\textbf{3DHacker}), based on the developed decision boundary algorithm to generate adversarial samples solely with the knowledge of class labels. Specifically, to construct the class-aware model decision boundary, 3DHacker first randomly fuses two point clouds of different classes in the spectral domain to craft their intermediate sample with high imperceptibility, then projects it onto the decision boundary via binary search. To restrict the final perturbation size, 3DHacker further introduces an iterative optimization strategy to move the intermediate sample along the decision boundary for generating adversarial point clouds with smallest trivial perturbations. Extensive evaluations show that, even in the challenging hard-label setting, 3DHacker still competitively outperforms existing 3D attacks regarding the attack performance as well as adversary quality.
