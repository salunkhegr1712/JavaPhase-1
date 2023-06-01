# lets upgrade our print function
def printModified(a="hello",sp="*"):
      print(sp*(len(str(a))+6))
      print(sp*2+" "+str(a)+" "+sp*2)
      print(sp*(len(str(a))+6))
      
printModified()
"""
(%%%%%%%%%%%
%% hello %%
%%%%%%%%%%%)
"""


for i in range(5):
      # printModified(i)
      pass

# *******
# ** 0 **
# *******
# *******
# ** 1 **
# *******
# *******
# ** 2 **
# *******


# now here we are going to *args as input and return biggest and smallest among them 

def func(*val):
      print("max is : ",max(val))#max is :  132
      print("min is : ",min(val))#min is :  2
      
      s=0
      for i in val:
         s+=i
      print(f"mean is {round((s/len(val)),2)}") #mean is 38.17
      
# func(51,62,13,34,14,90,22,132,12,24,2,2)


# with *args it can handle any number of parameter and you dont have to specify them 
# as parameter also 

# lets write the print function for positional *args

def args(*values):
      for i in values:
            printModified(i)
            
args(1,22,11111,"hello",True, "big trouble")
# *******
# ** 1 **
# *******
# ********
# ** 22 **
# ********
# ***********
# ** 11111 **
# ***********
# ***********
# ** hello **
# ***********
# **********
# ** True **
# **********
# *****************
# ** big trouble **
# *****************

def singleLinePrint():
      a=[1,2,52,2323,2,232,34,2]
      for i in a:
            print(i,end=" ")
      print()
singleLinePrint()

# 1 2 52 2323 2 232 34 2

# if print has multiple values then sep is come to play 
print(12,34,12,3,44) # 12 34 12 3 44

# using sep parameter inside the print function 
print(12,34,12,3,44,sep="==") # 12==34==12==3==44

# in print function the sep and end are two positional arguments which we can use 


# like arbitary positional argument we also have arbitary  keyword argument and they are stored as dixtionary 
# ** agrs {** is used for arbitary positional agruments}

def funct(**kargs):
      for i in kargs:
            print(i,kargs[i],sep=" : ")

# you can pass any number of key value pairs to function and python will automatically adjust them 
funct(name="grs",age=17,mis=111903033,arr=[1,2,3],tupple=(1,2,3,4),sett={1,2,3,4})

# name : grs
# age : 17
# mis : 111903033
# arr : [1, 2, 3]
# tupple : (1, 2, 3, 4)
# sett : {1, 2, 3, 4}

def evenOrOdd(num):
      if num%2==0:
            return "even"
      return "odd"
      
l=[1,2,3,4,5,6,7,8]

a=list(map(evenOrOdd,l))
print(a)
# ['odd', 'even', 'odd', 'even', 'odd', 'even', 'odd', 'even']

# now as we done with keyword arguments now move to the lambda function
# lambda function are one line function which are used to create function in small line of code
# and you can assign lamba function to variable and that variable will used for function call 

fun= lambda num:pow(num,.5)

print("the root of 25 is : ",fun(25))
# the root of 25 is :  5.0

# also you can send multiple values also 
f1=lambda *val:max(val)

# lambda function using arbitary positional arguments 
print(f1(15,512,34,13123,15,53,12,122,2,3,2,3)) #13123


# lambda functioon using aribitary keyword arguments 
f2=lambda **kargs:print(kargs)
f2(name="grs",mis=111903033)
# {'name': 'grs', 'mis': 111903033}