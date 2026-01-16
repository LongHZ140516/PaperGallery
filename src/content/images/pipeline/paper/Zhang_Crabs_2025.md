---
title: "Crabs: Consuming Resrouce via Auto-generation for LLM-DoS Attack under Black-box Settings"
authors: ["Yuanhe Zhang", "Zhenhong Zhou", "Wei Zhang", "Xinyue Wang", "Xiaojun Jia", "Yang Liu", "Sen Su"]
year: "2025"
conference: "ACL"
license: "CC BY"
tags: ["LLM", "DoS Attack", "Generation"]
image: "Zhang_Crabs_2025.jpg"
paper: "https://arxiv.org/pdf/2412.13879"
code: "https://github.com/shuita2333/AutoDoS"
project: ""
bibtex: "@inproceedings{zhang2025crabs,
  title={Crabs: Consuming resource via auto-generation for llm-dos attack under black-box settings},
  author={Zhang, Yuanhe and Zhou, Zhenhong and Zhang, Wei and Wang, Xinyue and Jia, Xiaojun and Liu, Yang and Su, Sen},
  booktitle={Findings of the Association for Computational Linguistics: ACL 2025},
  pages={11128--11150},
  year={2025}
}"
---

Large Language Models (LLMs) have demonstrated remarkable performance across diverse tasks. LLMs continue to be vulnerable to external threats, particularly Denial-of-Service (DoS) attacks. Specifically, LLM-DoS attacks aim to exhaust computational resources and block services. However, prior works tend to focus on performing white-box attacks, overlooking black-box settings. In this work, we propose an automated algorithm designed for black-box LLMs, called Auto-Generation for LLM-DoS Attack (AutoDoS). AutoDoS introduces DoS Attack Tree and optimizes the prompt node coverage to enhance effectiveness under black-box conditions. Our method can bypass existing defense with enhanced stealthiness via semantic improvement of prompt nodes. Furthermore, we reveal that implanting Length Trojan in Basic DoS Prompt aids in achieving higher attack efficacy. Experimental results show that AutoDoS amplifies service response latency by over 250 ×↑, leading to severe resource consumption in terms of GPU utilization and memory usage.
