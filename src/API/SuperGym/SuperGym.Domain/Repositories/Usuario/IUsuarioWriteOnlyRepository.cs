namespace SuperGym.Domain.Repositories.Usuario;
public interface IUsuarioWriteOnlyRepository
{
    Task Adicionar(Entities.Usuario usuario);
}
