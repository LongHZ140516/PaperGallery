---
title: "BundleSDF: Neural 6-DoF Tracking and 3D Reconstruction of Unknown Objects"
authors: ["Bowen Wen", "Jonathan Tremblay", "Valts Blukis", "Stephen Tyree", "Thomas Muller", "Alex Evans", "Dieter Fox", "Jan Kautz", "Stan Birchfield"]
year: "2023"
conference: "CVPR"
license: "CC BY"
tags: ["NeRF", "3D", "Reconstruction", "SDF"]
image: "Wen_BundleSDF_2023.webp"
paper: "https://arxiv.org/pdf/2303.14158"
code: "https://github.com/NVlabs/BundleSDF"
project: "https://bundlesdf.github.io//"
bibtex: "@inproceedings{wen2023bundlesdf,
  title={Bundlesdf: Neural 6-dof tracking and 3d reconstruction of unknown objects},
  author={Wen, Bowen and Tremblay, Jonathan and Blukis, Valts and Tyree, Stephen and M{\"u}ller, Thomas and Evans, Alex and Fox, Dieter and Kautz, Jan and Birchfield, Stan},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  pages={606--617},
  year={2023}
}"
---

We present a near real-time method for 6-DoF tracking of an unknown object from a monocular RGBD video sequence, while simultaneously performing neural 3D reconstruction of the object. Our method works for arbitrary rigid objects, even when visual texture is largely absent. The object is assumed to be segmented in the first frame only. No additional information is required, and no assumption is made about the interaction agent. Key to our method is a Neural Object Field that is learned concurrently with a pose graph optimization process in order to robustly accumulate information into a consistent 3D representation capturing both geometry and appearance. A dynamic pool of posed memory frames is automatically maintained to facilitate communication between these threads. Our approach handles challenging sequences with large pose changes, partial and full occlusion, untextured surfaces, and specular highlights. We show results on HO3D, YCBInEOAT, and BEHAVE datasets, demonstrating that our method significantly outperforms existing approaches.
