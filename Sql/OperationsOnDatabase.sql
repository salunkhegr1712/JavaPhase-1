-- first select database to use 
use grs;

select * from student;

-- change name of column and print it 
select firstname as "student Fname", lastname as "student Lname" from student;

-- showing few top entries
select top(5) * from student;

-- we can do filtering using where and do sorting with order by
select * from student
where lastname='gaikwad'
order by branch;


--also we can pass wildcard queries using like keyword

select * from student
where lastname like '%a%'
-- this means if surname has a it will return that entry

-- let return name if firstname or lastname contains g 
select * from student
where lastname like '%g%' or firstname like '%g%'

--lets get all student whose name start with a

select * from student
where firstname like 'a%'

--lets try to combine firstname and lastname 
select firstname +' ' +lastname as 'student name',DOB,branch,passingyear from student;

--lets find student with dob > 2002
select firstname +' ' +lastname as 'student name',DOB from student
where DOB > '2002-01-01'

--lets update field 

--this will update all entries 
--we changed all values
select * from student
update student set passingyear =2021;

--also you can apply where with update
update student set branch='coep-comp'
where branch='comp';

--also print it
select * from student;


--now let us delete some records

--this will delete all student data whose lastname is karle 
delete from student
where lastname='karle'

select * from student;