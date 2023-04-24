using FluentValidation.Results;
using SuperGym.Application.Utils.Criptografia;
using SuperGym.Application.Utils.UsuarioLogado;
using SuperGym.Comunication.Requests;
using SuperGym.Domain.Repositories;
using SuperGym.Domain.Repositories.Usuario;
using SuperGym.Exceptions;
using SuperGym.Exceptions.ExceptionsBase;

namespace SuperGym.Application.Services.Usuario.AlterarSenha;
public class AlterarSenhaService : IAlterarSenhaService
{
    private readonly IUsuarioUpdateOnlyRepository _repository;
    private readonly EncriptadorDeSenha _encriptador;
    private readonly IUnityOfWork _unityOfWork;
    private readonly IUsuarioLogado _usuarioLogado;
    public AlterarSenhaService(
        IUsuarioUpdateOnlyRepository repository, 
        EncriptadorDeSenha encriptador, 
        IUnityOfWork unityOfWork, 
        IUsuarioLogado usuarioLogado
    )
    {
        _repository = repository;
        _encriptador = encriptador;
        _unityOfWork = unityOfWork;
        _usuarioLogado = usuarioLogado;
    }
    public async Task Executar(RequestAlterarSenhaDTO request)
    {
        Domain.Entities.Usuario usuarioLogado = await _usuarioLogado.RecuperarUsuario();

        Domain.Entities.Usuario usuario = await _repository.RecuperarPorId(usuarioLogado.Id);

        Validar(request, usuario);

        usuario.Senha = _encriptador.CriptografarSenha(request.NovaSenha);
        usuario.UpdatedAt = DateTime.Now;

        await _unityOfWork.Commit();
    }

    private void Validar(RequestAlterarSenhaDTO request, Domain.Entities.Usuario usuario)
    {
        var validator = new AlterarSenhaValidator();
        ValidationResult result = validator.Validate(request);

        string senhaAtualCriptografada = _encriptador.CriptografarSenha(request.SenhaAtual);

        if (!usuario.Senha.Equals(senhaAtualCriptografada))
            result.Errors.Add(new ValidationFailure("senhaAtual", ResourceMensagensDeErro.SENHA_ATUAL_INVALIDA));

        if (!result.IsValid)
        {
            List<string> mensagens = result.Errors.Select(x => x.ErrorMessage).ToList();
            throw new ErrosDeValidacaoException(mensagens);
        }
    }
}
