using SuperGym.Domain.Repositories;
using SuperGym.Infra.Context;

namespace SuperGym.Infra;
public class UnityOfWork : IDisposable, IUnityOfWork
{
    private readonly SuperGymDbContext _context;
    private bool _disposed;

    public UnityOfWork(SuperGymDbContext context)
    {
        _context = context;
    }
    public async Task Commit()
    {
        await _context.SaveChangesAsync();
    }

    public void Dispose()
    {
        Dispose(true);
    }

    private void Dispose(bool disposing)
    {
        if (!_disposed && disposing)
        {
            _context.Dispose();
        }

        _disposed = true;
    }
}
