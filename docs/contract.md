### 📘 Contrato de API - Endpoints por entidad

#### 🧩 Projects

| Método  | Endpoint     | Descripción              | Body JSON                                           | Respuesta JSON                          |
|---------|--------------|--------------------------|-----------------------------------------------------|----------------------------------------|
| GET     | `/api/v1/projects`       | Lista todos los proyectos     | —                                                   | `[ { "status": 200, "id": 1, "name": "Mint", "description": "App Dental" } ]` |
| GET     | `/api/v1/projects/:id`  | Obtiene un proyecto           | —                                                   | `{ "status": 200, "id": 1, "name": "Mint", "description": "App Dental" }`     |
| POST    | `/api/v1/projects`      | Crea un nuevo proyecto        | `{ "name": "Mint", "description": "App Dental" }`   | `{ "status": 201, "message": "Proyecto creado" }`     |
| PUT     | `/api/v1/projects/:id`  | Actualiza un proyecto         | `{ "name": "Nuevo nombre", "description": "Nueva descripción" }`                        | `{ "status": 200, "message": "Proyecto actualizado" }`|
| DELETE  | `/api/v1/projects/:id`  | Elimina un proyecto           | —                                                   | `{ "status": 200, "message": "Proyecto eliminado" }`  |

#### 📌 Tasks

| Método  | Endpoint     | Descripción              | Body JSON                                           | Respuesta JSON                          |
|---------|--------------|--------------------------|-----------------------------------------------------|----------------------------------------|
| GET     | `/api/v1/tasks`         | Lista todas las tareas        | —                                                   | `[ { "status": 200, "id": 1, "title": "Diseñar UI", "description": "...", "projectId": 1 } ]` |
| GET     | `/api/v1/tasks/:id`     | Obtiene una tarea             | —                                                   | `{ "status": 200, "id": 1, "title": "Diseñar UI", "description": "...", "projectId": 1 }`     |
| POST    | `/api/v1/tasks`         | Crea una nueva tarea          | `{ "title": "Diseñar UI", "description": "...", "projectId": 1 }` | `{ "status": 201, "message": "Tarea creada" }`        |
| PUT     | `/api/v1/tasks/:id`     | Actualiza una tarea           | `{ "title": "Nuevo titulo", "description": "nueva descripción", "projectId": Nuevo id de proyecto }`                              | `{ "status": 200, "message": "Tarea actualizada" }`   |
| DELETE  | `/api/v1/tasks/:id`     | Elimina una tarea             | —                                                   | `{ "status": 200, "message": "Tarea eliminada" }`     |

#### 👤 People

| Método  | Endpoint     | Descripción              | Body JSON                                           | Respuesta JSON                          |
|---------|--------------|--------------------------|-----------------------------------------------------|----------------------------------------|
| GET     | `/api/v1/people`        | Lista todas las personas      | —                                                   | `[ { "status": 200, "id": 1, "name": "James", "email": "j@correo.com", "role": "Dev", "projectId": 1 } ]` |
| GET     | `/api/v1/people/:id`    | Obtiene una persona           | —                                                   | `{ "status": 200, "id": 1, "name": "James", "email": "j@correo.com", "role": "Dev", "projectId": 1 }`     |
| POST    | `/api/v1/people`        | Crea una persona              | `{ "name": "James", "email": "j@correo.com", "role": "Dev", "projectId": 1 }` | `{ "status": 201, "message": "Persona creada" }`      |
| PUT     | `/api/v1/people/:id`    | Actualiza una persona         | `{ "name": "Nuevo nombre", "email": "Nuevo correo", "role": "Nuevo rol", "projectId": # del Nuevo proyecto }`                                  | `{ "status": 200, "message": "Persona actualizada" }` |
| DELETE  | `/api/v1/people/:id`    | Elimina una persona           | —                                                   | `{ "status": 200, "message": "Persona eliminada" }`   |
