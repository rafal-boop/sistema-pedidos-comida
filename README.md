# Sistema de Pedidos de Comida

Proyecto inicial del Laboratorio 1: Introducción al entorno de desarrollo y Git.

## Descripción

Prototipo web para registrar pedidos de comida local de una startup en Cusco. La
interfaz permite seleccionar un plato, indicar la cantidad, agregarlo al pedido y
consultar el total acumulado.

## Requisitos

- Visual Studio Code
- Git
- Un navegador web moderno

## Ejecución

1. Clonar el repositorio:

	```bash
	git clone https://github.com/rafal-boop/sistema-pedidos-comida.git
	cd sistema-pedidos-comida
	```

2. Abrir `index.html` directamente en el navegador o iniciar un servidor local:

	```bash
	python -m http.server 8000
	```

3. Visitar `http://localhost:8000`.

## Estructura

```text
.
├── index.html   # Interfaz del sistema
├── styles.css   # Estilos y diseño adaptable
├── app.js       # Registro de productos y cálculo del pedido
└── README.md    # Documentación del proyecto
```

## Flujo de trabajo con Git

La identidad utilizada para este repositorio es:

```bash
git config --global user.name "Andree"
git config --global user.email "204792@unsaac.edu.pe"
```

Comandos principales aplicados en el laboratorio:

```bash
git init
git add .
git commit -m "Primer commit"
git remote add origin https://github.com/rafal-boop/sistema-pedidos-comida.git
git branch -M main
git push -u origin main
```

Para registrar cambios posteriores:

```bash
git status
git add .
git commit -m "Describe el cambio realizado"
git push origin main
```

## Evidencias

- Repositorio remoto: https://github.com/rafal-boop/sistema-pedidos-comida
- Rama de trabajo: `main`
- Primer commit: `Primer commit`
- El historial completo se puede consultar con `git log --oneline`.

## Resultados de aprendizaje

- Se comprende el control de versiones y el seguimiento de cambios.
- Se configura un entorno con VS Code, Git y GitHub.
- Se administra un repositorio local conectado a un repositorio remoto.
- Se documenta un proyecto reproducible desde su clonación hasta su ejecución.

## Reflexión

Git es crítico en proyectos colaborativos porque permite que cada integrante
trabaje sobre una historia común, revise cambios y recupere versiones estables.
También facilita identificar quién modificó un archivo y por qué se hizo cada
cambio.

Entre los problemas que evita están la pérdida accidental de código, el
intercambio de archivos duplicados, la dificultad para comparar versiones y la
imposibilidad de volver a un estado anterior cuando una modificación introduce
un error.

## Próximos pasos

- Persistir los pedidos en una base de datos.
- Agregar autenticación para clientes y administradores.
- Integrar estados del pedido: recibido, preparando y entregado.
- Incorporar pruebas automatizadas y revisión mediante pull requests.