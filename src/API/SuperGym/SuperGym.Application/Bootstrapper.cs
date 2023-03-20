using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SuperGym.Application.Services.Login;
using SuperGym.Application.Services.Usuario;
using SuperGym.Application.Utils.Criptografia;
using SuperGym.Application.Utils.Token;

namespace SuperGym.Application;
public static class Bootstrapper
{
    public static void AddApplication(this IServiceCollection services, IConfiguration configuration)
    {
        AdicionarChaveAdiconalSenha(services, configuration);
        AdicionarTokenJWT(services, configuration);
        AdicionarServices(services);
    }

    private static void AdicionarServices(IServiceCollection services)
    {
        services
            .AddScoped<IRegistrarUsuarioService, RegistrarUsuarioService>()
            .AddScoped<ILoginService, LoginService>();
    }

    private static void AdicionarTokenJWT(IServiceCollection services, IConfiguration configuration)
    {
        var sectionTempoDeVida = configuration.GetRequiredSection("Configuracoes:TempoVidaToken");
        var sectionKey = configuration.GetRequiredSection("Configuracoes:ChaveToken");

        services.AddScoped(option => new TokenController(int.Parse(sectionTempoDeVida.Value), sectionKey.Value));
    }

    private static void AdicionarChaveAdiconalSenha(IServiceCollection services, IConfiguration configuration)
    {
        var section = configuration.GetRequiredSection("Configuracoes:ChaveAdicionalSenha");

        services.AddScoped(option => new EncriptadorDeSenha(section.Value));
    }

}
