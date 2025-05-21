# Book Review System

## Tech Stack
- Node.js + Express
- MongoDB + Mongoose
- JSON Web Tokens for auth


# API LIST
    
    <!-- POST /login – authenticate and return a token -->
    - Post http://localhost:8080/api/login

    <!-- {POST /signup – register a new user} -->
    - Post http://localhost:8080/api/signup
   
   <!-- POST /books – Add a new book (Authenticated users only) -->
    - Post http://localhost:8080/api/books

    <!-- GET /books – Get all books (with pagination and optional filters by author and genre) -->
    - http://localhost:8080/api/books?page=1&limit=11&author=Li&genre=F

    <!-- GET /books/:id – Get book details by ID, including:
        Average rating
        Reviews (with pagination) -->
    - http://localhost:8080/api/books/682cc00f305f568f7f174b19?page=1
    
    <!-- GET /search – Search books by title or author (partial and case-insensitive) -->
    - http://localhost:8080/api/books/search?q=three man

    <!-- POST /books/:id/reviews – Submit a review (Authenticated users only, one review per user per book) -->
    - http://localhost:8080/api/books/682d3538855c823c71a9bfbe/reviews

    <!-- PUT /reviews/:id – Update your own review -->
    - http://localhost:8080/api/reviews/682d3580855c823c71a9bfc6

    <!-- DELETE /reviews/:id – Delete your own review -->
    - http://localhost:8080/api/reviews/682d3580855c823c71a9bfc6

# Steps to run locally
