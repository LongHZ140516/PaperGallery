---
title: "Towards Economical Inference: Enabling DeepSeek's Multi-Head Latent Attention in Any Transformer-based LLMs"
authors: ["Tao Ji", "Bin Guo", "Yuanbin Wu", "Qipeng Guo", "Lixing Shen", "Zhan Chen", "Xipeng Qiu", "Qi Zhang", "Tao Gui"]
year: "2025"
conference: "arXiv"
license: ""
tags: ["LLM","DeepSeek"]
image: "Ji_MHA2MLA_2025.jpg"
paper: "https://arxiv.org/pdf/2502.14837"
code: "https://github.com/JT-Ushio/MHA2MLA"
project: ""
bibtex: "@article{ji2025towards,
  title={Towards Economical Inference: Enabling DeepSeek's Multi-Head Latent Attention in Any Transformer-based LLMs},
  author={Ji, Tao and Guo, Bin and Wu, Yuanbin and Guo, Qipeng and Shen, Lixing and Chen, Zhan and Qiu, Xipeng and Zhang, Qi and Gui, Tao},
  journal={arXiv preprint arXiv:2502.14837},
  year={2025}
}"
---

Multi-head Latent Attention (MLA) is an innovative architecture proposed by DeepSeek, designed to ensure efficient and economical inference by significantly compressing the Key-Value (KV) cache into a latent vector. Compared to MLA, standard LLMs employing Multi-Head Attention (MHA) and its variants such as Grouped-Query Attention (GQA) exhibit significant cost disadvantages. Enabling well-trained LLMs (e.g., Llama) to rapidly adapt to MLA without pre-training from scratch is both meaningful and challenging. This paper proposes the first data-efficient fine-tuning method for transitioning from MHA to MLA (MHA2MLA), which includes two key components: for partial-RoPE, we remove RoPE from dimensions of queries and keys that contribute less to the attention scores, for low-rank approximation, we introduce joint SVD approximations based on the pre-trained parameters of keys and values. These carefully designed strategies enable MHA2MLA to recover performance using only a small fraction (0.3% to 0.6%) of the data, significantly reducing inference costs while seamlessly integrating with compression techniques such as KV cache quantization. For example, the KV cache size of Llama2-7B is reduced by 92.19%, with only a 0.5% drop in LongBench performance.
