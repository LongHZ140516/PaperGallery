---
title: "CoMatch: Dynamic Covisibility-Aware Transformer for Bilateral Subpixel-Level Semi-Dense Image Matching"
authors: ["Zizhuo Li", "Yifan Lu", "Linfeng Tang", "Shihua Zhang", "Jiayi Ma"]
year: "2025"
conference: "ICCV"
license: ""
tags: ["Image Matching", "Dynamic", "Subpixel Level"]
image: "Li_CoMatch_2025.webp"
paper: "https://openaccess.thecvf.com/content/ICCV2025/papers/Li_CoMatch_Dynamic_Covisibility-Aware_Transformer_for_Bilateral_Subpixel-Level_Semi-Dense_Image_Matching_ICCV_2025_paper.pdf"
code: ""
project: ""
bibtex: "@article{li2025comatch,
  title={CoMatch: Dynamic Covisibility-Aware Transformer for Bilateral Subpixel-Level Semi-Dense Image Matching},
  author={Li, Zizhuo and Lu, Yifan and Tang, Linfeng and Zhang, Shihua and Ma, Jiayi},
  journal={arXiv preprint arXiv:2503.23925},
  year={2025}
}"
---

This prospective study proposes CoMatch, a novel semi-dense image matcher with dynamic covisibility awareness and bilateral subpixel accuracy. Firstly, observing that modeling context interaction over the entire coarse feature map elicits highly redundant computation due to the neighboring representation similarity of tokens, a covisibility-guided token condenser is introduced to adaptively aggregate tokens in light of their covisibility scores that are dynamically estimated, thereby ensuring computational efficiency while improving the representational capacity of aggregated tokens simultaneously. Secondly, considering that feature interaction with massive non-covisible areas is distracting, which may degrade feature distinctiveness, a covisibility-assisted attention mechanism is deployed to selectively suppress irrelevant message broadcast from non-covisible reduced tokens, resulting in robust and compact attention to relevant rather than all ones. Thirdly, we find that at the fine-level stage, current methods adjust only the target view's keypoints to subpixel level, while those in the source view remain restricted at the coarse level and thus not informative enough, detrimental to keypoint location-sensitive usages. A simple yet potent fine correlation module is developed to refine the matching candidates in both source and target views to subpixel level, attaining attractive performance improvement. Thorough experimentation across an array of public benchmarks affirms CoMatch's promising accuracy, efficiency, and generalizability.
