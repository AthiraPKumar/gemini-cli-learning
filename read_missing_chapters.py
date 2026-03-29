import pypdf
import sys
import os

pdf_path = r'D:\gemini-cli-deeplearning\gemin-cli-for-learning\learning\CS229\main_notes.pdf'
chapter_ranges = [
    (9, 135, 139),
    (10, 145, 147),
    (11, 148, 152),
    (12, 165, 169),
    (13, 171, 175)
]

reader = pypdf.PdfReader(pdf_path)
for ch_num, start, end in chapter_ranges:
    print(f"--- CHAPTER {ch_num} START ---")
    for p in range(start - 1, min(end, len(reader.pages))):
        page_text = reader.pages[p].extract_text()
        if page_text:
            print(page_text)
    print(f"--- CHAPTER {ch_num} END ---")
