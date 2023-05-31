# lets create a list 
m=[1,4,27,21,7,2,35,1,4]
print(m)
print(f"length of list is : ",len(m))

# output :
#       [1, 4, 27, 21, 7, 2, 35, 1, 4]
#       length of list is :  9


# now lets convert it into a set 
k=set(m)

# print the new set and its length
print(k)
print(f"length of set is : ",len(k))

# output :
      # {1, 2, 35, 4, 7, 21, 27}
      # length of set is :  7


print("------------------------------- set functions ------------------------------------")
# function we can use on set 
k.add(12)
print(k)
# {1, 2, 35, 4, 7, 12, 21, 27}

k.remove(27)
print(k)
# {1, 2, 35, 4, 7, 12, 21}

# in set pop is take place from front side 
print(k.pop()) #1
print(k)  #{2, 35, 4, 7, 12, 21}

# discard function is there is used to remove a elemnt from set but if element is not
# there will not raise error and if there remove it 
k.discard(35)
print(k)
# {2, 4, 7, 12, 21}

k.discard(100)
print(k)
{2, 4, 7, 12, 21}


# set operations
print("------------------------------- set operations ------------------------------------")

set1={"kl","rs","msd","sg","ash","jb","kp"}
set2={"rs","msd","kp","rj","ash","sg","abd"}

# lets find intersection among two sets 
print(set1.intersection(set2))
# {'kp', 'ash', 'sg', 'rs', 'msd'}

# uniom 
print(set1.union(set2))
# {'kp', 'jb', 'sg', 'ash', 'rs', 'rj', 'msd', 'abd', 'kl'}

# to find set difference 
print(set1.difference(set2))
# {'kl', 'jb'}

print(set2.difference(set1))
# {'rj', 'abd'}

# if we want sum of both above two difference we use symmetric_difference
print(set1.symmetric_difference(set2))
# {'rj', 'kl', 'jb', 'abd'}