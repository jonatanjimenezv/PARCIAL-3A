# Sistema Educativo 

Este proyecto es una implementación de un sistema educativo basado en microservicios utilizando Spring Boot y Spring Cloud. El sistema está diseñado para gestionar usuarios, asignaturas y matrículas de manera independiente y distribuida.

## Estructura del Repositorio

- usuarios-servicio: Gestión de estudiantes y docentes.
- asignaturas-servicio: CRUD de materias.
- matriculas-servicio: Registro de estudiantes en materias.

## Despliegue

Para desplegar el sistema, ejecute el siguiente comando en la raíz del proyecto:

```bash
docker-compose up --build

