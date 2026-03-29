import json
import re

def find_indices(text):
    formats = []
    
    # Title
    title = "CS229 Study Guide: Machine Learning"
    start = text.find(title)
    if start != -1:
        formats.append({"startIndex": start + 1, "endIndex": start + len(title) + 1, "style": "heading1"})
    
    # Parts (Heading 2)
    parts = re.finditer(r"Part [I|V|X]+: .*", text)
    for part in parts:
        formats.append({"startIndex": part.start() + 1, "endIndex": part.end() + 1, "style": "heading2"})
    
    # Chapters (Heading 3 + Bold)
    chapters = re.finditer(r"Chapter \d+: .*", text)
    for chapter in chapters:
        formats.append({"startIndex": chapter.start() + 1, "endIndex": chapter.end() + 1, "style": "heading3"})
        formats.append({"startIndex": chapter.start() + 1, "endIndex": chapter.end() + 1, "style": "bold"})
    
    return formats

# The text from the tool output
text = """CS229 Study Guide: Machine Learning

Part I: Supervised Learning

Chapter 1: Linear Regression
Chapter 2: Classification and Logistic Regression
Chapter 3: Generalized Linear Models (GLMs)
Chapter 4: Generative Learning Algorithms

Part II: Kernel Methods & SVMs

Chapter 5: Kernel Methods
Chapter 6: Support Vector Machines (SVMs)

Part II: Deep Learning
Chapter 7: Deep Learning

Part III: Generalization and Regularization

Chapter 8: Generalization
Chapter 9: Regularization and Model Selection

Part IV: Unsupervised Learning

Chapter 10: Clustering and k-means
Chapter 11: EM Algorithms
Chapter 12: Principal Components Analysis (PCA)
Chapter 13: Independent Components Analysis (ICA)

Part V: Reinforcement Learning and Control

Chapter 14: Self-supervised Learning & Foundation Models
Chapter 15: Reinforcement Learning
Chapter 16: LQR, DDP and LQG
Chapter 17: Policy Gradient (REINFORCE)"""

# Actually, I should use the full text from the previous output to be safe.
# I will just write the logic to find them in the full string.
with open("doc_content_study_guide.txt", "w", encoding="utf-8") as f:
    f.write(text) # This is just a placeholder, I'll use the find_indices on the actual text in a script.
