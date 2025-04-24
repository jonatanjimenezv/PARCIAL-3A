"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface Enrollment {
  id: string;
  studentName: string;
  subjectName: string;
}

export default function EnrollmentsPage() {
  const [enrollments, setEnrollments] = useState<Enrollment[]>(() => {
    const storedEnrollments = localStorage.getItem("enrollments");
    return storedEnrollments ? JSON.parse(storedEnrollments) : [];
  });
  const [selectedStudent, setSelectedStudent] = useState<string | undefined>(undefined);
  const [enrolledSubjects, setEnrolledSubjects] = useState<Enrollment[]>([]);
  const [students, setStudents] = useState<string[]>(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      return users.filter((user: any) => user.role === "student").map((user: any) => user.name);
    }
    return [];
  });
  const [subjects, setSubjects] = useState<string[]>(() => {
    const storedSubjects = localStorage.getItem("subjects");
    if (storedSubjects) {
      const subjects = JSON.parse(storedSubjects);
      return subjects.map((subject: any) => subject.name);
    }
    return [];
  });
  const [studentName, setStudentName] = useState<string | undefined>(undefined);
  const [subjectName, setSubjectName] = useState<string | undefined>(undefined);
  const { toast } = useToast();

  useEffect(() => {
    localStorage.setItem("enrollments", JSON.stringify(enrollments));
  }, [enrollments]);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      setStudents(users.filter((user: any) => user.role === "student").map((user: any) => user.name));
    }

    const storedSubjects = localStorage.getItem("subjects");
    if (storedSubjects) {
      const subjects = JSON.parse(storedSubjects);
      setSubjects(subjects.map((subject: any) => subject.name));
    }
  }, []);

  const createEnrollment = () => {
    if (!studentName || !subjectName) {
      toast({
        title: "Error",
        description: "Por favor, complete todos los campos.",
        variant: "destructive",
      });
      return;
    }

    const newEnrollment: Enrollment = {
      id: String(Date.now()),
      studentName,
      subjectName,
    };
    setEnrollments([...enrollments, newEnrollment]);
    setStudentName(undefined);
    setSubjectName(undefined);

    toast({
      title: "Matrícula creada",
      description: "La matrícula ha sido creada exitosamente.",
    });
  };

  const handleStudentSelect = (student: string) => {
    setSelectedStudent(student);
    setEnrolledSubjects(enrollments.filter((enrollment) => enrollment.studentName === student));
  };

  return (
    <div className="p-4">
      <Card className="rounded-lg shadow-md">
        <CardHeader>
          <CardTitle>Matrículas</CardTitle>
          <CardDescription>
            Inscribe a los estudiantes en las asignaturas correspondientes.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>
            <div>
              <Label htmlFor="subjectName">Nombre de la Asignatura</Label>
              <Select onValueChange={(value) => setSubjectName(value)}>
                <SelectTrigger id="subjectName">
                  <SelectValue placeholder="Seleccionar asignatura" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject}>
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Button onClick={createEnrollment}>Crear Matrícula</Button>
            </div>
          </div>

          <div>
            <Label htmlFor="studentSelect">Seleccionar Estudiante</Label>
            <Select onValueChange={handleStudentSelect}>
              <SelectTrigger id="studentSelect">
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
          </div>

          <Card className="rounded-lg shadow-md">
            <CardHeader>
              <CardTitle>Materias Matriculadas</CardTitle>
              {selectedStudent && (
                <CardDescription>
                  Materias matriculadas por {selectedStudent}.
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <ScrollArea className="rounded-md border">
                <Table>
                  <TableCaption>Lista de materias matriculadas.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nombre del Estudiante</TableHead>
                      <TableHead>Nombre de la Asignatura</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {enrolledSubjects.map((enrollment) => (
                      <TableRow key={enrollment.id}>
                        <TableCell>{enrollment.studentName}</TableCell>
                        <TableCell>{enrollment.subjectName}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ScrollArea>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
