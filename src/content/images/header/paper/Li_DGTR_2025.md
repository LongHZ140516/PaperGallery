---
title: "DGTR: Distributed Gaussian Turbo-Reconstruction for Sparse-View Vast Scenes"
authors: ["Hao Li", "Yuanyuan Gao", "Haosong Peng", "Chenming Wu", "Weicai Ye", "Yufeng Zhan", "Chen Zhao", "Dingwen Zhang", "Jingdong Wang", "Junwei Han"]
year: "2025"
conference: "ICRA"
license: ""
tags: ["3DGS", "Sparse-View", "Reconstruction"]
image: "Li_DGTR_2025.webp"
paper: "https://arxiv.org/pdf/2411.12309"
code: "https://github.com/lifuguan/DGTR"
project: "https://3d-aigc.github.io/DGTR/"
bibtex: "@inproceedings{li2025dgtr,
  title={Dgtr: Distributed gaussian turbo-reconstruction for sparse-view vast scenes},
  author={Li, Hao and Gao, Yuanyuan and Peng, Haosong and Wu, Chenming and Ye, Weicai and Zhan, Yufeng and Zhao, Chen and Zhang, Dingwen and Wang, Jingdong and Han, Junwei},
  booktitle={2025 IEEE International Conference on Robotics and Automation (ICRA)},
  pages={207--213},
  year={2025},
  organization={IEEE}
}"
---

Novel-view synthesis (NVS) approaches play a critical role in vast scene reconstruction. However, these methods rely heavily on dense image inputs and prolonged training times, making them unsuitable where computational resources are limited. Additionally, few-shot methods often struggle with poor reconstruction quality in vast environments. This paper presents DGTR, a novel distributed framework for efficient Gaussian reconstruction for sparse-view vast scenes. Our approach divides the scene into regions, processed independently by drones with sparse image inputs. Using a feed-forward Gaussian model, we predict high-quality Gaussian primitives, followed by a global alignment algorithm to ensure geometric consistency. Synthetic views and depth priors are incorporated to further enhance training, while a distillation-based model aggregation mechanism enables efficient reconstruction. Our method achieves high-quality large-scale scene reconstruction and novel-view synthesis in significantly reduced training times, outperforming existing approaches in both speed and scalability. We demonstrate the effectiveness of our framework on vast aerial scenes, achieving high-quality results within minutes.
