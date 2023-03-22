using SuperGym.Comunication.Requests;
using SuperGym.Comunication.Responses;

namespace SuperGym.Application.Services.Login;
public interface ILoginService
{
    Task<ResponseLoginDTO> Executar(RequestLoginDTO request);
}
