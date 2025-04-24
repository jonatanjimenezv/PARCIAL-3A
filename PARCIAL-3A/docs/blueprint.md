# **App Name**: Educando

## Core Features:

- Configuración de Microservicios: Configurar 3 microservicios de Spring Boot localmente dentro de IntelliJ: users-service (gestión de estudiantes y profesores), subjects-service (operaciones CRUD para asignaturas) y enrollments-service (inscripción de estudiantes en asignaturas).
- Comunicación entre Microservicios: Establecer la comunicación entre microservicios localmente dentro de IntelliJ, utilizando Feign Client dentro del enrollments-service para consumir datos de users-service y subjects-service.
- Descubrimiento de Servicios: Configurar un servidor Eureka local para el descubrimiento de servicios dentro de IntelliJ, y registrar todos los microservicios con él.
- Puntos Finales de Monitorización: Añadir Spring Boot Actuator a cada microservicio para exponer los puntos finales de salud y métricas (por ejemplo, /actuator/health), accesibles dentro de IntelliJ.
- Dockerización y Orquestación: Dockerizar cada microservicio creando un Dockerfile para cada uno. Utilizar docker-compose.yml para orquestar y ejecutar todo el entorno local dentro de IntelliJ.

## Style Guidelines:

- Color primario: Un verde azulado (#4DB6AC) para representar la estabilidad y el aprendizaje.
- Color secundario: Un gris claro (#EEEEEE) para los fondos para asegurar la legibilidad.
- Color de acento: Usar un color ámbar vibrante (#FFC107) para los elementos interactivos y los resaltados.
- Diseños limpios y estructurados para facilitar la navegación entre las funcionalidades de los microservicios.
- Iconos consistentes y fácilmente reconocibles para las diferentes entidades (usuarios, asignaturas, inscripciones).

## Original User Request:
Objetivo del Parcial:
Desarrollar una continuación del proyecto presentado en el archivo base, aplicando los conocimientos sobre microservicios con Spring Boot y Spring Cloud, en un entorno distribuido, guiado paso a paso por cada tema visto en clase. El objetivo es transformar parte del sistema en microservicios independientes, documentados y desplegados.
1. Configuración del Proyecto General
Paso a paso:
1. Crea una organización o repositorio en GitHub con el nombre: sistema-educativo-microservicios-nombre
2. Crea un archivo README.md con una descripción del sistema y el enfoque distribuido.
3. Dentro del repositorio, crea carpetas por microservicio: usuarios-servicio, asignaturas-servicio, entre otros.
Complementación de los estudiantes: Incluir datos personales, estructura del repositorio y visión general del sistema.
2. Desarrollo de Microservicios con Spring Boot
Paso a paso:
1. Crear al menos 3 microservicios:
o usuarios-servicio: gestión de estudiantes y docentes.
o asignaturas-servicio: CRUD de materias.
o matriculas-servicio: registro de estudiantes en materias.
2. Cada microservicio debe tener su propio application.properties y base de datos.
Complementación del estudiante: Implementar controladores, servicios y entidades.
3. Comunicación entre Microservicios
Paso a paso:
1. Usar Feign Client en el matriculas-servicio para consumir datos de usuarios-servicio y asignaturas-servicio.
2. Simular una matrícula completa.
Complementación del estudiante: Crear cliente Feign y probar integración.
4. Gestión de Configuración y Descubrimiento de Servicios
Paso a paso:
1. Implementar un config-server y un repositorio de configuración en GitHub.
2. Crear un eureka-server y registrar todos los microservicios.
Complementación del estudiante: Documentar cómo se conectan y su configuración.
5. Seguridad en Microservicios (JWT)
Paso a paso:
1. Implementar autenticación en el usuarios-servicio.
2. Proteger los endpoints con Spring Security y JWT.
Complementación del estudiante: Generar y validar tokens, definir roles.
6. Monitorización y Registro
Paso a paso:
1. Agregar Spring Boot Actuator a los microservicios.
2. Exponer endpoints de salud y métricas (/actuator/health).
Complementación del estudiante: Crear dashboard o consola de monitoreo.
7. Pruebas de Microservicios
Paso a paso:
1. Crear pruebas unitarias y de integración con Spring Boot Test y Postman.
2. Validar comportamiento de controladores y servicios.
Complementación del estudiante: Incluir mínimo 1 test por microservicio.
8. Despliegue y Orquestación
Paso a paso:
1. Crear un archivo Dockerfile por microservicio.
2. Crear un docker-compose.yml para levantar todo el entorno.
Complementación del estudiante: Ejecutar localmente y registrar evidencia en el README.
9. Entrega Final
El estudiante debe entregar:
	 Repositorio en GitHub con el código completo.
	 Documento PDF con capturas de pantalla, explicaciones breves de cada paso, arquitectura general y aprendizajes.
	 Enlace público del repositorio: https://github.com/...

En este caso lo realizaremos 100% local omitiremos todo Github
 el api key no lo requerimos

todo el proyecto debe funcionar en Java y ser ejecutado desde Intellij

todo el texto de cara el usuario será en español
  