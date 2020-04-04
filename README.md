# Desafio Front End

Foi desenvolvida uma aplicação que lista os personagens da marvel utilizando a [marvel api](https://developer.marvel.com/) com um backend GraphQl para intermediar a utilização do Apollo Client. Para isso foi realizado um fork do projeto [MarvelQL](https://github.com/Novvum/MarvelQL), com ajustes para corrigir erros impeditivos, e disponibilizado neste endereço [MarvelQl Heroku](https://marvelql.herokuapp.com/).

Acesse a DEMO [aqui](https://react-marvel-char.herokuapp.com/)!

## Instalação

Para subir a aplicação basta rodar o comando abaixo, que instalará as dependências e subirá o projeto por padrão na porta 3000.

```bash
yarn install && yarn start
```

## Recursos

A aplicação lista todos os personagens da marvel disponíveis na MarvelApi, inclui paginação e busca através do nome. Ao clicar no card é possível editar de forma local os dados nome e descrição, essas alterações ficam no estado da aplicação e são desfeitas caso o usuário faça refresh no browser, retornando os dados ao estado original.

## Recursos externos

Além dos recursos especificados nos requisitos, foram utilizadas algumas libs para facilitar o desenvolvimento, sendo elas: formik (formulários), react-js-pagination (componente de paginação), styled-components (para estilização).

## Testes

Foram testadas as renderizações, a filtragem e a edição do dado.

## Contributing
Melhorias e sugestões são sempre bem vindas.