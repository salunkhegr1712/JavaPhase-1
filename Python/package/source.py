
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
            
   
# lets store the classes here and import them and use them in another file 