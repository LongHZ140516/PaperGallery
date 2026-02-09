---
title: "Skin Tokens: A Learned Compact Representation for Unified Autoregressive Rigging"
authors: ["Jia-peng Zhang", "Cheng-Feng Pu", "Meng-Hao Guo", "Yan-Pei Cao", "Shi-Min Hu"]
year: "2026"
conference: "arXiv"
license: "CC BY"
tags: ["3D", "Rigging", "Autoregressive"]
image: "Zhang_SkinTokens_2026.jpg"
paper: "https://arxiv.org/abs/2602.04805"
code: ""
project: "https://zjp-shadow.github.io/works/SkinTokens/"
bibtex: "@article{zhang2026skin,
  title={Skin Tokens: A Learned Compact Representation for Unified Autoregressive Rigging},
  author={Zhang, Jia-peng and Pu, Cheng-Feng and Guo, Meng-Hao and Cao, Yan-Pei and Hu, Shi-Min},
  journal={arXiv preprint arXiv:2602.04805},
  year={2026}
}"
---

The rapid proliferation of generative 3D models has created a critical bottleneck in animation pipelines: rigging. Existing automated methods are fundamentally limited by their approach to skinning, treating it as an ill-posed, high-dimensional regression task that is inefficient to optimize and is typically decoupled from skeleton generation. We posit this is a representation problem and introduce SkinTokens: a learned, compact, and discrete representation for skinning weights. By leveraging an FSQ-CVAE to capture the intrinsic sparsity of skinning, we reframe the task from continuous regression to a more tractable token sequence prediction problem. This representation enables TokenRig, a unified autoregressive framework that models the entire rig as a single sequence of skeletal parameters and SkinTokens, learning the complicated dependencies between skeletons and skin deformations. The unified model is then amenable to a reinforcement learning stage, where tailored geometric and semantic rewards improve generalization to complex, out-of-distribution assets. Quantitatively, the SkinTokens representation leads to a 98%-133% percents improvement in skinning accuracy over state-of-the-art methods, while the full TokenRig framework, refined with RL, enhances bone prediction by 17%-22%. Our work presents a unified, generative approach to rigging that yields higher fidelity and robustness, offering a scalable solution to a long-standing challenge in 3D content creation.
