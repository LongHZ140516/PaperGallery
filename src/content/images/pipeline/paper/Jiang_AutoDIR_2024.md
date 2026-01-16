---
title: "AutoDIR: Automatic All-in-One Image Restoration with Latent Diffusion"
authors: ["Yitong Jiang", "Zhaoyang Zhang", "Tianfan Xue", "Jinwei Gu"]
year: "2024"
conference: "ECCV"
license: "CC BY"
tags: ["Diffusion", "Image Restoration"]
image: "Jiang_AutoDIR_2024.jpg"
paper: "https://arxiv.org/abs/2310.10123"
code: "https://github.com/jiangyitong/AutoDIR"
project: "https://atedm.github.io/"
bibtex: "@inproceedings{jiang2024autodir,
  title={Autodir: Automatic all-in-one image restoration with latent diffusion},
  author={Jiang, Yitong and Zhang, Zhaoyang and Xue, Tianfan and Gu, Jinwei},
  booktitle={European Conference on Computer Vision},
  pages={340--359},
  year={2024},
  organization={Springer}
}"
---

We present AutoDIR, an innovative all-in-one image restoration system incorporating latent diffusion. AutoDIR excels in its ability to automatically identify and restore images suffering from a range of unknown degradations. AutoDIR offers intuitive open-vocabulary image editing, empowering users to customize and enhance images according to their preferences. Specifically, AutoDIR consists of two key stages: a Blind Image Quality Assessment (BIQA) stage based on a semantic-agnostic vision-language model which automatically detects unknown image degradations for input images, an All-in-One Image Restoration (AIR) stage utilizes structural-corrected latent diffusion which handles multiple types of image degradations. Extensive experimental evaluation demonstrates that AutoDIR outperforms state-of-the-art approaches for a wider range of image restoration tasks. The design of AutoDIR also enables flexible user control (via text prompt) and generalization to new tasks as a foundation model of image restoration.
