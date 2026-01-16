---
title: "SINE: Semantic-driven Image-based NeRF Editing with Prior-guided Editing Field"
authors: ["Chong Bao", "Yinda Zhang", "Bangbang Yang", "Tianxing Fan", "Zesong Yang", "Hujun Bao", "Guofeng Zhang", "Zhaopeng Cui"]
year: "2023"
conference: "CVPR"
license: "CC BY"
tags: ["NeRF", "Edit", "Semantic"]
image: "Bao_SINE_2023.webp"
paper: "https://arxiv.org/pdf/2303.13277"
code: "https://github.com/zju3dv/SINE"
project: "https://zju3dv.github.io/sine/"
bibtex: "@inproceedings{bao2023sine,
    title={SINE: Semantic-driven Image-based NeRF Editing with Prior-guided Editing Field},
    author={Bao, Chong and Zhang, Yinda and Yang, Bangbang and Fan, Tianxing and Yang, Zesong and Bao, Hujun and Zhang, Guofeng and Cui, Zhaopeng},
    booktitle={The IEEE/CVF Computer Vision and Pattern Recognition Conference (CVPR)},
    year={2023}
}"
---

Despite the great success in 2D editing using user-friendly tools, such as Photoshop, semantic strokes, or even text prompts, similar capabilities in 3D areas are still limited, either relying on 3D modeling skills or allowing editing within only a few categories. In this paper, we present a novel semantic-driven NeRF editing approach, which enables users to edit a neural radiance field with a single image, and faithfully delivers edited novel views with high fidelity and multi-view consistency. To achieve this goal, we propose a prior-guided editing field to encode fine-grained geometric and texture editing in 3D space, and develop a series of techniques to aid the editing process, including cyclic constraints with a proxy mesh to facilitate geometric supervision, a color compositing mechanism to stabilize semantic-driven texture editing, and a feature-cluster-based regularization to preserve the irrelevant content unchanged. Extensive experiments and editing examples on both real-world and synthetic data demonstrate that our method achieves photo-realistic 3D editing using only a single edited image, pushing the bound of semantic-driven editing in 3D real-world scenes.
