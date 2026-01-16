---
title: "Dance-to-Music Generation with Encoder-based Textual Inversion"
authors: ["Sifei Li", "Weiming Dong", "Yuxin Zhang", "Fan Tang", "Chongyang Ma", "Oliver Deussen", "Tong-Yee Lee", "Changsheng Xu"]
year: "2024"
conference: "SIGGRAPH Asia"
license: ""
tags: ["Generation", "Music", "Dataset"]
image: "Li_Dance_2024.jpg"
paper: "https://dl.acm.org/doi/10.1145/3680528.3687562"
code: "https://github.com/lsfhuihuiff/Dance-to-music_Siggraph_Asia_2024"
project: "https://lsfhuihuiff.github.io/dance2music.github.io/"
bibtex: "@inproceedings{li2024dance,
  title={Dance-to-music generation with encoder-based textual inversion},
  author={Li, Sifei and Dong, Weiming and Zhang, Yuxin and Tang, Fan and Ma, Chongyang and Deussen, Oliver and Lee, Tong-Yee and Xu, Changsheng},
  booktitle={SIGGRAPH Asia 2024 Conference Papers},
  pages={1--11},
  year={2024}
}"
---

The seamless integration of music with dance movements is essential for communicating the artistic intent of a dance piece. This alignment also significantly improves the immersive quality of gaming experiences and animation productions. Although there has been remarkable advancement in creating high-fidelity music from textual descriptions, current methodologies mainly focus on modulating overall characteristics such as genre and emotional tone. They often overlook the nuanced management of temporal rhythm, which is indispensable in crafting music for dance, since it intricately aligns the musical beats with the dancers’ movements. Recognizing this gap, we propose an encoder-based textual inversion technique to augment text-to-music models with visual control, facilitating personalized music generation. Specifically, we develop dual-path rhythm-genre inversion to effectively integrate the rhythm and genre of a dance motion sequence into the textual space of a text-to-music model. Contrary to traditional textual inversion methods, which directly update text embeddings to reconstruct a single target object, our approach utilizes separate rhythm and genre encoders to obtain text embeddings for two pseudo-words, adapting to the varying rhythms and genres. We collect a new dataset called In-the-wild Dance Videos (InDV) and demonstrate that our approach outperforms state-of-the-art methods across multiple evaluation metrics. Furthermore, our method is able to adapt to changes in tempo and effectively integrates with the inherent text-guided generation capability of the pre-trained model.
