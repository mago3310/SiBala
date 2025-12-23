
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFateCommentary = async (dice: number[], total: number): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `The player just rolled ${dice.length} dice. The individual values are [${dice.join(', ')}] and the total is ${total}. 
      Act as a mystical, slightly sarcastic 'God of Fate'. Provide a one-sentence witty or profound commentary on this specific roll. 
      Keep it short, thematic, and impactful.`,
    });
    return response.text || "The dice have spoken.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The stars are silent, but the numbers remain true.";
  }
};
