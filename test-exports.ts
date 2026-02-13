import * as GenAI from "@google/genai";
if ('Chat' in GenAI) {
    console.log("Chat exported");
} else {
    console.log("Chat NOT exported");
}
console.log("All keys:", Object.keys(GenAI));
