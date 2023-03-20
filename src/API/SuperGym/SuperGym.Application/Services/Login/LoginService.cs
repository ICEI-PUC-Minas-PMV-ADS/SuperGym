using SuperGym.Application.Utils.Criptografia;
using SuperGym.Application.Utils.Token;
using SuperGym.Comunication.Requests;
using SuperGym.Comunication.Responses;
using SuperGym.Domain.Repositories.Usuario;
using SuperGym.Exceptions.ExceptionsBase;

namespace SuperGym.Application.Services.Login;
public class LoginService : ILoginService
{
    private readonly IUsuarioReadOnlyRepository _repository;
    private readonly EncriptadorDeSenha _encriptadorSenha;
    private readonly TokenController _token;
    public LoginService(IUsuarioReadOnlyRepository repository, EncriptadorDeSenha encriptadorSenha, TokenController token)
    {
        _repository = repository;
        _encriptadorSenha = encriptadorSenha;
        _token = token;
    }
    public async Task<ResponseLoginDTO> Executar(RequestLoginDTO request)
    {
        string senhaCriptografada = _encriptadorSenha.CriptografarSenha(request.Senha);

        Domain.Entities.Usuario usuario = await _repository.RecuperarUsuarioPorEmailESenha(request.Email, senhaCriptografada);

        Validar(usuario);

        return new ResponseLoginDTO
        {
            Nome = usuario.Nome,
            Token = _token.GerarToken(usuario.Email)
        };
    }

    private static void Validar(Domain.Entities.Usuario usuario)
    {
        if (usuario == null)
            throw new LoginInvalidoException();
    }
}
