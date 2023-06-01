# here we will use the inheritance in python language 
# quadrangle is class and we are going to inherit function from it and create 
# rectangle and square 

      # Quadrangle representation 
      #             a
      #       -------------
      #      d|           / b
      #       |          /
      #       -----------
      #             c

class Quadrangle:

      def __init__(self,a,b,c,d):
            
            self.a=a            
            self.b=b
            self.c=c            
            self.d=d     
      
      def perimeter(self):
            print("perimeter is : ",self.a+self.b+self.c+self.d)

      # function to write the length 
      def displayLength(self):
            print("sides are : ",self.a,self.b,self.c,self.d)
      
# now inherit the rectangle class from the Quadrangle
class Rectangle(Quadrangle):
      
      def __init__(self,l,b):
            super().__init__(l,b,l,b)
      
      # define the area function from rectangle 
      def area(self):
            print("area of rectangle : ",self.a*self.b)


# also inherit Quadrangle and create a class square 
class Square(Quadrangle):
      def __init__(self,side):
            super().__init__(side,side,side,side)
      
      # define the area function from rectangle 
      def area(self):
            print("area of square : ",self.a**2)
            
            
print("---------------------- for quadrangle class ------------------------------")
a=Quadrangle(10,20,30,40)
a.displayLength() # sides are :  10 20 30 40
a.perimeter() # perimeter is :  100

print("---------------------- for rectangle class ------------------------------")
b=Rectangle(20,30)
b.displayLength() # sides are :  20 30 20 30
b.perimeter() # perimeter is :  100
b.area() # area of rectangle :  600

print("---------------------- for square class ------------------------------")
c=Square(30)
c.displayLength() # sides are :  30 30 30 30
c.perimeter() # perimeter is :  120
c.area() # area of rectangle :  900