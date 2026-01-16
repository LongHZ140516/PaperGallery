---
title: "Mitigating Hallucinations in Large Vision-Language Models via DPO: On-Policy Data Hold the Keys"
authors: ["Zhihe Yang", "Xufang Luo", "Dongqi Han", "Yunjian Xu", "Dongsheng Li"]
year: "2025"
conference: "CVPR"
license: ""
tags: ["LLM","DPO"]
image: "Yang_OPADPO_2025.jpg"
paper: "https://arxiv.org/abs/2501.09695"
code: "https://github.com/zhyang2226/OPA-DPO?tab=readme-ov-file"
project: "https://opa-dpo.github.io/"
bibtex: "@inproceedings{yang2025mitigating,
  title={Mitigating hallucinations in large vision-language models via dpo: On-policy data hold the key},
  author={Yang, Zhihe and Luo, Xufang and Han, Dongqi and Xu, Yunjian and Li, Dongsheng},
  booktitle={Proceedings of the Computer Vision and Pattern Recognition Conference},
  pages={10610--10620},
  year={2025}
}"
---

Hallucination remains a major challenge for Large Vision-Language Models (LVLMs). Direct Preference Optimization (DPO) has gained increasing attention as a simple solution to hallucination issues. It directly learns from constructed preference pairs that reflect the severity of hallucinations in responses to the same prompt and image. Nonetheless, different data construction methods in existing works bring notable performance variations. We identify a crucial factor here: outcomes are largely contingent on whether the constructed data aligns on-policy w.r.t  the initial (reference) policy of DPO. Theoretical analysis suggests that learning from off-policy data is impeded by the presence of KL-divergence between the updated policy and the reference policy. From the perspective of dataset distribution, we systematically summarize the inherent flaws in existing algorithms that employ DPO to address hallucination issues. To alleviate the problems, we propose On-Policy Alignment (OPA)-DPO framework, which uniquely leverages expert feedback to correct hallucinated responses and aligns both the original and expert-revised responses in an on-policy manner. Notably, with only 4.8k data, OPA-DPO achieves an additional reduction in the hallucination rate of LLaVA-1.5-7B: 13.26% on the AMBER benchmark and 5.39% on the Object-Hal benchmark, compared to the previous SOTA algorithm trained with 16k samples.
