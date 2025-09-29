import { Project } from "../types/project";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${API_URL}/projects`, {
      cache: "no-store", // ensures SSR (No caching)
    });

    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}
