namespace SuperGym.Domain.Entities;
public class Usuario : BaseEntity
{
    public string Nome { get; set; }
    public string Email { get; set; }
    public string Senha { get; set; }
}
