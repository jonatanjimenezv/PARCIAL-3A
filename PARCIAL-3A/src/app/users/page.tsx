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

interface User {
  id: string;
  name: string;
  email: string;
  role: "student" | "professor";
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>(() => {
    // Initialize users from local storage
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"student" | "professor">("student");
  const { toast } = useToast();
  const [filter, setFilter] = useState<"all" | "student" | "professor">("all");

  useEffect(() => {
    // Update local storage whenever users change
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const createUser = () => {
    if (!name || !email) {
      toast({
        title: "Error",
        description: "Por favor, complete todos los campos.",
        variant: "destructive",
      });
      return;
    }

    const newUser: User = {
      id: String(Date.now()),
      name,
      email,
      role,
    };
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
    setRole("student");

    toast({
      title: "Usuario creado",
      description: "El usuario ha sido creado exitosamente.",
    });
  };

  const roleToSpanish = (role: "student" | "professor"): string => {
    if (role === "student") {
      return "Estudiante";
    } else {
      return "Profesor";
    }
  };

  const filteredUsers = () => {
    if (filter === "all") {
      return users;
    } else {
      return users.filter((user) => user.role === filter);
    }
  };

  return (
    <div className="p-4">
      <Card className="rounded-lg shadow-md">
        <CardHeader>
          <CardTitle>Usuarios</CardTitle>
          <CardDescription>
            Gestiona los usuarios de la plataforma.
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
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="role">Rol</Label>
              <select
                id="role"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                value={role}
                onChange={(e) => setRole(e.target.value as "student" | "professor")}
              >
                <option value="student">Estudiante</option>
                <option value="professor">Profesor</option>
              </select>
            </div>
            <div>
              <Button onClick={createUser}>Crear Usuario</Button>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")}>
              Mostrar Todos
            </Button>
            <Button variant={filter === "student" ? "default" : "outline"} onClick={() => setFilter("student")}>
              Mostrar Estudiantes
            </Button>
            <Button variant={filter === "professor" ? "default" : "outline"} onClick={() => setFilter("professor")}>
              Mostrar Profesores
            </Button>
          </div>

          <Card className="rounded-lg shadow-md">
            <CardHeader>
              <CardTitle>Lista de Usuarios</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="rounded-md border">
                <Table>
                  <TableCaption>Lista de usuarios registrados en la plataforma.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nombre</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Rol</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers().map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{roleToSpanish(user.role)}</TableCell>
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
