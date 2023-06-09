--here inside this code we are going to insert data inside the database table

-- first select the database

use grs;

-- lets get started
-- we can skip null element like yoa : year of admission
-- we can skip id as it is created by identity
-- in sql you have to use single quotes
-- date format is yyyy-mm-dd and provide in quotes
-- order in which you specify name is matter to place values
-- a table can have duplicate but primary key should be unique
insert into student (mis,firstname,lastname,DOB,branch,passingyear) values(111903007,'abhishek','gaikwad','2001-03-17','comp',2019);

-- lets insert multiple values at once
insert into student (mis,firstname,lastname,DOB,branch,passingyear) values
-- with values seperated by comma can enter multiple rows at once
(111903001,'adesh','gaikwad','2001-05-16','meta',2019),
(111903002,'abhishek','gore','2001-05-12','mech',2019),
(111903003,'swapnil','gaikwad','2001-05-04','elec',2019),
(111903004,'vaibhav','gaikwad','2000-11-12','civil',2019),
(111903009,'nikhil','more','2002-02-22','extc',2019);


--now lets see table 
select * from student
order by id;