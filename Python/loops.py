def printUptoN(n):
      i=0
      while i<=n:
            
            # lets use break keyword here 
            print("start")
            if i==5:
                  break
            print(i)
            i+=1
           
            

# printUptoN(5)
# output :
#     0
#     1
#     2
#     3
#     4

def forloopfunction(n):
      for i in range(n+1):
            print("start")
            # lets say we want to skip multiples of 3
            if(i%3==0):
                  continue
            print(i)
            print("end")
      


# forloopfunction(4)
# output : 
# start
# start
# 1
# end
# start
# 2
# end
# start
# start
# 4
# end

# let see for loop

k=(1,2,3,4) #tuple
l=[1,2,3,4] #list
m={1,5,62,2} # set
n={
      "name":"grs",
      "branch":"comp",
} # a dictionary

# with for loop we can iterate to any of the above 

for i in k: 
      print(i) 
# 1 2 3 4

for i in l:
      print(i)
# 1 2 3 4

for j in m:
      print(j)
# 1 2 5 62

# for dictionary for loop iterate through the keys 
for j in n:
      print(j)
      # name branch
      print(n[j])
      # grs comp
      
such like that we can able to 