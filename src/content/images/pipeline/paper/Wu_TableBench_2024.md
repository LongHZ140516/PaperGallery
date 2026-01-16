---
title: "TableBench: A Comprehensive and Complex Benchmark for Table Question Answering"
authors: ["Xianjie Wu", "Jian Yang", "Linzheng Chai", "Ge Zhang", "Jiaheng Liu", "Xinrun Du", "Di Liang", "Daixin Shu", "Xianfu Cheng", "Tianzhen Sun", "Guanglin Niu", "Tongliang Li", "Zhoujun Li"]
year: "2024"
conference: "AAAI"
license: ""
tags: ["LLM","Benchmark"]
image: "Wu_TableBench_2024.jpg"
paper: "https://arxiv.org/pdf/2408.09174"
code: "https://github.com/TableBench/TableBench"
project: "https://tablebench.github.io/"
bibtex: "@inproceedings{wu2025tablebench,
  title={Tablebench: A comprehensive and complex benchmark for table question answering},
  author={Wu, Xianjie and Yang, Jian and Chai, Linzheng and Zhang, Ge and Liu, Jiaheng and Du, Xeron and Liang, Di and Shu, Daixin and Cheng, Xianfu and Sun, Tianzhen and others},
  booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},
  volume={39},
  number={24},
  pages={25497--25506},
  year={2025}
}"
---

Recent advancements in Large Language Models (LLMs) have markedly enhanced the interpretation and processing of tabular data, introducing previously unimaginable capabilities. Despite these achievements, LLMs still encounter significant challenges when applied in industrial scenarios, particularly due to the increased complexity of reasoning required with real-world tabular data, underscoring a notable disparity between academic benchmarks and practical applications. To address this discrepancy, we conduct a detailed investigation into the application of tabular data in industrial scenarios and propose a comprehensive and complex benchmark TableBench, including 18 fields within four major categories of table question answering (TableQA) capabilities. Furthermore, we introduce TableLLM, trained on our meticulously constructed training set TableInstruct, achieving comparable performance with GPT-3.5. Massive experiments conducted on TableBench indicate that both open-source and proprietary LLMs still have significant room for improvement to meet real-world demands, where the most advanced model, GPT-4, achieves only a modest score compared to humans.
