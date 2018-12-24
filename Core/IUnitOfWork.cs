using System.Collections.Generic;
using System.Threading.Tasks;
using VegaAPI.Models;

namespace TodoAPI.Core
{
    public interface IUnitOfWork
    {
        Task CompleteAsync();

    }
}