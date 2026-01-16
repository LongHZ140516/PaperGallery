---
title: "MultiTrust: A Comprehensive Benchmark Towards Trustworthy Multimodal Large Language Models"
authors: ["Yichi Zhang", "Yao Huang", "Yitong Sun", "Chang Liu", "Zhe Zhao", "Zhengwei Fang", "Yifan Wang", "Huanran Chen", "Xiao Yang", "Xingxing Wei", "Hang Su", "Yinpeng Dong", "Jun Zhu"]
year: "2024"
conference: "NeurIPS"
license: "CC BY-SA"
tags: ["LLM"]
image: "Zhang_MultiTrust_2024.jpg"
paper: "https://arxiv.org/pdf/2406.07057"
code: "https://github.com/thu-ml/MMTrustEval"
project: "https://multi-trust.github.io/"
bibtex: "@article{zhang2024multitrust,
  title={Multitrust: A comprehensive benchmark towards trustworthy multimodal large language models},
  author={Zhang, Yichi and Huang, Yao and Sun, Yitong and Liu, Chang and Zhao, Zhe and Fang, Zhengwei and Wang, Yifan and Chen, Huanran and Yang, Xiao and Wei, Xingxing and others},
  journal={Advances in Neural Information Processing Systems},
  volume={37},
  pages={49279--49383},
  year={2024}
}"
---

Despite the superior capabilities of Multimodal Large Language Models (MLLMs) across diverse tasks, they still face significant trustworthiness challenges. Yet, current literature on the assessment of trustworthy MLLMs remains limited, lacking a holistic evaluation to offer thorough insights into future improvements. In this work, we establish MultiTrust, the first comprehensive and unified benchmark on the trustworthiness of MLLMs across five primary aspects: truthfulness, safety, robustness, fairness, and privacy. Our benchmark employs a rigorous evaluation strategy that addresses both multimodal risks and cross-modal impacts, encompassing 32 diverse tasks with self-curated datasets. Extensive experiments with 21 modern MLLMs reveal some previously unexplored trustworthiness issues and risks, highlighting the complexities introduced by the multimodality and underscoring the necessity for advanced methodologies to enhance their reliability. For instance, typical proprietary models still struggle with the perception of visually confusing images and are vulnerable to multimodal jailbreaking and adversarial attacks; MLLMs are more inclined to disclose privacy in text and reveal ideological and cultural biases even when paired with irrelevant images in inference, indicating that the multimodality amplifies the internal risks from base LLMs. Additionally, we release a scalable toolbox for standardized trustworthiness research, aiming to facilitate future advancements in this important field.
