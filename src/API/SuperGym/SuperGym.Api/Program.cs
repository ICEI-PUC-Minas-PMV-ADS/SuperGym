using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using SuperGym.Infra;
using SuperGym.Infra.Context;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<SuperGymDbContext>(options => 
    options.UseSqlServer(builder.Configuration.GetConnectionString("SuperGymConnectionString")));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Injeção de Dependencias de Repositories e UnityOfWork
builder.Services.AddRepository(builder.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
