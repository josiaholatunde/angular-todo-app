using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace VegaAPI.Models
{
    [Table("TodoItems")]
    public class Todo
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public Priority Priority { get; set; }
        public bool Status { get; set; }
        public DateTime DeadlineDate { get; set; }
        public DateTime DeadlineTime { get; set; }
    }
}