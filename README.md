
# GDSC RECRUITMENT SUBMISSION

This is Khushwant Singh's submission for the gdsc recruitments.

# I haven't deployed this yet, so you'll have to run this locally. But I'll deploy this shortly

# Start a SQL Database 
run following command on mysql workbench
```mysql workbench
CREATE DATABASE storage;
USE storage;
CREATE TABLE input(
content TEXT,
id INT AUTO_INCREMENT PRIMARY KEY);

INSERT INTO input (content,id)  
VALUES ("Test",1) 
```
Ensure the name of your table is "input".


## Run Locally
Please create a database locally before running the application. (follow the steps above)

Clone the project

```bash
  git clone https://link-to-project
```
Go to the backend project directory
```bash
  cd backend
```
Install Backend dependencies

```bash
npm install
```
Start the backend Server
```bash
npm start
```

Go to the frontend project directory, for this use a new terminal instance

```bash
  cd /frontend
```

Install frontend dependencies

```bash
  npm install
```

Start the Frontend server

```bash
  npm run start
```

# Now that the Database, backend and the frontend server are started, you can use the application at http://localhost:3000/

# NOTES:
The Edit button in the messages isn't functional as of yet

# Working:
The ui is self-explanatory(use and see).
When the input is given to the input box, the submit button sends a post request using axios to the url http://localhost:8080/comment, for which I've written an api, such that, it updates the input table with that data.
Now, to I've written an api that sends that data present in the input table (after parsing it to json format) to the url http://localhost:8080/. In the frontend, I'm using axios.get to fetch the data from that url and then display it.
the delete button works similar to the input button, it sends a delete request using axios to the url http://localhost:8080/delete/





this is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


