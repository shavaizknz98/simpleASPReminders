using RemindersApp.Models;
using Microsoft.EntityFrameworkCore;

namespace RemindersApp.Data
{
    public class RemindersContext : DbContext // This is the main class that allows for functionality with EF Core
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=localhost;Initial Catalog=reminders_database;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
        }
        //Specify which Classes/Models are included in the data model
        //Matches table name in DB but can be overriden using ToTable() function and overriding OnModelCreating()
        public DbSet<Reminder> Reminders { get; set; }//Corresponds to the reminder table in MSSQL 
    }
}