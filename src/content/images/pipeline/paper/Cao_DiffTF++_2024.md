---
title: "DiffTF++: 3D-aware Diffusion Transformer for Large-Vocabulary 3D Generation"
authors: ["Ziang Cao", "Fangzhou Hong", "Tong Wu", "Liang Pan", "Ziwei Liu"]
year: "2024"
conference: "TPAMI"
license: ""
tags: ["Diffusion", "3D", "Generation"]
image: "Cao_DiffTF++_2024.jpg"
paper: "https://arxiv.org/abs/2405.08055"
code: ""
project: ""
bibtex: "@article{cao2025difftf++,
  title={Difftf++: 3d-aware diffusion transformer for large-vocabulary 3d generation},
  author={Cao, Ziang and Hong, Fangzhou and Wu, Tong and Pan, Liang and Liu, Ziwei},
  journal={IEEE Transactions on Pattern Analysis and Machine Intelligence},
  year={2025},
  publisher={IEEE}
}"
---

Generating diverse and high-quality 3D assets automatically poses a fundamental yet challenging task in 3D computer vision. Despite extensive efforts in 3D generation, existing optimization-based approaches struggle to produce large-scale 3D assets efficiently. Meanwhile, feed-forward methods often focus on generating only a single category or a few categories, limiting their generalizability. Therefore, we introduce a diffusion-based feed-forward framework to address these challenges with a single model. To handle the large diversity and complexity in geometry and texture across categories efficiently, we 1) adopt improved triplane to guarantee efficiency; 2) introduce the 3D-aware transformer to aggregate the generalized 3D knowledge with specialized 3D features; and 3) devise the 3D-aware encoder/decoder to enhance the generalized 3D knowledge. Building upon our 3D-aware Diffusion model with TransFormer, DiffTF, we propose a stronger version for 3D generation, i.e., DiffTF++. It boils down to two parts: multi-view reconstruction loss and triplane refinement. Specifically, we utilize multi-view reconstruction loss to fine-tune the diffusion model and triplane decoder, thereby avoiding the negative influence caused by reconstruction errors and improving texture synthesis. By eliminating the mismatch between the two stages, the generative performance is enhanced, especially in texture. Additionally, a 3D-aware refinement process is introduced to filter out artifacts and refine triplanes, resulting in the generation of more intricate and reasonable details. Extensive experiments on ShapeNet and OmniObject3D convincingly demonstrate the effectiveness of our proposed modules and the state-of-the-art 3D object generation performance with large diversity, rich semantics, and high quality.
