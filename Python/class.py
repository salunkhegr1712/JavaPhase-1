
class Hell:
      
      # the init function is called when object is created from class 
      def __init__(self,name,mis):
            print("the init is called")
            self.name=name
            self.mis=mis
      
      # lets add some member function inside the class and each function receive argument self 
      def func(self):
            print("name is : ",self.name," mis is : ",self.mis)
            
      # lets create another which create a random number from name and mis 
      def uniqueKey(self):
            return ord(self.name[1])+int(str(self.mis)[-4:])


# lets create a object from the class 

print("----------------------------------- object creation -------------------------------------------")
a=Hell(name="ghansham",mis=111903033) 

# now lets print the name and mis of the hell class 
print("name is : ",a.name)
print("mis is : ",a.mis)
# the init is called
# name is :  ghansham
# mis is :  111903033

# lets create another object 
b=Hell("sham",111903027)
print(b.name,b.mis)
# sham 111903027

print("----------------------------------- attribute addition/ Modification -------------------------------------------")
# now lets add new attribute in object a 
a.newattr="hello world"

print(a.newattr) #hello world

# lets modify attribute 
a.newattr="hello boy"
print(a.newattr) #hell boy

print("------------------------------------------- object deletion -----------------------------------------------------")
# also it is easy tp delete the attribut 
del(a.newattr) 
# print(a.newattr) # AttributeError: 'Hell' object has no attribute 'newattr'

print("----------------------------------------- member functions ------------------------------------------------------")

a.func()
b.func()
# name is :  ghansham  mis is :  111903033
# name is :  sham  mis is :  111903027


# lets print the unique id for the both of the object 
print("unique key of a : ",a.uniqueKey())
print("unique key of b : ",b.uniqueKey())
# unique key of a :  3137
# unique key of b :  3131

print("-------------------------------- Rectangle class ------------------------------------")

class Rectangle:
      
      # attribute 
      def __init__(self,l=20,b=10):
            print("init is called")
            self.length=l
            self.bredth=b
      
      # member function of class {function created using lambda} 
      area=lambda self:self.length*self.bredth
      
      perimeter= lambda self: (self.length*self.bredth)*2
      
      def displayLB(self):
            print("length is : ",self.length,"bredth is : ",self.bredth)
            

# initialisation 
rect=Rectangle(40,20) #init is called 

# using  member function 
rect.displayLB()
print("area is : ",rect.area())
print("perimeter is : ",rect.perimeter())
# length is :  40 bredth is :  20
# area is :  800
# perimeter is :  1600
      