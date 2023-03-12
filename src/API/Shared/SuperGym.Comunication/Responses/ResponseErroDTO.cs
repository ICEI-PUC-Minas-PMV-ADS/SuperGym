namespace SuperGym.Comunication.Responses;
public class ResponseErroDTO
{
    public List<string> Mensagens { get; set; }

    public ResponseErroDTO(List<string> mensagens)
    {
        Mensagens = mensagens;
    }

    public ResponseErroDTO(string mensagem)
    {
        Mensagens = new List<string> { mensagem };
    }
}
