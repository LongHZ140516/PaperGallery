---
title: "G-NeLF: Memory-and Data-Efficient Hybrid Neural Light Field for Novel View Synthesis"
authors: ["Lutao Jiang", "Lin Wang"]
year: "2024"
conference: "arXiv"
license: ""
tags: ["NeRF", "Synthesis"]
image: "Jiang_GNeLF_2024.jpg"
paper: "https://arxiv.org/pdf/2409.05617"
code: ""
project: ""
bibtex: "@article{jiang2024g,
  title={G-NeLF: Memory-and Data-Efficient Hybrid Neural Light Field for Novel View Synthesis},
  author={Jiang, Lutao and Wang, Lin},
  journal={arXiv preprint arXiv:2409.05617},
  year={2024}
}"
---

Following the burgeoning interest in implicit neural representation, Neural Light Field (NeLF) has been introduced to predict the color of a ray directly. Unlike Neural Radiance Field (NeRF), NeLF does not create a point-wise representation by predicting color and volume density for each point in space. However, the current NeLF methods face a challenge as they need to train a NeRF model first and then synthesize over 10K views to train NeLF for improved performance. Additionally, the rendering quality of NeLF methods is lower compared to NeRF methods. In this paper, we propose G-NeLF, a versatile grid-based NeLF approach that utilizes spatial-aware features to unleash the potential of the neural network's inference capability, and consequently overcome the difficulties of NeLF training. Specifically, we employ a spatial-aware feature sequence derived from a meticulously crafted grid as the ray's representation. Drawing from our empirical studies on the adaptability of multi-resolution hash tables, we introduce a novel grid-based ray representation for NeLF that can represent the entire space with a very limited number of parameters. To better utilize the sequence feature, we design a lightweight ray color decoder that simulates the ray propagation process, enabling a more efficient inference of the ray's color. G-NeLF can be trained without necessitating significant storage overhead and with the model size of only 0.95 MB to surpass previous state-of-the-art NeLF. Moreover, compared with grid-based NeRF methods, e.g., Instant-NGP, we only utilize one-tenth of its parameters to achieve higher performance. Our code will be released upon acceptance.
