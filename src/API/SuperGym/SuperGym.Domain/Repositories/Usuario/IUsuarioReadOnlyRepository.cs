namespace SuperGym.Domain.Repositories.Usuario;
public interface IUsuarioReadOnlyRepository
{
    Task<bool> ExisteUsuarioComEmail(string email);
    Task<Entities.Usuario> RecuperarUsuarioPorEmailESenha(string email, string senha);
    Task<Entities.Usuario> RecuperarUsuarioPorEmail(string email);
}
