using Microsoft.EntityFrameworkCore;
using VegaAPI.Models;

namespace TodoAPI.Context
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options) : base(options)
        {}
        public DbSet<Todo> Todos { get; set; }
    }
}