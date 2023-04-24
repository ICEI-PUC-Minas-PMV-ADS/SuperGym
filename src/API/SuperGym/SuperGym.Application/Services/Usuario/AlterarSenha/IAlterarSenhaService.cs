using SuperGym.Comunication.Requests;

namespace SuperGym.Application.Services.Usuario.AlterarSenha;
public interface IAlterarSenhaService
{
    Task Executar(RequestAlterarSenhaDTO request);
}
