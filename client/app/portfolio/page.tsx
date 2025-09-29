import { getProjects } from "../lib/project_api";
import { Project } from "../types/project";
import PortfolioGrid from "../components/PortfolioGrid";

export default async function PortfolioPage() {
  const projects: Project[] = await getProjects();

  return <PortfolioGrid projects={projects} />;
}