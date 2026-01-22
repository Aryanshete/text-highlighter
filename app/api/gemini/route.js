import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { text } = await req.json();

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" +
        process.env.GEMINI_API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Read this paragraph and list the important points:\n\n${text}`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    const output =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from Gemini";

    return NextResponse.json({ output });
  } catch (error) {
    return NextResponse.json(
      { output: "Gemini API failed" },
      { status: 500 }
    );
  }
}