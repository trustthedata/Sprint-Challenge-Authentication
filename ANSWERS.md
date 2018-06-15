<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
    A:
    -Middleware is a repeatable function or task that you want to handle outside of a route handler, for example, to keep your code dry, or to verify something before progressing to the next function.
    -Sessions are commonly used to allow a server to store information about a client.
    -bcrypt is one of the most commonly used hashing algorithms for password encryption, using cost to prevent/slow down attacks.
    -JSON Web Tokens (JWT) allow for the information to be stored on the client instead of the server. Seen as the industry standard for security.

2.  What does bcrypt do in order to prevent attacks?
    A: bcrypt is a password hashing function that incorporates a cost parameter(rounds) and a salt to protect against rainbow tables/brute force attacks.

3.  What are the three parts of the JSON Web Token?
    A: The header, payload and signature(which requires a secret to verify).
