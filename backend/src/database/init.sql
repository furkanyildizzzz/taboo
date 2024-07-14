
/* ============================================================================================== */
/* INHERITED TABLE: __creation_log                                                                */
/* ============================================================================================== */
DROP TABLE IF EXISTS public.__creation_log;

CREATE TABLE public.__creation_log(
	created_by INTEGER NOT NULL DEFAULT 1,
	created_date TIMESTAMP NOT NULL DEFAULT TIMEZONE('UTC' ::TEXT, NOW())
)
WITH (OIDS=FALSE);

COMMENT ON TABLE public.__creation_log IS 'This TABLE is for inheritance use only. It is NOT intended to contain its own data.';

ALTER TABLE public.__creation_log OWNER TO postgres;

/* ============================================================================================== */
/* INHERITED TABLE: __modification_log                                                            */
/* ============================================================================================== */
DROP TABLE IF EXISTS public.__modification_log;

CREATE TABLE public.__modification_log(
	modified_by INTEGER,
	modified_date TIMESTAMP
) WITH (OIDS=FALSE);

COMMENT ON TABLE public.__modification_log IS 'This TABLE is for inheritance use only. It is NOT intended to contain its own data.';

ALTER TABLE public.__modification_log OWNER TO postgres;

/* ============================================================================================== */
/* INHERITED TABLE: __deletion_log                                                                */
/* ============================================================================================== */
DROP TABLE IF EXISTS public.__deletion_log;

CREATE TABLE public.__deletion_log(
	deleted BOOLEAN NOT NULL DEFAULT FALSE,
	deleted_by INTEGER,
	deleted_date TIMESTAMP
) WITH (OIDS=FALSE);

COMMENT ON TABLE public.__deletion_log IS 'This TABLE is for inheritance use only. It is NOT intended to contain its own data.';

ALTER TABLE public.__deletion_log OWNER TO postgres;

/*==============================================================*/
/* TABLE: users                                                 */
/*==============================================================*/

CREATE TABLE public.users(
  id SERIAL NOT NULL,
  username VARCHAR NOT NULL,
  salt VARCHAR NOT NULL,
  [password] VARCHAR NOT NULL,
	CONSTRAINT pk_users PRIMARY KEY (id),
	CONSTRAINT ak_user_username UNIQUE (username)
)
INHERITS (public.__creation_log, public.__modification_log, public.__deletion_log)
WITH (OIDS=FALSE);

ALTER TABLE public.users OWNER TO postgres;

insert into public.users (created_by, id, username, salt) 
  values (1, 1, 'admin', 'default', '1234');

	
/*==============================================================*/
/* TABLE: roles                                                 */
/*==============================================================*/

CREATE TABLE public.roles(
	id integer NOT NULL DEFAULT nextval('roles_id_seq'::regclass),
	[name] VARCHAR NOT NULL,
	label VARCHAR NOT NULL,
	[description] VARCHAR NOT NULL,
	active boolean NOT NULL DEFAULT true,
	CONSTRAINT pk_roles PRIMARY KEY (id),
	CONSTRAINT ak_roles UNIQUE ([name]) 
	)
INHERITS (public.__creation_log, public.__modification_log, public.__deletion_log)
WITH (OIDS=FALSE);

insert into public.roles (created_by, id, [name], label, [description], active) 
  values (1, 1, 'admin', 'Admin', 'admin of the app', 1);

/*==============================================================*/
/* TABLE: user_roles                                                 */
/*==============================================================*/

CREATE TABLE public.user_roles(
	id integer NOT NULL DEFAULT nextval('user_roles_id_seq'::regclass),
	id_user integer NOT NULL,
	id_role integer NOT NULL,
	CONSTRAINT pk_user_roles_id PRIMARY KEY (id),
	CONSTRAINT uk_user_roles UNIQUE (id_user),
	CONSTRAINT uk_user_roles UNIQUE (id_user),
	CONSTRAINT uk_user_roles UNIQUE (id_role),
	CONSTRAINT uk_user_roles UNIQUE (id_role),
	CONSTRAINT fk_user_role_user_pk FOREIGN KEY (id_user) REFERENCES public.users (id),
	CONSTRAINT fk_user_role_role_pk FOREIGN KEY (id_role) REFERENCES public.roles (id) 
	)
    INHERITS (public.__creation_log, public.__modification_log, public.__deletion_log)
WITH (OIDS=FALSE);

insert into public.roles (created_by, id_user, id_user) 
  values (1, 1, 1);

/*==============================================================*/
/* TABLE: games                                                 */
/*==============================================================*/

CREATE TABLE public.games(
  id SERIAL NOT NULL,
  gamecode VARCHAR NOT NULL,
  timer integer NOT NULL,
  round integer NOT NULL,
  team integer NOT NULL,
	CONSTRAINT pk_games PRIMARY KEY (id),
	CONSTRAINT ak_game_gamecode UNIQUE (gamecode)
)
INHERITS (public.__creation_log, public.__modification_log, public.__deletion_log)
WITH (OIDS=FALSE);

ALTER TABLE public.users OWNER TO postgres;