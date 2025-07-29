import { Request, Response } from "express";
import Project from "../models/projectModel";

export const createProject = async (req: Request, res: Response) => {
  const { title, description, client } = req.body;
  try {
    const project = await Project.create({ title, description, client });
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: "Project creation failed", error });
  }
};

export const getProjects = async (_req: Request, res: Response) => {
  const projects = await Project.find().populate("client");
  res.json(projects);
};

export const getProjectsByClient = async (req: Request, res: Response) => {
  const projects = await Project.find({ client: req.params.clientId });
  res.json(projects);
};

export const updateProject = async (req: Request, res: Response) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!project) return res.status(404).json({ message: "Project not found" });
  res.json(project);
};

export const deleteProject = async (req: Request, res: Response) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) return res.status(404).json({ message: "Project not found" });
  res.json({ message: "Project deleted" });
};
