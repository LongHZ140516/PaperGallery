---
title: "A Silver Bullet or a Compromise for Full Attention? A Comprehensive Study of Gist Token-based Context Compression"
authors: ["Chenlong Deng", "Zhisong Zhang", "Kelong Mao", "Shuaiyi Li", "Xinting Huang", "Dong Yu", "Zhicheng Dou"]
year: "2025"
conference: "ACL"
license: ""
tags: ["LLM", "Compression"]
image: "Deng_Silver_2025.webp"
paper: "https://arxiv.org/pdf/2412.17483"
code: ""
project: ""
bibtex: "@inproceedings{deng2025silver,
  title={A silver bullet or a compromise for full attention? a comprehensive study of gist token-based context compression},
  author={Deng, Chenlong and Zhang, Zhisong and Mao, Kelong and Li, Shuaiyi and Huang, Xinting and Yu, Dong and Dou, Zhicheng},
  booktitle={Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)},
  pages={4861--4879},
  year={2025}
}"
---

In this work, we provide a thorough investigation of gist-based context compression methods to improve long-context processing in large language models. We focus on two key questions: (1) How well can these methods replace full attention models? and (2) What potential failure patterns arise due to compression? Through extensive experiments, we show that while gist-based compression can achieve near-lossless performance on tasks like retrieval-augmented generation and long-document QA, it faces challenges in tasks like synthetic recall. Furthermore, we identify three key failure patterns: lost by the boundary, lost if surprise, and lost along the way. To mitigate these issues, we propose two effective strategies: fine-grained autoencoding, which enhances the reconstruction of original token information, and segment-wise token importance estimation, which adjusts optimization based on token dependencies. Our work provides valuable insights into the understanding of gist token-based context compression and offers practical strategies for improving compression capabilities.
