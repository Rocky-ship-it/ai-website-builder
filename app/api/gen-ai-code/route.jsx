import { NextResponse } from "next/server";
import { GenAiCode } from "@/configs/AiModel";

export async function POST(req) {
  const { prompt } = await req.json();

  try {
    const result = await GenAiCode.sendMessage(prompt);
    const resp = await result.response.text();
    return NextResponse.json(JSON.parse(resp));
  } catch (e) {
    console.error("Error in gen-ai-code:", e);
    return NextResponse.json({ error: e.message || "Something went wrong" }, { status: 500 });
  }
}
