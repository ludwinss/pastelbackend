-- Database generated with pgModeler (PostgreSQL Database Modeler).
-- pgModeler  version: 0.9.1
-- PostgreSQL version: 10.0
-- Project Site: pgmodeler.io
-- Model Author: ---


-- Database creation must be done outside a multicommand file.
-- These commands were put in this file only as a convenience.
-- -- object: pastel_db | type: DATABASE --
-- -- DROP DATABASE IF EXISTS pastel_db;
-- CREATE DATABASE pastel_db;
-- -- ddl-end --
-- 

-- object: public.person | type: TABLE --
-- DROP TABLE IF EXISTS public.person CASCADE;
CREATE TABLE public.person(
	id_person serial NOT NULL,
	fullname varchar(255),
	landline varchar(45),
	cellphone varchar(45),
	address varchar(255),
	password varchar(255),
	birthday date,
	image varchar(255),
	email varchar(255) NOT NULL,
	CONSTRAINT person_pk PRIMARY KEY (id_person)

);
-- ddl-end --
ALTER TABLE public.person OWNER TO postgres;
-- ddl-end --

-- object: public.administrator | type: TABLE --
-- DROP TABLE IF EXISTS public.administrator CASCADE;
CREATE TABLE public.administrator(
	id_administrator serial NOT NULL,
	id_person integer,
	CONSTRAINT administrator_pk PRIMARY KEY (id_administrator)

);
-- ddl-end --
ALTER TABLE public.administrator OWNER TO postgres;
-- ddl-end --

-- object: public.employee | type: TABLE --
-- DROP TABLE IF EXISTS public.employee CASCADE;
CREATE TABLE public.employee(
	id_employee serial NOT NULL,
	id_person integer,
	CONSTRAINT employee_pk PRIMARY KEY (id_employee)

);
-- ddl-end --
ALTER TABLE public.employee OWNER TO postgres;
-- ddl-end --

-- object: public.task | type: TABLE --
-- DROP TABLE IF EXISTS public.task CASCADE;
CREATE TABLE public.task(
	id_task serial NOT NULL,
	name varchar(255) NOT NULL,
	description varchar(255),
	priority varchar(11) NOT NULL,
	CONSTRAINT task_pk PRIMARY KEY (id_task)

);
-- ddl-end --
ALTER TABLE public.task OWNER TO postgres;
-- ddl-end --

-- object: public.add_task | type: TABLE --
-- DROP TABLE IF EXISTS public.add_task CASCADE;
CREATE TABLE public.add_task(
	id_task integer NOT NULL,
	id_administrator integer NOT NULL,
	date date NOT NULL,
	CONSTRAINT add_task_pk PRIMARY KEY (id_task,id_administrator)

);
-- ddl-end --

-- object: task_fk | type: CONSTRAINT --
-- ALTER TABLE public.add_task DROP CONSTRAINT IF EXISTS task_fk CASCADE;
ALTER TABLE public.add_task ADD CONSTRAINT task_fk FOREIGN KEY (id_task)
REFERENCES public.task (id_task) MATCH FULL
ON DELETE RESTRICT ON UPDATE CASCADE;
-- ddl-end --

-- object: administrator_fk | type: CONSTRAINT --
-- ALTER TABLE public.add_task DROP CONSTRAINT IF EXISTS administrator_fk CASCADE;
ALTER TABLE public.add_task ADD CONSTRAINT administrator_fk FOREIGN KEY (id_administrator)
REFERENCES public.administrator (id_administrator) MATCH FULL
ON DELETE RESTRICT ON UPDATE CASCADE;
-- ddl-end --

-- object: public.make | type: TABLE --
-- DROP TABLE IF EXISTS public.make CASCADE;
CREATE TABLE public.make(
	id_employee integer NOT NULL,
	id_task integer NOT NULL,
	date_start date NOT NULL,
	date_finish date,
	status varchar(11) NOT NULL,
	CONSTRAINT make_pk PRIMARY KEY (id_employee,id_task)

);
-- ddl-end --

-- object: employee_fk | type: CONSTRAINT --
-- ALTER TABLE public.make DROP CONSTRAINT IF EXISTS employee_fk CASCADE;
ALTER TABLE public.make ADD CONSTRAINT employee_fk FOREIGN KEY (id_employee)
REFERENCES public.employee (id_employee) MATCH FULL
ON DELETE RESTRICT ON UPDATE CASCADE;
-- ddl-end --

-- object: task_fk | type: CONSTRAINT --
-- ALTER TABLE public.make DROP CONSTRAINT IF EXISTS task_fk CASCADE;
ALTER TABLE public.make ADD CONSTRAINT task_fk FOREIGN KEY (id_task)
REFERENCES public.task (id_task) MATCH FULL
ON DELETE RESTRICT ON UPDATE CASCADE;
-- ddl-end --

-- object: person_fk | type: CONSTRAINT --
-- ALTER TABLE public.employee DROP CONSTRAINT IF EXISTS person_fk CASCADE;
ALTER TABLE public.employee ADD CONSTRAINT person_fk FOREIGN KEY (id_person)
REFERENCES public.person (id_person) MATCH FULL
ON DELETE SET NULL ON UPDATE CASCADE;
-- ddl-end --

-- object: person_fk | type: CONSTRAINT --
-- ALTER TABLE public.administrator DROP CONSTRAINT IF EXISTS person_fk CASCADE;
ALTER TABLE public.administrator ADD CONSTRAINT person_fk FOREIGN KEY (id_person)
REFERENCES public.person (id_person) MATCH FULL
ON DELETE SET NULL ON UPDATE CASCADE;
-- ddl-end --


