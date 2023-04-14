using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SuperGym.Infra.Migrations
{
    public partial class tabela_categoria : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categorias",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Icone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categorias", x => x.Id)
                        .Annotation("SqlServer:Clustered", true);
                });

            migrationBuilder.InsertData(
                table: "Categorias",
                columns: new[] { "Id", "CreatedAt", "Icone", "Nome", "UpdatedAt" },
                values: new object[,]
                {
                    { 1, new DateTime(2023, 4, 14, 20, 7, 16, 485, DateTimeKind.Local).AddTicks(3884), "🏋", "Peito", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 2, new DateTime(2023, 4, 14, 20, 7, 16, 485, DateTimeKind.Local).AddTicks(3905), "🏋", "Bíceps", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 3, new DateTime(2023, 4, 14, 20, 7, 16, 485, DateTimeKind.Local).AddTicks(3906), "🏋", "Tríceps", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 4, new DateTime(2023, 4, 14, 20, 7, 16, 485, DateTimeKind.Local).AddTicks(3908), "🏋", "Perna", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 5, new DateTime(2023, 4, 14, 20, 7, 16, 485, DateTimeKind.Local).AddTicks(3909), "🏋", "Ombro", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 6, new DateTime(2023, 4, 14, 20, 7, 16, 485, DateTimeKind.Local).AddTicks(3913), "🏋", "Costas", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 7, new DateTime(2023, 4, 14, 20, 7, 16, 485, DateTimeKind.Local).AddTicks(3914), "🏃", "Cardio", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Categorias");
        }
    }
}
