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

export default function ScheduleStudentPage() {
  const [enrollments, setEnrollments] = useState<Enrollment[]>(() => {
    const storedEnrollments = localStorage.getItem("enrollments");
    return storedEnrollments ? JSON.parse(storedEnrollments) : [];
  });
  const [professorAssignments, setProfessorAssignments] = useState<ProfessorAssignment[]>(() => {
    const storedAssignments = localStorage.getItem("professorAssignments");
    return storedAssignments ? JSON.parse(storedAssignments) : [];
  });
  const [students, setStudents] = useState<string[]>(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      return users.filter((user: any) => user.role === "student").map((user: any) => user.name);
    }
    return [];
  });
  const [studentName, setStudentName] = useState<string | undefined>(undefined);

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
      setStudents(users.filter((user: any) => user.role === "student").map((user: any) => user.name));
    }
  }, []);

  const getStudentSchedule = () => {
    if (!studentName) return [];

    const enrolledSubjects = enrollments.filter(enrollment => enrollment.studentName === studentName).map(enrollment => enrollment.subjectName);

    const schedule = professorAssignments.filter(assignment => enrolledSubjects.includes(assignment.subjectName)).map(assignment => ({
      subjectName: assignment.subjectName,
      professorName: assignment.professorName,
    }));

    return schedule;
  };

  const studentSchedule = getStudentSchedule();

  return (
    <div className="p-4">
      <Card className="rounded-lg shadow-md">
        <CardHeader>
          <CardTitle>Cronograma de Estudiante</CardTitle>
          <CardDescription>
            Visualiza el horario de clases por estudiante.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div>
              <Label htmlFor="studentName">Nombre del Estudiante</Label>
              <Select onValueChange={(value) => setStudentName(value)}>
                <SelectTrigger id="studentName">
                  <SelectValue placeholder="Seleccionar estudiante" />
                </SelectTrigger>
                <SelectContent>
                  {students.map((student) => (
                    <SelectItem key={student} value={student}>
                      {student}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {studentName && (
                <Card className="rounded-lg shadow-md">
                  <CardHeader>
                    <CardTitle>Horario de {studentName}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {studentSchedule.length > 0 ? (
                      <ul>
                        {studentSchedule.map((item, index) => (
                          <li key={index} className="mb-2">
                            <strong>Asignatura:</strong> {item.subjectName}, <strong>Profesor:</strong> {item.professorName}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No hay clases asignadas a este estudiante.</p>
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

