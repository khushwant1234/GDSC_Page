
# GDSC RECRUITMENT SUBMISSION

This is Khushwant Singh's submission for the gdsc recruitments.

# I haven't deployed this yet, so you'll have to run this locally. 

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
  git clone https://github.com/khushwant1234/GDSC_Page.git
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

# Working:
The ui is pretty self-explanatory. The tasks listed on the original page are listed as cards you can swipe through.
Click on a task title to see it's description.
Use the "Wanna send an Anonymous Message" button to send text inputs.
Go to the Messages page(using navbar) to see all messages. 
You can edit and delete the messages as well.


The page works as follows:
When the input is given to the input box, the submit button sends a post request using axios to the url http://localhost:8080/comment, for which I've written an api, such that, it updates the input table with that data.

Now, to I've written an api that sends that data present in the input table (after parsing it to json format) to the url http://localhost:8080/. In the frontend, I'm using axios.get to fetch the data from that url and then display it.

The Edit function, takes your input and then updates the row of the table with the id same as the message you're editing, with your input.

The delete button works similar to the input button, it sends a delete request using axios to the url http://localhost:8080/delete/

# Technologies Used:
Frontend: Nextjs (with Javascript), Tailwindcss
Backend: Nodejs, Expressjs, cors
Database: MySQL



