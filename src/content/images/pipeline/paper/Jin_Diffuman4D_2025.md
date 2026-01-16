---
title: "Diffuman4D: 4D Consistent Human View Synthesis from Sparse-View Videos with Spatio-Temporal Diffusion Models"
authors: ["Yudong Jin", "Sida Peng", "Xuan Wang", "Tao Xie", "Zhen Xu", "Yifan Yang", "Yujun Shen", "Hujun Bao", "Xiaowei Zhou"]
year: "2025"
conference: "ICCV"
license: ""
tags: ["Diffusion", "4DGS", "Human", "Sparse-View", "Video"]
image: "Jin_Diffuman4D_2025.jpg"
paper: "https://arxiv.org/abs/2507.13344"
code: "https://github.com/zju3dv/Diffuman4D"
project: "https://diffuman4d.github.io/"
bibtex: "@inproceedings{jin2025diffuman4d,
  title={Diffuman4d: 4d consistent human view synthesis from sparse-view videos with spatio-temporal diffusion models},
  author={Jin, Yudong and Peng, Sida and Wang, Xuan and Xie, Tao and Xu, Zhen and Yang, Yifan and Shen, Yujun and Bao, Hujun and Zhou, Xiaowei},
  booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision},
  pages={11047--11057},
  year={2025}
}"
---

This paper addresses the challenge of high-fidelity view synthesis of humans with sparse-view videos as input. Previous methods solve the issue of insufficient observation by leveraging 4D diffusion models to generate videos at novel viewpoints. However, the generated videos from these models often lack spatio-temporal consistency, thus degrading view synthesis quality. In this paper, we propose a novel sliding iterative denoising process to enhance the spatio-temporal consistency of the 4D diffusion model. Specifically, we define a latent grid in which each latent encodes the image, camera pose, and human pose for a certain viewpoint and timestamp, then alternately denoising the latent grid along spatial and temporal dimensions with a sliding window, and finally decode the videos at target viewpoints from the corresponding denoised latents. Through the iterative sliding, information flows sufficiently across the latent grid, allowing the diffusion model to obtain a large receptive field and thus enhance the 4D consistency of the output, while making the GPU memory consumption affordable. The experiments on the DNA-Rendering and ActorsHQ datasets demonstrate that our method is able to synthesize high-quality and consistent novel-view videos and significantly outperforms the existing approaches.
