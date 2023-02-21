# An infinite number of shelves are arranged one above the other in a staggered fashion.
# The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 
# (the cat cannot climb on the shelf directly above its head)
# Find the minimum number of jumps to go from start to finish
# Example:
# Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)

# Solution:
def solution(start, finish):  
    count = 0
    while finish > start:
        finish-=3
        count+=1
        if (start-finish==1):
            count+=1
    return count