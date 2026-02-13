# Foundations

Specs en JSON y convenciones para que implementaciones (o Cursor/MCP) puedan replicar patrones de UI usando solo tokens de Titan, sin componentes predefinidos.

## Contenido

- **`table-borderless.json`** — Especificación de la tabla borderless: tokens de contenedor, celdas, separadores, hover, iconos de ordenación (Lucide) y menú de acciones (Editar / Clonar / Borrar). Ver [docs/table-borderless.md](../docs/table-borderless.md) para la documentación completa (tokens + reglas CSS + convención de iconos).

## Uso

Al montar el repo de tokens, se puede indicar a Cursor (o al MCP): *“Para tablas tipo reportes, usa la spec `foundations/table-borderless.json` y los tokens documentados en `docs/table-borderless.md`.”*
