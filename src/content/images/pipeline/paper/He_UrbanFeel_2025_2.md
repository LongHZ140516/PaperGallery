---
title: "UrbanFeel: A Comprehensive Benchmark for Temporal and Perceptual Understanding of City Scenes through Human Perspective"
authors: ["Jun He", "Yi Lin", "Zilong Huang", "Jiacong Yin", "Junyan Ye", "Yuchuan Zhou", "Weijia Li", "Xiang Zhang"]
year: "2025"
conference: "arXiv"
license: "CC BY"
tags: ["Benchmark", "City Scene", "Human", "Understanding"]
image: "He_UrbanFeel_2025_2.jpg"
paper: "https://arxiv.org/abs/2509.22228"
code: ""
project: ""
bibtex: "@article{he2025urbanfeel,
  title={Urbanfeel: A comprehensive benchmark for temporal and perceptual understanding of city scenes through human perspective},
  author={He, Jun and Lin, Yi and Huang, Zilong and Yin, Jiacong and Ye, Junyan and Zhou, Yuchuan and Li, Weijia and Zhang, Xiang},
  journal={arXiv preprint arXiv:2509.22228},
  year={2025}
}"
---

Urban development impacts over half of the global population, making human-centered understanding of its structural and perceptual changes essential for sustainable development. While Multimodal Large Language Models (MLLMs) have shown remarkable capabilities across various domains, existing benchmarks that explore their performance in urban environments remain limited, lacking systematic exploration of temporal evolution and subjective perception of urban environment that aligns with human perception. To address these limitations, we propose UrbanFeel, a comprehensive benchmark designed to evaluate the performance of MLLMs in urban development understanding and subjective environmental perception. UrbanFeel comprises 14.3K carefully constructed visual questions spanning three cognitively progressive dimensions: Static Scene Perception, Temporal Change Understanding, and Subjective Environmental Perception. We collect multi-temporal single-view and panoramic street-view images from 11 representative cities worldwide, and generate high-quality question-answer pairs through a hybrid pipeline of spatial clustering, rule-based generation, model-assisted prompting, and manual annotation. Through extensive evaluation of 20 state-of-the-art MLLMs, we observe that Gemini-2.5 Pro achieves the best overall performance, with its accuracy approaching human expert levels and narrowing the average gap to just 1.5\%. Most models perform well on tasks grounded in scene understanding. In particular, some models even surpass human annotators in pixel-level change detection. However, performance drops notably in tasks requiring temporal reasoning over urban development. Additionally, in the subjective perception dimension, several models reach human-level or even higher consistency in evaluating dimension such as beautiful and safety.
