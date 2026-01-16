---
title: "AnyHome: Open-Vocabulary Generation of Structured and Textured 3D Homes"
authors: ["Rao Fu", "Zehao Wen", "Zichen Liu", "Srinath Sridhar"]
year: "2024"
conference: "ECCV"
license: ""
tags: ["Diffusion", "3D", "LLM"]
image: "Fu_AnyHome_2024.jpg"
paper: "https://link.springer.com/chapter/10.1007/978-3-031-72933-1_4"
code: "https://github.com/FreddieRao/anyhome_github"
project: ""
bibtex: "@inproceedings{fu2024anyhome,
  title={Anyhome: Open-vocabulary generation of structured and textured 3d homes},
  author={Fu, Rao and Wen, Zehao and Liu, Zichen and Sridhar, Srinath},
  booktitle={European Conference on Computer Vision},
  pages={52--70},
  year={2024},
  organization={Springer}
}"
---

Inspired by cognitive theories, we introduce AnyHome, a framework that translates any text into well-structured and textured indoor scenes at a house-scale. By prompting Large Language Models (LLMs) with designed templates, our approach converts provided textual narratives into amodal structured representations. These representations guarantee consistent and realistic spatial layouts by directing the synthesis of a geometry mesh within defined constraints. A Score Distillation Sampling process is then employed to refine the geometry, followed by an egocentric inpainting process that adds lifelike textures to it. AnyHome stands out with its editability, customizability, diversity, and realism. The structured representations for scenes allow for extensive editing at varying levels of granularity. Capable of interpreting texts ranging from simple labels to detailed narratives, AnyHome generates detailed geometries and textures that outperform existing methods in both quantitative and qualitative measures.
