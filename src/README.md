<!-- 
Universidad de La Laguna
Escuela Superior de Ingeniería y Tecnología
Grado en Ingeniería Informática
Asignatura: Programación de Aplicaciones Interactivas (PAI)

@author Álvaro Pérez Ramos
@author Pablo García de los Reyes
@author Adrián Hernández Herrera
@since 26 FEB 2026
-->
# SOLID Principles in TypeScript

This repository contains a set of examples demonstrating the **SOLID design principles** using **TypeScript**.  
Each principle is illustrated with both **incorrect (bad)** and **correct (good)** implementations to show common design problems and their solutions.

The project was developed as part of the **Programación de Aplicaciones Interactivas (PAI)** course at the **Universidad de La Laguna**.

---

# Repository Structure
```
src/
├── single-responsibility-principle/
├── open-closed-principle/
├── liskov-substitution-principle/
├── interface-segregation-principle/
├── dependency-inversion-principle/
└── UML-SOLID/
```

Each directory contains example implementations that demonstrate the corresponding principle.

The **UML-SOLID** directory contains diagrams and explanations related to the UML representation of a biological system used as a case study.

---

# Overview of the SOLID Principles

SOLID is a set of five design principles that help developers create **maintainable, scalable and robust software systems**.

| Principle | Main Idea |
|-----------|-----------|
| **SRP** | A class should have only one reason to change |
| **OCP** | Software entities should be open for extension but closed for modification |
| **LSP** | Subtypes must be substitutable for their base types |
| **ISP** | Clients should not depend on interfaces they do not use |
| **DIP** | High-level modules should not depend on low-level modules |

---

# SOLID Summary

| Aspect | SRP | OCP | LSP | ISP | DIP |
|------|-----|-----|-----|-----|-----|
| **Problem** | Too many responsibilities | Modifying existing code | Incompatible subtypes | Oversized interfaces | Rigid dependencies |
| **Focus** | Inside a class | Behavior extension | Type hierarchy | Component contracts | Dependency direction |
| **Key Question** | Why does it change? | How can we extend without modifying? | Can it be safely substituted? | What is the client forced to depend on? | What should the system depend on? |
| **Goal** | High cohesion | Safe extensibility | Behavioral consistency | Low coupling | Architectural decoupling |
| **Typical Symptom** | God Class | Large if/else or switch logic | Unexpected subtype behavior | Fat Interface | Strong coupling between modules |
| **Warning Sign** | Mixed logic | Frequent edits to base classes | Exceptions or incorrect overrides | Unused methods | Direct dependency on concrete classes |
| **Main Solution** | Separate responsibilities | Use abstraction and extension | Respect behavioral contracts | Split interfaces | Depend on abstractions |
| **Design Level** | Class / Module | Extensible design | Inheritance & polymorphism | Interfaces | System architecture |

---

# UML Case Study

The **UML-SOLID** directory contains a design example based on a **living beings system**.

The system models different types of organisms such as:

- Animals
- Plants
- Insects
- Arachnids

Animals are further divided into categories such as:

- Mammals
- Birds
- Reptiles
- Aquatic animals

This model is used to demonstrate how SOLID principles can be applied when designing a **hierarchical biological classification system**, ensuring proper abstraction, extensibility, and separation of responsibilities.

---

# Purpose of the Project

The goal of this project is to:

- Understand the **SOLID principles**
- Identify **design problems**
- Learn how to **refactor code using SOLID**
- Explore the relationship between **object-oriented design and UML modeling**

---