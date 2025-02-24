# frontend
# Responsive E-Commerce Homepage with Interactive Features

This project implements a **responsive homepage** for an e-commerce store with the following features:

- **1.1 Responsive Web Design** 
- **1.2 JavaScript Interactive Features** 
- **1.3 CSS Animation (Loading Spinner)** 

---

## **1.1 Responsive Web Design ** 
### ** Features**
- A **navigation bar** with links: `Home`, `Shop`, `About Us`, and `Contact Us`.  
- The navbar collapses into a **hamburger menu** on smaller screens.  
- A **hero section** with an **image carousel** (3 slides).  
- A **grid layout** displaying 4 products in **two rows** using CSS Grid/Flexbox.  
- A **footer** with contact details, social media links, and privacy policies.  

### **🔹 Implementation Details**
- **CSS Flexbox/Grid** ensures the layout adjusts for different screen sizes (**320px - 1920px**).  
- The **hamburger menu** uses `@media` queries to toggle visibility on small screens.  
- The **image carousel** automatically cycles through images using JavaScript.  
- The **grid layout** organizes products into two rows.  

---

## **1. JavaScript Interactive Features ** 
### ** Features**
- Clicking a **product image** opens it in a **lightbox (modal window)**.  
- **Navigation buttons (`Next`, `Previous`)** allow moving between images.  
- Clicking the **"X" button** or pressing `Esc` closes the modal.  
- **Smooth animation** for opening and closing the modal.  

### * Implementation Details**
- JavaScript dynamically creates the **modal structure** (`div#lightbox-modal`).  
- The **click event listener** on product images opens the modal and sets the `src` of the enlarged image.  
- **Next/Previous buttons** update the modal image dynamically using an index.  
- **Keyboard accessibility**: Pressing `Esc` closes the modal.  
- **Smooth transitions** using CSS `opacity` and `transform`.  

---

## **1.3 CSS Animation ** 
### ** Features**
- A **loading spinner animation** using **pure CSS** (no JavaScript).  
- **Two segments** rotating in **opposite directions**.  
- The spinner is **centered on the screen** and loops **infinitely**.  

### ** Implementation Details**
- The spinner is created using `::before` and `::after` pseudo-elements inside a `div.spinner`.  
- `border-top` and `border-bottom` colors create two distinct spinning sections.  
- **Two keyframe animations**:  
  - **Clockwise (`rotate(360deg)`)** for `::before`.  
  - **Counterclockwise (`rotate(-360deg)`)** for `::after`.  
- The animation is **smooth and continuous** (`animation-iteration-count: infinite`).  

---

## ** Technologies Used**
- **HTML5**  
- **CSS3 (Flexbox, Grid, Animations, Media Queries)**  
- **Vanilla JavaScript (ES6)**  

## ** How to Run the Project**
1. Open `index.html` in a browser.  
2. The **responsive homepage** and **carousel** will be visible.  
3. Click any **product image** to open the **lightbox modal**.  
4. The **loading spinner** appears when needed (can be tested in isolation).  

---

# backend
# 2.1 Product Catalog API  

A lightweight and efficient *RESTful API* built using *Node.js* and *Express.js* for managing a product catalog.

##  Features:
- Fetch all products → GET /products
- Get a product by ID → GET /products/:id
- Add a new product → POST /products
- Modify an existing product → PUT /products/:id
- Remove a product → DELETE /products/:id

---

## 2.2  JWT Authentication API  

This API implements *JWT-based authentication* using *Node.js* and *Express.js* to secure product management routes.

### 🔹 Key Features:
- *User Login & Token Generation* → POST /login
- *JWT Middleware for Route Protection*
- *Secure Product Operations*:
  - Add a product → POST /products (Requires authentication)
  - Edit a product → PUT /products/:id (Requires authentication)
  - Delete a product → DELETE /products/:id (Requires authentication)

---

## 2.3  SQLite API Integration  

This project integrates an *Express.js API* with an *SQLite database* for handling product data.

###  Key Features:
- *Full CRUD Support* → Create, Read, Update, and Delete products
- *SQLite as a Lightweight Database*
- *Optimized Performance with Raw SQL Queries (No ORM)*

## Reason for not attempting the Bonus Section
I couldn't attempt the bonus section due to the time-consuming nature of Sections 1.1 and 1.2. Ensuring responsiveness, interactivity, and accessibility required significant effort, leaving insufficient time for the bonus. Apologies for this, and thank you for your understanding.




