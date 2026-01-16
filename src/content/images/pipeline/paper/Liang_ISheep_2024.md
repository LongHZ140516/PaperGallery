---
title: "I-SHEEP: Self-Alignment of LLM from Scratch through an Iterative Self-Enhancement Paradigm"
authors: ["Yiming Liang", "Ge Zhang", "Xingwei Qu", "Tianyu Zheng", "Jiawei Guo", "Xinrun Du", "Zhenzhu Yang", "Jiaheng Liu", "Chenghua Lin", "Lei Ma", "Wenhao Huang", "Jiajun Zhang"]
year: "2024"
conference: "arXiv"
license: "CC BY"
tags: ["LLM", "SFT"]
image: "Liang_ISheep_2024.webp"
paper: "https://www.arxiv.org/pdf/2408.08072"
code: "https://github.com/multimodal-art-projection/I-SHEEP"
project: ""
bibtex: "@article{liang2024sheep,
  title={I-SHEEP: Self-Alignment of LLM from Scratch through an Iterative Self-Enhancement Paradigm},
  author={Liang, Yiming and Zhang, Ge and Qu, Xingwei and Zheng, Tianyu and Guo, Jiawei and Du, Xinrun and Yang, Zhenzhu and Liu, Jiaheng and Lin, Chenghua and Ma, Lei and others},
  journal={arXiv preprint arXiv:2408.08072},
  year={2024}
}"
---

Large Language Models (LLMs) have achieved significant advancements, however, the common learning paradigm treats LLMs as passive information repositories, neglecting their potential for active learning and alignment. Some approaches train LLMs using their own generated synthetic data, exploring the possibility of active alignment. However, there is still a huge gap between these one-time alignment methods and the continuous automatic alignment of humans. In this paper, we introduce \textbf{I-SHEEP}, an \textbf{I}terative \textbf{S}elf-En\textbf{H}anc\textbf{E}m\textbf{E}nt \textbf{P}aradigm.This human-like paradigm enables LLMs to \textbf{continuously self-align from scratch with nothing}. Compared to the one-time alignment method Dromedary \cite{sun2023principledriven}, which refers to the first iteration in this paper, I-SHEEP can significantly enhance capacities on both Qwen and Llama models. I-SHEEP achieves a maximum relative improvement of 78.2\% in the Alpaca Eval, 24.0\% in the MT Bench, and an absolute increase of 8.88\% in the IFEval accuracy over subsequent iterations in Qwen-1.5 72B model. Additionally, I-SHEEP surpasses the base model in various standard benchmark generation tasks, achieving an average improvement of 24.77\% in code generation tasks, 12.04\% in TrivialQA, and 20.29\% in SQuAD. We also provide new insights based on the experiment results.
