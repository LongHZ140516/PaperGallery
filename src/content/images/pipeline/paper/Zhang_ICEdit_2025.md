---
title: "In-Context Edit: Enabling Instructional Image Editing with In-Context Generation in Large Scale Diffusion Transformer"
authors: ["Zechuan Zhang", "Ji Xie", "Yu Lu", "Zongxin Yang", "Yi Yang"]
year: "2025"
conference: "NeurIPS"
license: "CC BY"
tags: ["Diffusion", "Edit", "Generation"]
image: "Zhang_ICEdit_2025.jpg"
paper: "https://arxiv.org/pdf/2504.20690"
code: "https://github.com/River-Zhang/ICEdit"
project: "https://river-zhang.github.io/ICEdit-gh-pages/"
bibtex: "@article{zhang2025context,
  title={In-context edit: Enabling instructional image editing with in-context generation in large scale diffusion transformer},
  author={Zhang, Zechuan and Xie, Ji and Lu, Yu and Yang, Zongxin and Yang, Yi},
  journal={arXiv preprint arXiv:2504.20690},
  year={2025}
}"
---

Instruction-based image editing enables robust image modification via natural language prompts, yet current methods face a precision-efficiency tradeoff. Fine-tuning methods demand significant computational resources and large datasets, while training-free techniques struggle with instruction comprehension and edit quality. We resolve this dilemma by leveraging large-scale Diffusion Transformer (DiT)' enhanced generation capacity and native contextual awareness. Our solution introduces three contributions: (1) an in-context editing framework for zero-shot instruction compliance using in-context prompting, avoiding structural changes; (2) a LoRA-MoE hybrid tuning strategy that enhances flexibility with efficient adaptation and dynamic expert routing, without extensive retraining; and (3) an early filter inference-time scaling method using vision-language models (VLMs) to select better initial noise early, improving edit quality. Extensive evaluations demonstrate our method's superiority: it outperforms state-of-the-art approaches while requiring only 0.5% training data and 1% trainable parameters compared to conventional baselines. This work establishes a new paradigm that enables high-precision yet efficient instruction-guided editing.
