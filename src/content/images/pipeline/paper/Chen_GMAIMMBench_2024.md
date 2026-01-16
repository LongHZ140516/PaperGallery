---
title: "GMAI-MMBench: A Comprehensive Multimodal Evaluation Benchmark Towards General Medical AI"
authors: ["Pengcheng Chen", "Jin Ye", "Guoan Wang", "Yanjun Li", "Zhongying Deng", "Wei Li", "Tianbin Li", "Haodong Duan", "Ziyan Huang", "Yanzhou Su", "Benyou Wang", "Shaoting Zhang", "Bin Fu", "Jianfei Cai", "Bohan Zhuang", "Eric J Seibel", "Junjun He", "Yu Qiao"]
year: "2024"
conference: "NeurIPS"
license: "CC BY-NC-SA"
tags: ["LLM", "Benchmark", "Evaluation"]
image: "Chen_GMAIMMBench_2024.jpg"
paper: "https://www.arxiv.org/pdf/2408.03361"
code: "https://github.com/uni-medical/GMAI-MMBench"
project: "https://uni-medical.github.io/GMAI-MMBench.github.io/"
bibtex: "@article{ye2024gmai,
  title={Gmai-mmbench: A comprehensive multimodal evaluation benchmark towards general medical ai},
  author={Ye, Jin and Wang, Guoan and Li, Yanjun and Deng, Zhongying and Li, Wei and Li, Tianbin and Duan, Haodong and Huang, Ziyan and Su, Yanzhou and Wang, Benyou and others},
  journal={Advances in Neural Information Processing Systems},
  volume={37},
  pages={94327--94427},
  year={2024}
}"
---

Large Vision-Language Models (LVLMs) are capable of handling diverse data types such as imaging, text, and physiological signals, and can be applied in various fields. In the medical field, LVLMs have a high potential to offer substantial assistance for diagnosis and treatment. Before that, it is crucial to develop benchmarks to evaluate LVLMs' effectiveness in various medical applications. Current benchmarks are often built upon specific academic literature, mainly focusing on a single domain, and lacking varying perceptual granularities. Thus, they face specific challenges, including limited clinical relevance, incomplete evaluations, and insufficient guidance for interactive LVLMs. To address these limitations, we developed the GMAI-MMBench, the most comprehensive general medical AI benchmark with well-categorized data structure and multi-perceptual granularity to date. It is constructed from 285 datasets across 39 medical image modalities, 18 clinical-related tasks, 18 departments, and 4 perceptual granularities in a Visual Question Answering (VQA) format. Additionally, we implemented a lexical tree structure that allows users to customize evaluation tasks, accommodating various assessment needs and substantially supporting medical AI research and applications. We evaluated 50 LVLMs, and the results show that even the advanced GPT-4o only achieves an accuracy of 52%, indicating significant room for improvement. Moreover, we identified five key insufficiencies in current cutting-edge LVLMs that need to be addressed to advance the development of better medical applications. We believe that GMAI-MMBench will stimulate the community to build the next generation of LVLMs toward GMAI.
