---
title: "Task-Model Alignment: A Simple Path to Generalizable AI-Generated Image Detection"
authors: ["Ruoxin Chen", "Jiahui Gao", "Kaiqing Lin", "Keyue Zhang", "Yandan Zhao", "Isabel Guan", "Taiping Yao", "Shouhong Ding"]
year: "2025"
conference: "arXiv"
license: "CC BY"
tags: ["Detection", "Gemini"]
image: "Chen_Alignment_2025.webp"
paper: "https://arxiv.org/abs/2512.06746"
code: ""
project: ""
bibtex: "@article{chen2025task,
  title={Task-Model Alignment: A Simple Path to Generalizable AI-Generated Image Detection},
  author={Chen, Ruoxin and Gao, Jiahui and Lin, Kaiqing and Zhang, Keyue and Zhao, Yandan and Guan, Isabel and Yao, Taiping and Ding, Shouhong},
  journal={arXiv preprint arXiv:2512.06746},
  year={2025}
}"
---

Vision Language Models (VLMs) are increasingly adopted for AI-generated images (AIGI) detection, yet converting VLMs into detectors requires substantial resource, while the resulting models still exhibit severe hallucinations. To probe the core issue, we conduct an empirical analysis and observe two characteristic behaviors: (i) fine-tuning VLMs on high-level semantic supervision strengthens semantic discrimination and well generalize to unseen data; (ii) fine-tuning VLMs on low-level pixel-artifact supervision yields poor transfer. We attribute VLMs' underperformance to task-model misalignment: semantics-oriented VLMs inherently lack sensitivity to fine-grained pixel artifacts, and semantically non-discriminative pixel artifacts thus exceeds their inductive biases. In contrast, we observe that conventional pixel-artifact detectors capture low-level pixel artifacts yet exhibit limited semantic awareness relative to VLMs, highlighting that distinct models are better matched to distinct tasks. In this paper, we formalize AIGI detection as two complementary tasks--semantic consistency checking and pixel-artifact detection--and show that neglecting either induces systematic blind spots. Guided by this view, we introduce the Task-Model Alignment principle and instantiate it as a two-branch detector, AlignGemini, comprising a VLM fine-tuned exclusively with pure semantic supervision and a pixel-artifact expert trained exclusively with pure pixel-artifact supervision. By enforcing orthogonal supervision on two simplified datasets, each branch trains to its strengths, producing complementary discrimination over semantic and pixel cues. On five in-the-wild benchmarks, AlignGemini delivers a +9.5 gain in average accuracy, supporting task-model alignment as an effective path to generalizable AIGI detection.
