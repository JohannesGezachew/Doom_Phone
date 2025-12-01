import React from 'react';

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  color: string;
  cta: string;
  popular?: boolean;
  stripePriceId?: string; // ID from Stripe Dashboard (e.g., price_1N...)
}

export interface Feature {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
}