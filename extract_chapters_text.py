import pypdf
import sys
import os

pdf_path = r'D:\gemini-cli-deeplearning\gemin-cli-for-learning\learning\CS229\main_notes.pdf'

if not os.path.exists(pdf_path):
    print(f"Error: File not found at {pdf_path}")
    sys.exit(1)

chapter_ranges = [
    ("Linear regression", 8, 19),
    ("Classification and logistic regression", 20, 28),
    ("Generalized linear models", 29, 33),
    ("Generative learning algorithms", 34, 47),
    ("Kernel methods", 48, 58),
    ("Support vector machines", 59, 79),
    ("Deep learning", 80, 95)
]

try:
    reader = pypdf.PdfReader(pdf_path)
    total_pages = len(reader.pages)
    
    for ch_name, start, end in chapter_ranges:
        print(f"--- CHAPTER: {ch_name} (Pages {start}-{end}) START ---")
        # Reading first 4 pages of each chapter to get key concepts/formulas
        for p in range(start - 1, min(start + 4, end, total_pages)):
            page_text = reader.pages[p].extract_text()
            if page_text:
                print(f"--- PAGE {p+1} ---")
                print(page_text)
        print(f"--- CHAPTER: {ch_name} END ---")
except Exception as e:
    print(f"An error occurred: {e}")
    sys.exit(1)
