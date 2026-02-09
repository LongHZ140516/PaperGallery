---
title: "Show, Don't Tell: Morphing Latent Reasoning into Image Generation"
authors: ["Harold Haodong Chen", "Xinxiang Yin", "Wen-Jie Shu", "Hongfei Zhang", "Zixin Zhang", "Chenfei Liao", "Litao Guo", "Qifeng Chen", "Ying-Cong Chen"]
year: "2026"
conference: "arXiv"
license: "CC BY"
tags: ["Image Generation", "Reasoning"]
image: "Chen_LatentMorph_2026.jpg"
paper: "https://arxiv.org/abs/2602.02227"
code: "https://github.com/EnVision-Research/LatentMorph"
project: ""
bibtex: "@article{chen2026show,
  title={Show, Don't Tell: Morphing Latent Reasoning into Image Generation},
  author={Chen, Harold Haodong and Yin, Xinxiang and Shu, Wen-Jie and Zhang, Hongfei and Zhang, Zixin and Liao, Chenfei and Guo, Litao and Chen, Qifeng and Chen, Ying-Cong},
  journal={arXiv preprint arXiv:2602.02227},
  year={2026}
}"
---

Text-to-image (T2I) generation has achieved remarkable progress, yet existing methods often lack the ability to dynamically reason and refine during generation--a hallmark of human creativity. Current reasoning-augmented paradigms most rely on explicit thought processes, where intermediate reasoning is decoded into discrete text at fixed steps with frequent image decoding and re-encoding, leading to inefficiencies, information loss, and cognitive mismatches. To bridge this gap, we introduce LatentMorph, a novel framework that seamlessly integrates implicit latent reasoning into the T2I generation process. At its core, LatentMorph introduces four lightweight components: (i) a condenser for summarizing intermediate generation states into compact visual memory, (ii) a translator for converting latent thoughts into actionable guidance, (iii) a shaper for dynamically steering next image token predictions, and (iv) an RL-trained invoker for adaptively determining when to invoke reasoning. By performing reasoning entirely in continuous latent spaces, LatentMorph avoids the bottlenecks of explicit reasoning and enables more adaptive self-refinement. Extensive experiments demonstrate that LatentMorph (I) enhances the base model Janus-Pro by  on GenEval and  on T2I-CompBench; (II) outperforms explicit paradigms (e.g., TwiG) by  and  on abstract reasoning tasks like WISE and IPV-Txt, (III) while reducing inference time by  and token consumption by ; and (IV) exhibits  cognitive alignment with human intuition on reasoning invocation.
