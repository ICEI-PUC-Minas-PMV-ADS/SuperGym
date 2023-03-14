using Microsoft.EntityFrameworkCore;
using SuperGym.Domain.Entities;
using SuperGym.Domain.Repositories.Usuario;
using SuperGym.Infra.Context;

namespace SuperGym.Infra.Repositories;
public class UsuarioRepository : IUsuarioWriteOnlyRepository, IUsuarioReadOnlyRepository
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

    public async Task<bool> ExisteUsuarioComEmail(string email)
    {
        return await _context.Usuarios.AnyAsync(e => e.Email.Equals(email));
    }
}
