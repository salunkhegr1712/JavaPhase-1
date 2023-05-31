# let write a function which use elif 
def biggestAmongThree(a,b,c):
      
      if a>b and a>c:
            return a
      elif b>c:
            return b
      else:
            return c
      
def ageBrackets(age):
      
      if age>0 and age<=10:
            print("child")
            
      elif(age>=11 and age<=17):
            print("teen")
      elif(age>=18 and age<=34):
            print("young")
      elif(age>=35 and age<=60):
            print("adults")
      elif(age>60 and age<110):
            print("old")
      else:
            print("invalid input")
            
print(biggestAmongThree(10,24,2)) #24
ageBrackets(int(10))
            
# basic working of ternary operator 
# (code if true) if (condition) else (code if false)
# in ternary operator code come before condition check keep that in mind

def ternaryOperator1(a,b):
      return a if a>b else b

def maxAmongThreeUsingTernary(a,b,c):
      return a if a>b and a>c else (b if b>c else c)

print(ternaryOperator1(10,20)) # 20
print(maxAmongThreeUsingTernary(11,22,8)) #22

# lets find out is number prime or not using match case
val=13
match val:
      case 1:
            print("not prime")
      case 0:
            print("not prime")
      case 2:
            print("prime")
      case _:
            i=2
            while(i<val//2):
                  if(val%i==0):
                        print("not prime")
                        exit(0)
                  i=i+1
            print("prime")
            
# such like that you can use match case to find out that number is prime or not 