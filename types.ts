import React from 'react';

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  color: string;
  cta: string;
  popular?: boolean;
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