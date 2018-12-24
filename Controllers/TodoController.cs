using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TodoAPI.Core;
using VegaAPI.Models;

namespace TodoAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        private readonly ITodoRepository _repository;
        private readonly IUnitOfWork _unitOfWork;

        public TodosController(ITodoRepository repository, IUnitOfWork unitOfWork)
        {
            _repository = repository;
            _unitOfWork = unitOfWork;
        }
        // GET api/values
        [HttpGet]
        public async Task<IEnumerable<Todo>> GetTodos()
        {
           var todos = _repository.GetTodos();
           return await todos;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetTodo(int id)
        {
            var todo = await _repository.GetTodo(id);
            if(todo == null)
                return  NotFound();
            
            return Ok(todo);
        }
        [HttpGet("ChangeStatus/{id}/{isChanged=false}")]
        public async Task<IActionResult> GetTodo(bool isChanged,int id)
        {
            var todo = await _repository.GetTodo(id);
            if(todo == null)
                return  NotFound();
            todo.Status = true;
             _repository.UpdateTodo(todo);
            await _unitOfWork.CompleteAsync();
            return Ok(todo);
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> PostTodo([FromBody] Todo todo)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);
            if(todo != null)
            {
                _repository.AddTodo(todo);
                await _unitOfWork.CompleteAsync();
                return Ok(todo);
            }
            return NotFound();
            
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTodo(int id, [FromBody] Todo todo)
        {
            if (id != todo.Id)
                return BadRequest();
           
            _repository.UpdateTodo(todo);
            await _unitOfWork.CompleteAsync();
            return Ok(todo);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (!ModelState.IsValid)
                return BadRequest();
            var todoItem = _repository.GetTodo(id);
            if (todoItem == null)
                return NotFound("TodoItem does not exist");
           var todo = await _repository.DeleteTodo(id);
          await _unitOfWork.CompleteAsync();
            return Ok(todo.Id);
        }
    }
}
