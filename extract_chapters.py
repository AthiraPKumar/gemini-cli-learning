import pypdf
import sys
import os

pdf_path = r'D:\gemini-cli-deeplearning\gemin-cli-for-learning\learning\CS229\main_notes.pdf'

if not os.path.exists(pdf_path):
    print(f"Error: File not found at {pdf_path}")
    sys.exit(1)

chapters = [
    (1, 8, 12, "Linear regression"),
    (2, 20, 24, "Classification and logistic regression"),
    (3, 29, 33, "Generalized linear models"),
    (4, 34, 38, "Generative learning algorithms"),
    (5, 48, 52, "Kernel methods"),
    (6, 59, 63, "Support vector machines"),
    (7, 80, 84, "Deep learning")
]

try:
    reader = pypdf.PdfReader(pdf_path)
    total_pages = len(reader.pages)
    
    for ch_num, start, end, title in chapters:
        print(f"### Chapter {ch_num}: {title} ###")
        # Extract 5 pages starting from 'start'
        for p in range(start - 1, min(start + 4, total_pages)):
            page_text = reader.pages[p].extract_text()
            if page_text:
                print(page_text)
        print("\n" + "="*80 + "\n")
except Exception as e:
    print(f"An error occurred: {e}")
    sys.exit(1)
