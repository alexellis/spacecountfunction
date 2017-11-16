# spacecountfunction

1. Deploy [OpenFaaS](https://www.openfaas.com)

2. Grab the [CLI](https://github.com/openfaas/faas-cli)

3. Clone this repo

```
git clone https://github.com/alexellis/spacecountfunction
```

4. Build / deploy / invoke

```
faas-cli build \
 && faas-deploy
```

Then:

`echo -n | faas-cli invoke webreq`
