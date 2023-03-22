using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using SuperGym.Comunication.Responses;
using SuperGym.Exceptions;
using SuperGym.Exceptions.ExceptionsBase;
using System.Net;

namespace SuperGym.Api.Filtros;

public class FiltroDasExceptions : IExceptionFilter
{
    public void OnException(ExceptionContext context)
    {
        if (context.Exception is SuperGymException)
            TratarSuperGymException(context);
        else
            LancarErroDesconhecido(context);
    }

    private static void TratarSuperGymException(ExceptionContext context)
    {
        if (context.Exception is ErrosDeValidacaoException)
            TratarErrosValidacaoException(context);
        else if (context.Exception is LoginInvalidoException)
            TratarLoginException(context);
    }

    private static void TratarErrosValidacaoException(ExceptionContext context)
    {
        var erroDeValidacaoException = context.Exception as ErrosDeValidacaoException;

        context.HttpContext.Response.StatusCode = (int)HttpStatusCode.BadRequest;
        context.Result = new ObjectResult(new ResponseErroDTO(erroDeValidacaoException.MensagensDeErro));
    }

    private static void TratarLoginException(ExceptionContext context)
    {
        var erroLogin = context.Exception as LoginInvalidoException;
        context.HttpContext.Response.StatusCode = (int)HttpStatusCode.Unauthorized;
        context.Result = new ObjectResult(new ResponseErroDTO(erroLogin.Message));
    }

    private static void LancarErroDesconhecido(ExceptionContext context)
    {
        context.HttpContext.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
        context.Result = new ObjectResult(context.Exception.Message);
    }
}
