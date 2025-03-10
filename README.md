# Task Flow

## Overview
Task Flow is a simple task management system built using Express.js. It allows users to add, edit, delete, sort, and filter tasks based on priority.

## Installation

1. Clone the repository:
   ```sh
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```sh
   cd task-flow
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the server:
   ```sh
   node server.js
   ```

## API Endpoints

### 1. Add a Task
**Endpoint:** `/tasks/add`
**Method:** GET
**Query Parameters:**
- `taskId` (integer) - Task ID
- `text` (string) - Task description
- `priority` (integer) - Task priority

**Example:**
```
GET http://localhost:3010/tasks/add?taskId=4&text=Review%20code&priority=1
```

### 2. Get All Tasks
**Endpoint:** `/tasks`
**Method:** GET

**Example:**
```
GET http://localhost:3010/tasks
```

### 3. Sort Tasks by Priority
**Endpoint:** `/tasks/sort-by-priority`
**Method:** GET

**Example:**
```
GET http://localhost:3010/tasks/sort-by-priority
```

### 4. Edit Task Priority
**Endpoint:** `/tasks/edit-priority`
**Method:** GET
**Query Parameters:**
- `taskId` (integer) - Task ID
- `priority` (integer) - New priority

**Example:**
```
GET http://localhost:3010/tasks/edit-priority?taskId=1&priority=1
```

### 5. Edit Task Text
**Endpoint:** `/tasks/edit-text`
**Method:** GET
**Query Parameters:**
- `taskId` (integer) - Task ID
- `text` (string) - New task description

**Example:**
```
GET http://localhost:3010/tasks/edit-text?taskId=3&text=Update%20documentation
```

### 6. Delete a Task
**Endpoint:** `/tasks/delete`
**Method:** GET
**Query Parameters:**
- `taskId` (integer) - Task ID

**Example:**
```
GET http://localhost:3010/tasks/delete?taskId=2
```

### 7. Filter Tasks by Priority
**Endpoint:** `/tasks/filter-by-priority`
**Method:** GET
**Query Parameters:**
- `priority` (integer) - Priority to filter by

**Example:**
```
GET http://localhost:3010/tasks/filter-by-priority?priority=1
```

## Future Enhancements
- Convert to a RESTful API with proper HTTP methods
- Implement database storage instead of an in-memory array
- Add authentication and user management
- Create a frontend for easier task management

## License
This project is licensed under the MIT License.


