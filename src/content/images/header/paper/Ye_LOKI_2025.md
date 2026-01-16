---
title: "LOKI: A Comprehensive Synthetic Data Detection Benchmark using Large Multimodal Models"
authors: ["Junyan Ye", "Baichuan Zhou", "Zilong Huang", "Junan Zhang", "Tianyi Bai", "Hengrui Kang", "Jun He", "Honglin Lin", "Zihao Wang", "Tong Wu", "Zhizheng Wu", "Yiping Chen", "Dahua Lin", "Conghui He", "Weijia Li"]
year: "2025"
conference: "ICLR"
tags: ["Dataset","LLM", "Detection"]
image: "Ye_LOKI_2025.webp"
license: ""
paper: "https://arxiv.org/pdf/2410.09732"
code: "https://github.com/opendatalab/LOKI"
project: "https://opendatalab.github.io/LOKI/"
bibtex: "@article{ye2024loki,
  title={Loki: A comprehensive synthetic data detection benchmark using large multimodal models},
  author={Ye, Junyan and Zhou, Baichuan and Huang, Zilong and Zhang, Junan and Bai, Tianyi and Kang, Hengrui and He, Jun and Lin, Honglin and Wang, Zihao and Wu, Tong and others},
  journal={arXiv preprint arXiv:2410.09732},
  year={2024}
}"
---

With the rapid development of AI-generated content, the future internet may be inundated with synthetic data, making the discrimination of authentic and credible multimodal data increasingly challenging. Synthetic data detection has thus garnered widespread attention, and the performance of large multimodal models (LMMs) in this task has attracted significant interest. LMMs can provide natural language explanations for their authenticity judgments, enhancing the explainability of synthetic content detection. Simultaneously, the task of distinguishing between real and synthetic data effectively tests the perception, knowledge, and reasoning capabilities of LMMs. In response, we introduce LOKI, a novel benchmark designed to evaluate the ability of LMMs to detect synthetic data across multiple modalities. LOKI encompasses video, image, 3D, text, and audio modalities, comprising 18K carefully curated questions across 26 subcategories with clear difficulty levels. The benchmark includes coarse-grained judgment and multiple-choice questions, as well as fine-grained anomaly selection and explanation tasks, allowing for a comprehensive analysis of LMMs. We evaluated 22 open-source LMMs and 6 closed-source models on LOKI, highlighting their potential as synthetic data detectors and also revealing some limitations in the development of LMM capabilities.
