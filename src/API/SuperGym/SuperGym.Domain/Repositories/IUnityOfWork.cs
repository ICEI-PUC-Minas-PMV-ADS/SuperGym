namespace SuperGym.Domain.Repositories;
public interface IUnityOfWork
{
    Task Commit();
}
