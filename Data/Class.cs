using RemindersApp.Models;
using Microsoft.EntityFrameworkCore;

namespace RemindersApp.Data
{
    public class RemindersContext : DbContext // This is the main class that allows for functionality with EF Core
    {
        public RemindersContext(DbContextOptions<RemindersContext> options) : base(options)
        {
        }
        //Specify which Classes/Models are included in the data model
        //Matches table name in DB but can be overriden using ToTable() function and overriding OnModelCreating()
        DbSet<Reminder> Reminders { get; set; }//Corresponds to the reminder table in MSSQL DB

    }
}