using AutoMapper;
using SuperGym.Comunication.Requests;
using SuperGym.Domain.Entities;

namespace SuperGym.Application.Utils.Automapper;
public class AutomapperConfiguration : Profile
{
    public AutomapperConfiguration()
    {
        RequestForEntity();
        EntityForResponse();
    }

    private void RequestForEntity()
    {
        CreateMap<RequestRegistrarUsuarioDTO, Usuario>()
            .ForMember(destino => destino.Senha, config => config.Ignore());
    }

    private void EntityForResponse()
    {

    }
}
