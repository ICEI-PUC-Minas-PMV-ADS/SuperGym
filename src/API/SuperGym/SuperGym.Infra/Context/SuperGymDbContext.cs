using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace SuperGym.Infra.Context;
public class SuperGymDbContext : DbContext
{
    public SuperGymDbContext(DbContextOptions<SuperGymDbContext> options) : base(options) { }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }
}

