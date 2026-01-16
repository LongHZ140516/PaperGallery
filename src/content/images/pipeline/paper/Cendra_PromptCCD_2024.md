---
title: "PromptCCD: Learning Gaussian Mixture Prompt Pool for Continual Category Discovery"
authors: ["Fernando Julio Cendra", "Bingchen Zhao", "Kai Han"]
year: "2024"
conference: "ECCV"
license: "CC BY-NC-SA"
tags: ["Gaussian","Discovery"]
image: "Cendra_PromptCCD_2024.jpg"
paper: "https://arxiv.org/abs/2407.19001"
code: "https://github.com/Visual-AI/PromptCCD"
project: "https://visual-ai.github.io/promptccd/"
bibtex: "@inproceedings{cendra2024promptccd,
  title={Promptccd: Learning gaussian mixture prompt pool for continual category discovery},
  author={Cendra, Fernando Julio and Zhao, Bingchen and Han, Kai},
  booktitle={European conference on computer vision},
  pages={188--205},
  year={2024},
  organization={Springer}
}"
---

We tackle the problem of Continual Category Discovery (CCD), which aims to automatically discover novel categories in a continuous stream of unlabeled data while mitigating the challenge of catastrophic forgetting -- an open problem that persists even in conventional, fully supervised continual learning. To address this challenge, we propose PromptCCD, a simple yet effective framework that utilizes a Gaussian Mixture Model (GMM) as a prompting method for CCD. At the core of PromptCCD lies the Gaussian Mixture Prompting (GMP) module, which acts as a dynamic pool that updates over time to facilitate representation learning and prevent forgetting during category discovery. Moreover, GMP enables on-the-fly estimation of category numbers, allowing PromptCCD to discover categories in unlabeled data without prior knowledge of the category numbers. We extend the standard evaluation metric for Generalized Category Discovery (GCD) to CCD and benchmark state-of-the-art methods on diverse public datasets. PromptCCD significantly outperforms existing methods, demonstrating its effectiveness.
