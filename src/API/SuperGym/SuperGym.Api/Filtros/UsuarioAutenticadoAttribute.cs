using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.IdentityModel.Tokens;
using SuperGym.Application.Utils.Token;
using SuperGym.Comunication.Responses;
using SuperGym.Domain.Repositories.Usuario;
using SuperGym.Exceptions;
using SuperGym.Exceptions.ExceptionsBase;

namespace SuperGym.Api.Filtros;

public class UsuarioAutenticadoAttribute : AuthorizeAttribute, IAsyncAuthorizationFilter
{
    private readonly TokenController _tokenController;
    private readonly IUsuarioReadOnlyRepository _repository;
    public UsuarioAutenticadoAttribute(TokenController tokenController, IUsuarioReadOnlyRepository repository)
    {
        _tokenController = tokenController;
        _repository = repository;
    }
    public async Task OnAuthorizationAsync(AuthorizationFilterContext context)
    {
        try
        {
            var token = TokenNaRequisicao(context);
            var emailUsuario = _tokenController.RecuperarEmail(token);

            var usuario = await _repository.RecuperarUsuarioPorEmail(emailUsuario);

            if (usuario is null)
                throw new SuperGymException(string.Empty);
        }
        catch (SecurityTokenExpiredException)
        {
            TokenExpirado(context);
        }
        catch
        {
            UsuarioSemPermissao(context);
        }
    }

    private static string TokenNaRequisicao(AuthorizationFilterContext context)
    {
        var authorization = context.HttpContext.Request.Headers["Authorization"].ToString();

        if (string.IsNullOrWhiteSpace(authorization))
        {
            throw new SuperGymException(string.Empty);
        }

        return authorization["Bearer".Length..].Trim();
    }

    private static void TokenExpirado(AuthorizationFilterContext context)
    {
        context.Result = new UnauthorizedObjectResult(new ResponseErroDTO(ResourceMensagensDeErro.TOKEN_EXPIRADO));
    }

    private static void UsuarioSemPermissao(AuthorizationFilterContext context)
    {
        context.Result = new UnauthorizedObjectResult(new ResponseErroDTO(ResourceMensagensDeErro.USUARIO_SEM_PERMISSAO));
    }
}
