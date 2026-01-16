---
title: "CAST: Component-Aligned 3D Scene Reconstruction from an RGB Image"
authors: ["Kaixin Yao", "Longwen Zhang", "Xinhao Yan", "Yan Zeng", "Qixuan Zhang", "Lan Xu", "Wei Yang", "Jiayuan Gu", "Jingyi Yu"]
year: "2025"
conference: "SIGGRAPH"
license: "CC BY-NC-ND"
tags: ["Diffusion", "3D", "Reconstruction", "Single-Image"]
image: "Yao_CAST_2025.webp"
paper: "https://arxiv.org/pdf/2502.12894"
code: ""
project: "https://sites.google.com/view/cast4"
bibtex: "@article{yao2025cast,
  title={Cast: Component-aligned 3d scene reconstruction from an rgb image},
  author={Yao, Kaixin and Zhang, Longwen and Yan, Xinhao and Zeng, Yan and Zhang, Qixuan and Yang, Wei and Xu, Lan and Gu, Jiayuan and Yu, Jingyi},
  journal={arXiv preprint arXiv:2502.12894},
  year={2025}
}"
---

Recovering high-quality 3D scenes from a single RGB image is a challenging task in computer graphics. Current methods often struggle with domain-specific limitations or low-quality object generation. To address these, we propose CAST (Component-Aligned 3D Scene Reconstruction from a Single RGB Image), a novel method for 3D scene reconstruction and recovery. CAST starts by extracting object-level 2D segmentation and relative depth information from the input image, followed by using a GPT-based model to analyze inter-object spatial relationships. This enables the understanding of how objects relate to each other within the scene, ensuring more coherent reconstruction. CAST then employs an occlusion-aware large-scale 3D generation model to independently generate each object's full geometry, using MAE and point cloud conditioning to mitigate the effects of occlusions and partial object information, ensuring accurate alignment with the source image's geometry and texture. To align each object with the scene, the alignment generation model computes the necessary transformations, allowing the generated meshes to be accurately placed and integrated into the scene's point cloud. Finally, CAST incorporates a physics-aware correction step that leverages a fine-grained relation graph to generate a constraint graph. This graph guides the optimization of object poses, ensuring physical consistency and spatial coherence. By utilizing Signed Distance Fields (SDF), the model effectively addresses issues such as occlusions, object penetration, and floating objects, ensuring that the generated scene accurately reflects real-world physical interactions. CAST can be leveraged in robotics, enabling efficient real-to-simulation workflows and providing realistic, scalable simulation environments for robotic systems.
