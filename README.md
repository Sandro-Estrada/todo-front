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
│  │  ├─ test/           # Pruebas unitarias
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

## Pruebas
Esté proyecto integra pruebas unitarias para comprobar que cada componente creado se renderice correctamente.
Para ejecutar dichas pruebas basta con ejecutar:

````
npm run test
````

Para tener más información de las pruebas:

````
npm run test:coverage
````

## Documentación
### Componentes
Los componentes enlistados a continuación manejan **propTypes** que ayuda a reconocer las propiedades que maneja el componente así como su tipo de dato a la hora de importarlo.
#### CRUDModal
Modal para mostrar, editar y crear un **Todo**

**Propiedades**

| Propiedad         | Tipo de valor | Descripción                                                                      |
|-------------------|---------------|----------------------------------------------------------------------------------|
| **isOpenModal**   | Boolean       | Muestra o no el modal                                                            |
| **closeModal**    | Function      | Función que cierra el modal                                                      |
| **filterDate**    | String        | Fecha del filtro                                                                 |
| **modalTitle**    | String        | Título del modal                                                                 |
| **isEdit**        | Boolean       | Para cambiar la funcionalidad del modal entre crear o editar                     |
| **todoSelected**  | Object        | Si está editando, muestra la información del todo                                |
| **setFilterDate** | Function      | Función que limpia el filtro del componente padre para mostrar todos los objetos |

**Uso básico**

````JSX
import CRUDModal from './src/components/CRUDModal';

<div>
  <CRUDModal
    isOpenModal={true}
    closeModal={() => true}
    filterDate={'2021-03-21'}
    modalTitle={'Crear'}
    isEdit={false}
    setFilterDate={() => ''}
  />
  <CRUDModal
    isOpenModal={true}
    closeModal={() => true}
    filterDate={'2021-03-21'}
    modalTitle={'Editar'}
    isEdit={true}
    todoSelected={{
      title: 'título',
      description: 'descripción'
    }}
    setFilterDate={() => ''}
  />
<div/>
````

## Licencia

El proyecto usa una licencia de tipo [ISC](https://opensource.org/licenses/ISC)

## Autor

[Sandro Estrada](https://www.linkedin.com/in/sandro-estrada-elizondo-1b5411171/)
