import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes prefix with /api
  
  // Contact form submission handler
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing required fields" });
      }
      
      // In a real application, you would send an email or store the contact message
      // For this demo, we'll just return a success response
      console.log("Contact form submission:", { name, email, subject, message });
      
      return res.status(200).json({ 
        success: true, 
        message: "Message received successfully" 
      });
    } catch (error) {
      console.error("Error handling contact form:", error);
      return res.status(500).json({ 
        success: false, 
        message: "Failed to process your message" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
