# lets create a dictionary  it is basically a key value pair

d={
      "grs":8669,
      "abhi":7775,
      "adesh":9119,
      "bhau":9096,
      "anway":9766,
      "mai":7776,
      "banty":7058
}

# take input and print the value from the dictionary 
a=input("enter name : ")
if a in d:
      print(f"{a}'s number is : {d[a]}")
else:
      print("wrong input !")
      
d["sham"]=8696
print("added new : ",d)