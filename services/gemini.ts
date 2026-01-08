
import { GoogleGenAI } from "@google/genai";
import { AGENCY_PROMPT } from "../constants";
import { ChatMessage } from "../types";

export const chatWithAI = async (history: ChatMessage[], message: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: AGENCY_PROMPT,
      temperature: 0.7,
    },
  });

  const response = await chat.sendMessage({ message });
  return response.text;
};

export const analyzeLead = async (formData: { name: string; email: string; project: string }) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `
    As the Nexus Systems AI Architect, analyze this new project inquiry:
    
    CLIENT NAME: ${formData.name}
    PROJECT SCOPE: ${formData.project}

    Please provide a professional "Nexus Insight Report" with the following sections:
    1. 🎯 PROJECT VISION: A 1-sentence summary of what they want to achieve.
    2. 🛠 RECOMMENDED ARCHITECTURE: Suggest 3-4 key technologies (e.g., React, Gemini, AWS, etc.).
    3. ⚡ ESTIMATED COMPLEXITY: Categorize as [Low / Medium / High] with a brief reason.
    4. 🚀 NEXT STEP: A professional recommendation for our first discovery call.

    Keep the tone expert, encouraging, and concise. Use clear headings and bullet points.
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      temperature: 0.4, // Lower temperature for more consistent, professional analysis
    }
  });

  return response.text;
};
