Create database bd_login_register_s7v;

Use bd_login_register_s7v;

-- crear tabla usuarios
CREATE TABLE tb_usuario (
    idUsuario INT(11) AUTO_INCREMENT PRIMARY KEY,
    nombreCompleto VARCHAR(30) NOT NULL,
    correoElectronico VARCHAR(50) NOT NULL,
    password VARCHAR(15) NOT NULL UNIQUE
);

INSERT INTO tb_usuario (nombreCompleto, correoElectronico, password)
VALUES ('Juan Pérez', 'juan.perez@example.com', 'miPassword123');

SELECT * FROM tb_usuario;