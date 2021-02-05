using RemindersApp.Models;
using Microsoft.EntityFrameworkCore;
using System.Configuration;

namespace RemindersApp.Data
{
    //Data Access Layer for reminders table
    public class RemindersContext : DbContext // This is the main class that allows for functionality with EF Core
    {

        public RemindersContext(DbContextOptions<RemindersContext>options) : base(options)
        {

        }

        //Removed OnConfiguring override since its now done in startup serviceConfiguration. 
        /* protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(ConfigurationManager.ConnectionStrings["RemindersDatabase"].ConnectionString);
        }  */ 
        //Specify which Classes/Models are included in the data model
        //Matches table name in DB but can be overriden using ToTable() function and overriding OnModelCreating()
        public DbSet<Reminder> Reminders { get; set; }//Corresponds to the reminder table in MSSQL 
    }
}