---
title: "ImmerseGen: Agent-Guided Immersive World Generation with Alpha-Textured Proxies"
authors: ["Jinyan Yuan", "Bangbang Yang", "Keke Wang", "Panwang Pan", "Lin Ma", "Xuehai Zhang", "Xiao Liu", "Zhaopeng Cui", "Yuewen Ma"]
year: "2025"
conference: "arXiv"
license: "CC BY"
tags: ["Diffusion", "Generation", "Agent"]
image: "Yuan_ImmerseGen_2025.jpg"
paper: "https://arxiv.org/abs/2506.14315"
code: "https://immersegen.github.io/"
project: ""
bibtex: "@article{yuan2025immersegen,
  title={ImmerseGen: Agent-Guided Immersive World Generation with Alpha-Textured Proxies},
  author={Yuan, Jinyan and Yang, Bangbang and Wang, Keke and Pan, Panwang and Ma, Lin and Zhang, Xuehai and Liu, Xiao and Cui, Zhaopeng and Ma, Yuewen},
  journal={arXiv preprint arXiv:2506.14315},
  year={2025}
}"
---

Automatic creation of 3D scenes for immersive VR presence has been a significant research focus for decades. However, existing methods often rely on either high-poly mesh modeling with post-hoc simplification or massive 3D Gaussians, resulting in a complex pipeline or limited visual realism. In this paper, we demonstrate that such exhaustive modeling is unnecessary for achieving compelling immersive experience. We introduce ImmerseGen, a novel agent-guided framework for compact and photorealistic world modeling. ImmerseGen represents scenes as hierarchical compositions of lightweight geometric proxies, i.e., simplified terrain and billboard meshes, and generates photorealistic appearance by synthesizing RGBA textures onto these proxies. Specifically, we propose terrain-conditioned texturing for user-centric base world synthesis, and RGBA asset texturing for midground and foreground this http URL reformulation offers several advantages: (i) it simplifies modeling by enabling agents to guide generative models in producing coherent textures that integrate seamlessly with the scene; (ii) it bypasses complex geometry creation and decimation by directly synthesizing photorealistic textures on proxies, preserving visual quality without degradation; (iii) it enables compact representations suitable for real-time rendering on mobile VR headsets. To automate scene creation from text prompts, we introduce VLM-based modeling agents enhanced with semantic grid-based analysis for improved spatial reasoning and accurate asset placement. ImmerseGen further enriches scenes with dynamic effects and ambient audio to support multisensory immersion. Experiments on scene generation and live VR showcases demonstrate that ImmerseGen achieves superior photorealism, spatial coherence and rendering efficiency compared to prior methods.
