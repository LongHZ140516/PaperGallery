---
title: "Automated Spatio-Temporal Graph Contrastive Learning"
authors: ["Qianru Zhang", "Chao Huang", "Lianghao Xia", "Zheng Wang", "Zhonghang Li", "Siuming Yiu"]
year: "2023"
conference: "WWW"
license: ""
tags: ["POI", "GIS", "Graph"]
image: "Zhang_Automated_2023.jpg"
paper: "https://arxiv.org/pdf/2305.03920"
code: "https://github.com/HKUDS/AutoST"
project: ""
bibtex: "@inproceedings{zhang2023automated,
  title={Automated spatio-temporal graph contrastive learning},
  author={Zhang, Qianru and Huang, Chao and Xia, Lianghao and Wang, Zheng and Li, Zhonghang and Yiu, Siuming},
  booktitle={Proceedings of the ACM Web Conference 2023},
  pages={295--305},
  year={2023}
}"
---

Among various region embedding methods, graph-based region relation learning models stand out, owing to their strong structure representation ability for encoding spatial correlations with graph neural networks. Despite their effectiveness, several key challenges have not been well addressed in existing methods: i) Data noise and missing are ubiquitous in many spatio-temporal scenarios due to a variety of factors. ii) Input spatio-temporal data (e.g., mobility traces) usually exhibits distribution heterogeneity across space and time. In such cases, current methods are vulnerable to the quality of the generated region graphs, which may lead to suboptimal performance. In this paper, we tackle the above challenges by exploring the Automated Spatio-Temporal graph contrastive learning paradigm (AutoST) over the heterogeneous region graph generated from multi-view data sources. Our \model\ framework is built upon a heterogeneous graph neural architecture to capture the multi-view region dependencies with respect to POI semantics, mobility flow patterns and geographical positions. To improve the robustness of our GNN encoder against data noise and distribution issues, we design an automated spatio-temporal augmentation scheme with a parameterized contrastive view generator. AutoST can adapt to the spatio-temporal heterogeneous graph with multi-view semantics well preserved. Extensive experiments for three downstream spatio-temporal mining tasks on several real-world datasets demonstrate the significant performance gain achieved by our \model\ over a variety of baselines.
