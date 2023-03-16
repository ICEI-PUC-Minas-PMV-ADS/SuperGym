using SuperGym.Comunication.Requests;
using SuperGym.Comunication.Responses;

namespace SuperGym.Application.Services.Usuario;
public interface IRegistrarUsuarioService
{
    Task<ResponseUsuarioRegistradoDTO> Executar(RequestRegistrarUsuarioDTO request);
}
