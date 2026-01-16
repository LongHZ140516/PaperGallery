---
title: "A Contextual Master-Slave Framework on Urban Region Graph for Urban Village Detection"
authors: ["Congxi Xiao", "Jingbo Zhou", "Jizhou Huang", "Hengshu Zhu", "Tong Xu", "Dejing Dou", "Hui Xiong"]
year: "2023"
conference: "ICDE"
license: ""
tags: ["Urban", "Detection", "GCN"]
image: "Xiao_CMSF_2025.webp"
paper: "https://doi.org/10.1609/aaai.v39i2.32149"
code: ""
project: ""
bibtex: "@inproceedings{xiao2023contextual,
  title={A contextual master-slave framework on urban region graph for urban village detection},
  author={Xiao, Congxi and Zhou, Jingbo and Huang, Jizhou and Zhu, Hengshu and Xu, Tong and Dou, Dejing and Xiong, Hui},
  booktitle={2023 IEEE 39th International Conference on Data Engineering (ICDE)},
  pages={736--748},
  year={2023},
  organization={IEEE}
}"
---

Urban villages (UVs) refer to the underdeveloped informal settlement falling behind the rapid urbanization in a city. Since there are high levels of social inequality and social risks in these UVs, it is critical for city managers to discover all UVs for making appropriate renovation policies. Existing approaches to detecting UVs are labor-intensive or have not fully addressed the unique challenges in UV detection such as the scarcity of labeled UVs and the diverse urban patterns in different regions. To this end, we first build an urban region graph (URG) to model the urban area in a hierarchically structured way. Then, we design a novel contextual master-slave framework to effectively detect the urban village from the URG. The core idea of such a framework is to firstly pre-train a basis (or master) model over the URG, and then to adaptively derive specific (or slave) models from the basis model for different regions. The proposed framework can learn to balance the generality and specificity for UV detection in an urban area. Finally, we conduct extensive experiments in three cities to demonstrate the effectiveness of our approach.
