import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate"

const RPC_ENDPOINT = "https://rpc.rosm.rollkit.dev"

const main = async (): Promise<void> => {
  const queryClient = await CosmWasmClient.connect(RPC_ENDPOINT)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
