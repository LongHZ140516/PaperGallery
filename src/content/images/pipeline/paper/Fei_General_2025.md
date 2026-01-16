---
title: "On Path to Multimodal Generalist: General-Level and General-Bench"
authors: ["Hao Fei", "Yuan Zhou", "Juncheng Li", "Xiangtai Li", "Qingshan Xu", "Bobo Li", "Shengqiong Wu", "Yaoting Wang", "Junbao Zhou", "Jiahao Meng", "Qingyu Shi", "Zhiyuan Zhou", "Liangtao Shi", "Minghe Gao", "Daoan Zhang", "Zhiqi Ge", "Weiming Wu", "Siliang Tang", "Kaihang Pan", "Yaobo Ye", "Haobo Yuan", "Tao Zhang", "Tianjie Ju", "Zixiang Meng", "Shilin Xu", "Liyu Jia", "Wentao Hu", "Meng Luo", "Jiebo Luo", "Tat-Seng Chua", "Shuicheng Yan", "Hanwang Zhang"]
year: "2025"
conference: "ICML"
license: "CC BY-NC-ND"
tags: ["Dataset", "MLLM", "Evaluation"]
image: "Fei_General_2025.webp"
paper: "https://arxiv.org/abs/2505.04620"
code: "https://github.com/path2generalist/General-Level"
project: "https://generalist.top/"
bibtex: "@inproceedings{fei2025path,
  title={On path to multimodal generalist: General-level and general-bench},
  author={Fei, Hao and Zhou, Yuan and Li, Juncheng and Li, Xiangtai and Xu, Qingshan and Li, Bobo and Wu, Shengqiong and Wang, Yaoting and Zhou, Junbao and Meng, Jiahao and others},
  booktitle={Forty-second International Conference on Machine Learning},
  year={2025}
}"
---

The Multimodal Large Language Model (MLLM) is currently experiencing rapid growth, driven by the advanced capabilities of LLMs. Unlike earlier specialists, existing MLLMs are evolving towards a Multimodal Generalist paradigm. Initially limited to understanding multiple modalities, these models have advanced to not only comprehend but also generate across modalities. Their capabilities have expanded from coarse-grained to fine-grained multimodal understanding and from supporting limited modalities to arbitrary ones. While many benchmarks exist to assess MLLMs, a critical question arises: Can we simply assume that higher performance across tasks indicates a stronger MLLM capability, bringing us closer to human-level AI? We argue that the answer is not as straightforward as it seems. This project introduces General-Level, an evaluation framework that defines 5-scale levels of MLLM performance and generality, offering a methodology to compare MLLMs and gauge the progress of existing systems towards more robust multimodal generalists and, ultimately, towards AGI. At the core of the framework is the concept of Synergy, which measures whether models maintain consistent capabilities across comprehension and generation, and across multiple modalities. To support this evaluation, we present General-Bench, which encompasses a broader spectrum of skills, modalities, formats, and capabilities, including over 700 tasks and 325,800 instances. The evaluation results that involve over 100 existing state-of-the-art MLLMs uncover the capability rankings of generalists, highlighting the challenges in reaching genuine AI. We expect this project to pave the way for future research on next-generation multimodal foundation models, providing a robust infrastructure to accelerate the realization of AGI.
