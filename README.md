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

# Requirements:
        1. Node js
        2. git 
    
# Steps to run locally
    1. clone the repo Comands: git clone https://github.com/ABODHKUMAR/book-review-system.git
    2. open folder book-review-system in vs code.
    3. go to  root directory where package.json file exits
    4. RUN Command: npm install
    5. create .env file where in same root directory of Project, hint-> where package.json file exist.

    6.   # paste the below content in .env file
        PORT = 8080
        MONGO_URI = "mongodb+srv://abodh5921:7pzB7HnfYGt96Wuq@ecommerce-website-clust.ogjkv1b.mongodb.net/bookreviewdb"
        JWT_SECRET = "abodh5921"

    7. for testing perpose I have push .env file to github, just for testing, ideally No one should push .env in github repo.
    8. RUN Command : go to directory where app.js file exist in code. hint-> inside src directory
    9. Run Command: node app.js

# Testing Api's
PostMan API view acess: https://www.postman.com/neon44-2157/workspace/test-public-workspace/collection/18117371-d9469169-cd49-4c66-a09c-64b3b20b4bc1?action=share&creator=18117371


#API in Json file.
    - testing /book-review-system/testing api/book-review-api's.postman_collection.json

# Demo Viedo to start & test api
Link : https://www.youtube.com/watch?v=qZm8cmllC0Y



