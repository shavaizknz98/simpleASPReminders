using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RemindersApp.Models
{
    //Model Class for reminders
    public class Reminder
    {
        public int id { get; set; }
        public string name { get; set; }
        public DateTime reminderDatetime { get; set; }
        public DateTime createdOn { get; set; }
        public DateTime deletedOn { get; set; }

    }
}
