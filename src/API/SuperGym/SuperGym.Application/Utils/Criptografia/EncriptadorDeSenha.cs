using System.Security.Cryptography;
using System.Text;

namespace SuperGym.Application.Utils.Criptografia;
public class EncriptadorDeSenha
{
    private readonly string _chaveDeEncriptacao;

    public EncriptadorDeSenha(string chaveDeEncriptacao)
    {
        _chaveDeEncriptacao = chaveDeEncriptacao;
    }

    public string CriptografarSenha(string senha)
    {
        var senhaComChaveAdicional = $"{senha}{_chaveDeEncriptacao}";

        var bytes = Encoding.UTF8.GetBytes(senhaComChaveAdicional);
        var sha512 = SHA512.Create();
        byte[] hashBytes = sha512.ComputeHash(bytes);

        return StringBytes(hashBytes);
    }

    private static string StringBytes(byte[] bytes)
    {
        var sb = new StringBuilder();
        foreach (byte b in bytes)
        {
            var hex = b.ToString("x2");
            sb.Append(hex);
        }
        return sb.ToString();
    }
}
