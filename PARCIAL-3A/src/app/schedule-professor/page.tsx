"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface Enrollment {
  studentName: string;
  subjectName: string;
  professorName: string;
}

interface ProfessorAssignment {
  professorName: string;
  subjectName: string;
}

export default function ScheduleProfessorPage() {
  const [enrollments, setEnrollments] = useState<Enrollment[]>(() => {
    const storedEnrollments = localStorage.getItem("enrollments");
    return storedEnrollments ? JSON.parse(storedEnrollments) : [];
  });
  const [professorAssignments, setProfessorAssignments] = useState<ProfessorAssignment[]>(() => {
    const storedAssignments = localStorage.getItem("professorAssignments");
    return storedAssignments ? JSON.parse(storedAssignments) : [];
  });
  const [professors, setProfessors] = useState<string[]>(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      return users.filter((user: any) => user.role === "professor").map((user: any) => user.name);
    }
    return [];
  });
  const [professorName, setProfessorName] = useState<string | undefined>(undefined);

  useEffect(() => {
    const storedEnrollments = localStorage.getItem("enrollments");
    if (storedEnrollments) {
      setEnrollments(JSON.parse(storedEnrollments));
    }
    const storedAssignments = localStorage.getItem("professorAssignments");
    if (storedAssignments) {
      setProfessorAssignments(JSON.parse(storedAssignments));
    }
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      setProfessors(users.filter((user: any) => user.role === "professor").map((user: any) => user.name));
    }
  }, []);

  const getProfessorSchedule = () => {
    if (!professorName) return [];

    const subjectsTaught = professorAssignments.filter(assignment => assignment.professorName === professorName).map(assignment => assignment.subjectName);
    const enrolledStudents = enrollments.filter(enrollment => subjectsTaught.includes(enrollment.subjectName));

    return enrolledStudents.map(enrollment => ({
      studentName: enrollment.studentName,
      subjectName: enrollment.subjectName,
    }));
  };

  const professorSchedule = getProfessorSchedule();

  return (
    <div className="p-4">
      <Card className="rounded-lg shadow-md">
        <CardHeader>
          <CardTitle>Cronograma de Profesor</CardTitle>
          <CardDescription>
            Visualiza el horario de clases por profesor.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div>
              <Label htmlFor="professorName">Nombre del Profesor</Label>
              <Select onValueChange={(value) => setProfessorName(value)}>
                <SelectTrigger id="professorName">
                  <SelectValue placeholder="Seleccionar profesor" />
                </SelectTrigger>
                <SelectContent>
                  {professors.map((professor) => (
                    <SelectItem key={professor} value={professor}>
                      {professor}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {professorName && (
                <Card className="rounded-lg shadow-md">
                  <CardHeader>
                    <CardTitle>Estudiantes de {professorName}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {professorSchedule.length > 0 ? (
                      <ul>
                        {professorSchedule.map((item, index) => (
                          <li key={index} className="mb-2">
                            <strong>Estudiante:</strong> {item.studentName}, <strong>Asignatura:</strong> {item.subjectName}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No hay estudiantes asignados a este profesor.</p>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

