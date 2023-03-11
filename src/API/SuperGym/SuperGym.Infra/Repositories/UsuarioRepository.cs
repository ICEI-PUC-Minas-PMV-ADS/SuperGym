using SuperGym.Domain.Entities;
using SuperGym.Domain.Repositories.Usuario;
using SuperGym.Infra.Context;

namespace SuperGym.Infra.Repositories;
public class UsuarioRepository : IUsuarioWriteOnlyRepository
{
    private readonly SuperGymDbContext _context;
    public UsuarioRepository(SuperGymDbContext context)
    {
        _context = context;
    }
    public async Task Adicionar(Usuario usuario)
    {
        await _context.Usuarios.AddAsync(usuario);
    }
}
