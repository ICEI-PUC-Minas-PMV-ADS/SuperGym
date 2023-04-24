using Microsoft.AspNetCore.Mvc;
using SuperGym.Api.Filtros;
using SuperGym.Application.Services.Usuario.AlterarSenha;
using SuperGym.Application.Services.Usuario.Registrar;
using SuperGym.Comunication.Requests;
using SuperGym.Comunication.Responses;

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

    [HttpPut]
    [Route("alterar-senha")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ServiceFilter(typeof(UsuarioAutenticadoAttribute))]
    public async Task<IActionResult> AlterarSenha(
        [FromServices] IAlterarSenhaService service,
        [FromBody] RequestAlterarSenhaDTO request)
    {
        await service.Executar(request);

        return NoContent();
    }
}
