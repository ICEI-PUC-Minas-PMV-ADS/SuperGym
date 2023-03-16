using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SuperGym.Application.Services.Usuario;
using SuperGym.Comunication.Requests;
using SuperGym.Comunication.Responses;
using System.Threading.Tasks;

namespace SuperGym.Api.Controllers;
public class UsuarioController : SuperGymController
{
    [HttpPost]
    [ProducesResponseType(typeof(ResponseUsuarioRegistradoDTO), StatusCodes.Status201Created)]
    public async Task<IActionResult> RegistrarUsuario(
        [FromServices] IRegistrarUsuarioService service,
        [FromBody] RequestRegistrarUsuarioDTO request)
    {
        var result = await service.Executar(request);

        return Created(string.Empty, result);
    }
}
