import { Request, Response } from "express";
import Client from "../models/clientModel";

export const createClient = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  try {
    const client = await Client.create({ name, email });
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ message: "Client creation failed", error });
  }
};

export const getClients = async (_req: Request, res: Response) => {
  const clients = await Client.find();
  res.json(clients);
};

export const getClientById = async (req: Request, res: Response) => {
  const client = await Client.findById(req.params.id);
  if (!client) return res.status(404).json({ message: "Client not found" });
  res.json(client);
};

export const updateClient = async (req: Request, res: Response) => {
  const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!client) return res.status(404).json({ message: "Client not found" });
  res.json(client);
};

export const deleteClient = async (req: Request, res: Response) => {
  const client = await Client.findByIdAndDelete(req.params.id);
  if (!client) return res.status(404).json({ message: "Client not found" });
  res.json({ message: "Client deleted" });
};
