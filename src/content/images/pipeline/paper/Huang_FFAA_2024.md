---
title: "FFAA: Multimodal Large Language Model based Explainable Open-World Face Forgery Analysis Assistant"
authors: ["Zhengchao Huang", "Bin Xia", "Zicheng Lin", "Zhun Mou", "Wenming Yang"]
year: "2024"
conference: "arXiv"
license: ""
tags: ["LLM", "Face", "Multi-modal"]
image: "Huang_FFAA_2024.jpg"
paper: "https://arxiv.org/pdf/2408.10072"
code: "https://github.com/thu-huangzc/FFAA"
project: "https://ffaa-vl.github.io/"
bibtex: "@article{huang2024ffaa,
  title={Ffaa: Multimodal large language model based explainable open-world face forgery analysis assistant},
  author={Huang, Zhengchao and Xia, Bin and Lin, Zicheng and Mou, Zhun and Yang, Wenming and Jia, Jiaya},
  journal={arXiv preprint arXiv:2408.10072},
  year={2024}
}"
---

The rapid advancement of deepfake technologies has sparked widespread public concern, particularly as face forgery poses a serious threat to public information security. However, the unknown and diverse forgery techniques, varied facial features and complex environmental factors pose significant challenges for face forgery analysis. Existing datasets lack descriptions of these aspects, making it difficult for models to distinguish between real and forged faces using only visual information amid various confounding factors. In addition, existing methods do not yield user-friendly and explainable results, complicating the understanding of the model's decision-making process. To address these challenges, we introduce a novel Open-World Face Forgery Analysis VQA (OW-FFA-VQA) task and the corresponding benchmark. To tackle this task, we first establish a dataset featuring a diverse collection of real and forged face images with essential descriptions and reliable forgery reasoning. Base on this dataset, we introduce FFAA: Face Forgery Analysis Assistant, consisting of a fine-tuned Multimodal Large Language Model (MLLM) and Multi-answer Intelligent Decision System (MIDS). By integrating hypothetical prompts with MIDS, the impact of fuzzy classification boundaries is effectively mitigated, enhancing the model's robustness. Extensive experiments demonstrate that our method not only provides user-friendly explainable results but also significantly boosts accuracy and robustness compared to previous methods.
