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

# UML representation of Living Beings taxonomy

This document presents the UML class diagrams used to model the architecture and biological domain of the project.

The diagrams represent the hierarchy of living beings implemented in TypeScript, including their behaviors, taxonomic structure, and ecological relationships.

The goal of these diagrams is to provide a clear visual representation of the system design and its relation to biological concepts such as species classification and ecosystem interactions.

## 1. Software architecture

This diagram shows the core architecture of the system.
It represents the main abstractions of the model, including:

- LivingBeing as the root abstraction
- Abstract base classes for animals and plants
- Concrete implementations representing specific species

Inheritance relationships illustrate how different species extend the base abstractions while maintaining a consistent interface.

![Software-architecture](UML/Software-architecture.png)

## 2. Behaviour interfaces

This diagram represents the behavioral interfaces implemented by different organisms.

Instead of defining a single large interface, the system follows the Interface Segregation Principle, defining smaller and more specific behavior interfaces

Examples include:

- Walking
- Flying
- Swimming
- Photosynthesis
- Environmental response

Species implement only the behaviors that are relevant to them, improving modularity and flexibility.

![Behaviour-interfaces](UML/Behaviour-interfaces.png)

## 3. Biological taxonomy

This diagram models the biological classification used in the project.

The hierarchy reflects the conceptual organization of living beings into major biological groups such as:

- Animals
- Plants
  
These classifications are used to organize species within the domain model while keeping the software architecture independent from strict biological constraints.

![Behaviour-taxonomy](UML/Biological-taxonomy.png)

## 4 Types Calsification

This diagram represents the classification data structures used in the TypeScript implementation.

Instead of classes, the system uses enumerations to represent possible classification values.

![Types-Calsification](UML/Types-Calsification.png)

## 5 Ecosystem relationships

These diagrams illustrate different types of relationships between organisms and ecosystems.

They include examples of:

- Multiplicity relationships between ecosystems and living beings
- Predator–prey interactions between species
- Social structures, where organisms interact with other individuals of the same species

These models help represent ecological dynamics within the system.

![Ecosystem-relationships](UML/Ecosystem-relationships.png)
![Animals-relationships](UML/Animals-relationships.png)
![Social-Animals](UML/Social-Animals.png)

## 6 Organism composition

These diagrams illustrate composition relationships within the biological model.

Composition represents strong whole–part relationships where components depend on the existence of the parent structure. Examples include:

- An organism composed of internal organs
- Ecosystems composed of different biological elements

This approach helps represent structural dependencies within the domain.

![Organism-composition](UML/Organism-composition.png)
![Ecosystem-composition](UML/Ecosystem-composition.png)

## 7 Ecological interactions

This diagram models interactions between different organisms within an ecosystem.

Examples of ecological interactions include:

- Pollination relationships between animals and plants
- Herbivory and feeding relationships
- Environmental interactions between species

These relationships extend the domain model beyond simple classification, allowing the system to represent biological interactions and ecosystem dynamics.

![Ecological-interactions](UML/Ecological-interactions.png)

## Whole UML

```mermaid
classDiagram

%% =====================
%% CORE INTERFACES
%% =====================

class LivingBeing {
 <<interface>>
 +id: string
 +scientificName: string
 +age: number
 +grow(): void
 +nourish(): void
 +reproduce(): void
 +isAlive(): boolean
}

%% =====================
%% BASE IMPLEMENTATION
%% =====================

class LivingBeingBase {
 <<abstract>>
 -alive: boolean
 +id: string
 +scientificName: string
 +age: number
 +grow(): void
 +isAlive(): boolean
 #die(): void
}

LivingBeing <|.. LivingBeingBase


%% =====================
%% KINGDOM BASE CLASSES
%% =====================

class AnimalBase {
 <<abstract>>
 -classification: AnimalClassification
 +move(): void
 +reactToStimulus(stimulus: string): void
 +nourish(): void
 +reproduce(): void
}

class PlantBase {
 <<abstract>>
 -classification: PlantClassification
 +photosynthesize(): void
 +nourish(): void
 +reproduce(): void
}

LivingBeingBase <|-- AnimalBase
LivingBeingBase <|-- PlantBase


%% =====================
%% SPECIES
%% =====================

class Dog {
 +walk(): void
 +reproduce(): void
}

class Parrot {
 +walk(): void
 +fly(): void
 +reproduce(): void
}

class Trout {
 +swim(): void
 +reproduce(): void
}

class OakTree {
 +photosynthesize(): void
 +respondToEnvironment(factor: string): void
 +reproduce(): void
}

AnimalBase <|-- Dog
AnimalBase <|-- Parrot
AnimalBase <|-- Trout

PlantBase <|-- OakTree


%% =====================
%% BEHAVIOUR INTERFACES
%% =====================

class Walkable {
 <<interface>>
 +walk(): void
}

class Flyable {
 <<interface>>
 +fly(): void
}

class Swimmable {
 <<interface>>
 +swim(): void
}

class Photosynthetic {
 <<interface>>
 +photosynthesize(): void
}

class TropismResponsive {
 <<interface>>
 +respondToEnvironment(factor: string): void
}

Dog ..|> Walkable
Parrot ..|> Walkable
Parrot ..|> Flyable
Trout ..|> Swimmable

OakTree ..|> Photosynthetic
OakTree ..|> TropismResponsive


%% =====================
%% CLASSIFICATION OBJECTS
%% =====================

class AnimalClassification {
 +kingdom: string
 +group: string
 +type: string
 +skeleton: SkeletonType
 +animalClass: AnimalClass
}

class PlantClassification {
 +kingdom: string
 +group: string
 +type: string
 +plantGroup: PlantGroup
 +producesFlowers: boolean
}

AnimalBase --> AnimalClassification
PlantBase --> PlantClassification


%% =====================
%% ENUM TYPES
%% =====================

class SkeletonType {
 <<enumeration>>
 vertebrate
 invertebrate
}

class AnimalClass {
 <<enumeration>>
 mammal
 bird
 fish
 reptile
 amphibian
 insect
 arachnid
}

class PlantGroup {
 <<enumeration>>
 angiosperm
 gymnosperm
 fern
 moss
 algae
}

AnimalClassification --> SkeletonType
AnimalClassification --> AnimalClass
PlantClassification --> PlantGroup


%% =====================
%% ECOSYSTEM MODEL
%% =====================

class Ecosystem {
 +name: string
}

Ecosystem "1" --> "0..*" LivingBeing : contains


%% =====================
%% SOCIAL RELATIONSHIP
%% =====================

Dog "1" --> "0..*" Dog : interactsWith


%% =====================
%% ORGAN COMPOSITION
%% =====================

class Organ

class Heart
class Brain

Organ <|-- Heart
Organ <|-- Brain

AnimalBase "1" *-- "1" Heart
AnimalBase "1" *-- "1" Brain


%% =====================
%% ECOLOGICAL INTERACTIONS
%% =====================

Parrot --> Trout : hunts
Dog --> Environment : interacts

class Environment
```