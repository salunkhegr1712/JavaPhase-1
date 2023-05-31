# lets create a dictionary in python 
a={
      "name":"ghansham",
      "education":["10th","12th","B. tech"],
      "address":{
            "flane":"morochi",
            "mob":8624969401,
      },
      "m":{1,2,3,4},
      "n":(1,2,4,1,2)
}

print("----------------------------- Dictionary operations ----------------------------------------")

print(a["name"]) #ghansham
print(a["education"]) #['10th', '12th', 'B. tech']
print(a["address"]) #{'flane': 'morochi', 'mob': 8624969401}
print(a["m"]) #{1, 2, 3, 4}
print(a["n"]) #(1, 2, 4, 1, 2)

print("deleting item from dictionary")

# delete using del and pass dictionary and key combination to delete
del(a["n"])
print(a)

# {'name': 'ghansham', 'education': ['10th', '12th', 'B. tech'], 'address': {'flane': 'morochi', 'mob': 8624969401}, 'm': {1, 2, 3, 4}}

# we can also use pop method 
print(a.pop("m")) #{1, 2, 3, 4}
# {'name': 'ghansham', 'education': ['10th', '12th', 'B. tech'], 'address': {'flane': 'morochi', 'mob': 8624969401}}


# lets insert new key value pair inside the dictionary 
a["newkey"]="newValue"
print(a)
# {'name': 'ghansham', 'education': ['10th', '12th', 'B. tech'], 'address': {'flane': 'morochi', 'mob': 8624969401}, 'newkey': 'newValue'}

print(a.get("name"))
print(a.keys())
# dict_keys(['name', 'education', 'address', 'newkey'])

# lets use update to update the key value pair 
a.update({"name":"grs"})
print(a)
# {'name': 'grs', 'education': ['10th', '12th', 'B. tech'], 'address': {'flane': 'morochi', 'mob': 8624969401}, 'newkey': 'newValue'}