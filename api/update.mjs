import { webhookCallback } from "grammy";
import { bot, secretToken } from "../src/bot.mjs";

export const config = {runtime: "edge"};

// Default grammY handler for incoming updates via webhooks
export const POST = webhookCallback(bot, "std/http", {
    timeoutMilliseconds: 24_000,
    secretToken,
});

export default async function (request) {
    if (request.method === "POST") {
        return handler(request);
    }
    return new Response("Expected a POST request.", { status: 405 });
}