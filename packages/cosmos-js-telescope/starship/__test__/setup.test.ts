// @ts-nocheck
import { StargateClient } from "@cosmjs/stargate";
import path from "path";
import { ConfigContext, useChain, useRegistry } from "starshipjs";

describe("Test clients", () => {
  let client;

  beforeAll(async () => {
    const configFile = path.join(
      __dirname,
      "..",
      "configs",
      "config.yaml"
    );

    await ConfigContext.init(configFile, await useRegistry(configFile));

    const { getRpcEndpoint } = useChain("cosmoshub");
    client = await StargateClient.connect(await getRpcEndpoint());
  });

  it("check chain height", async () => {
    const height = await client.getHeight();

    expect(height).toBeGreaterThan(0);
  });
});
