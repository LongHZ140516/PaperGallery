---
title: "GRACE: Generalizing Robot-Assisted Caregiving with User Functionality Embeddings"
authors: ["Ziang Liu", "Yuanchen Ju", "Yu Da", "Tom Silver", "Pranav N. Thakkar", "Jenna Li", "Justin Guo", "Katherine Dimitropoulou", "Tapomayukh Bhattacharjee"]
year: "2025"
conference: "HRI"
license: ""
tags: ["Robotics", "Dataset"]
image: "Liu_GRACE_2025.webp"
paper: "https://arxiv.org/abs/2501.17855"
code: ""
project: "https://emprise.cs.cornell.edu/grace/"
bibtex: "@inproceedings{liu2025grace,
  title={GRACE: Generalizing Robot-Assisted Caregiving with User Functionality Embeddings},
  author={Liu, Ziang and Ju, Yuanchen and Da, Yu and Silver, Tom and Thakkar, Pranav N and Li, Jenna and Guo, Justin and Dimitropoulou, Katherine and Bhattacharjee, Tapomayukh},
  booktitle={2025 20th ACM/IEEE International Conference on Human-Robot Interaction (HRI)},
  pages={686--695},
  year={2025},
  organization={IEEE}
}"
---

Robot caregiving should be personalized to meet the diverse needs of care recipients -- assisting with tasks as needed, while taking user agency in action into account. In physical tasks such as handover, bathing, dressing, and rehabilitation, a key aspect of this diversity is the functional range of motion (fROM), which can vary significantly between individuals. In this work, we learn to predict personalized fROM as a way to generalize robot decision-making in a wide range of caregiving tasks. We propose a novel data-driven method for predicting personalized fROM using functional assessment scores from occupational therapy. We develop a neural model that learns to embed functional assessment scores into a latent representation of the user's physical function. The model is trained using motion capture data collected from users with emulated mobility limitations. After training, the model predicts personalized fROM for new users without motion capture. Through simulated experiments and a real-robot user study, we show that the personalized fROM predictions from our model enable the robot to provide personalized and effective assistance while improving the user's agency in action.
