---
title: "DynamicGSG: Dynamic 3D Gaussian Scene Graphs for Environment Adaptation"
authors: ["Luzhou Ge", "Xiangyu Zhu", "Zhuo Yang", "Xuesong Li"]
year: "2025"
conference: "IROS"
license: "CC BY"
tags: ["3DGS", "Graph"]
image: "Ge_DynamicGSG_2025.webp"
paper: "https://arxiv.org/pdf/2502.15309"
code: "https://github.com/GeLuzhou/Dynamic-GSG"
project: ""
bibtex: "@article{ge2025dynamicgsg,
  title={DynamicGSG: Dynamic 3D Gaussian Scene Graphs for Environment Adaptation},
  author={Ge, Luzhou and Zhu, Xiangyu and Yang, Zhuo and Li, Xuesong},
  journal={arXiv preprint arXiv:2502.15309},
  year={2025}
}"
---

In real-world scenarios, environment changes caused by human or agent activities make it extremely challenging for robots to perform various long-term tasks. Recent works typically struggle to effectively understand and adapt to dynamic environments due to the inability to update their environment representations in memory according to environment changes and lack of fine-grained reconstruction of the environments. To address these challenges, we propose DynamicGSG, a dynamic, high-fidelity, open-vocabulary scene graph construction system leveraging Gaussian splatting. DynamicGSG builds hierarchical scene graphs using advanced vision language models to represent the spatial and semantic relationships between objects in the environments, utilizes a joint feature loss we designed to supervise Gaussian instance grouping while optimizing the Gaussian maps, and locally updates the Gaussian scene graphs according to real environment changes for long-term environment adaptation. Experiments and ablation studies demonstrate the performance and efficacy of our proposed method in terms of semantic segmentation, language-guided object retrieval, and reconstruction quality. Furthermore, we validate the dynamic updating capabilities of our system in real laboratory environments.
