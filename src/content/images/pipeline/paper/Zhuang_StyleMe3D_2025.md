---
title: "StyleMe3D: Stylization with Disentangled Priors by Multiple Encoders on 3D Gaussians"
authors: ["Cailin Zhuang", "Yaoqi Hu", "Xuanyang Zhang", "Wei Cheng", "Jiacheng Bao", "Shengqi Liu", "Yiying Yang", "Xianfang Zeng", "Gang Yu", "Ming Li"]
year: "2025"
conference: "arXiv"
license: "CC BY-NC-ND"
tags: ["3DGS","Stylized Scenarios"]
image: "Zhuang_StyleMe3D_2025.jpg"
paper: "https://arxiv.org/pdf/2504.15281"
code: "https://github.com/AIGCResearch/styleme3d"
project: "https://styleme3d.github.io/"
bibtex: "@article{zhuang2025styleme3d,
  title={Styleme3d: Stylization with disentangled priors by multiple encoders on 3d gaussians},
  author={Zhuang, Cailin and Hu, Yaoqi and Zhang, Xuanyang and Cheng, Wei and Bao, Jiacheng and Liu, Shengqi and Yang, Yiying and Zeng, Xianfang and Yu, Gang and Li, Ming},
  journal={arXiv preprint arXiv:2504.15281},
  year={2025}
}"
---

3D Gaussian Splatting (3DGS) excels in photorealistic scene reconstruction but struggles with stylized scenarios (e.g., cartoons, games) due to fragmented textures, semantic misalignment, and limited adaptability to abstract aesthetics. We propose StyleMe3D, a holistic framework for 3D GS style transfer that integrates multi-modal style conditioning, multi-level semantic alignment, and perceptual quality enhancement. Our key insights include: (1) optimizing only RGB attributes preserves geometric integrity during stylization; (2) disentangling low-, medium-, and high-level semantics is critical for coherent style transfer; (3) scalability across isolated objects and complex scenes is essential for practical deployment. StyleMe3D introduces four novel components: Dynamic Style Score Distillation (DSSD), leveraging Stable Diffusion's latent space for semantic alignment; Contrastive Style Descriptor (CSD) for localized, content-aware texture transfer; Simultaneously Optimized Scale (SOS) to decouple style details and structural coherence; and 3D Gaussian Quality Assessment (3DG-QA), a differentiable aesthetic prior trained on human-rated data to suppress artifacts and enhance visual harmony. Evaluated on NeRF synthetic dataset (objects) and tandt db (scenes) datasets, StyleMe3D outperforms state-of-the-art methods in preserving geometric details (e.g., carvings on sculptures) and ensuring stylistic consistency across scenes (e.g., coherent lighting in landscapes), while maintaining real-time rendering. This work bridges photorealistic 3D GS and artistic stylization, unlocking applications in gaming, virtual worlds, and digital art.
