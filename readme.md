![banner](https://github.com/diegocab27/proyecto1/assets/162330383/d1251c1c-916c-4b7c-b57b-cab573e44281)

# PROYECTO 6: Aplicación Backend con Autenticación

En este proyecto, el objetivo será construir una aplicación backend que administre la autenticación y autorización de los usuarios. En este se utilizaran herramientas como `JWT`para la autenticacion de usuarios y`MongoDB` para la base de datos


## Autor
- Diego Cabrera Carrasco  [@diegocab27](https://www.github.com/diegocab27)

## Planteamiento

Construir una aplicación backend que maneje la autenticación y autorización de usuarios. La aplicación incluira un modelo de usuario y un modelo de Producto.

## Instalacion 

Para instalar y ejecutar el proyecto en desarrollo realizamos los siguientes comandos

```
  npm install 
  npm run dev
```

## Despliegue

La aplicacion se desplego en https://render.com y se puede revisar a travez del siguiente enlace

- https://proyecto-6-s41a.onrender.com


## Puntos a destacar

- Uso de  `Node.js` y `Express` para el desarrollo del servidor.
- Uso de `MongoDB` a través de `mongoose` para el desarrollo de los modelos 
- Implementacion de los siguientes endpoints:

## Endpoints para Usuario:

| Descripción                                    | Método | Endpoint                            
| ---------------------------------------------- | ------ | --------------------------
| Registrar un usuario | POST    | /api/user/register                  |
| Iniciar sesión de usuario| POST   |  	/api/user/login                 |
| Verificar el token del usuario   | GET | /api/user/verifytoken                    |
| Actualizar información del usuario      | PUT   | /api/user/update |

## Endpoints para Producto:

| Descripción                                    | Método | Endpoint                            
| ---------------------------------------------- | ------ | --------------------------
| Crear un producto | POST    | 	/api/product/create                 |
| Leer todos los productos| GET  |  		/api/product/readall                |
| Actualizar un producto  | PUT | /api/product/update/:id                  |
| Eliminar un producto     | DELETE  | 	/api/product/delete/:id|

## Implementacion de la solucion:

- 1.Creacion de modelos user y product con mongoose

- 2.Creacion controladores para los usuarios con encriptacion JWT y controlador de productos con modelo CRUD.

- 3.Creacion Midleware para la autorizacion de acceso

- 4.Creacion Rutas para la operaciones de usuario y productos.

- 5.Creacion de archivo principal index.js 


## Verificacion de funcionamiento:

- 1.Creacion de usuarios
  
![image](https://github.com/user-attachments/assets/c5b587f0-0d2b-4c5d-961f-c2904172c2d0)

![image](https://github.com/user-attachments/assets/38a8a463-2042-4f48-a5f8-1530bf530f4d)


- 2.Inicio de sesion

![image](https://github.com/user-attachments/assets/b3130874-f131-470f-ac4c-e9b9f9e4625a)

- 3.verificacion de token
- 
![image](https://github.com/user-attachments/assets/8abd3db5-2815-457a-b663-90bdaad380e5)

- 4.Actualizacion de usuario

![image](https://github.com/user-attachments/assets/7d8f1122-6a4a-4db1-810f-ccb1b57aab94)

![image](https://github.com/user-attachments/assets/d4155589-ea4a-45f5-b332-bb83a92bd521)

- 5.Creacion de producto
- 
![image](https://github.com/user-attachments/assets/6fe1759f-5700-4165-9d62-fc626e38f48c)

![image](https://github.com/user-attachments/assets/6aa227ae-f62f-4487-8661-8b0b707925a4)

- 6.Mostrar todos los productos
  ![image](https://github.com/user-attachments/assets/d84c8984-bf3c-48cf-a489-63bad858d923)

- 7.Mostrar un producto

  ![image](https://github.com/user-attachments/assets/1d65488a-84c8-490a-bb8b-8491382a2e73)

  
- 8.Actualizar un producto

  ![image](https://github.com/user-attachments/assets/ade264a6-d3ab-4e3e-b321-f50625f901b6)


- 9.Eliminar un producto

  ![image](https://github.com/user-attachments/assets/8677613e-2eb5-4587-9c4a-53792d8c0941)

