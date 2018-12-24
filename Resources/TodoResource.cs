using System;
using System.ComponentModel.DataAnnotations;

namespace VegaAPI.Resource
{
    public class TodoResource
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public PriorityResource Priority { get; set; }
        public bool Status { get; set; }
        public DateTime DeadlineDate { get; set; }
        public DateTime DeadlineTime { get; set; }
    }
}