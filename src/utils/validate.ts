import { z } from "zod";
import { Request, Response, NextFunction } from "express";

const signupSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["admin", "user"]).optional(),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const clientSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

const projectSchema = z.object({
  title: z.string().min(2),
  description: z.string().optional(),
  client: z.string().min(1),
});

const validate =
  (schema: z.ZodSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ errors: result.error.issues });
    }
    next();
  };

export const validateSignup = validate(signupSchema);
export const validateLogin = validate(loginSchema);
export const validateClient = validate(clientSchema);
export const validateProject = validate(projectSchema);
