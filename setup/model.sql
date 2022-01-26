create database registration;

create table if not exists students (
    id serial primary key,
    firstname varchar(64) not null,
    lastname varchar(64) not null,
    email varchar(120) not null,
    password varchar(64) not null,
    status varchar(120) not null default 'student'
);