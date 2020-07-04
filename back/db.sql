drop database unisons;
create database unisons;
use unisons;
create table users(
	email varchar(100) primary key,
    name varchar(100),
    country varchar(50),
    pwd varchar(50),
    privilege boolean default 0
);
create table videos(
video_id int auto_increment primary key,
title varchar(500),
upload_date varchar(50),
url varchar(500) 
);
create table likes(
like_id int auto_increment primary key,
email varchar(100),
video_id int,
foreign key (email) references users(email),
foreign key (video_id) references  videos(video_id) 
);