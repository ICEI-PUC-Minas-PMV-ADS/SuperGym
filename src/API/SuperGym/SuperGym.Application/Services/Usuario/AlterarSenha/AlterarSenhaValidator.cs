using FluentValidation;
using SuperGym.Comunication.Requests;
using SuperGym.Exceptions;

namespace SuperGym.Application.Services.Usuario.AlterarSenha;
public class AlterarSenhaValidator : AbstractValidator<RequestAlterarSenhaDTO>
{
    public AlterarSenhaValidator()
    {
        RuleFor(s => s.NovaSenha).NotEmpty().WithMessage(ResourceMensagensDeErro.SENHA_USUARIO_EMBRANCO);

        When(c => !string.IsNullOrWhiteSpace(c.NovaSenha), () =>
        {
            RuleFor(c => c.NovaSenha.Length).GreaterThanOrEqualTo(6).WithMessage(ResourceMensagensDeErro.SENHA_USUARIO_MINIMO_SEIS_CARACTERES);
        });
    }
}
