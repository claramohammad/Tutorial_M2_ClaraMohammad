CREATE TABLE INSTANCE.Entity ( 
 );

CREATE TABLE INSTANCE.Experiência ( 
	ID_Experiência       INTEGER NOT NULL    ,
	Descrição            TEXT(0)     ,
	Cargo                TEXT(0)     ,
	Duração              DATE     ,
	Nome_da_empresa      TEXT(0)     ,
	ID_Pessoa            INTEGER NOT NULL    ,
	CONSTRAINT pk_Experiência PRIMARY KEY ( ID_Experiência, ID_Pessoa )
 );

CREATE TABLE INSTANCE.Formação ( 
	ID_formação          INTEGER NOT NULL    ,
	Curso                TEXT(0)     ,
	Duração              DATE     ,
	Descrição            TEXT(0)     ,
	ID_Pessoa            INTEGER NOT NULL    ,
	CONSTRAINT pk_Formação PRIMARY KEY ( ID_formação, ID_Pessoa )
 );

CREATE TABLE INSTANCE.Habilidades ( 
	ID_Habilidades       INTEGER NOT NULL    ,
	Descrição            TEXT(0)     ,
	ID_Pessoa            INTEGER NOT NULL    ,
	CONSTRAINT pk_Habilidades PRIMARY KEY ( ID_Habilidades, ID_Pessoa )
 );

CREATE TABLE INSTANCE.Informações ( 
	ID_Informações       INTEGER NOT NULL    ,
	Email                TEXT(0)     ,
	Telefone             TEXT(0)     ,
	CPF                  INTEGER     ,
	Endereço             TEXT(0)     ,
	ID_Pessoa            INTEGER NOT NULL    ,
	CONSTRAINT pk_Informações PRIMARY KEY ( ID_Informações, ID_Pessoa )
 );

CREATE TABLE INSTANCE.Personalidade ( 
	ID_Personalidade     INTEGER NOT NULL    ,
	Descrição            TEXT(0)     ,
	ID_Pessoa            INTEGER NOT NULL    ,
	CONSTRAINT pk_Personalidade PRIMARY KEY ( ID_Personalidade, ID_Pessoa )
 );

CREATE TABLE INSTANCE.Pessoa ( 
	ID_Pessoa            INTEGER NOT NULL  PRIMARY KEY  ,
	Nome                 TEXT(0) NOT NULL    ,
	Foto                 TEXT(0)     ,
	Cargo                TEXT(0)     
 );

CREATE TABLE INSTANCE.Realizações ( 
	ID_Realizações       INTEGER NOT NULL    ,
	Duração              DATE     ,
	Projeto              TEXT(0)     ,
	Descrição            TEXT(0)     ,
	ID_Pessoa            INTEGER NOT NULL    ,
	CONSTRAINT pk_Realizações PRIMARY KEY ( ID_Realizações, ID_Pessoa )
 );