using AutoMapper;
using FluentValidation.Results;
using SuperGym.Application.Utils.Criptografia;
using SuperGym.Application.Utils.Token;
using SuperGym.Comunication.Requests;
using SuperGym.Comunication.Responses;
using SuperGym.Domain.Repositories;
using SuperGym.Domain.Repositories.Usuario;
using SuperGym.Exceptions;
using SuperGym.Exceptions.ExceptionsBase;

namespace SuperGym.Application.Services.Usuario;
public class RegistrarUsuarioService : IRegistrarUsuarioService
{
    private readonly IUsuarioWriteOnlyRepository _usuarioWriteOnlyRepository;
    private readonly IUsuarioReadOnlyRepository _usuarioReadOnlyRepository;
    private readonly IMapper _mapper;
    private readonly IUnityOfWork _unityOfWork;
    private readonly EncriptadorDeSenha _encriptadorDeSenha;
    private readonly TokenController _tokenController;
    public RegistrarUsuarioService(IUsuarioWriteOnlyRepository usuarioWriteOnlyRepository, 
        IUsuarioReadOnlyRepository usuarioReadOnlyRepository, 
        IMapper mapper, IUnityOfWork unityOfWork, 
        EncriptadorDeSenha encriptadorDeSenha, 
        TokenController tokenController)
    {
        _usuarioWriteOnlyRepository = usuarioWriteOnlyRepository;
        _usuarioReadOnlyRepository = usuarioReadOnlyRepository;
        _mapper = mapper;
        _unityOfWork = unityOfWork;
        _encriptadorDeSenha = encriptadorDeSenha;
        _tokenController = tokenController;
    }
    public async Task<ResponseUsuarioRegistradoDTO> Executar(RequestRegistrarUsuarioDTO request)
    {
        await Validar(request);

        Domain.Entities.Usuario entity = _mapper.Map<Domain.Entities.Usuario>(request);
        entity.Senha = _encriptadorDeSenha.CriptografarSenha(request.Senha);

        await _usuarioWriteOnlyRepository.Adicionar(entity);

        await _unityOfWork.Commit();

        string token = _tokenController.GerarToken(entity.Email);

        return new ResponseUsuarioRegistradoDTO
        {
            Token = token,
            Nome = entity.Nome
        };
    }

    private async Task Validar(RequestRegistrarUsuarioDTO request)
    {
        var validator = new RegistrarUsuarioValidator();
        ValidationResult result = validator.Validate(request);

        bool existeUsuarioComEmail = await _usuarioReadOnlyRepository.ExisteUsuarioComEmail(request.Email);
        if (existeUsuarioComEmail)
            result.Errors.Add(new ValidationFailure("email", ResourceMensagensDeErro.EMAIL_JA_CADASTRADO));

        if (!result.IsValid)
        {
            var mensagensDeErro = result.Errors.Select(error => error.ErrorMessage).ToList();
            throw new ErrosDeValidacaoException(mensagensDeErro);
        }
    }
}
