---
title: "TIP-Editor: An Accurate Following Both Text-Prompts And Image-Prompts"
authors: ["Jingyu Zhuang", "Di Kang", "Yan-Pei Cao", "Guanbin Li", "Liang Lin", "Ying Shan"]
year: "2024"
conference: "TOG"
license: ""
tags: ["3DGS","3D", "Edit"]
image: "Zhuang_TIP Editor_2024.webp"
paper: "https://arxiv.org/pdf/2401.14828"
code: ""
project: "https://zjy526223908.github.io/TIP-Editor/"
bibtex: "@article{zhuang2024tip,
  title={Tip-editor: An accurate 3d editor following both text-prompts and image-prompts},
  author={Zhuang, Jingyu and Kang, Di and Cao, Yan-Pei and Li, Guanbin and Lin, Liang and Shan, Ying},
  journal={ACM Transactions on Graphics (TOG)},
  volume={43},
  number={4},
  pages={1--12},
  year={2024},
  publisher={ACM New York, NY, USA}
}"
---

Text-driven 3D scene editing has gained significant attention owing to its
convenience and user-friendliness. However, existing methods still lack accurate control of the specified appearance and location of the editing result due
to the inherent limitations of the text description. To this end, we propose a
3D scene editing framework, TIP-Editor, that accepts both text and image
prompts and a 3D bounding box to specify the editing region. With the
image prompt, users can conveniently specify the detailed appearance/style
of the target content in complement to the text description, enabling accurate control of the appearance. Specifically, TIP-Editor employs a stepwise
2D personalization strategy to better learn the representation of the existing scene and the reference image, in which a localization loss is proposed
to encourage correct object placement as specified by the bounding box.
Additionally, TIP-Editor utilizes explicit and flexible 3D Gaussian splatting
(GS) as the 3D representation to facilitate local editing while keeping the
background unchanged. Extensive experiments have demonstrated that TIPEditor conducts accurate editing following the text and image prompts in
the specified bounding box region, consistently outperforming the baselines in editing quality, and the alignment to the prompts, qualitatively and
quantitatively.
