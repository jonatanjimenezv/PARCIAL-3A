"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ProfessorAssignment {
  id: string;
  professorName: string;
  subjectName: string;
}

export default function AssignProfessorPage() {
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
  const [subjects, setSubjects] = useState<string[]>(() => {
    const storedSubjects = localStorage.getItem("subjects");
    if (storedSubjects) {
      const subjects = JSON.parse(storedSubjects);
      return subjects.map((subject: any) => subject.name);
    }
    return [];
  });
  const [professorName, setProfessorName] = useState<string | undefined>(undefined);
  const [subjectName, setSubjectName] = useState<string | undefined>(undefined);
  const { toast } = useToast();

  useEffect(() => {
    localStorage.setItem("professorAssignments", JSON.stringify(professorAssignments));
  }, [professorAssignments]);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      setProfessors(users.filter((user: any) => user.role === "professor").map((user: any) => user.name));
    }

    const storedSubjects = localStorage.getItem("subjects");
    if (storedSubjects) {
      const subjects = JSON.parse(storedSubjects);
      setSubjects(subjects.map((subject: any) => subject.name));
    }
  }, []);

  const createAssignment = () => {
    if (!professorName || !subjectName) {
      toast({
        title: "Error",
        description: "Por favor, complete todos los campos.",
        variant: "destructive",
      });
      return;
    }

    const newAssignment: ProfessorAssignment = {
      id: String(Date.now()),
      professorName,
      subjectName,
    };
    setProfessorAssignments([...professorAssignments, newAssignment]);
    setProfessorName(undefined);
    setSubjectName(undefined);

    toast({
      title: "Asignación creada",
      description: "La asignación ha sido creada exitosamente.",
    });
  };

  return (
    <div className="p-4">
      <Card className="rounded-lg shadow-md">
        <CardHeader>
          <CardTitle>Asignar Profesor a Asignatura</CardTitle>
          <CardDescription>
            Asigna un profesor a una asignatura.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <Button onClick={createAssignment}>Crear Asignación</Button>
            </div>
          </div>

          <Card className="rounded-lg shadow-md">
            <CardHeader>
              <CardTitle>Asignaciones Creadas</CardTitle>
            </CardHeader>
            <CardContent>
              {professorAssignments.map((assignment) => (
                <div key={assignment.id} className="mb-2 p-2 border rounded-md">
                  <p>
                    <strong>Profesor:</strong> {assignment.professorName}
                  </p>
                  <p>
                    <strong>Asignatura:</strong> {assignment.subjectName}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
