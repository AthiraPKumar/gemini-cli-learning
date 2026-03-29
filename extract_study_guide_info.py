import pypdf
import sys
import os

pdf_path = r'D:\gemini-cli-deeplearning\gemin-cli-for-learning\learning\CS229\main_notes.pdf'

if not os.path.exists(pdf_path):
    print(f"Error: File not found at {pdf_path}")
    sys.exit(1)

# Chapter Name, Start Page (1-indexed), End Page (inclusive)
chapter_ranges = [
    ("1. Linear regression", 8, 15),
    ("2. Classification and logistic regression", 20, 28),
    ("3. Generalized linear models", 29, 33),
    ("4. Generative learning algorithms", 34, 47),
    ("5. Kernel methods", 48, 58),
    ("6. Support vector machines", 59, 79),
    ("7. Deep learning", 80, 112),
    ("8. Generalization", 113, 134)
]

try:
    reader = pypdf.PdfReader(pdf_path)
    total_pages = len(reader.pages)
    
    for ch_name, start, end in chapter_ranges:
        print(f"--- {ch_name} START ---")
        # Extract 5 pages or until end of chapter to keep output manageable but informative
        # I'll extract first 5 pages of each chapter for now.
        pages_to_read = range(start - 1, min(start + 5, end, total_pages))
        for p in pages_to_read:
            page_text = reader.pages[p].extract_text()
            if page_text:
                print(f"PAGE {p+1}:\n{page_text}\n")
        print(f"--- {ch_name} END ---")
except Exception as e:
    print(f"An error occurred: {e}")
    sys.exit(1)
