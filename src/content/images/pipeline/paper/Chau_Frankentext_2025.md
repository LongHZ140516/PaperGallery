---
title: "Frankentext: Stitching random text fragments into long-form narratives"
authors: ["Chau Minh Pham", "Jenna Russell", "Dzung Pham", "Mohit Iyyer"]
year: "2025"
conference: "arXiv"
license: "CC BY"
tags: ["LLM"]
image: "Chau_Frankentext_2025.jpg"
paper: "https://arxiv.org/pdf/2505.18128"
code: "https://github.com/chtmp223/Frankentext"
project: ""
bibtex: "@article{pham2025frankentext,
  title={Frankentext: Stitching random text fragments into long-form narratives},
  author={Pham, Chau Minh and Russell, Jenna and Pham, Dzung and Iyyer, Mohit},
  journal={arXiv preprint arXiv:2505.18128},
  year={2025}
}"
---

We introduce Frankentexts, a new type of long-form narratives produced by LLMs under the extreme constraint that most tokens (e.g., 90%) must be copied verbatim from human writings. This task presents a challenging test of controllable generation, requiring models to satisfy a writing prompt, integrate disparate text fragments, and still produce a coherent narrative. To generate Frankentexts, we instruct the model to produce a draft by selecting and combining human-written passages, then iteratively revise the draft while maintaining a user-specified copy ratio. We evaluate the resulting Frankentexts along three axes: writing quality, instruction adherence, and detectability. Gemini-2.5-Pro performs surprisingly well on this task: 81% of its Frankentexts are coherent and 100% relevant to the prompt. Notably, up to 59% of these outputs are misclassified as human-written by detectors like Pangram, revealing limitations in AI text detectors. Human annotators can sometimes identify Frankentexts through their abrupt tone shifts and inconsistent grammar between segments, especially in longer generations. Beyond presenting a challenging generation task, Frankentexts invite discussion on building effective detectors for this new grey zone of authorship, provide training data for mixed authorship detection, and serve as a sandbox for studying human-AI co-writing processes.
