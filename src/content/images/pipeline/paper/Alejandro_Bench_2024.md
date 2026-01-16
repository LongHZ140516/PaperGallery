---
title: "μ-Bench: A Vision-Language Benchmark for Microscopy Understanding"
authors: ["Alejandro Lozano", "Jeffrey Nirschl", "James Burgess", "Sanket Rajan Gupte", "Yuhui Zhang", "Alyssa Unell", "Serena Yeung-Levy"]
year: "2024"
conference: "arXiv"
license: "CC BY"
tags: ["VLM", "Benchmark", "Understanding"]
image: "Alejandro_Bench_2024.webp"
paper: "https://arxiv.org/pdf/2407.01791"
code: "https://github.com/yeung-lab/Micro-Bench"
project: "https://ale9806.github.io/uBench-website/"
bibtex: | 
  @article{lozano2024mu,
  title={$\{$$\backslash$mu$\}$-bench: A vision-language benchmark for microscopy understanding},
  author={Lozano, Alejandro and Nirschl, Jeffrey and Burgess, James and Gupte, Sanket Rajan and Zhang, Yuhui and Unell, Alyssa and Yeung-Levy, Serena},
  journal={arXiv preprint arXiv:2407.01791},
  year={2024}
  }
---

Recent advances in microscopy have enabled the rapid generation of terabytes of image data in cell biology and biomedical research. Vision-language models (VLMs) offer a promising solution for large-scale biological image analysis, enhancing researchers' efficiency, identifying new image biomarkers, and accelerating hypothesis generation and scientific discovery. However, there is a lack of standardized, diverse, and large-scale vision-language benchmarks to evaluate VLMs' perception and cognition capabilities in biological image understanding. To address this gap, we introduce {\mu}-Bench, an expert-curated benchmark encompassing 22 biomedical tasks across various scientific disciplines (biology, pathology), microscopy modalities (electron, fluorescence, light), scales (subcellular, cellular, tissue), and organisms in both normal and abnormal states. We evaluate state-of-the-art biomedical, pathology, and general VLMs on {\mu}-Bench and find that: i) current models struggle on all categories, even for basic tasks such as distinguishing microscopy modalities; ii) current specialist models fine-tuned on biomedical data often perform worse than generalist models; iii) fine-tuning in specific microscopy domains can cause catastrophic forgetting, eroding prior biomedical knowledge encoded in their base model. iv) weight interpolation between fine-tuned and pre-trained models offers one solution to forgetting and improves general performance across biomedical tasks. We release {\mu}-Bench under a permissive license to accelerate the research and development of microscopy foundation models.
