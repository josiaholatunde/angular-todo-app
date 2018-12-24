using System.Collections.Generic;
using System.Threading.Tasks;
using VegaAPI.Models;

namespace TodoAPI.Core
{
    public interface ITodoRepository
    {
        Task<IEnumerable<Todo>> GetTodos();
        Task<Todo> GetTodo(int id);
        void AddTodo(Todo todo);
        void UpdateTodo(Todo todo);
       Task<Todo> DeleteTodo(int id);
    }
}