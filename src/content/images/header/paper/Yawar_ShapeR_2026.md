---
title: "ShapeR: Robust Conditional 3D Shape Generation from Casual Captures"
authors: ["Yawar Siddiqui", "Duncan Frost", "Samir Aroudj", "Armen Avetisyan", "Henry Howard-Jenkins", "Daniel DeTone", "Pierre Moulon", "Qirui Wu", "Zhengqin Li", "Julian Straub", "Richard Newcombe", "Jakob Engel"]
year: "2026"
conference: "arXiv"
license: "CC BY"
tags: ["3D", "Generation", "Conditional"]
image: "Yawar_ShapeR_2026.jpg"
paper: "https://arxiv.org/abs/2601.11514"
code: "https://github.com/facebookresearch/ShapeR"
project: "https://facebookresearch.github.io/ShapeR/"
bibtex: "@article{siddiqui2026shaper,
  title={ShapeR: Robust Conditional 3D Shape Generation from Casual Captures},
  author={Siddiqui, Yawar and Frost, Duncan and Aroudj, Samir and Avetisyan, Armen and Howard-Jenkins, Henry and DeTone, Daniel and Moulon, Pierre and Wu, Qirui and Li, Zhengqin and Straub, Julian and others},
  journal={arXiv preprint arXiv:2601.11514},
  year={2026}
}"
---

Recent advances in 3D shape generation have achieved impressive results, but most existing methods rely on clean, unoccluded, and well-segmented inputs. Such conditions are rarely met in real-world scenarios. We present ShapeR, a novel approach for conditional 3D object shape generation from casually captured sequences. Given an image sequence, we leverage off-the-shelf visual-inertial SLAM, 3D detection algorithms, and vision-language models to extract, for each object, a set of sparse SLAM points, posed multi-view images, and machine-generated captions. A rectified flow transformer trained to effectively condition on these modalities then generates high-fidelity metric 3D shapes. To ensure robustness to the challenges of casually captured data, we employ a range of techniques including on-the-fly compositional augmentations, a curriculum training scheme spanning object- and scene-level datasets, and strategies to handle background clutter. Additionally, we introduce a new evaluation benchmark comprising 178 in-the-wild objects across 7 real-world scenes with geometry annotations. Experiments show that ShapeR significantly outperforms existing approaches in this challenging setting, achieving an improvement of 2.7x in Chamfer distance compared to state of the art.
