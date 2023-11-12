# Secos en linea
### Documentación
Este proyecto tiene como proposito personal el almacenar, compartir y ver las imágenes y resultados de las loterías y sus respectivos secos.

#### Características
Este proyecto está hecho con Astro ya que es un frramework muy ligero y rápido, perfecto para el uso en dispositivos con pocos recursos, y como también está pensado usar en los computadores donde trabjo, ellos no cuentan con muchos recursos o potencia para navegar y mostrar páginas complejas.

#### Instalación y comandos
```
pnpm install
```
```
pnpm run dev
```

## Estructura de proyecto

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
  └── components/
    └── CardLotery/
    └── Header/
│ └── pages/
│       └── index.astro
  └── data/
│       └── APILottery.js
└── package.json
```

El funcionamiento de la web está automatizada para no tener que tocar o modificar el html ya que la centralización de datos que se muestran se encuentran en `APILottery.js`, allí se encuentra un array con el nombre de cada lotería, dentro de cada objeto tienen varias propiedades como son:

- drawingNumber | `String`
- fecha | `String`
- img | `String`
- downloadImg | `String`
- imgAlt | `String`
- lotteryName | `String`
- lastDraw | `Boolean`

Hasta el día de hoy estas son las propiedades de cada resultado que se va a agregar
#### - drawingNumber
Allí se inserta como valor el número del sorteo que se jugó para ese día con esa lotería.
#### - fecha
importante describir la fecha del sorteo.
#### - img
Se inserta el enlace de la imagen del resultado de la lotería, esta se sube a una cuenta en [Postimg](https://postimg.cc)
#### - downloadImg
La misma plataforma donde se sube la imagen proporciona un link de descarga, ese enlace se copia y se pega como valor en esta propiedad.
#### - imgAlt
Importante el alt de cada imagen que se sube con el nombre de la lotería y el número de sorteo.
#### - lotteryName
Este espacio solo se utiliza para una sección de la web donde se muestran los últimos resultados para poder describir y dar más información a la persona que navega por la web.
#### lastDraw
Así como el anterior punto también se usa para mostrar en esta sección de últimos resultados, al ser un valor boolean se deja el último resultado en true y los otros en false para que la lógica de la web tome este último y sepa qué objeto debe mostrar en la sección de últimos resultados.

#### Contribución
[Carlos Andrés Segura](https://www.linkedin.com/in/casvaru/)3
