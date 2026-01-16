---
title: "OmniZip: Audio-Guided Dynamic Token Compression for Fast Omnimodal Large Language Models"
authors: ["Keda Tao", "Kele Shao", "Bohan Yu", "Weiqiang Wang", "Jian liu", "Huan Wang"]
year: "2025"
conference: "arXiv"
license: "CC BY"
tags: ["Audio", "Compression", "LLM"]
image: "Tao_OmniZip_2025.jpg"
paper: "https://arxiv.org/abs/2511.14582"
code: "https://github.com/KD-TAO/OmniZip"
project: ""
bibtex: "@article{tao2025omnizip,
  title={OmniZip: Audio-Guided Dynamic Token Compression for Fast Omnimodal Large Language Models},
  author={Tao, Keda and Shao, Kele and Yu, Bohan and Wang, Weiqiang and Wang, Huan and others},
  journal={arXiv preprint arXiv:2511.14582},
  year={2025}
}"
---

Omnimodal large language models (OmniLLMs) have attracted increasing research attention of late towards unified audio-video understanding, wherein processing audio-video token sequences creates a significant computational bottleneck, however. Existing token compression methods have yet to accommodate this emerging need of jointly compressing multimodal tokens. To bridge this gap, we present OmniZip, a training-free, audio-guided audio-visual token-compression framework that optimizes multimodal token representation and accelerates inference. Specifically, OmniZip first identifies salient audio tokens, then computes an audio retention score for each time group to capture information density, thereby dynamically guiding video token pruning and preserving cues from audio anchors enhanced by cross-modal similarity. For each time window, OmniZip compresses the video tokens using an interleaved spatio-temporal scheme. Extensive empirical results demonstrate the merits of OmniZip - it achieves 3.42X inference speedup and 1.4X memory reduction over other top-performing counterparts, while maintaining performance with no training.
