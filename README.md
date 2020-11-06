## Subgraphs for the WOLFDeFI EcoSystem 

Working to build out base subgraphs (from [TheGraph](https://thegraph.com)) that map to the WOLFDeFi ecosystem. These are initial tests that will soon be ported an upcoming project ;) 

Currently deployed to Rinkeby here - [https://thegraph.com/explorer/subgraph/nopslip/wolf-vision](https://thegraph.com/explorer/subgraph/nopslip/wolf-vision)


### SETUP 


### Deploy
Make some edits and updates, then: 

```bash
yarn codegen
```

```bash
graph deploy \
    --debug \
    --node https://api.thegraph.com/deploy/ \
    --ipfs https://api.thegraph.com/ipfs/ \
    --access-token <access-token-here> \
    nopslip/wolf-vision
```