using Microsoft.EntityFrameworkCore;
using SuperGym.Domain.Entities;
using System.Reflection;

namespace SuperGym.Infra.Context;
public class SuperGymDbContext : DbContext
{
    public SuperGymDbContext(DbContextOptions<SuperGymDbContext> options) : base(options) { }

    public DbSet<Usuario> Usuarios { get; set; }
    public DbSet<Categoria> Categorias { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }
}

