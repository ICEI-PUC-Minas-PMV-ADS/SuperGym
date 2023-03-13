using FluentValidation;
using SuperGym.Comunication.Requests;
using SuperGym.Exceptions;

namespace SuperGym.Application.Services.Usuario;
public class RegistrarUsuarioValidator : AbstractValidator<RequestRegistrarUsuarioDTO>
{
	public RegistrarUsuarioValidator()
	{
        RuleFor(c => c.Nome).NotEmpty().WithMessage(ResourceMensagensDeErro.NOME_USUARIO_EMBRANCO);
        RuleFor(c => c.Email).NotEmpty().WithMessage(ResourceMensagensDeErro.EMAIL_USUARIO_EMBRANCO);
        RuleFor(c => c.Senha).NotEmpty().WithMessage(ResourceMensagensDeErro.SENHA_USUARIO_EMBRANCO);

        When(c => !string.IsNullOrWhiteSpace(c.Email), () =>
        {
            RuleFor(c => c.Email).EmailAddress().WithMessage(ResourceMensagensDeErro.EMAIL_USUARIO_INVALIDO);
        });

        When(c => !string.IsNullOrWhiteSpace(c.Senha), () =>
        {
            RuleFor(c => c.Senha.Length).GreaterThanOrEqualTo(6).WithMessage(ResourceMensagensDeErro.SENHA_USUARIO_MINIMO_SEIS_CARACTERES);
        });
    }
}
