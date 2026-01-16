---
title: "Bilevel Learning for Bilevel Planning"
authors: ["Bowen Li", "Tom Silver", "Sebastian Scherer", "Alexander Gray"]
year: "2025"
conference: "RSS"
license: "CC BY"
tags: ["Robotics"]
image: "Li_Bilevel_2025.webp"
paper: "https://www.arxiv.org/pdf/2502.08697"
code: "https://github.com/centaurinstitute/IVNTR"
project: "https://jaraxxus-me.github.io/IVNTR/"
bibtex: "@article{li2025bilevel,
  title={Bilevel Learning for Bilevel Planning},
  author={Li, Bowen and Silver, Tom and Scherer, Sebastian and Gray, Alexander},
  journal={arXiv preprint arXiv:2502.08697},
  year={2025}
}"
---

A robot that learns from demonstrations should not just imitate what it sees -- it should understand the high-level concepts that are being demonstrated and generalize them to new tasks. Bilevel planning is a hierarchical model-based approach where predicates (relational state abstractions) can be leveraged to achieve compositional generalization. However, previous bilevel planning approaches depend on predicates that are either hand-engineered or restricted to very simple forms, limiting their scalability to sophisticated, high-dimensional state spaces. To address this limitation, we present IVNTR, the first bilevel planning approach capable of learning neural predicates directly from demonstrations. Our key innovation is a neuro-symbolic bilevel learning framework that mirrors the structure of bilevel planning. In IVNTR, symbolic learning of the predicate "effects" and neural learning of the predicate "functions" alternate, with each providing guidance for the other. We evaluate IVNTR in six diverse robot planning domains, demonstrating its effectiveness in abstracting various continuous and high-dimensional states. While most existing approaches struggle to generalize (with < 35% success rate), our IVNTR achieves an average of 77% success rate on unseen tasks. Additionally, we showcase IVNTR on a mobile manipulator, where it learns to perform real-world mobile manipulation tasks and generalizes to unseen test scenarios that feature new objects, new states, and longer task horizons. Our findings underscore the promise of learning and planning with abstractions as a path towards high-level generalization.
