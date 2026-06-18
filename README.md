# Shopping Cart Application

A Shopping Cart application built using Astro.js, TypeScript, Domain Driven Design (DDD), REST APIs, Docker, and Vitest.

---

## Features

### Product Management

- Add Product
- Update Product
- Delete Product
- Get Product by ID
- Get All Products

### Shopping Cart

- Add Item to Cart
- Remove Item from Cart
- Update Item Quantity
- View Cart

### UI

- Responsive Shopping Cart UI
- Tailwind CSS
- Product Listing
- Cart Summary
- Quantity Management

---

## Architecture

The project follows Domain Driven Design (DDD).

```txt
src

├── domain
│   ├── product
│   └── cart
│
├── application
│   └── usecases
│
├── infrastructure
│   └── repositories
│
├── pages
│   ├── api
│   └── index.astro
│
└── tests
```

### Layers

#### Domain Layer

Contains:

- Entities
- Repository Contracts
- Domain Services

Examples:

- Product
- Cart
- CartItem

---

#### Application Layer

Contains business use cases.

Examples:

- AddProduct
- UpdateProduct
- AddItemToCart
- UpdateCartItem

---

#### Infrastructure Layer

Contains repository implementations.

Current implementation:

- InMemoryProductRepository
- InMemoryCartRepository

These repositories can be replaced with:

- PostgreSQL
- MySQL
- MongoDB

without affecting business logic.

---

#### Presentation Layer

Contains:

- REST APIs
- Astro UI

---

## Tech Stack

- Astro.js
- TypeScript
- Tailwind CSS
- Vitest
- Docker

---

## API Endpoints

### Products

#### Get All Products

```http
GET /api/products
```

#### Get Product

```http
GET /api/products/:id
```

#### Create Product

```http
POST /api/products
```

Request

```json
{
  "name": "Laptop",
  "price": 50000
}
```

#### Update Product

```http
PUT /api/products/:id
```

#### Delete Product

```http
DELETE /api/products/:id
```

---

### Cart

#### View Cart

```http
GET /api/cart
```

#### Add Item

```http
POST /api/cart/items
```

Request

```json
{
  "productId": "1",
  "quantity": 2
}
```

#### Update Quantity

```http
PATCH /api/cart/items/:id
```

Request

```json
{
  "quantity": 5
}
```

#### Remove Item

```http
DELETE /api/cart/items/:id
```

---

## Local Development

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Application:

```txt
http://localhost:4321
```

---

## Build

```bash
npm run build
```

---

## Run Production Build

```bash
npm run preview
```

---

## Testing

Run tests

```bash
npm test
```

Watch mode

```bash
npm run test:watch
```

---

## Docker

Build image

```bash
docker build -t shopping-cart-app .
```

Run container

```bash
docker run -p 4321:4321 shopping-cart-app
```

---

## Future Improvements

- PostgreSQL Integration
- Authentication
- Product Images
- Persistent Shopping Cart
- Redis Caching
- Swagger/OpenAPI Documentation
- CI/CD Pipeline
- Kubernetes Deployment

---

## Design Decisions

### Why In-Memory Repository?

The goal of this assignment is to demonstrate:

- Domain Driven Design
- Separation of Concerns
- Testability
- Clean Architecture

Using repository interfaces allows replacing the storage implementation without changing the business logic.

### Why DDD?

DDD helps separate:

- Business Rules
- Application Logic
- Infrastructure Concerns
- User Interface

making the system easier to maintain and extend.

---