import { 
  users, type User, type InsertUser,
  adminUsers, type AdminUser, type InsertAdminUser,
  contactSubmissions, type ContactSubmission, type InsertContactSubmission,
  jobs, type Job, type InsertJob,
  jobApplications, type JobApplication, type InsertJobApplication,
  catalogues, type Catalogue, type InsertCatalogue,
  products, type Product, type InsertProduct,
  mediaContent, type MediaContent, type InsertMediaContent,
  siteSettings, type SiteSetting, type InsertSiteSetting
} from "@shared/schema";
import { db } from './db';
import { eq, desc } from 'drizzle-orm';

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Admin user methods
  getAdminUser(id: number): Promise<AdminUser | undefined>;
  getAdminUserByEmail(email: string): Promise<AdminUser | undefined>;
  createAdminUser(user: InsertAdminUser): Promise<AdminUser>;
  updateAdminUser(id: number, user: Partial<InsertAdminUser>): Promise<AdminUser | undefined>;
  deleteAdminUser(id: number): Promise<boolean>;
  
  // Contact submission methods
  getContactSubmissions(): Promise<ContactSubmission[]>;
  getContactSubmission(id: number): Promise<ContactSubmission | undefined>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  deleteContactSubmission(id: number): Promise<boolean>;
  
  // Job methods
  getJobs(): Promise<Job[]>;
  getJob(id: number): Promise<Job | undefined>;
  createJob(job: InsertJob): Promise<Job>;
  updateJob(id: number, job: Partial<InsertJob>): Promise<Job | undefined>;
  deleteJob(id: number): Promise<boolean>;
  
  // Job application methods
  getJobApplications(): Promise<JobApplication[]>;
  getJobApplicationsByJob(jobId: number): Promise<JobApplication[]>;
  getJobApplication(id: number): Promise<JobApplication | undefined>;
  createJobApplication(application: InsertJobApplication): Promise<JobApplication>;
  updateJobApplication(id: number, application: Partial<InsertJobApplication>): Promise<JobApplication | undefined>;
  deleteJobApplication(id: number): Promise<boolean>;
  
  // Catalogue methods
  getCatalogues(): Promise<Catalogue[]>;
  getCatalogue(id: number): Promise<Catalogue | undefined>;
  createCatalogue(catalogue: InsertCatalogue): Promise<Catalogue>;
  updateCatalogue(id: number, catalogue: Partial<InsertCatalogue>): Promise<Catalogue | undefined>;
  deleteCatalogue(id: number): Promise<boolean>;
  
  // Product methods
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  updateProduct(id: number, product: Partial<InsertProduct>): Promise<Product | undefined>;
  deleteProduct(id: number): Promise<boolean>;
  
  // Media content methods
  getMediaContent(): Promise<MediaContent[]>;
  getMediaContentByType(type: string): Promise<MediaContent[]>;
  getMediaContentItem(id: number): Promise<MediaContent | undefined>;
  createMediaContent(content: InsertMediaContent): Promise<MediaContent>;
  updateMediaContent(id: number, content: Partial<InsertMediaContent>): Promise<MediaContent | undefined>;
  deleteMediaContent(id: number): Promise<boolean>;
  
  // Site settings methods
  getSiteSettings(): Promise<SiteSetting[]>;
  getSiteSetting(key: string): Promise<SiteSetting | undefined>;
  createSiteSetting(setting: InsertSiteSetting): Promise<SiteSetting>;
  updateSiteSetting(key: string, value: string): Promise<SiteSetting | undefined>;
  deleteSiteSetting(key: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private adminUsers: Map<number, AdminUser>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private jobs: Map<number, Job>;
  private jobApplications: Map<number, JobApplication>;
  private catalogues: Map<number, Catalogue>;
  private products: Map<number, Product>;
  private mediaContent: Map<number, MediaContent>;
  private siteSettings: Map<string, SiteSetting>;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.adminUsers = new Map();
    this.contactSubmissions = new Map();
    this.jobs = new Map();
    this.jobApplications = new Map();
    this.catalogues = new Map();
    this.products = new Map();
    this.mediaContent = new Map();
    this.siteSettings = new Map();
    this.currentId = 1;
    
    // Create default admin user
    this.createAdminUser({
      email: "admin@indosup.com",
      password: "admin123",
      name: "Admin User",
      role: "admin"
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Admin user methods
  async getAdminUser(id: number): Promise<AdminUser | undefined> {
    return this.adminUsers.get(id);
  }

  async getAdminUserByEmail(email: string): Promise<AdminUser | undefined> {
    return Array.from(this.adminUsers.values()).find(
      (user) => user.email === email,
    );
  }

  async createAdminUser(insertUser: InsertAdminUser): Promise<AdminUser> {
    const id = this.currentId++;
    const now = new Date();
    const user: AdminUser = { 
      ...insertUser, 
      role: insertUser.role || "admin",
      id, 
      createdAt: now,
      updatedAt: now 
    };
    this.adminUsers.set(id, user);
    return user;
  }

  async updateAdminUser(id: number, updates: Partial<InsertAdminUser>): Promise<AdminUser | undefined> {
    const user = this.adminUsers.get(id);
    if (!user) return undefined;
    
    const updatedUser = { 
      ...user, 
      ...updates, 
      updatedAt: new Date() 
    };
    this.adminUsers.set(id, updatedUser);
    return updatedUser;
  }

  async deleteAdminUser(id: number): Promise<boolean> {
    return this.adminUsers.delete(id);
  }

  // Contact submission methods
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async getContactSubmission(id: number): Promise<ContactSubmission | undefined> {
    return this.contactSubmissions.get(id);
  }

  async createContactSubmission(insertion: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentId++;
    const submission: ContactSubmission = { 
      ...insertion, 
      phone: insertion.phone || null,
      company: insertion.company || null,
      id, 
      createdAt: new Date() 
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async deleteContactSubmission(id: number): Promise<boolean> {
    return this.contactSubmissions.delete(id);
  }

  // Job methods
  async getJobs(): Promise<Job[]> {
    return Array.from(this.jobs.values());
  }

  async getJob(id: number): Promise<Job | undefined> {
    return this.jobs.get(id);
  }

  async createJob(insertion: InsertJob): Promise<Job> {
    const id = this.currentId++;
    const now = new Date();
    const job: Job = { 
      ...insertion, 
      isActive: insertion.isActive ?? true,
      id, 
      createdAt: now,
      updatedAt: now 
    };
    this.jobs.set(id, job);
    return job;
  }

  async updateJob(id: number, updates: Partial<InsertJob>): Promise<Job | undefined> {
    const job = this.jobs.get(id);
    if (!job) return undefined;
    
    const updatedJob = { 
      ...job, 
      ...updates, 
      updatedAt: new Date() 
    };
    this.jobs.set(id, updatedJob);
    return updatedJob;
  }

  async deleteJob(id: number): Promise<boolean> {
    return this.jobs.delete(id);
  }

  // Job application methods
  async getJobApplications(): Promise<JobApplication[]> {
    return Array.from(this.jobApplications.values());
  }

  async getJobApplicationsByJob(jobId: number): Promise<JobApplication[]> {
    return Array.from(this.jobApplications.values()).filter(
      (app) => app.jobId === jobId
    );
  }

  async getJobApplication(id: number): Promise<JobApplication | undefined> {
    return this.jobApplications.get(id);
  }

  async createJobApplication(insertion: InsertJobApplication): Promise<JobApplication> {
    const id = this.currentId++;
    const application: JobApplication = { 
      ...insertion, 
      status: insertion.status || "pending",
      phone: insertion.phone || null,
      resumeUrl: insertion.resumeUrl || null,
      coverLetter: insertion.coverLetter || null,
      id, 
      createdAt: new Date() 
    };
    this.jobApplications.set(id, application);
    return application;
  }

  async updateJobApplication(id: number, updates: Partial<InsertJobApplication>): Promise<JobApplication | undefined> {
    const application = this.jobApplications.get(id);
    if (!application) return undefined;
    
    const updatedApplication = { 
      ...application, 
      ...updates 
    };
    this.jobApplications.set(id, updatedApplication);
    return updatedApplication;
  }

  async deleteJobApplication(id: number): Promise<boolean> {
    return this.jobApplications.delete(id);
  }

  // Catalogue methods
  async getCatalogues(): Promise<Catalogue[]> {
    return Array.from(this.catalogues.values());
  }

  async getCatalogue(id: number): Promise<Catalogue | undefined> {
    return this.catalogues.get(id);
  }

  async createCatalogue(insertion: InsertCatalogue): Promise<Catalogue> {
    const id = this.currentId++;
    const now = new Date();
    const catalogue: Catalogue = { 
      ...insertion, 
      description: insertion.description || null,
      isActive: insertion.isActive ?? true,
      fileSize: insertion.fileSize || null,
      id, 
      createdAt: now,
      updatedAt: now 
    };
    this.catalogues.set(id, catalogue);
    return catalogue;
  }

  async updateCatalogue(id: number, updates: Partial<InsertCatalogue>): Promise<Catalogue | undefined> {
    const catalogue = this.catalogues.get(id);
    if (!catalogue) return undefined;
    
    const updatedCatalogue = { 
      ...catalogue, 
      ...updates, 
      updatedAt: new Date() 
    };
    this.catalogues.set(id, updatedCatalogue);
    return updatedCatalogue;
  }

  async deleteCatalogue(id: number): Promise<boolean> {
    return this.catalogues.delete(id);
  }

  // Product methods
  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertion: InsertProduct): Promise<Product> {
    const id = this.currentId++;
    const now = new Date();
    const product: Product = { 
      ...insertion, 
      description: insertion.description || null,
      isActive: insertion.isActive ?? true,
      subcategory: insertion.subcategory || null,
      imageUrl: insertion.imageUrl || null,
      tags: insertion.tags || null,
      specifications: insertion.specifications || null,
      id, 
      createdAt: now,
      updatedAt: now 
    };
    this.products.set(id, product);
    return product;
  }

  async updateProduct(id: number, updates: Partial<InsertProduct>): Promise<Product | undefined> {
    const product = this.products.get(id);
    if (!product) return undefined;
    
    const updatedProduct = { 
      ...product, 
      ...updates, 
      updatedAt: new Date() 
    };
    this.products.set(id, updatedProduct);
    return updatedProduct;
  }

  async deleteProduct(id: number): Promise<boolean> {
    return this.products.delete(id);
  }

  // Media content methods
  async getMediaContent(): Promise<MediaContent[]> {
    return Array.from(this.mediaContent.values());
  }

  async getMediaContentByType(type: string): Promise<MediaContent[]> {
    return Array.from(this.mediaContent.values()).filter(
      (content) => content.type === type
    );
  }

  async getMediaContentItem(id: number): Promise<MediaContent | undefined> {
    return this.mediaContent.get(id);
  }

  async createMediaContent(insertion: InsertMediaContent): Promise<MediaContent> {
    const id = this.currentId++;
    const now = new Date();
    const content: MediaContent = { 
      ...insertion, 
      author: insertion.author || null,
      content: insertion.content || null,
      summary: insertion.summary || null,
      imageUrl: insertion.imageUrl || null,
      fileUrl: insertion.fileUrl || null,
      source: insertion.source || null,
      externalLink: insertion.externalLink || null,
      tags: insertion.tags || null,
      isPublished: insertion.isPublished ?? true,
      id, 
      publishedAt: now,
      createdAt: now,
      updatedAt: now 
    };
    this.mediaContent.set(id, content);
    return content;
  }

  async updateMediaContent(id: number, updates: Partial<InsertMediaContent>): Promise<MediaContent | undefined> {
    const content = this.mediaContent.get(id);
    if (!content) return undefined;
    
    const updatedContent = { 
      ...content, 
      ...updates, 
      updatedAt: new Date() 
    };
    this.mediaContent.set(id, updatedContent);
    return updatedContent;
  }

  async deleteMediaContent(id: number): Promise<boolean> {
    return this.mediaContent.delete(id);
  }

  // Site settings methods
  async getSiteSettings(): Promise<SiteSetting[]> {
    return Array.from(this.siteSettings.values());
  }

  async getSiteSetting(key: string): Promise<SiteSetting | undefined> {
    return this.siteSettings.get(key);
  }

  async createSiteSetting(insertion: InsertSiteSetting): Promise<SiteSetting> {
    const id = this.currentId++;
    const setting: SiteSetting = { 
      ...insertion, 
      type: insertion.type || "text",
      description: insertion.description || null,
      id, 
      updatedAt: new Date() 
    };
    this.siteSettings.set(insertion.key, setting);
    return setting;
  }

  async updateSiteSetting(key: string, value: string): Promise<SiteSetting | undefined> {
    const setting = this.siteSettings.get(key);
    if (!setting) return undefined;
    
    const updatedSetting = { 
      ...setting, 
      value, 
      updatedAt: new Date() 
    };
    this.siteSettings.set(key, updatedSetting);
    return updatedSetting;
  }

  async deleteSiteSetting(key: string): Promise<boolean> {
    return this.siteSettings.delete(key);
  }
}

// Database Storage Implementation
export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  // Admin user methods
  async getAdminUser(id: number): Promise<AdminUser | undefined> {
    const [user] = await db.select().from(adminUsers).where(eq(adminUsers.id, id));
    return user || undefined;
  }

  async getAdminUserByEmail(email: string): Promise<AdminUser | undefined> {
    const [user] = await db.select().from(adminUsers).where(eq(adminUsers.email, email));
    return user || undefined;
  }

  async createAdminUser(insertUser: InsertAdminUser): Promise<AdminUser> {
    const [user] = await db.insert(adminUsers).values({
      ...insertUser,
      role: insertUser.role || 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }).returning();
    return user;
  }

  async updateAdminUser(id: number, updates: Partial<InsertAdminUser>): Promise<AdminUser | undefined> {
    const [user] = await db.update(adminUsers)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(adminUsers.id, id))
      .returning();
    return user || undefined;
  }

  async deleteAdminUser(id: number): Promise<boolean> {
    const result = await db.delete(adminUsers).where(eq(adminUsers.id, id));
    return (result.rowCount || 0) > 0;
  }

  // Contact submission methods
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
  }

  async getContactSubmission(id: number): Promise<ContactSubmission | undefined> {
    const [submission] = await db.select().from(contactSubmissions).where(eq(contactSubmissions.id, id));
    return submission || undefined;
  }

  async createContactSubmission(insertion: InsertContactSubmission): Promise<ContactSubmission> {
    const [submission] = await db.insert(contactSubmissions).values({
      ...insertion,
      phone: insertion.phone || null,
      company: insertion.company || null,
      createdAt: new Date()
    }).returning();
    return submission;
  }

  async deleteContactSubmission(id: number): Promise<boolean> {
    const result = await db.delete(contactSubmissions).where(eq(contactSubmissions.id, id));
    return (result.rowCount || 0) > 0;
  }

  // Job methods
  async getJobs(): Promise<Job[]> {
    return await db.select().from(jobs).orderBy(desc(jobs.createdAt));
  }

  async getJob(id: number): Promise<Job | undefined> {
    const [job] = await db.select().from(jobs).where(eq(jobs.id, id));
    return job || undefined;
  }

  async createJob(insertion: InsertJob): Promise<Job> {
    const [job] = await db.insert(jobs).values({
      ...insertion,
      isActive: insertion.isActive ?? true,
      createdAt: new Date(),
      updatedAt: new Date()
    }).returning();
    return job;
  }

  async updateJob(id: number, updates: Partial<InsertJob>): Promise<Job | undefined> {
    const [job] = await db.update(jobs)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(jobs.id, id))
      .returning();
    return job || undefined;
  }

  async deleteJob(id: number): Promise<boolean> {
    const result = await db.delete(jobs).where(eq(jobs.id, id));
    return (result.rowCount || 0) > 0;
  }

  // Job application methods
  async getJobApplications(): Promise<JobApplication[]> {
    return await db.select().from(jobApplications).orderBy(desc(jobApplications.createdAt));
  }

  async getJobApplicationsByJob(jobId: number): Promise<JobApplication[]> {
    return await db.select().from(jobApplications).where(eq(jobApplications.jobId, jobId));
  }

  async getJobApplication(id: number): Promise<JobApplication | undefined> {
    const [application] = await db.select().from(jobApplications).where(eq(jobApplications.id, id));
    return application || undefined;
  }

  async createJobApplication(insertion: InsertJobApplication): Promise<JobApplication> {
    const [application] = await db.insert(jobApplications).values({
      ...insertion,
      status: insertion.status || 'pending',
      phone: insertion.phone || null,
      resumeUrl: insertion.resumeUrl || null,
      coverLetter: insertion.coverLetter || null,
      createdAt: new Date()
    }).returning();
    return application;
  }

  async updateJobApplication(id: number, updates: Partial<InsertJobApplication>): Promise<JobApplication | undefined> {
    const [application] = await db.update(jobApplications)
      .set(updates)
      .where(eq(jobApplications.id, id))
      .returning();
    return application || undefined;
  }

  async deleteJobApplication(id: number): Promise<boolean> {
    const result = await db.delete(jobApplications).where(eq(jobApplications.id, id));
    return (result.rowCount || 0) > 0;
  }

  // Catalogue methods
  async getCatalogues(): Promise<Catalogue[]> {
    return await db.select().from(catalogues).orderBy(desc(catalogues.createdAt));
  }

  async getCatalogue(id: number): Promise<Catalogue | undefined> {
    const [catalogue] = await db.select().from(catalogues).where(eq(catalogues.id, id));
    return catalogue || undefined;
  }

  async createCatalogue(insertion: InsertCatalogue): Promise<Catalogue> {
    const [catalogue] = await db.insert(catalogues).values({
      ...insertion,
      description: insertion.description || null,
      isActive: insertion.isActive ?? true,
      fileSize: insertion.fileSize || null,
      createdAt: new Date(),
      updatedAt: new Date()
    }).returning();
    return catalogue;
  }

  async updateCatalogue(id: number, updates: Partial<InsertCatalogue>): Promise<Catalogue | undefined> {
    const [catalogue] = await db.update(catalogues)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(catalogues.id, id))
      .returning();
    return catalogue || undefined;
  }

  async deleteCatalogue(id: number): Promise<boolean> {
    const result = await db.delete(catalogues).where(eq(catalogues.id, id));
    return (result.rowCount || 0) > 0;
  }

  // Product methods
  async getProducts(): Promise<Product[]> {
    return await db.select().from(products).orderBy(desc(products.createdAt));
  }

  async getProduct(id: number): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.id, id));
    return product || undefined;
  }

  async createProduct(insertion: InsertProduct): Promise<Product> {
    const [product] = await db.insert(products).values({
      ...insertion,
      description: insertion.description || null,
      isActive: insertion.isActive ?? true,
      subcategory: insertion.subcategory || null,
      imageUrl: insertion.imageUrl || null,
      tags: insertion.tags || null,
      specifications: insertion.specifications || null,
      createdAt: new Date(),
      updatedAt: new Date()
    }).returning();
    return product;
  }

  async updateProduct(id: number, updates: Partial<InsertProduct>): Promise<Product | undefined> {
    const [product] = await db.update(products)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(products.id, id))
      .returning();
    return product || undefined;
  }

  async deleteProduct(id: number): Promise<boolean> {
    const result = await db.delete(products).where(eq(products.id, id));
    return (result.rowCount || 0) > 0;
  }

  // Media content methods
  async getMediaContent(): Promise<MediaContent[]> {
    return await db.select().from(mediaContent).orderBy(desc(mediaContent.createdAt));
  }

  async getMediaContentByType(type: string): Promise<MediaContent[]> {
    return await db.select().from(mediaContent).where(eq(mediaContent.type, type));
  }

  async getMediaContentItem(id: number): Promise<MediaContent | undefined> {
    const [content] = await db.select().from(mediaContent).where(eq(mediaContent.id, id));
    return content || undefined;
  }

  async createMediaContent(insertion: InsertMediaContent): Promise<MediaContent> {
    const [content] = await db.insert(mediaContent).values({
      ...insertion,
      author: insertion.author || null,
      content: insertion.content || null,
      summary: insertion.summary || null,
      imageUrl: insertion.imageUrl || null,
      fileUrl: insertion.fileUrl || null,
      source: insertion.source || null,
      externalLink: insertion.externalLink || null,
      tags: insertion.tags || null,
      isPublished: insertion.isPublished ?? true,
      publishedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }).returning();
    return content;
  }

  async updateMediaContent(id: number, updates: Partial<InsertMediaContent>): Promise<MediaContent | undefined> {
    const [content] = await db.update(mediaContent)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(mediaContent.id, id))
      .returning();
    return content || undefined;
  }

  async deleteMediaContent(id: number): Promise<boolean> {
    const result = await db.delete(mediaContent).where(eq(mediaContent.id, id));
    return (result.rowCount || 0) > 0;
  }

  // Site settings methods
  async getSiteSettings(): Promise<SiteSetting[]> {
    return await db.select().from(siteSettings);
  }

  async getSiteSetting(key: string): Promise<SiteSetting | undefined> {
    const [setting] = await db.select().from(siteSettings).where(eq(siteSettings.key, key));
    return setting || undefined;
  }

  async createSiteSetting(insertion: InsertSiteSetting): Promise<SiteSetting> {
    const [setting] = await db.insert(siteSettings).values({
      ...insertion,
      type: insertion.type || 'string',
      description: insertion.description || null,
      updatedAt: new Date()
    }).returning();
    return setting;
  }

  async updateSiteSetting(key: string, value: string): Promise<SiteSetting | undefined> {
    const [setting] = await db.update(siteSettings)
      .set({ value, updatedAt: new Date() })
      .where(eq(siteSettings.key, key))
      .returning();
    return setting || undefined;
  }

  async deleteSiteSetting(key: string): Promise<boolean> {
    const result = await db.delete(siteSettings).where(eq(siteSettings.key, key));
    return (result.rowCount || 0) > 0;
  }
}

export const storage = new DatabaseStorage();
