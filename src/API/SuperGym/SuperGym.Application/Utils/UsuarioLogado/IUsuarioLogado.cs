namespace SuperGym.Application.Utils.UsuarioLogado;
public interface IUsuarioLogado
{
    Task<Domain.Entities.Usuario> RecuperarUsuario();
}
