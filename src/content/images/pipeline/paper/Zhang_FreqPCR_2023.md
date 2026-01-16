---
title: "Frequency-Modulated Point Cloud Rendering with Easy Editing"
authors: ["Yi Zhang", "Xiaoyang Huang", "Bingbing Ni", "Teng Li", "Wenjun Zhang"]
year: "2023"
conference: "CVPR"
license: ""
tags: ["NeRF", "Point Cloud", "Edit"]
image: "Zhang_FreqPCR_2023.webp"
paper: "https://openaccess.thecvf.com/content/CVPR2023/papers/Zhang_Frequency-Modulated_Point_Cloud_Rendering_With_Easy_Editing_CVPR_2023_paper.pdf"
code: "https://github.com/yizhangphd/FreqPCR"
project: ""
bibtex: "@inproceedings{zhang2023frequency,
  title={Frequency-modulated point cloud rendering with easy editing},
  author={Zhang, Yi and Huang, Xiaoyang and Ni, Bingbing and Li, Teng and Zhang, Wenjun},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  pages={119--129},
  year={2023}
}"
---

We develop an effective point cloud rendering pipeline for novel view synthesis, which enables high fidelity local detail reconstruction, real-time rendering and user-friendly editing. In the heart of our pipeline is an adaptive frequency modulation module called Adaptive Frequency Net (AFNet), which utilizes a hypernetwork to learn the local texture frequency encoding that is consecutively injected into adaptive frequency activation layers to modulate the implicit radiance signal. This mechanism improves the frequency expressive ability of the network with richer frequency basis support, only at a small computational budget. To further boost performance, a preprocessing module is also proposed for point cloud geometry optimization via point opacity estimation. In contrast to implicit rendering, our pipeline supports high-fidelity interactive editing based on point cloud manipulation. Extensive experimental results on NeRF-Synthetic, ScanNet, DTU and Tanks and Temples datasets demonstrate the superior performances achieved by our method in terms of PSNR, SSIM and LPIPS, in comparison to the state-of-the-art.
