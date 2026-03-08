# SOLID Principles & UML Diagrams 📐

**Universidad de La Laguna** 
**Escuela Superior de Ingeniería y Tecnología** 
**Grado en Ingeniería Informática** **Asignatura:** 
Programación de Aplicaciones Interactivas (PAI)  

**Authors:** 
* Álvaro Pérez Ramos  
* Pablo García de los Reyes  
* Adrián Hernández Herrera  

---

## 📖 About This Project

This repository contains the practical code examples, theoretical explanations, and architectural designs used for our class presentation on the **SOLID Principles** of Object-Oriented Design. 

The main focus of our project is to demonstrate how to write clean, maintainable, and scalable code by avoiding bad practices (like "Shotgun Surgery" or "Hardcoded Dependencies"). 


While our core presentation dives deep into specific patterns, this repository covers the theoretical foundation of all five principles:

1. **(S) Single Responsibility Principle (SRP):** A class should have one, and only one, reason to change. It should encapsulate a single, well-defined responsibility.
2. **(O) Open/Closed Principle (OCP):** Software entities (classes, modules, functions) should be open for extension but closed for modification.
3. **(L) Liskov Substitution Principle (LSP):** Objects of a superclass shall be replaceable with objects of its subclasses without breaking the application.
4. **(I) Interface Segregation Principle (ISP):** Clients should not be forced to depend upon interfaces that they do not use. Large interfaces should be split into smaller, more specific ones.
5. **(D) Dependency Inversion Principle (DIP):** High-level modules should not depend on low-level modules. Both should depend on abstractions (interfaces). Abstractions should not depend on details.
6. **UML Diagrams:** A rapid explanation of how to use Mermaid, design UML diagrams and different ways to relate a class to another.

## 🗂️ Contents

* **Theoretical Concepts:** Explanations of core concepts such as Coupling, Dependency Injection, Polymorphism, and common code smells. All adapted to SOLID principles and the context of TypeScript.
* **Code Examples (`Bad` vs. `Good`):** TypeScript files comparing bad implementations (violating the principles) side-by-side with their refactored, fully compliant versions.
* **UML Diagrams:** Visual representations mapping our code architecture after applying the SOLID principles to clearly show the structural improvements.
