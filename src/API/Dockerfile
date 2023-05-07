# Define a imagem base do .NET SDK
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos do projeto e restaura as dependências
COPY Shared/SuperGym.Comunication/*.csproj ./Shared/SuperGym.Comunication/
COPY SuperGym/SuperGym.Api/*.csproj ./SuperGym.Api/
COPY SuperGym/SuperGym.Application/*.csproj ./SuperGym.Application/
COPY SuperGym/SuperGym.Domain/*.csproj ./SuperGym.Domain/
COPY SuperGym/SuperGym.Exceptions/*.csproj ./SuperGym.Exceptions/
COPY SuperGym/SuperGym.Infra/*.csproj ./SuperGym.Infra/
COPY SuperGym/*.sln ./SuperGym/
COPY . .
RUN dotnet restore SuperGym/SuperGym.Api/SuperGym.Api.csproj

# Copia todos os arquivos do projeto para dentro do container

# Realiza o build da aplicação
RUN dotnet publish SuperGym/SuperGym.Api -c Release -o out

# Define a imagem base do ASP.NET Core
FROM mcr.microsoft.com/dotnet/aspnet:6.0

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos da build anterior para dentro do container
COPY --from=build-env /app/out .

EXPOSE 80

# Define o comando de entrada do container
ENTRYPOINT ["dotnet", "SuperGym.Api.dll"]
