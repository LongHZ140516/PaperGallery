---
title: "Are VLMs Ready for Autonomous Driving? An Empirical Study from the Reliability, Data, and Metric Perspectives"
authors: ["Shaoyuan Xie", "Lingdong Kong", "Yuhao Dong", "Chonghao Sima", "Wenwei Zhang", "Qi Alfred Chen", "Ziwei Liu", "Liang Pan"]
year: "2025"
conference: "ICCV"
license: "CC BY-SA"
tags: ["Dataset", "VLM"]
image: "Xie_Autonomous_2025.jpg"
paper: "https://arxiv.org/pdf/2501.04003"
code: "https://github.com/worldbench/DriveBench"
project: "https://drive-bench.github.io/"
bibtex: "@inproceedings{xie2025drivebench,
    title     = {Are {VLMs} Ready for Autonomous Driving? An Empirical Study from the Reliability, Data, and Metric Perspectives},
    author    = {Xie, Shaoyuan and Kong, Lingdong and Dong, Yuhao and Sima, Chonghao and Zhang, Wenwei and Chen, Qi Alfred and Liu, Ziwei and Pan, Liang},
    booktitle = {Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV)},
    pages     = {6585-6597},
    month     = {October},
    year      = {2025}
}"
---

Recent advancements in Vision-Language Models (VLMs) have sparked interest in their use for autonomous driving, particularly in generating interpretable driving decisions through natural language. However, the assumption that VLMs inherently provide visually grounded, reliable, and interpretable explanations for driving remains largely unexamined. To address this gap, we introduce DriveBench, a benchmark dataset designed to evaluate VLM reliability across 17 settings (clean, corrupted, and text-only inputs), encompassing 19,200 frames, 20,498 question-answer pairs, three question types, four mainstream driving tasks, and a total of 12 popular VLMs. Our findings reveal that VLMs often generate plausible responses derived from general knowledge or textual cues rather than true visual grounding, especially under degraded or missing visual inputs. This behavior, concealed by dataset imbalances and insufficient evaluation metrics, poses significant risks in safety-critical scenarios like autonomous driving. We further observe that VLMs struggle with multi-modal reasoning and display heightened sensitivity to input corruptions, leading to inconsistencies in performance. To address these challenges, we propose refined evaluation metrics that prioritize robust visual grounding and multi-modal understanding. Additionally, we highlight the potential of leveraging VLMs' awareness of corruptions to enhance their reliability, offering a roadmap for developing more trustworthy and interpretable decision-making systems in real-world autonomous driving contexts. The benchmark toolkit is publicly accessible.
