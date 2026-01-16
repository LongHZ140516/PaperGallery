---
title: "CoDynTrust: Robust Asynchronous Collaborative Perception via Dynamic Feature Trust Modulus"
authors: ["Yunjiang Xu", "Lingzhi Li", "Jin Wang", "Benyuan Yang", "Zhiwen Wu", "Xinhong Chen", "Jianping Wang"]
year: "2025"
conference: "ICRA"
license: ""
tags: ["Point Cloud", "Dynamic"]
image: "Xu_CoDynTrust_2025.jpg"
paper: "https://arxiv.org/pdf/2502.08169v1"
code: "https://github.com/CrazyShout/CoDynTrust"
project: ""
bibtex: "@article{xu2025codyntrust,
  title={CoDynTrust: Robust Asynchronous Collaborative Perception via Dynamic Feature Trust Modulus},
  author={Xu, Yunjiang and Li, Lingzhi and Wang, Jin and Yang, Benyuan and Wu, Zhiwen and Chen, Xinhong and Wang, Jianping},
  journal={arXiv preprint arXiv:2502.08169},
  year={2025}
}"
---

Collaborative perception, fusing information from multiple agents, can extend perception range so as to improve perception performance. However, temporal asynchrony in real-world environments, caused by communication delays, clock misalignment, or sampling configuration differences, can lead to information mismatches. If this is not well handled, then the collaborative performance is patchy, and what's worse safety accidents may occur. To tackle this challenge, we propose CoDynTrust, an uncertainty-encoded asynchronous fusion perception framework that is robust to the information mismatches caused by temporal asynchrony. CoDynTrust generates dynamic feature trust modulus (DFTM) for each region of interest by modeling aleatoric and epistemic uncertainty as well as selectively suppressing or retaining single-vehicle features, thereby mitigating information mismatches. We then design a multi-scale fusion module to handle multi-scale feature maps processed by DFTM. Compared to existing works that also consider asynchronous collaborative perception, CoDynTrust combats various low-quality information in temporally asynchronous scenarios and allows uncertainty to be propagated to downstream tasks such as planning and control. Experimental results demonstrate that CoDynTrust significantly reduces performance degradation caused by temporal asynchrony across multiple datasets, achieving state-of-the-art detection performance even with temporal asynchrony.
