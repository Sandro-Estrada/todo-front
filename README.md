# TODO

Esté proyecto fue creado para generar la parte **frontend** para la prueba de **Addika**.

## Prerequisitos

Para correr esté proyecto es necesario tener instalado:

- **NPM** en la versión **6.14.x**

## Instalación

Para tener el proyecto corriendo, es necesario seguir los siguientes pasos:

1. Clonar el repositorio: `git clone <REPOSITORIO>`
2. Instalar las dependencias: `npm install`
3. Iniciar el proyecto: `npm run start`
4. Visualizar el proyecto en el navegador <http://localhost:3000>

## Crear un static build

Para crear una instancia estatica del proyecto es necesario:

- `npm run build`

## Estructura de redux

Para manejar el flujo de trabajo con redux se manejaron los **reducers, types, actions y store** para mantener un control estandar.
[Redux](https://es.redux.js.org/docs/basico/acciones.html)

## Estructura del repositorio

```
/
├─ src/
│  ├─ assets/            # Assets
│  │  ├─ css/            # Estilos generales
│  │  ├─ fonts/          # Fuentes
│  ├─ components/        # Componentes
│  │  ├─ Modal/          # Modal personalizable
│  │  ├─ Sidebar/        # Sidebar personalizable
│  │  ├─ Todos/          # Render de la lista de TODOS
│  │  ├─ CRUDModal       # Modal para visualizar, crear y editar un TODO
│  ├─ hooks/             # Hooks personalizables
│  │  ├─ useModal/       # Hook personalizado para el modal
│  ├─ redux/             # Redux
│  │  ├─ actions/        # Funciones
│  │  ├─ reducers/       # Manejo de estado
│  │  ├─ types/          # Control de tipos
|  |  ├─ store           # Manejo de redux
|  ├─ styles/            # Estilos de componentes (SASS) 
|  |  ├─ base/           # Estilos base (generales)
|  |  ├─ components/     # Estilos por componente
|  |  ├─ styles          # Estilos generales
|  ├─ App                # Render principal
|  ├─ index.js           # Lanzador del render principal
├─ package.json          # Manifest del proyecto
└─ README.md             # README
```

## Componentes reusables

### Modal

Archivos:

- Modal.jsx
- Modal.css

Esté componente funciona como un modal flotante.

Esto gracias a que recibe propiedades (title, isOpen, closeModal, children) dinámicas.
[Props children](https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891)
También, dicho modal usa hooks personalizados.

```javascript
  const [isOpenModal, openModal, closeModal] = useModal(); 
```

## Licencia

The project uses a license of type [ISC](https://opensource.org/licenses/ISC)

## Autor

[Sandro Estrada](https://www.linkedin.com/in/sandro-estrada-elizondo-1b5411171/)
