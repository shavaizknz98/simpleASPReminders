using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RemindersApp.Migrations
{
    public partial class RemindersInitialCreate : Migration //Migration for creating reminders table
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Reminders",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    reminderDatetime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    createdOn = table.Column<DateTime>(type: "datetime2", nullable: false),
                    deletedOn = table.Column<DateTime>(type: "datetime2", nullable: true)//only deleted on is nullable, rest are required

                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reminders", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Reminders");
        }
    }
}
