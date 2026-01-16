---
title: "TimeFilter: Patch-Specific Spatial-Temporal Graph Filtration for Time Series Forecasting"
authors: ["Yifan Hu", "Guibin Zhang", "Peiyuan Liu", "Disen Lan", "Naiqi Li", "Dawei Cheng", "Tao Dai", "Shu-Tao Xia", "Shirui Pan"]
year: "2025"
conference: "ICML"
license: "CC BY"
tags: ["Time series forecasting","GNN-based"]
image: "Hu_TimeFilter_2025.webp"
paper: "https://arxiv.org/pdf/2501.13041"
code: "https://github.com/TROUBADOUR000/TimeFilter"
project: ""
bibtex: "@article{hu2025timefilter,
  title={TimeFilter: Patch-specific spatial-temporal graph filtration for time series forecasting},
  author={Hu, Yifan and Zhang, Guibin and Liu, Peiyuan and Lan, Disen and Li, Naiqi and Cheng, Dawei and Dai, Tao and Xia, Shu-Tao and Pan, Shirui},
  journal={arXiv preprint arXiv:2501.13041},
  year={2025}
}"
---

Time series forecasting methods generally fall into two main categories: Channel Independent (CI) and Channel Dependent (CD) strategies. While CI overlooks important covariate relationships, CD captures all dependencies without distinction, introducing noise and reducing generalization. Recent advances in Channel Clustering (CC) aim to refine dependency modeling by grouping channels with similar characteristics and applying tailored modeling techniques. However, coarse-grained clustering struggles to capture complex, time-varying interactions effectively. To address these challenges, we propose TimeFilter, a GNN-based framework for adaptive and fine-grained dependency modeling. After constructing the graph from the input sequence, TimeFilter refines the learned spatial-temporal dependencies by filtering out irrelevant correlations while preserving the most critical ones in a patch-specific manner. Extensive experiments on 13 real-world datasets from diverse application domains demonstrate the state-of-the-art performance of TimeFilter.
