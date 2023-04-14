using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SuperGym.Domain.Entities;

namespace SuperGym.Infra.Configurations;
public class CategoriaConfiguration : IEntityTypeConfiguration<Categoria>
{
    public void Configure(EntityTypeBuilder<Categoria> builder)
    {
        builder.ToTable("Categorias");

        builder.HasKey(x => x.Id).IsClustered();

        builder.HasData(PopularCategorias());
    }

    private static IList<Categoria> PopularCategorias()
    {
        return new List<Categoria>
        {
            new Categoria { Id = 1, Nome = "Peito", Icone = "🏋" },
            new Categoria { Id = 2, Nome = "Bíceps", Icone = "🏋" },
            new Categoria { Id = 3, Nome = "Tríceps", Icone = "🏋" },
            new Categoria { Id = 4, Nome = "Perna", Icone = "🏋" },
            new Categoria { Id = 5, Nome = "Ombro", Icone = "🏋" },
            new Categoria { Id = 6, Nome = "Costas", Icone = "🏋" },
            new Categoria { Id = 7, Nome = "Cardio", Icone = "🏃" }
        };
    }
}