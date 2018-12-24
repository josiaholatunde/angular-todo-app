using System.Threading.Tasks;
using TodoAPI.Context;
using TodoAPI.Core;

namespace TodoAPI.Controllers
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly TodoContext _context;

        public UnitOfWork(TodoContext context)
        {
            _context = context;
        }
       public async Task CompleteAsync()
       {
          await _context.SaveChangesAsync();
       }
    }
}