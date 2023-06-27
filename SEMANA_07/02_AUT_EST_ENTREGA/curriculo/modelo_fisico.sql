CREATE TABLE pessoa (
	id					INTEGER NOT NULL,
	nome				TEXT,
	ocupacao			TEXT,
	PRIMARY KEY('id' AUTOINCREMENT)
);

CREATE TABLE formacao (
	id_formacao			INTEGER NOT NULL,
	curso				TEXT,
	duracao				TEXT,
	descricao 			TEXT NOT NULL,
	id					INTEGER NOT NULL,
	PRIMARY KEY('id_formacao' AUTOINCREMENT),
	FOREIGN KEY( id ) REFERENCES pessoa( id )
);

CREATE TABLE informacoes (
	id_informacoes		INTEGER NOT NULL,
	email 				TEXT NOT NULL,
	telefone 			TEXT NOT NULL,
	cpf 				TEXT,
	endereco 			TEXT NOT NULL,
	id 					INTEGER NOT NULL,
	PRIMARY KEY('id_informacoes' AUTOINCREMENT),
	FOREIGN KEY( id ) REFERENCES pessoa( id )
);

CREATE TABLE experiencia (
	id_experiencia 		INTEGER NOT NULL,
	descricao 			TEXT NOT NULL,
	duracao 			TEXT,
	id 					INTEGER NOT NULL,
	PRIMARY KEY('id_experiencia' AUTOINCREMENT),
	FOREIGN KEY( id ) REFERENCES pessoa( id )
);


