---
title: "LLaMA-Omni: Seamless Speech Interaction with Large Language Models"
authors: ["Qingkai Fang", "Shoutao Guo", "Yan Zhou", "Zhengrui Ma", "Shaolei Zhang", "Yang Feng"]
year: "2024"
conference: "arXiv"
license: "CC BY-NC-ND"
tags: ["LLM","Llama-based"]
image: "Fang_LLaMA_2024.jpg"
paper: "https://arxiv.org/pdf/2409.06666"
code: "https://github.com/ictnlp/LLaMA-Omni"
project: ""
bibtex: "@article{fang2024llama,
  title={Llama-omni: Seamless speech interaction with large language models},
  author={Fang, Qingkai and Guo, Shoutao and Zhou, Yan and Ma, Zhengrui and Zhang, Shaolei and Feng, Yang},
  journal={arXiv preprint arXiv:2409.06666},
  year={2024}
}"
---

Models like GPT-4o enable real-time interaction with large language models (LLMs) through speech, significantly enhancing user experience compared to traditional text-based interaction. However, there is still a lack of exploration on how to build speech interaction models based on open-source LLMs. To address this, we propose LLaMA-Omni, a novel model architecture designed for low-latency and high-quality speech interaction with LLMs. LLaMA-Omni integrates a pretrained speech encoder, a speech adaptor, an LLM, and a streaming speech decoder. It eliminates the need for speech transcription, and can simultaneously generate text and speech responses directly from speech instructions with extremely low latency. We build our model based on the latest Llama-3.1-8B-Instruct model. To align the model with speech interaction scenarios, we construct a dataset named InstructS2S-200K, which includes 200K speech instructions and corresponding speech responses. Experimental results show that compared to previous speech-language models, LLaMA-Omni provides better responses in both content and style, with a response latency as low as 226ms. Additionally, training LLaMA-Omni takes less than 3 days on just 4 GPUs, paving the way for the efficient development of speech-language models in the future.
