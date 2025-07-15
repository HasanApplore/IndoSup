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

export const storage = new MemStorage();
