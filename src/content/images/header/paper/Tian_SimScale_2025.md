---
title: "SimScale: Learning to Drive via Real-World Simulation at Scale"
authors: ["Haochen Tian", "Tianyu Li", "Haochen Liu", "Jiazhi Yang", "Yihang Qiu", "Guang Li", "Junli Wang", "Yinfeng Gao", "Zhang Zhang", "Liang Wang", "Hangjun Ye", "Tieniu Tan", "Long Chen", "Hongyang Li"]
year: "2025"
conference: "arXiv"
license: "CC BY-NC-SA"
tags: ["Simulation", "Driven", "Real-World"]
image: "Tian_SimScale_2025.jpg"
paper: "https://arxiv.org/abs/2511.23369"
code: "https://github.com/OpenDriveLab/SimScale"
project: "https://opendrivelab.com/SimScale"
bibtex: "@article{tian2025simscale,
  title={SimScale: Learning to Drive via Real-World Simulation at Scale},
  author={Tian, Haochen and Li, Tianyu and Liu, Haochen and Yang, Jiazhi and Qiu, Yihang and Li, Guang and Wang, Junli and Gao, Yinfeng and Zhang, Zhang and Wang, Liang and others},
  journal={arXiv preprint arXiv:2511.23369},
  year={2025}
}"
---

Achieving fully autonomous driving systems requires learning rational decisions in a wide span of scenarios, including safety-critical and out-of-distribution ones. However, such cases are underrepresented in real-world corpus collected by human experts. To complement for the lack of data diversity, we introduce a novel and scalable simulation framework capable of synthesizing massive unseen states upon existing driving logs. Our pipeline utilizes advanced neural rendering with a reactive environment to generate high-fidelity multi-view observations controlled by the perturbed ego trajectory. Furthermore, we develop a pseudo-expert trajectory generation mechanism for these newly simulated states to provide action supervision. Upon the synthesized data, we find that a simple co-training strategy on both real-world and simulated samples can lead to significant improvements in both robustness and generalization for various planning methods on challenging real-world benchmarks, up to +6.8 EPDMS on navhard and +2.9 on navtest. More importantly, such policy improvement scales smoothly by increasing simulation data only, even without extra real-world data streaming in. We further reveal several crucial findings of such a sim-real learning system, which we term SimScale, including the design of pseudo-experts and the scaling properties for different policy architectures. Our simulation data and code would be released.
