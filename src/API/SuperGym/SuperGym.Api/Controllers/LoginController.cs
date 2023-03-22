using Microsoft.AspNetCore.Mvc;
using SuperGym.Application.Services.Login;
using SuperGym.Comunication.Requests;

namespace SuperGym.Api.Controllers;

public class LoginController : SuperGymController
{
    [HttpPost]
    public async Task<IActionResult> Login(
        [FromServices] ILoginService service,
        [FromBody] RequestLoginDTO request)
    {
        var response = await service.Executar(request);

        return Ok(response);
    }
}
