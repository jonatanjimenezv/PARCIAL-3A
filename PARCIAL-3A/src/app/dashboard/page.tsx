"use client";

import Link from "next/link";
import {Home, Users, Book, ClipboardList, HelpCircle, UserPlus, Calendar} from "lucide-react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="p-4">
      <Card className="rounded-lg shadow-md">
        <CardHeader>
          <CardTitle>Panel de Administración</CardTitle>
          <CardDescription>
            Bienvenido al panel de administración de Educando.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/users">
              <Card className="rounded-lg shadow-md">
                <CardHeader>
                  <CardTitle>
                    <Users className="mr-2 h-4 w-4 inline-block" />
                    Usuarios
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Gestiona los usuarios de la plataforma.
                </CardContent>
              </Card>
            </Link>

            <Link href="/subjects">
              <Card className="rounded-lg shadow-md">
                <CardHeader>
                  <CardTitle>
                    <Book className="mr-2 h-4 w-4 inline-block" />
                    Asignaturas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Administra las asignaturas disponibles.
                </CardContent>
              </Card>
            </Link>

            <Link href="/enrollments">
              <Card className="rounded-lg shadow-md">
                <CardHeader>
                  <CardTitle>
                    <ClipboardList className="mr-2 h-4 w-4 inline-block" />
                    Matrículas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Gestiona las matrículas de los estudiantes.
                </CardContent>
              </Card>
            </Link>
            <Link href="/assign-professor">
              <Card className="rounded-lg shadow-md">
                <CardHeader>
                  <CardTitle>
                    <UserPlus className="mr-2 h-4 w-4 inline-block" />
                    Asignar Profesor
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Asigna profesores a las asignaturas.
                </CardContent>
              </Card>
            </Link>
             <Link href="/schedule-professor">
              <Card className="rounded-lg shadow-md">
                <CardHeader>
                  <CardTitle>
                    <Calendar className="mr-2 h-4 w-4 inline-block" />
                    Cronograma Profesor
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Visualiza el horario de los profesores.
                </CardContent>
              </Card>
            </Link>
             <Link href="/schedule-student">
              <Card className="rounded-lg shadow-md">
                <CardHeader>
                  <CardTitle>
                    <Calendar className="mr-2 h-4 w-4 inline-block" />
                    Cronograma Estudiante
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Visualiza el horario de los estudiantes.
                </CardContent>
              </Card>
            </Link>

            <Link href="/help">
              <Card className="rounded-lg shadow-md">
                <CardHeader>
                  <CardTitle>
                    <HelpCircle className="mr-2 h-4 w-4 inline-block" />
                    Ayuda
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Obtén información sobre cómo usar la plataforma.
                </CardContent>
              </Card>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

