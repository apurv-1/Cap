import { serverEnv } from "@cap/env";
import { GoogleGenerativeAI } from "@google/generative-ai";

let geminiClient: GoogleGenerativeAI | null = null;

export function getGeminiClient(): GoogleGenerativeAI | null {
	if (!serverEnv().GEMINI_API_KEY) {
		return null;
	}

	if (!geminiClient) {
		geminiClient = new GoogleGenerativeAI(serverEnv().GEMINI_API_KEY);
	}

	return geminiClient;
}

export const GEMINI_MODEL = "gemini-2.0-flash";
