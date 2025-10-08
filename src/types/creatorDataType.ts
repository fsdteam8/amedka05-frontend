export interface SocialMediaLink {
  platform: string;
  link: string;
  followers: number;
}

export interface CreatorFormPayload {
  fullName: string;
  phoneNumber: string;
  email: string;
  bio?: string;
  description?: string;
  socialMedia: SocialMediaLink[];
  interests: string[];
  images?: File[]; // actual image files from <input type="file" />
}
