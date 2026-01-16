---
title: "Enhancing the Patent Matching Capability of Large Language Models via the Memory Graph"
authors: ["Qiushi Xiong", "Zhipeng Xu", "Zhenghao Liu", "Mengjia Wang", "Zulong Chen", "Yue Sun", "Yu Gu", "Xiaohua Li", "Ge Yu"]
year: "2025"
conference: "SIGGRAPH"
license: "CC BY"
tags: ["LLM","Patent Match"]
image: "Xiong_MemGraph_2025.jpg"
paper: "https://arxiv.org/pdf/2504.14845"
code: "https://github.com/NEUIR/MemGraph"
project: ""
bibtex: "@inproceedings{xiong2025enhancing,
  title={Enhancing the Patent Matching Capability of Large Language Models via the Memory Graph},
  author={Xiong, Qiushi and Xu, Zhipeng and Liu, Zhenghao and Wang, Mengjia and Chen, Zulong and Sun, Yue and Gu, Yu and Li, Xiaohua and Yu, Ge},
  booktitle={Proceedings of the 48th International ACM SIGIR Conference on Research and Development in Information Retrieval},
  pages={337--347},
  year={2025}
}"
---

Intellectual Property (IP) management involves strategically protecting and utilizing intellectual assets to enhance organizational innovation, competitiveness, and value creation. Patent matching is a crucial task in intellectual property management, which facilitates the organization and utilization of patents. Existing models often rely on the emergent capabilities of Large Language Models (LLMs) and leverage them to identify related patents directly. However, these methods usually depend on matching keywords and overlook the hierarchical classification and categorical relationships of patents. In this paper, we propose MemGraph, a method that augments the patent matching capabilities of LLMs by incorporating a memory graph derived from their parametric memory. Specifically, MemGraph prompts LLMs to traverse their memory to identify relevant entities within patents, followed by attributing these entities to corresponding ontologies. After traversing the memory graph, we utilize extracted entities and ontologies to improve the capability of LLM in comprehending the semantics of patents. Experimental results on the PatentMatch dataset demonstrate the effectiveness of MemGraph, achieving a 17.68% performance improvement over baseline LLMs. The further analysis highlights the generalization ability of MemGraph across various LLMs, both in-domain and out-of-domain, and its capacity to enhance the internal reasoning processes of LLMs during patent matching.
