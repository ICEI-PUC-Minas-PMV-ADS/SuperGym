namespace SuperGym.Domain.Repositories.Usuario;
public interface IUsuarioReadOnlyRepository
{
    Task<bool> ExisteUsuarioComEmail(string email);
}
