export interface User {
  id: string;
  email: string;
  fullName: string;
  photoURL?: string;
  role: 'user' | 'responder' | 'admin';
  subscription: {
    type: 'free' | 'premium';
    expiresAt: Date;
  };
  medicalInfo?: {
    bloodType?: string;
    allergies?: string[];
    conditions?: string[];
  };
}

export interface Incident {
  id: string;
  userId: string;
  type: string;
  subtype: string;
  location: {
    lat: number;
    lng: number;
    address?: string;
  };
  status: 'pending' | 'assigned' | 'en-route' | 'on-scene' | 'resolved';
  description?: string;
  mediaUrls?: string[];
  createdAt: Date;
  updatedAt: Date;
  responderId?: string;
  priority: 'low' | 'medium' | 'high';
}

export interface Payment {
  id: string;
  userId: string;
  amount: number;
  currency: string;
  type: 'mpesa' | 'card';
  status: 'pending' | 'completed' | 'failed';
  transactionId?: string;
  createdAt: Date;
}

export interface Subscription {
  id: string;
  userId: string;
  type: 'premium_user' | 'standard_responder' | 'premium_responder';
  status: 'active' | 'expired' | 'cancelled';
  startDate: Date;
  endDate: Date;
  autoRenew: boolean;
  paymentMethod: 'mpesa' | 'card';
}

export interface Report {
  id: string;
  type: 'incident' | 'response_time' | 'user_activity' | 'financial';
  filters: Record<string, any>;
  generatedBy: string;
  generatedAt: Date;
  format: 'pdf' | 'csv';
  url: string;
}