using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SuperGym.Domain.Repositories;
using SuperGym.Domain.Repositories.Usuario;
using SuperGym.Infra.Repositories;

namespace SuperGym.Infra;
public static class Bootstrapper
{
    public static void AddRepository(this IServiceCollection services, IConfiguration configuration)
    {
        AddUnityOfWork(services);
        AddRepositories(services);
    }

    private static void AddUnityOfWork(IServiceCollection services)
    {
        services.AddScoped<IUnityOfWork, UnityOfWork>();
    }

    private static void AddRepositories(IServiceCollection services)
    {
        services
            .AddScoped<IUsuarioReadOnlyRepository, UsuarioRepository>()
            .AddScoped<IUsuarioWriteOnlyRepository, UsuarioRepository>();

    }

}
