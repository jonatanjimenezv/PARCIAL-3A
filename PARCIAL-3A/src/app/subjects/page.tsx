"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";

interface Subject {
  id: string;
  name: string;
  description: string;
}

export default function SubjectsPage() {
  const [subjects, setSubjects] = useState<Subject[]>(() => {
    const storedSubjects = localStorage.getItem("subjects");
    return storedSubjects ? JSON.parse(storedSubjects) : [];
  });
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subjects));
  }, [subjects]);

  const createSubject = () => {
    if (!name || !description) {
      toast({
        title: "Error",
        description: "Por favor, complete todos los campos.",
        variant: "destructive",
      });
      return;
    }

    const newSubject: Subject = {
      id: String(Date.now()),
      name,
      description,
    };
    setSubjects([...subjects, newSubject]);
    setName("");
    setDescription("");

    toast({
      title: "Asignatura creada",
      description: "La asignatura ha sido creada exitosamente.",
    });
  };

  return (
    <div className="p-4">
      <Card className="rounded-lg shadow-md">
        <CardHeader>
          <CardTitle>Asignaturas</CardTitle>
          <CardDescription>
            Gestiona las asignaturas disponibles en la plataforma.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="description">Descripción</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <Button onClick={createSubject}>Crear Asignatura</Button>
            </div>
          </div>

          <Card className="rounded-lg shadow-md">
            <CardHeader>
              <CardTitle>Lista de Asignaturas</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="rounded-md border">
                <Table>
                  <TableCaption>Lista de asignaturas registradas en la plataforma.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nombre</TableHead>
                      <TableHead>Descripción</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subjects.map((subject) => (
                      <TableRow key={subject.id}>
                        <TableCell>{subject.name}</TableCell>
                        <TableCell>{subject.description}</TableCell>
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
