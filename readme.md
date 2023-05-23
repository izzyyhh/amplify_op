# Amplify Project Learning Purpose

Using Multiple services and applying ci/cd to serverless app

2 amplify envs:

- dev
- prod

on dev, i develop stuff, add resources to my backend env to amplify env 'dev' and commit it after i tested it
then i merge my changes to my main branch

then on the main branch i have to switch to the according env, here 'prod'

```
amplify env checkout prod
```

after that i can apply the changes from dev with

```
amplify push
```

to view what is being changed

```
amplify status
```

when i go back to dev branch then again switch amplify env

```
amplify env checkout dev
```

i can view the changes in `amplify/team-provider-info.json`

apparently after pushing on main prod env, the file changes, commit it again on main branch

### TODO
* add storage
* add api and link to storage, upload and delete
