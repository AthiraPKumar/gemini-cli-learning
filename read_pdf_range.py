import pypdf
import sys
import os

pdf_path = r'D:\gemini-cli-deeplearning\gemin-cli-for-learning\learning\CS229\main_notes.pdf'

if not os.path.exists(pdf_path):
    print(f"Error: File not found at {pdf_path}")
    sys.exit(1)

chapter_ranges = [
    (8, 113, 117),
    (9, 135, 139),
    (10, 145, 147),
    (11, 148, 152),
    (12, 165, 169),
    (13, 171, 175),
    (14, 177, 181),
    (15, 189, 193),
    (16, 206, 210),
    (17, 220, 224)
]

try:
    reader = pypdf.PdfReader(pdf_path)
    total_pages = len(reader.pages)
    
    for ch_num, start, end in chapter_ranges:
        print(f"--- CHAPTER {ch_num} START ---")
        for p in range(start - 1, min(end, total_pages)):
            page_text = reader.pages[p].extract_text()
            if page_text:
                print(page_text)
        print(f"--- CHAPTER {ch_num} END ---")
except Exception as e:
    print(f"An error occurred: {e}")
    sys.exit(1)
