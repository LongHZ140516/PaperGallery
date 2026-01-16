---
title: "Target Semantics Clustering via Text Representations for Robust Universal Domain Adaptation"
authors: ["Weinan He", "Zilei Wang", "Yixin Zhang"]
year: "2025"
conference: "AAAI"
tags: ["Semantics Clustering","Domain Adaptation"]
image: "He_TSCTR_2025.jpg"
paper: "https://www.arxiv.org/pdf/2506.03521"
code: "https://github.com/Sapphire-356/TASC"
project: ""
bibtex: "@inproceedings{he2025target,
  title={Target Semantics Clustering via Text Representations for Robust Universal Domain Adaptation},
  author={He, Weinan and Wang, Zilei and Zhang, Yixin},
  booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},
  volume={39},
  number={16},
  pages={17132--17140},
  year={2025}
}"
---

Universal Domain Adaptation (UniDA) focuses on transferring source domain knowledge to the target domain under both domain shift and unknown category shift. Its main challenge lies in identifying common class samples and aligning them. Current methods typically obtain target domain semantics centers from an unconstrained continuous image representation space. Due to domain shift and the unknown number of clusters, these centers often result in complex and less robust alignment algorithm. In this paper, based on vision-language models, we search for semantic centers in a semantically meaningful and discrete text representation space. The constrained space ensures almost no domain bias and appropriate semantic granularity for these centers, enabling a simple and robust adaptation algorithm. Specifically, we propose TArget Semantics Clustering (TASC) via Text Representations, which leverages information maximization as a unified objective and involves two stages. First, with the frozen encoders, a greedy search-based framework is used to search for an optimal set of text embeddings to represent target semantics. Second, with the search results fixed, encoders are refined based on gradient descent, simultaneously achieving robust domain alignment and private class clustering. Additionally, we propose Universal Maximum Similarity (UniMS), a scoring function tailored for detecting open-set samples in UniDA. Experimentally, we evaluate the universality of UniDA algorithms under four category shift scenarios. Extensive experiments on four benchmarks demonstrate the effectiveness and robustness of our method, which has achieved state-of-the-art performance.
