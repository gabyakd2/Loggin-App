# Loggin App


## Sobre la app


La aplicación "Login App", es una aplicación en la cual te puedes loguear y une vez logueado, puedes visualizar información detallada, dependiendo del tipo de usuario. Esta app fue creada con las siguientes tecnologías:
### • HTML
### • Css
### • JavaScript
### • React Js
### • Redux Js
### • Firebase
### • Universal Cookies

Se usó HTML, CSS para la maquetación de la web. React y Redux se utilizaron para la creación de componentes, manejo de estados globales y locales, utilizando distintos tipos de hooks. Con lo que respecta a firebase, lo usé para poder crear la información de los usuarios y luego, a través del método axios, poder consumir dicha información. Y por último utilice Universal Cookies debido a que cuando recargaba la página con la información, esta info se perdía. Con esa libreria pude solucionar dicho problema.


## Problemas

Los problemas que tuve al comenzar la prueba fueron que los primeros endpoints enviados poseían el protocolo ssh, entonces para poder visualizar lo que contenían los endpoints descargue Ubuntu, pero al utilizarlo con los endpoints me daba un mensaje de error:
### --ssh -i "astroTest1.pem" ubuntu@ec2-34-207-110-46.compute-1.amazonaws.com:8000/users/
### Warning: Identity file astroTest1.pem not accessible: No such file or directory.--

### ssh: Could not resolve hostname ec2-34-207-110-46.compute-1.amazonaws.com:8000/users/: 
### Name or service not known
Traté de correr con la bandera p y me decia lo siguiente:
### ssh -p "astroTest1.pem" ubuntu@ec2-34-207-110-46.compute-1.amazonaws.com:8000/users/ 
### Bad port 'astroTest1.pem'

Luego de esto me pasaron otros endpoints pero ahora con protocolo HTTP, el problema fue que con el primer endpoint me decía que no se podía acceder a la web y con el segundo endpoint fue que si pude acceder, por una sola vez, a la web, pero luego de 20 o 30 minutos no me volvió a dejar entrar, por lo que cuando hacia el pedido con axios en mi app se rompía porque no llegaba la información solicitada. Fue como si se hubiesen caído los links. Informo que los probé con varios navegadores y no hubo cambios algunos. 

## Solución
Debido a los problemas comentados tuve que investigar y ver como poder hacer una api y me encontré con Firebase, cree un JSON y luego lo importé. Una vez hecho esto, Firebase me proporciono una URL con la información que establecí en mi JSON. De esta forma ya pude hacer los pedidos.

## Instrucciones
Para poder utilizar la aplicación se deben realizar los siguientes pasos:
### * Clonar el repositorio.
### * Pararse en la carpeta /loggin-app/ y ejecutar el comando 'npm install'.
### * Una vez aplicado el comando, se instalaran todas las dependencias.
### * Para poder loguearse, cree unos ejemplos para poder probar la aplicacion, que son los siguientes.
{
    email: roots@gmail.com
    password: españa2022
}
{
    email": gerente1@gmail.com
    password": mc1990
}
{
    email: gerente2@gmail.com
    password: nt1992
}
{
    email: cliente1@gmail.com
    password: jo1996
}
{
    email: cliente2@gmail.com
    password: sb1998
}
{
    email: cliente3@gmail.com
    password: sh1995
}

### A continuación dejo la URL del endpoint
https://accounts-cd8ab-default-rtdb.firebaseio.com/.json