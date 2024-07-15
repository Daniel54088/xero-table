<h1 align="center"> Show Me The Money - Frontend</h1>

</br>

<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents"> :book: Table of Contents</h2>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#introduction"> ➤ Introduction</a></li>
    <li><a href="#tech-stack"> ➤ Tech stack</a></li>
    <li><a href="#app-structure"> ➤ Run app</a></li>
    <li><a href="#test"> ➤ Run test</a></li>
  </ol>
</details>

![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- ABOUT THE PROJECT -->
<h2 id="introduction"> :pencil: Introduction</h2>

<p align="justify"> 
The goal of this project is to build a simple one-page application to display the Balance Sheet Report from Xero. This frontend application is built using TypeScript and React. It fetches data from a backend API and displays the results in a structured table format.
</p>

- Fetches and displays the Balance Sheet Report from Xero API. <br>
- Displays data in a table format for easy readability.<br>
- Handles errors gracefully and provides informative feedback to the user.<br>
- Includes unit tests to ensure reliability and correctness.<br>

<p align="center">
  <img src="/public/preview.png" alt="app structure" width="70%" height="70%">        
</p>



![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- Tech stack -->
<h2 id="tech-stack"> :books: Tech stack</h2>

<!--This project is written in Python programming language. <br>-->

The following open source techs are used in this project:

- <b>Base</b> <br>

   ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

- <b>Code Consistency & Reliability</b> <br>

  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
  ![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)


- <b>Testing tool</b> <br>
 ![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)



![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- App structure -->
<h2 id="app-structure"> :fork_and_knife: Run app </h2>

### Steps:
1. RUN ```docker build . -t "xero-project:v1.0"```
2. RUN ```docker run -p 3002:3002 {IMAGE ID} ```
3. Visit ```http://localhost:3002/``` (Please run the xero api first)


![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- deployment -->
<h2 id="test"> :floppy_disk: Test</h2>

### Run test 

1. ```npm install```
2. ```npm run test```



![---------------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
