---
title: "FreeControl: Training-Free Spatial Control of Any Text-to-Image Diffusion Model with Any Condition"
authors: ["Sicheng Mo", "Fangzhou Mu", "Kuan Heng Lin", "Yanli Liu", "Bochen Guan", "Yin Li", "Bolei Zhou"]
year: "2024"
conference: "CVPR"
license: "CC BY"
tags: ["Diffusion", "Generation", "Text-to-Image"]
image: "Mo_FreeControl_2024.webp"
paper: "https://arxiv.org/abs/2312.07536"
code: "https://github.com/genforce/freecontrol"
project: "https://genforce.github.io/freecontrol//"
bibtex: "@inproceedings{mo2024freecontrol,
  title={Freecontrol: Training-free spatial control of any text-to-image diffusion model with any condition},
  author={Mo, Sicheng and Mu, Fangzhou and Lin, Kuan Heng and Liu, Yanli and Guan, Bochen and Li, Yin and Zhou, Bolei},
  booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
  pages={7465--7475},
  year={2024}
}"
---

Recent approaches such as ControlNet offer users fine-grained spatial control over text-to-image (T2I) diffusion models. However auxiliary modules have to be trained for each spatial condition type model architecture and checkpoint putting them at odds with the diverse intents and preferences a human designer would like to convey to the AI models during the content creation process. In this work we present FreeControl a training-free approach for controllable T2I generation that supports multiple conditions architectures and checkpoints simultaneously. FreeControl enforces structure guidance to facilitate the global alignment with a guidance image and appearance guidance to collect visual details from images generated without control. Extensive qualitative and quantitative experiments demonstrate the superior performance of FreeControl across a variety of pre-trained T2I models. In particular FreeControl enables convenient training-free control over many different architectures and checkpoints allows the challenging input conditions on which most of the existing training-free methods fail and achieves competitive synthesis quality compared to training-based approaches.
