using Microsoft.EntityFrameworkCore;
using SuperGym.Domain.Entities;
using SuperGym.Domain.Repositories.Usuario;
using SuperGym.Infra.Context;

namespace SuperGym.Infra.Repositories;
public class UsuarioRepository : IUsuarioWriteOnlyRepository, IUsuarioReadOnlyRepository, IUsuarioUpdateOnlyRepository
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

    public async Task<Usuario> RecuperarPorId(int id)
    {
        return await _context.Usuarios.FirstOrDefaultAsync(u => u.Id == id);
    }

    public async Task<Usuario> RecuperarUsuarioPorEmail(string email)
    {
        return await _context.Usuarios.AsNoTracking()
            .FirstOrDefaultAsync(u => u.Email.Equals(email));
    }

    public async Task<Usuario> RecuperarUsuarioPorEmailESenha(string email, string senha)
    {
        return await _context.Usuarios.AsNoTracking()
            .FirstOrDefaultAsync( u => u.Email.Equals(email) && u.Senha.Equals(senha));
    }

    public void Update(Usuario usuario)
    {
        _context.Usuarios.Update(usuario);
    }
}
