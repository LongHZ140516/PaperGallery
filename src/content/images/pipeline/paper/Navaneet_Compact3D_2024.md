---
title: "Compact3D: Smaller and Faster Gaussian Splatting with Vector Quantization"
authors: ["K L Navaneet", "Kossar Pourahmadi Meibodi", "Soroush Abbasi Koohpayegani", "Hamed Pirsiavash"]
year: "2024"
conference: "ECCV"
license: "CC BY"
tags: ["3DGS", "Vector", "K-Means"]
image: "Navaneet_Compact3D_2024.jpg"
paper: "https://arxiv.org/pdf/2311.18159"
code: "https://github.com/UCDvision/compact3d"
project: "https://ucdvision.github.io/compact3d/"
bibtex: "@article{navaneet2023compact3d,
  title={Compact3d: Smaller and faster gaussian splatting with vector quantization},
  author={Navaneet, KL and Meibodi, Kossar Pourahmadi and Koohpayegani, Soroush Abbasi and Pirsiavash, Hamed},
  journal={arXiv preprint arXiv:2311.18159},
  volume={1},
  year={2023}
}"
---

3D Gaussian Splatting (3DGS) is a new method for modeling
and rendering 3D radiance fields that achieves much faster learning and rendering time compared to SOTA NeRF methods. However, it comes with the drawback of a much larger storage demand compared to NeRF methods since it needs to store the parameters for millions of 3D Gaussians. We notice that large groups of Gaussians share similar parameters
and introduce a simple vector quantization method based on K-means algorithm to quantize the Gaussian parameters. Then, we store the small codebook along with the index of the code for each Gaussian. We compress the indices further by sorting them and using a method similar to run-length encoding. Moreover, we use a simple regularizer that encourages zero opacity (invisible Gaussians) to reduce the number of Gaussians, thereby compressing the model and speeding up the rendering. We do extensive experiments on standard benchmarks as well as an existing 3D dataset that is an order of magnitude larger than the standard benchmarks used in this field. We show that our simple yet effective method can reduce the storage costs for 3DGS by 40× to 50× and rendering time by 2× to 3× with a very small drop in the quality of rendered images.
