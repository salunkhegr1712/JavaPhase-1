-- here inside this code we are going to learn about 
-- sql table 

-- first select default database
Use grs;

-- now lets create a table
create table student(
	-- primary key used as we want to make this field PK
	-- not null used as this field is mandatory

	-- int datatype handle number input 
	--  for input you cant set character limit : size
	id int not null identity(1,1),
	-- mis willl be our primary key
	mis int primary key not null,
	
	-- we use varchar(size) to grab string of size : size
	firstname varchar(50) not null,
	lastname varchar(50)not null,
	
	--lets also add a date feild
	DOB date not null,
	branch varchar(50) not null,
	passingyear int not null,
	
);

-- lets execute above code 

--let us create another table 
create table Course(
	courseId int primary key not null identity(1,1),
	title varchar(50) not null,
	noOfCredits int,
	courseCode varchar(8) not null,
);

--such like that it is very easy to create new table 
--select * from Course;
--select * from student;