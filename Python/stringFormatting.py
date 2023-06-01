
# there are three ways to format a string  
# % replacement 
# f strings 
# format function 

# lets see how they all are used 
name="ghansham"
age=21
height=5.11

# so lets print all thesse with different formating styles 

# % replacement 
print("%s is %d and %f tall !" %(name,age,round(height,2)) )
# ghansham is 21 and 5.110000 tall !
# %s for string %d for number and %f for float 

# f strings {it is most easy and usefull}
print(f"{name} is {age} and {height} tall !")
# ghansham is 21 and 5.11 tall !

# format 
print("{0} is {1} and {2} tall !".format(name,age,height))
# ghansham is 21 and 5.11 tall !

# thus it is working of all of this and all are good and usefull but fstring are far better than remaining two 