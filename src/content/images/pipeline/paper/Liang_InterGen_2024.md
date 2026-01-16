---
title: "InterGen: Diffusion-based Multi-human Motion Generation under Complex Interactions"
authors: ["Han Liang", "Wenqian Zhang", "Wenxuan Li", "Jingyi Yu", "Lan Xu"]
year: "2024"
conference: "IJCV"
license: "CC BY-NC-SA"
tags: ["Diffusion", "Human", "Motion", "Generation"]
image: "Liang_InterGen_2024.jpg"
paper: "https://arxiv.org/abs/2304.05684"
code: "https://github.com/tr3e/InterGen"
project: "https://tr3e.github.io/intergen-page/"
bibtex: "@article{liang2024intergen,
  title={Intergen: Diffusion-based multi-human motion generation under complex interactions},
  author={Liang, Han and Zhang, Wenqian and Li, Wenxuan and Yu, Jingyi and Xu, Lan},
  journal={International Journal of Computer Vision},
  volume={132},
  number={9},
  pages={3463--3483},
  year={2024},
  publisher={Springer}
}"
---

We have recently seen tremendous progress in diffusion advances for generating realistic human motions. Yet, they largely disregard the multi-human interactions. In this paper, we present InterGen, an effective diffusion-based approach that incorporates human-to-human interactions into the motion diffusion process, which enables layman users to customize high-quality two-person interaction motions, with only text guidance. We first contribute a multimodal dataset, named InterHuman. It consists of about 107M frames for diverse two-person interactions, with accurate skeletal motions and 23,337 natural language descriptions. For the algorithm side, we carefully tailor the motion diffusion model to our two-person interaction setting. To handle the symmetry of human identities during interactions, we propose two cooperative transformer-based denoisers that explicitly share weights, with a mutual attention mechanism to further connect the two denoising processes. Then, we propose a novel representation for motion input in our interaction diffusion model, which explicitly formulates the global relations between the two performers in the world frame. We further introduce two novel regularization terms to encode spatial relations, equipped with a corresponding damping scheme during the training of our interaction diffusion model. Extensive experiments validate the effectiveness and generalizability of InterGen. Notably, it can generate more diverse and compelling two-person motions than previous methods and enables various downstream applications for human interactions.
