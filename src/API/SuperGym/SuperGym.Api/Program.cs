using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using SuperGym.Api.Filtros;
using SuperGym.Application;
using SuperGym.Application.Utils.Automapper;
using SuperGym.Infra;
using SuperGym.Infra.Context;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRouting(option => option.LowercaseUrls = true);

builder.Services.AddHttpContextAccessor();

builder.Services.AddDbContext<SuperGymDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("SuperGymConnectionString")));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Injeção de Dependencias de Repositories e UnityOfWork
builder.Services.AddRepository(builder.Configuration);
builder.Services.AddApplication(builder.Configuration);

builder.Services.AddMvc(options => options.Filters.Add(typeof(FiltroDasExceptions)));

builder.Services.AddScoped(provider => new AutoMapper.MapperConfiguration(cfg =>
{
    cfg.AddProfile(new AutomapperConfiguration());
}).CreateMapper());

builder.Services.AddCors(policyBuilder =>
    policyBuilder.AddDefaultPolicy(policy =>
        policy.WithOrigins("*").AllowAnyHeader().AllowAnyHeader().WithMethods("GET", "POST", "PUT"))
);

builder.Services.AddScoped<UsuarioAutenticadoAttribute>();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
