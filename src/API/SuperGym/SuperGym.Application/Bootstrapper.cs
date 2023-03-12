using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SuperGym.Application.Services.Usuario;

namespace SuperGym.Application;
public static class Bootstrapper
{
    public static void AddApplication(this IServiceCollection services, IConfiguration configuration)
    {
        AdicionarServices(services);
    }

    private static void AdicionarServices(IServiceCollection services)
    {
        services
            .AddScoped<IRegistrarUsuarioService, RegistrarUsuarioService>();
    }
}
