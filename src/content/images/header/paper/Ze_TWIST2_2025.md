---
title: "TWIST2: Scalable, Portable, and Holistic Humanoid Data Collection System"
authors: ["Yanjie Ze", "Siheng Zhao", "Weizhuo Wang", "Angjoo Kanazawa", "Rocky Duan", "Pieter Abbeel", "Guanya Shi", "Jiajun Wu", "C. Karen Liu"]
year: "2025"
conference: "arXiv"
license: "CC BY"
tags: ["Robotics", "Dataset"]
image: "Ze_TWIST2_2025.webp"
paper: "https://arxiv.org/abs/2511.02832"
code: "https://github.com/amazon-far/TWIST2"
project: "https://yanjieze.com/TWIST2/"
bibtex: "@article{ze2025twist2,
  title={Twist2: Scalable, portable, and holistic humanoid data collection system},
  author={Ze, Yanjie and Zhao, Siheng and Wang, Weizhuo and Kanazawa, Angjoo and Duan, Rocky and Abbeel, Pieter and Shi, Guanya and Wu, Jiajun and Liu, C Karen},
  journal={arXiv preprint arXiv:2511.02832},
  year={2025}
}"
---

Large-scale data has driven breakthroughs in robotics, from language models to vision-language-action models in bimanual manipulation. However, humanoid robotics lacks equally effective data collection frameworks. Existing humanoid teleoperation systems either use decoupled control or depend on expensive motion capture setups. We introduce TWIST2, a portable, mocap-free humanoid teleoperation and data collection system that preserves full whole-body control while advancing scalability. Our system leverages PICO4U VR for obtaining real-time whole-body human motions, with a custom 2-DoF robot neck (cost around $250) for egocentric vision, enabling holistic human-to-humanoid control. We demonstrate long-horizon dexterous and mobile humanoid skills and we can collect 100 demonstrations in 15 minutes with an almost 100% success rate. Building on this pipeline, we propose a hierarchical visuomotor policy framework that autonomously controls the full humanoid body based on egocentric vision. Our visuomotor policy successfully demonstrates whole-body dexterous manipulation and dynamic kicking tasks. 
