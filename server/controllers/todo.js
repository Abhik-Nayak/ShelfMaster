const Todo = require('../models/todo');

exports.createItem = async (req, res) => {
    try {
      const { text } = req.body;
      const { _id } = req.user;
      const todo = new Todo({
        text,
        completed: false,
        user_id: _id,
      });
      const newTodo = await todo.save();
      res.json(newTodo);
    } catch (error) {
      console.error("Error in createItem:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  exports.getItem = async (req, res) => {
    try {
      const { _id } = req.user;
      const todos = await Todo.find({ user_id: _id });
      res.json(todos);
    } catch (error) {
      console.error("Error in getItem:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  exports.deleteItem = async (req, res) => {
    try {
      const { id } = req.body;
      const todo = await Todo.findById(id);
      if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
      }
  
      await todo.remove();
      res.status(204).json(todo);
    } catch (error) {
      console.error("Error in deleteItem:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  