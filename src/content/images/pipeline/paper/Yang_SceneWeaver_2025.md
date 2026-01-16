---
title: "SceneWeaver: All-in-One 3D Scene Synthesis with an Extensible and Self-Reflective Agent"
authors: ["Yandan Yang", "Baoxiong Jia", "Shujie Zhang", "Siyuan Huang"]
year: "2025"
conference: "arXiv"
license: ""
tags: ["Agent", "3D", "Synthesis"]
image: "Yang_SceneWeaver_2025.jpg"
paper: "https://arxiv.org/abs/2509.20414"
code: "https://github.com/Scene-Weaver/SceneWeaver"
project: "https://scene-weaver.github.io/"
bibtex: "@article{yang2025sceneweaver,
  title={Sceneweaver: All-in-one 3d scene synthesis with an extensible and self-reflective agent},
  author={Yang, Yandan and Jia, Baoxiong and Zhang, Shujie and Huang, Siyuan},
  journal={arXiv preprint arXiv:2509.20414},
  year={2025}
}"
---

Indoor scene synthesis has become increasingly important with the rise of Embodied AI, which requires 3D environments that are not only visually realistic but also physically plausible and functionally diverse. While recent approaches have advanced visual fidelity, they often remain constrained to fixed scene categories, lack sufficient object-level detail and physical consistency, and struggle to align with complex user instructions. In this work, we present SceneWeaver, a reflective agentic framework that unifies diverse scene synthesis paradigms through tool-based iterative refinement. At its core, SceneWeaver employs a language model-based planner to select from a suite of extensible scene generation tools, ranging from data-driven generative models to visual- and LLM-based methods, guided by self-evaluation of physical plausibility, visual realism, and semantic alignment with user input. This closed-loop reason-act-reflect design enables the agent to identify semantic inconsistencies, invoke targeted tools, and update the environment over successive iterations. Extensive experiments on both common and open-vocabulary room types demonstrate that SceneWeaver not only outperforms prior methods on physical, visual, and semantic metrics, but also generalizes effectively to complex scenes with diverse instructions, marking a step toward general-purpose 3D environment generation.
