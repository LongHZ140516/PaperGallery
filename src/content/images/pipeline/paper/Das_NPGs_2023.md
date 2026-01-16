---
title: "Neural Parametric Gaussians for Monocular Non-Rigid Object Reconstruction"
authors: ["Devikalyan Das", "Christopher Wewer", "Raza Yunus", "Eddy Ilg", "Jan Eric Lenssen"]
year: "2023"
conference: "CVPR"
lincese: ""
tags: ["3DGS","Reconstruction"]
image: "Das_NPGs_2023.webp"
paper: "https://arxiv.org/pdf/2312.01196"
code: "https://github.com/DevikalyanDas/npgs"
project: "https://geometric-rl.mpi-inf.mpg.de/npg/"
bibtex: "@inproceedings{das2024neural,
  title={Neural parametric gaussians for monocular non-rigid object reconstruction},
  author={Das, Devikalyan and Wewer, Christopher and Yunus, Raza and Ilg, Eddy and Lenssen, Jan Eric},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  pages={10715--10725},
  year={2024}
}"
---

Reconstructing dynamic objects from monocular videos
is a severely underconstrained and challenging problem,
and recent work has approached it in various directions.
However, owing to the ill-posed nature of this problem,
there has been no solution that can provide consistent, highquality novel views from camera positions that are significantly different from the training views. In this work, we
introduce Neural Parametric Gaussians (NPGs) to take on
this challenge by imposing a two-stage approach: first, we
fit a low-rank neural deformation model, which then is used
as regularization for non-rigid reconstruction in the second
stage. The first stage learns the object’s deformations such
that it preserves consistency in novel views. The second
stage obtains high reconstruction quality by optimizing 3D
Gaussians that are driven by the coarse model. To this end,
we introduce a local 3D Gaussian representation, where
temporally shared Gaussians are anchored in and deformed
by local oriented volumes. The resulting combined model
can be rendered as radiance fields, resulting in high-quality
photo-realistic reconstructions of the non-rigidly deforming
objects. We demonstrate that NPGs achieve superior results
compared to previous works, especially in challenging scenarios with few multi-view cues.
