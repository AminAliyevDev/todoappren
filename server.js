const express = require('express');
const cors = require('cors');  // cors paketini ekleyin
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());  // CORS middleware'ini ekleyin

let todoList = [];

app.get('/api/todos', (req, res) => {
    res.json(todoList);
});

app.post('/api/todos', (req, res) => {
    const { name, desc, completed, showDesc } = req.body;
    const newTodo = {
        name: name,
        desc: desc,
        completed: completed || false,
        showDesc: showDesc || true,
    };
    todoList.push(newTodo);
    res.json({ success: true, message: 'To-Do added successfully' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

