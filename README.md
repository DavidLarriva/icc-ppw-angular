# Portafolio de Prácticas - Frameworks Web (Angular 21)

**Autor:** David Larriva  
**Carrera:** Ingeniería en Ciencias de la Computación  
**Institución:** Universidad Politécnica Salesiana  

---

## Práctica 04: Estilos y Layout con TailwindCSS
**Fecha:** Mayo 2026

### Diseños Personalizados con Tailwind (Extras)
A continuación se presentan 4 distribuciones de layout adicionales exploradas e implementadas utilizando la documentación oficial de TailwindCSS.

#### 1. Grid Asimétrico (Col-Span)
Se utilizó la propiedad `col-span-2` dentro de un contenedor `grid-cols-3` para permitir que ciertos elementos abarquen múltiples columnas, rompiendo la simetría tradicional.
![Grid Asimétrico](./docs/practica-04/extra1-grid-span.png)

#### 2. Flexbox: Columna Invertida (Reverse)
Mediante el uso de la clase `flex-col-reverse`, los elementos hijos se renderizan en el orden inverso al que aparecen en el DOM (ideal para chats).
![Flex Invertido](./docs/practica-04/extra2-flex-reverse.png)

#### 3. Grid: Flujo por Filas (Template Rows)
Se implementaron las clases `grid-rows-3` y `grid-flow-col` para obligar al grid a llenarse de arriba hacia abajo primero.
![Grid por Filas](./docs/practica-04/extra3-grid-rows.png)

#### 4. Flexbox: Alineación Espaciada y Centrada
Se combinaron las utilidades `items-center` y `justify-between`. Este layout es el estándar para barras de herramientas o tarjetas de usuario.
![Flex Between](./docs/practica-04/extra4-flex-between.png)

