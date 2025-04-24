"use client";

import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function HelpPage() {
  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl rounded-lg shadow-md">
        <CardHeader>
          <CardTitle>Bienvenido a Educando</CardTitle>
          <CardDescription>
            Descubre cómo funciona nuestra plataforma educativa.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-lg font-semibold">Navegación</h2>
            <p>
              Utiliza el menú lateral para acceder a las diferentes secciones
              de la plataforma:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Inicio:</strong> Panel principal con una visión general.
              </li>
              <li>
                <strong>Usuarios:</strong> Gestión de estudiantes y docentes.
              </li>
              <li>
                <strong>Asignaturas:</strong> Administración de materias.
              </li>
              <li>
                <strong>Matrículas:</strong> Registro de estudiantes en materias.
              </li>
              <li>
                <strong>Asignar Profesor:</strong> Asigna profesores a las asignaturas.
              </li>
              <li>
                <strong>Cronograma Profesor:</strong> Visualiza el horario de clases por profesor.
              </li>
              <li>
                <strong>Cronograma Estudiante:</strong> Visualiza el horario de clases por estudiante.
              </li>
              <li>
                <strong>Ayuda:</strong> Explicación del funcionamiento de la plataforma.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Gestión de Usuarios</h2>
            <p>
              En la sección de Usuarios, podrás añadir, editar y eliminar
              estudiantes y docentes. Cada usuario tendrá su propia información
              personal y credenciales de acceso.
            </p>
            <p>
              Para crear un nuevo usuario, introduce su nombre, email y
              selecciona su rol (estudiante o profesor).
            </p>
            <p>
              Puedes filtrar la lista de usuarios por rol (todos, estudiante o profesor) utilizando los botones en la parte superior de la lista.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">
              Administración de Asignaturas
            </h2>
            <p>
              La sección de Asignaturas te permite crear, modificar y eliminar
              materias. Cada asignatura puede tener un nombre, descripción y
              otros detalles relevantes.
            </p>
            <p>
              Para crear una nueva asignatura, introduce su nombre y una breve
              descripción.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Registro de Matrículas</h2>
            <p>
              En Matrículas, podrás registrar a los estudiantes en las
              asignaturas correspondientes. Simplemente selecciona al estudiante
              y la materia para completar el proceso de inscripción.
            </p>
            <p>
              Para crear una nueva matrícula, selecciona el nombre del
              estudiante y la asignatura a la que se inscribe.
            </p>
            <p>
              También puedes ver las materias matriculadas por cada estudiante
              seleccionando su nombre en el menú desplegable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Asignar Profesor</h2>
            <p>
              En esta sección, puedes asignar un profesor a una asignatura
              específica.
            </p>
            <p>
              Selecciona el nombre del profesor y la asignatura correspondiente
              para realizar la asignación.
            </p>
            <p>
              Las asignaciones creadas se mostrarán debajo de los selectores.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Cronograma del Profesor</h2>
            <p>
              En esta sección, puedes visualizar el horario de un profesor
              seleccionado. Verás la lista de estudiantes que toman clases con
              ese profesor y las asignaturas correspondientes.
            </p>
            <p>
              Para ver el horario, selecciona el nombre del profesor en el menú
              desplegable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Cronograma del Estudiante</h2>
            <p>
              En esta sección, puedes visualizar el horario de un estudiante
              seleccionado. Verás las asignaturas en las que está inscrito y el
              nombre del profesor que imparte cada asignatura.
            </p>
            <p>
              Para ver el horario, selecciona el nombre del estudiante en el
              menú desplegable.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}

