using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Job_hub.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class updateTableJobOffer : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Job_about",
                table: "JobOffers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Job_about",
                table: "JobOffers");
        }
    }
}
