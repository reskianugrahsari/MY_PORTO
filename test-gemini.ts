import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: "test" });
try {
    const chat = ai.chats.create({ model: 'gemini-1.5-flash' });
    console.log("SendMessage type:", typeof chat.sendMessage);
    // Let's try to find where sendMessage is
    let proto = Object.getPrototypeOf(chat);
    while (proto) {
        console.log("Proto keys:", Object.getOwnPropertyNames(proto).filter(k => k === 'sendMessage'));
        proto = Object.getPrototypeOf(proto);
    }
} catch (e) {
    console.log("Error:", e.message);
}
