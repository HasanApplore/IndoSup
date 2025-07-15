import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertAdminUserSchema, 
  insertContactSubmissionSchema,
  insertJobSchema,
  insertJobApplicationSchema,
  insertCatalogueSchema,
  insertProductSchema,
  insertMediaContentSchema,
  insertSiteSettingSchema
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Admin Authentication Routes
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      
      const admin = await storage.getAdminUserByEmail(email);
      if (!admin || admin.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      
      const { password: _, ...adminWithoutPassword } = admin;
      res.json({ admin: adminWithoutPassword });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  // Contact Submissions Routes
  app.get("/api/admin/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  app.post("/api/admin/contact-submissions", async (req, res) => {
    try {
      const submission = insertContactSubmissionSchema.parse(req.body);
      const newSubmission = await storage.createContactSubmission(submission);
      res.json(newSubmission);
    } catch (error) {
      res.status(400).json({ message: "Invalid data" });
    }
  });

  app.delete("/api/admin/contact-submissions/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteContactSubmission(id);
      if (!deleted) {
        return res.status(404).json({ message: "Submission not found" });
      }
      res.json({ message: "Submission deleted" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  // Jobs Routes
  app.get("/api/admin/jobs", async (req, res) => {
    try {
      const jobs = await storage.getJobs();
      res.json(jobs);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  app.get("/api/admin/jobs/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const job = await storage.getJob(id);
      if (!job) {
        return res.status(404).json({ message: "Job not found" });
      }
      res.json(job);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  app.post("/api/admin/jobs", async (req, res) => {
    try {
      const job = insertJobSchema.parse(req.body);
      const newJob = await storage.createJob(job);
      res.json(newJob);
    } catch (error) {
      res.status(400).json({ message: "Invalid data" });
    }
  });

  app.put("/api/admin/jobs/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = insertJobSchema.partial().parse(req.body);
      const updatedJob = await storage.updateJob(id, updates);
      if (!updatedJob) {
        return res.status(404).json({ message: "Job not found" });
      }
      res.json(updatedJob);
    } catch (error) {
      res.status(400).json({ message: "Invalid data" });
    }
  });

  app.delete("/api/admin/jobs/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteJob(id);
      if (!deleted) {
        return res.status(404).json({ message: "Job not found" });
      }
      res.json({ message: "Job deleted" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  // Job Applications Routes
  app.get("/api/admin/job-applications", async (req, res) => {
    try {
      const applications = await storage.getJobApplications();
      res.json(applications);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  app.get("/api/admin/job-applications/job/:jobId", async (req, res) => {
    try {
      const jobId = parseInt(req.params.jobId);
      const applications = await storage.getJobApplicationsByJob(jobId);
      res.json(applications);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  app.post("/api/admin/job-applications", async (req, res) => {
    try {
      const application = insertJobApplicationSchema.parse(req.body);
      const newApplication = await storage.createJobApplication(application);
      res.json(newApplication);
    } catch (error) {
      res.status(400).json({ message: "Invalid data" });
    }
  });

  app.put("/api/admin/job-applications/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = insertJobApplicationSchema.partial().parse(req.body);
      const updatedApplication = await storage.updateJobApplication(id, updates);
      if (!updatedApplication) {
        return res.status(404).json({ message: "Application not found" });
      }
      res.json(updatedApplication);
    } catch (error) {
      res.status(400).json({ message: "Invalid data" });
    }
  });

  app.delete("/api/admin/job-applications/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteJobApplication(id);
      if (!deleted) {
        return res.status(404).json({ message: "Application not found" });
      }
      res.json({ message: "Application deleted" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  // Catalogues Routes
  app.get("/api/admin/catalogues", async (req, res) => {
    try {
      const catalogues = await storage.getCatalogues();
      res.json(catalogues);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  app.post("/api/admin/catalogues", async (req, res) => {
    try {
      const catalogue = insertCatalogueSchema.parse(req.body);
      const newCatalogue = await storage.createCatalogue(catalogue);
      res.json(newCatalogue);
    } catch (error) {
      res.status(400).json({ message: "Invalid data" });
    }
  });

  app.put("/api/admin/catalogues/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = insertCatalogueSchema.partial().parse(req.body);
      const updatedCatalogue = await storage.updateCatalogue(id, updates);
      if (!updatedCatalogue) {
        return res.status(404).json({ message: "Catalogue not found" });
      }
      res.json(updatedCatalogue);
    } catch (error) {
      res.status(400).json({ message: "Invalid data" });
    }
  });

  app.delete("/api/admin/catalogues/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteCatalogue(id);
      if (!deleted) {
        return res.status(404).json({ message: "Catalogue not found" });
      }
      res.json({ message: "Catalogue deleted" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  // Products Routes
  app.get("/api/admin/products", async (req, res) => {
    try {
      const products = await storage.getProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  app.post("/api/admin/products", async (req, res) => {
    try {
      const product = insertProductSchema.parse(req.body);
      const newProduct = await storage.createProduct(product);
      res.json(newProduct);
    } catch (error) {
      res.status(400).json({ message: "Invalid data" });
    }
  });

  app.put("/api/admin/products/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = insertProductSchema.partial().parse(req.body);
      const updatedProduct = await storage.updateProduct(id, updates);
      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(updatedProduct);
    } catch (error) {
      res.status(400).json({ message: "Invalid data" });
    }
  });

  app.delete("/api/admin/products/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteProduct(id);
      if (!deleted) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json({ message: "Product deleted" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  // Media Content Routes
  app.get("/api/admin/media", async (req, res) => {
    try {
      const { type } = req.query;
      let mediaContent;
      
      if (type) {
        mediaContent = await storage.getMediaContentByType(type as string);
      } else {
        mediaContent = await storage.getMediaContent();
      }
      
      res.json(mediaContent);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  app.post("/api/admin/media", async (req, res) => {
    try {
      const content = insertMediaContentSchema.parse(req.body);
      const newContent = await storage.createMediaContent(content);
      res.json(newContent);
    } catch (error) {
      res.status(400).json({ message: "Invalid data" });
    }
  });

  app.put("/api/admin/media/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = insertMediaContentSchema.partial().parse(req.body);
      const updatedContent = await storage.updateMediaContent(id, updates);
      if (!updatedContent) {
        return res.status(404).json({ message: "Media content not found" });
      }
      res.json(updatedContent);
    } catch (error) {
      res.status(400).json({ message: "Invalid data" });
    }
  });

  app.delete("/api/admin/media/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteMediaContent(id);
      if (!deleted) {
        return res.status(404).json({ message: "Media content not found" });
      }
      res.json({ message: "Media content deleted" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  // Site Settings Routes
  app.get("/api/admin/settings", async (req, res) => {
    try {
      const settings = await storage.getSiteSettings();
      res.json(settings);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  app.post("/api/admin/settings", async (req, res) => {
    try {
      const setting = insertSiteSettingSchema.parse(req.body);
      const newSetting = await storage.createSiteSetting(setting);
      res.json(newSetting);
    } catch (error) {
      res.status(400).json({ message: "Invalid data" });
    }
  });

  app.put("/api/admin/settings/:key", async (req, res) => {
    try {
      const key = req.params.key;
      const { value } = req.body;
      const updatedSetting = await storage.updateSiteSetting(key, value);
      if (!updatedSetting) {
        return res.status(404).json({ message: "Setting not found" });
      }
      res.json(updatedSetting);
    } catch (error) {
      res.status(400).json({ message: "Invalid data" });
    }
  });

  app.delete("/api/admin/settings/:key", async (req, res) => {
    try {
      const key = req.params.key;
      const deleted = await storage.deleteSiteSetting(key);
      if (!deleted) {
        return res.status(404).json({ message: "Setting not found" });
      }
      res.json({ message: "Setting deleted" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  // Public Contact Form Route (for frontend)
  app.post("/api/contact", async (req, res) => {
    try {
      const submission = insertContactSubmissionSchema.parse(req.body);
      const newSubmission = await storage.createContactSubmission(submission);
      res.json(newSubmission);
    } catch (error) {
      res.status(400).json({ message: "Invalid data" });
    }
  });

  // Public Jobs Route (for frontend)
  app.get("/api/jobs", async (req, res) => {
    try {
      const jobs = await storage.getJobs();
      const activeJobs = jobs.filter(job => job.isActive);
      res.json(activeJobs);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  // Public Job Application Route (for frontend)
  app.post("/api/jobs/:jobId/apply", async (req, res) => {
    try {
      const jobId = parseInt(req.params.jobId);
      const application = insertJobApplicationSchema.parse({ ...req.body, jobId });
      const newApplication = await storage.createJobApplication(application);
      res.json(newApplication);
    } catch (error) {
      res.status(400).json({ message: "Invalid data" });
    }
  });

  // Public Catalogues Route (for frontend)
  app.get("/api/catalogues", async (req, res) => {
    try {
      const catalogues = await storage.getCatalogues();
      const activeCatalogues = catalogues.filter(catalogue => catalogue.isActive);
      res.json(activeCatalogues);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  // Public Products Route (for frontend)
  app.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getProducts();
      const activeProducts = products.filter(product => product.isActive);
      res.json(activeProducts);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  // Public Media Route (for frontend)
  app.get("/api/media", async (req, res) => {
    try {
      const { type } = req.query;
      let mediaContent;
      
      if (type) {
        mediaContent = await storage.getMediaContentByType(type as string);
      } else {
        mediaContent = await storage.getMediaContent();
      }
      
      const publishedContent = mediaContent.filter(content => content.isPublished);
      res.json(publishedContent);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
