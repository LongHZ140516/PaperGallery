---
title: "ToonComposer: Streamlining Cartoon Production with Generative Post-Keyframing"
authors: ["Lingen Li", "Guangzhi Wang", "Zhaoyang Zhang", "Yaowei Li", "Xiaoyu Li", "Qi Dou", "Jinwei Gu", "Tianfan Xue", "Ying Shan"]
year: "2025"
conference: "arXiv"
tags: ["Diffusion","Cartoon"]
license: ""
image: "Li_ToonComposer_2025.jpg"
paper: "https://arxiv.org/pdf/2508.10881"
code: "https://github.com/TencentARC/ToonComposer"
project: "https://lg-li.github.io/project/tooncomposer/"
bibtex: "@article{li2025tooncomposer,
  title={Tooncomposer: Streamlining cartoon production with generative post-keyframing},
  author={Li, Lingen and Wang, Guangzhi and Zhang, Zhaoyang and Li, Yaowei and Li, Xiaoyu and Dou, Qi and Gu, Jinwei and Xue, Tianfan and Shan, Ying},
  journal={arXiv preprint arXiv:2508.10881},
  year={2025}
}"
---

Traditional cartoon and anime production involves keyframing, inbetweening, and colorization stages, which require intensive manual effort. Despite recent advances in AI, existing methods often handle these stages separately, leading to error accumulation and artifacts. For instance, inbetweening approaches struggle with large motions, while colorization methods require dense per-frame sketches. To address this, we introduce ToonComposer, a generative model that unifies inbetweening and colorization into a single post-keyframing stage. ToonComposer employs a sparse sketch injection mechanism to provide precise control using keyframe sketches. Additionally, it uses a cartoon adaptation method with the spatial low-rank adapter to tailor a modern video foundation model to the cartoon domain while keeping its temporal prior intact. Requiring as few as a single sketch and a colored reference frame, ToonComposer excels with sparse inputs, while also supporting multiple sketches at any temporal location for more precise motion control. This dual capability reduces manual workload and improves flexibility, empowering artists in real-world scenarios. To evaluate our model, we further created PKBench, a benchmark featuring human-drawn sketches that simulate real-world use cases. Our evaluation demonstrates that ToonComposer outperforms existing methods in visual quality, motion consistency, and production efficiency, offering a superior and more flexible solution for AI-assisted cartoon production.
