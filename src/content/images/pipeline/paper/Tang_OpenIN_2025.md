---
title: "OpenIN: Open-Vocabulary Instance-Oriented Navigation in Dynamic Domestic Environments"
authors: ["Yujie Tang", "Meiling Wang", "Yinan Deng", "Zibo Zheng", "Jingchuan Deng", "Yufeng Yue"]
year: "2025"
conference: "IEEE Robotics and Automation Letters"
license: ""
tags: ["Point Cloud","Open-Vocabulary", "Navigation"]
image: "Tang_OpenIN_2025.jpg"
paper: "https://arxiv.org/pdf/2501.04279v1"
code: ""
project: "https://openin-nav.github.io/"
bibtex: "@article{tang2025openin,
  title={Openin: Open-vocabulary instance-oriented navigation in dynamic domestic environments},
  author={Tang, Yujie and Wang, Meiling and Deng, Yinan and Zheng, Zibo and Deng, Jingchuan and Zuo, Sibo and Yue, Yufeng},
  journal={IEEE Robotics and Automation Letters},
  volume={10},
  number={9},
  pages={9256--9263},
  year={2025},
  publisher={IEEE}
}"
---

In daily domestic settings, frequently used objects like cups often have unfixed positions and multiple instances within the same category, and their carriers frequently change as well. As a result, it becomes challenging for a robot to efficiently navigate to a specific instance. To tackle this challenge, the robot must capture and update scene changes and plans continuously. However, current object navigation approaches primarily focus on the semantic level and lack the ability to dynamically update scene representation. In contrast, this paper captures the relationships between frequently used objects and their static carriers. It constructs an open-vocabulary Carrier-Relationship Scene Graph (CRSG) and updates the carrying status during robot navigation to reflect the dynamic changes of the scene. Based on the CRSG, we further propose an instance navigation strategy that models the navigation process as a Markov Decision Process. At each step, decisions are informed by the Large Language Model's commonsense knowledge and visual-language feature similarity. We designed a series of long-sequence navigation tasks for frequently used everyday items in the Habitat simulator. The results demonstrate that by updating the CRSG, the robot can efficiently navigate to moved targets. Additionally, we deployed our algorithm on a real robot and validated its practical effectiveness.
