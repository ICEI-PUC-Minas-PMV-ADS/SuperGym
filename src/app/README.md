# App Mobile 📱

## Node.js ⬢

Antes de tudo, você precisa ter o [Node.js](https://nodejs.org/pt-br/) instalado em seu computador, e em seguida instalar o [Yarn](https://yarnpkg.com/), o gerenciador de pacotes que estamos utilizando.

Você pode verificar se o Node.js está instalado no seu sistema digitando:

```bash
node -v
```
Se o Node.js estiver instalado, você verá a versão do Node.js instalada no seu sistema.

Agora, para instalar o Yarn, digite:

```bash
npm install -g yarn
```

Da mesma forma que o Node.js, você pode verificar se o Yarn foi instalado corretamente:

```bash
yarn --version
```

Se o Yarn foi instalado corretamente, você verá a versão do Yarn instalada no seu sistema.

Agora podemos passar para as próximas etapas.

## React Native

Vale a pena dar uma lida na documentação oficial do [React Native](https://reactnative.dev/), mas aqui teremos uma breve explicação.

React Native é um framework de desenvolvimento de aplicativos móveis. Ele é baseado no [React](https://beta.reactjs.org/), que é uma biblioteca JavaScript para a criação de interfaces de usuário. O React Native permite que os desenvolvedores criem aplicativos móveis para iOS e Android usando JavaScript e uma única base de código, tornando o processo de desenvolvimento mais eficiente e rápido.

## Inicialização 🚀

Para inicializar esse app localmente, execute os comandos abaixo:

```bash
yarn install
```

O *yarn install* irá pegar o nosso arquivo [package.json](./package.json) e instalará todas as dependências encontradas nele. Em seguida execute:

```bash
yarn start
```

Se tudo estiver Ok, você provavelmente estará vendo um **QR Code** em seu terminal, assim como algumas informações adicionais. Agora, você precisa instalar em seu celular o [Expo](https://expo.dev/) para poder visualizar o nosso App em execução.

## O que é o Expo? 🤓

O Expo é uma plataforma de desenvolvimento de aplicativos móveis que fornece uma série de ferramentas e serviços para tornar o processo de desenvolvimento mais fácil e eficiente. **Ele é construído sobre o React Native** e oferece uma camada de abstração adicional para tornar o desenvolvimento de aplicativos móveis mais acessível.

## Expo instalado 😎

Agora que você já tem o Expo no seu celular, aponte a sua câmera para o QR Code, e o Expo fará o restante do trabalho.

## Informações Adicionais 🧐

Você também pode executar os emuladores no seu computador, mas para isso você precisará instalá-lo. Existe diversas opções e abaixo teremos algumas delas para você pesquisar e escolher qual atende melhor às suas expectativas.

### Emuladores de iPhone:

##### Xcode Simulator

É o emulador oficial da Apple para desenvolvimento iOS e vem com o Xcode IDE.

#### Smartface

Permite testar aplicativos em diferentes dispositivos iOS e Android em um ambiente de emulação.

#### Electric Mobile Studio

É um emulador de iPhone e iPad para Windows que suporta desenvolvimento de aplicativos híbridos e nativos.

#### iOS Emulator

É um emulador de código aberto que pode ser executado em plataformas Windows, Linux e Android.

### Emuladores de Android:

#### Android Studio Emulator

É o emulador oficial do Android Studio e é usado por desenvolvedores para testar seus aplicativos Android em diferentes dispositivos.

#### Genymotion

É um emulador de Android popular que oferece uma ampla variedade de dispositivos virtuais para testar seus aplicativos.

#### BlueStacks

É um emulador de Android que permite executar aplicativos Android em um PC com Windows ou Mac.

#### Andy

É um emulador de Android que permite executar aplicativos Android em um PC com Windows ou Mac e também pode ser integrado ao Android Studio.








