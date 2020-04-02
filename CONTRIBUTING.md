# Contribuindo

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Diretivas para garantir que o projeto tenha fácil manutenibilidade

- [Commits](#Commits)
  - [Padrão de mensagem](#Padrão-de-mensagem)
  - [Unificação de commit](#Unificação-de-commit)
- [Branch](#Branch)
- [Code review](#Code-review)

---

## Commits

### Padrão de mensagem

Para termos um histórico conciso e respeitando as boas práticas, os commits devem seguir a [convenção de commit](https://www.conventionalcommits.org/pt-br)

### Unificação de commit

É comum que após o code review a branch fique com vários commits de ajustes, porém isso polui o histórico e dificulta o rollback da implementação caso necessário

Para evitar isso, é preciso unificar os commits após o término de todos os ajustes solicitados pelo code review

```sh
git checkout BRANCH
#hash do commit anterior ao seu primeiro commit
git reset HASH_COMMIT
git add .
git commit 
git push --force origin BRANCH
```

- _BRANCH:_ Nome da sua branch
- _HASH_COMMIT:_ Hash do último commit que quer manter. Todos os commits após ele serão apagados e serão unificados apenas em 1

> **Não fazer na master**
>
> Faça isso apenas em branch que há apenas 1 pessoa mexendo por vez. Não é recomendado reescrever o histórico se várias pessoas estiverem atuando na mesma branch ao mesmo tempo

## Branch

Sempre trabalhe em uma branch separada, nunca diretamente na branch `master`

## Code review

Seu código somente será revisado caso a pipeline esteja passando e o seu MR não tenha `WIP` no título
