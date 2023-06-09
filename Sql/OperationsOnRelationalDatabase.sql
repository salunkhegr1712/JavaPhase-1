
--first add some data in teacher student and course 
use grs;

--our student is already fi
select * from student;

select * from teacher;
--now add data inside teacher

insert into teacher (id,firstname,lastname,dateJoined) values 
(1,'harry','yt','2020-01-17'),
(2,'abdul','bari','2019-04-17'),
(3,'angela','yu','2018-08-17'),
(4,'jully','jagadale','2022-08-17')

select * from teacher;

--now add data to course
insert into Course (title,noOfCredits,courseCode) values 
('java',3,'java1234'),
('html',2,'html1234'),
('php',2,'php12345'),
('python',3,'python12'),
('react',3,'react123'),
('cpp',3,'cpp12345')

select * from Course;


-- lets try to add values in enrollment
insert into enrollment (id,teacherId,studentId,courseId) values
(,1,111903033,1)

select * from enrollment

--query on relational data 
select * from teacher,enrollment, course
where teacher.id= enrollment.teacherId and enrollment.courseId=Course.courseId
