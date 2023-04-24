using Microsoft.AspNetCore.Http;
using SuperGym.Application.Utils.Token;
using SuperGym.Domain.Entities;
using SuperGym.Domain.Repositories.Usuario;

namespace SuperGym.Application.Utils.UsuarioLogado;
public class UsuarioLogado : IUsuarioLogado
{
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly TokenController _tokenController;
    private readonly IUsuarioReadOnlyRepository _repository;
    public UsuarioLogado(IHttpContextAccessor httpContextAccessor, TokenController tokenController, IUsuarioReadOnlyRepository repository)
    {
        _httpContextAccessor = httpContextAccessor;
        _tokenController = tokenController;
        _repository = repository;
    }
    public async Task<Usuario> RecuperarUsuario()
    {
        string authorization = _httpContextAccessor.HttpContext.Request.Headers["Authorization"].ToString();

        string token = authorization["Bearer".Length..].Trim();

        string emailUsuario = _tokenController.RecuperarEmail(token);

        Usuario usuario = await _repository.RecuperarUsuarioPorEmail(emailUsuario);

        return usuario;
    }
}
