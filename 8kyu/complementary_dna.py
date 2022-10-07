# In DNA strings, symbols "A" and "T" are complements of each other, 
# as "C" and "G". Your function receives one side of the DNA; 
# you need to return the other complementary side. 
# DNA strand is never empty or there is no DNA at all.

# Example: (input --> output)
# "ATTGC" --> "TAACG"
# "GTAT" --> "CATA"

def DNA_strand(dna):
    dict = { 
        "A":"T",
        "T":"A",
        "C":"G",
        "G":"C"
        }
    return "".join([dict[x] for x in dna])