using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace RemindersApp.Models
{
    //Model class with getters and setters for EFCore ORM functionality
    public partial class Reminder
    {
        public int id { get; set; }
        public string Name { get; set; }
        public DateTime ReminderDatetime { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime? DeletedOn { get; set; }//Deleted on is soft delete and therefore 'optional' or nullable
    }
}
