# tupple 

# tupple value are unchanghable 
a=(1,3,45,2)
# a[2]=1 # TypeError: 'tuple' object does not support item assignment4

# function which can apply on tuple {only two functions index and count}
print("index of 1 is : ",a.index(1)) # 0

print("occurance of 1 in tuple is : ",a.count(1)) #1


# tupple can be extended and tupple can have duplicate values 
a=a+(1,23)

print(a) #(1, 3, 45, 2, 1, 23)


def forceModifyTupple(t,index,val):
      m=list(t)
      m[index]=val
      return tuple(m)  

print(a)
a=forceModifyTupple(a,0,10)
print(a)    

# (1, 3, 45, 2, 1, 23)
# (10, 3, 45, 2, 1, 23)