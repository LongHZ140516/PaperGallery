---
title: "CrossViewDiff: A Cross-View Diffusion Model for Satellite-to-Street View Synthesis"
authors: ["Weijia Li", "Jun He", "Junyan Ye", "Huaping Zhong", "Zhimeng Zheng", "Zilong Huang", "Dahua Lin", "Conghui He"]
year: "2024"
conference: "arXiv"
license: "CC BY"
tags: ["Diffusion", "Remote Sensing", "Cross-View", "Satellite"]
image: "Li_CrossViewDiff_2024.jpg"
paper: "https://arxiv.org/pdf/2408.01812"
code: ""
project: "https://opendatalab.github.io/CrossViewDiff/"
bibtex: "@article{li2024crossviewdiff,
  title={Crossviewdiff: A cross-view diffusion model for satellite-to-street view synthesis},
  author={Li, Weijia and He, Jun and Ye, Junyan and Zhong, Huaping and Zheng, Zhimeng and Huang, Zilong and Lin, Dahua and He, Conghui},
  journal={arXiv preprint arXiv:2408.14765},
  year={2024}
}"
---

Satellite-to-street view synthesis aims at generating a realistic street-view image from its corresponding satellite-view image. Although stable diffusion models have exhibit remarkable performance in a variety of image generation applications, their reliance on similar-view inputs to control the generated structure or texture restricts their application to the challenging cross-view synthesis task. In this work, we propose CrossViewDiff, a cross-view diffusion model for satellite-to-street view synthesis. To address the challenges posed by the large discrepancy across views, we design the satellite scene structure estimation and cross-view texture mapping modules to construct the structural and textural controls for street-view image synthesis. We further design a cross-view control guided denoising process that incorporates the above controls via an enhanced cross-view attention module. To achieve a more comprehensive evaluation of the synthesis results, we additionally design a GPT-based scoring method as a supplement to standard evaluation metrics. We also explore the effect of different data sources (e.g., text, maps, building heights, and multi-temporal satellite imagery) on this task. Results on three public cross-view datasets show that CrossViewDiff outperforms current state-of-the-art on both standard and GPT-based evaluation metrics, generating high-quality street-view panoramas with more realistic structures and textures across rural, suburban, and urban scenes.
