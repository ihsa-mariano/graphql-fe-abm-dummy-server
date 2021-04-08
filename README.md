# Instructivo

## Instalación

Una vez clonado el proyecto, se instalan las dependencias:

```bash
yarn install
```

PD: Puede que en consola aparezca un error indicando que no encuentra a sqlite3.
En dicho caso, ejecutar el siguiente comando:

```bash
yarn add sqlite3
```

## Utilización

Para correr el servidor, debe ejecutar el comando.

```bash
yarn start
```

Luego, pegar la siguiente URL en el navegador para ingresar al Playground de GraphQL

```bash
http://localhost:4000/graphql
```

Hay disponibles 2 operaciones, las cuales son útiles para el desarrollo de la ABM (CRUD).

### create

Mediante esta mutation (create) crearemos los datos de los prestadores (providers)

```bash
mutation {
  create
  (data:
    {
      description: "médico",
      state: "activo",
    })
  {
    id,
  }
}
```

### query providers

Mediante esta query (providers) consultaremos los datos existentes de los prestadores (providers)

```bash
query {
  providers{
    id
    description
    state
  }
}
```

