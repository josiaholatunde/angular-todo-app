using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TodoAPI.Context;
using TodoAPI.Core;
using VegaAPI.Models;

namespace TodoAPI.Controllers
{
    public class TodoRepository : ITodoRepository
    {
        private readonly TodoContext _context;

        public TodoRepository(TodoContext context)
        {
            _context = context;
        }
        public void AddTodo(Todo todo)
        {
            _context.Todos.Add(todo);
        }

        public async Task<Todo> DeleteTodo(int id)
        {
            var todo =await _context.Todos.FindAsync(id);
            _context.Todos.Remove(todo);
            return todo;
        }

        public async Task<Todo> GetTodo(int id)
        {
            var todo = await _context.Todos.FindAsync(id);
            return todo;
        }

        public async Task<IEnumerable<Todo>> GetTodos()
        {
            var todos = await _context.Todos.ToListAsync();
            return todos;
        }

        public void UpdateTodo(Todo todo)
        {
           _context.Entry(todo).State = EntityState.Modified;
        }

    }
}