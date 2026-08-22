import sys
input = sys.stdin.readline

t = int(input())
for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))
    
    a.sort()
    
    mexwf = 0
    
    for x in a:
        if x >= mexwf:
            mexwf += 1
    
    print(mexwf)