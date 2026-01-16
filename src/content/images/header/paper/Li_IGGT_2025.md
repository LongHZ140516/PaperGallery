---
title: "IGGT: Instance-Grounded Geometry Transformer for Semantic 3D Reconstruction"
authors: ["Hao Li", "Zhengyu Zou", "Fangfu Liu", "Xuanyang Zhang", "Fangzhou Hong", "Yukang Cao", "Yushi Lan", "Manyuan Zhang", "Gang Yu", "Dingwen Zhang", "Ziwei Liu"]
year: "2025"
conference: "arXiv"
license: "CC BY"
tags: ["3D", "Reconstruction", "Semantic"]
image: "Li_IGGT_2025.webp"
paper: "https://arxiv.org/abs/2510.22706"
code: "https://github.com/lifuguan/IGGT_official"
project: "https://lifuguan.github.io/IGGT_official"
bibtex: "@article{transformeriggt,
  title={IGGT: INSTANCE-GROUNDED GEOMETRY TRANS-FORMER FOR SEMANTIC 3D RECONSTRUCTION},
  author={Transformer, Grounded}
}"
---

Humans naturally perceive the geometric structure and semantic content of a 3D world as intertwined dimensions, enabling coherent and accurate understanding of complex scenes. However, most prior approaches prioritize training large geometry models for low-level 3D reconstruction and treat high-level spatial understanding in isolation, overlooking the crucial interplay between these two fundamental aspects of 3D-scene analysis, thereby limiting generalization and leading to poor performance in downstream 3D understanding tasks. Recent attempts have mitigated this issue by simply aligning 3D models with specific language models, thus restricting perception to the aligned model's capacity and limiting adaptability to downstream tasks. In this paper, we propose InstanceGrounded Geometry Transformer (IGGT), an end-to-end large unified transformer to unify the knowledge for both spatial reconstruction and instance-level contextual understanding. Specifically, we design a 3D-Consistent Contrastive Learning strategy that guides IGGT to encode a unified representation with geometric structures and instance-grounded clustering through only 2D visual inputs. This representation supports consistent lifting of 2D visual inputs into a coherent 3D scene with explicitly distinct object instances. To facilitate this task, we further construct InsScene-15K, a large-scale dataset with high-quality RGB images, poses, depth maps, and 3D-consistent instance-level mask annotations with a novel data curation pipeline.
