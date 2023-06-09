use grs;
--creating teacher table 
create table teacher(
	id int not null primary key,
	firstname varchar(50) not null,
	lastname varchar(50) not null,
	dateJoined date not null,
);

--create a enrollment table

create table enrollment(
	id int not null primary key,
	teacherId  int not null,
	studentId int not null,
	courseId int not null,
);
