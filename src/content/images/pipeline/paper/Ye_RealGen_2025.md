---
title: "RealGen: Photorealistic Text-to-Image Generation via Detector-Guided Rewards"
authors: ["Junyan Ye", "Leiqi Zhu", "Yuncheng Guo", "Dongzhi Jiang", "Zilong Huang", "Yifan Zhang", "Zhiyuan Yan", "Haohuan Fu", "Conghui He", "Weijia Li"]
year: "2025"
conference: "arXiv"
license: "CC BY"
tags: ["Text-to-Image", "Generation", "Photorealistic"]
image: "Ye_RealGen_2025.webp"
paper: "https://arxiv.org/abs/2512.00473"
code: "https://github.com/yejy53/RealGen?tab=readme-ov-file"
project: "https://yejy53.github.io/RealGen/"
bibtex: "@article{ye2025realgen,
  title={RealGen: Photorealistic Text-to-Image Generation via Detector-Guided Rewards},
  author={Ye, Junyan and Zhu, Leiqi and Guo, Yuncheng and Jiang, Dongzhi and Huang, Zilong and Zhang, Yifan and Yan, Zhiyuan and Fu, Haohuan and He, Conghui and Li, Weijia},
  journal={arXiv preprint arXiv:2512.00473},
  year={2025}
}"
---

With the continuous advancement of image generation technology, advanced models such as GPT-Image-1 and Qwen-Image have achieved remarkable text-to-image consistency and world knowledge However, these models still fall short in photorealistic image generation. Even on simple T2I tasks, they tend to produce " fake" images with distinct AI artifacts, often characterized by "overly smooth skin" and "oily facial sheens". To recapture the original goal of "indistinguishable-from-reality" generation, we propose RealGen, a photorealistic text-to-image framework. RealGen integrates an LLM component for prompt optimization and a diffusion model for realistic image generation. Inspired by adversarial generation, RealGen introduces a "Detector Reward" mechanism, which quantifies artifacts and assesses realism using both semantic-level and feature-level synthetic image detectors. We leverage this reward signal with the GRPO algorithm to optimize the entire generation pipeline, significantly enhancing image realism and detail. Furthermore, we propose RealBench, an automated evaluation benchmark employing Detector-Scoring and Arena-Scoring. It enables human-free photorealism assessment, yielding results that are more accurate and aligned with real user experience. Experiments demonstrate that RealGen significantly outperforms general models like GPT-Image-1 and Qwen-Image, as well as specialized photorealistic models like FLUX-Krea, in terms of realism, detail, and aesthetics.
